"use client";

import React from "react";
import { useRouter } from "next/navigation";

type PawScrollButtonProps = {
  href?: string;
  ariaLabel?: string;
  /** "lower" moves the paw further down (e.g. on landing page); "higher" moves it slightly up */
  position?: "default" | "lower" | "higher" | "lowest";
  /** Use fixed positioning when you want it pinned to the viewport (e.g. home hero). */
  mode?: "absolute" | "fixed";
  /** Optional Tailwind class override for the bottom offset. */
  bottomOverrideClassName?: string;
};

export function PawScrollButton({
  href = "/how-it-works",
  ariaLabel = "Go to How it Works",
}: PawScrollButtonProps) {
  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const scrollingEl =
      document.scrollingElement ?? document.documentElement ?? document.body;

    const updateVisibility = () => {
      const elScrollTop = scrollingEl.scrollTop ?? 0;
      const winScrollTop = window.scrollY ?? 0;
      const scrollTop = Math.max(elScrollTop, winScrollTop);

      const docEl = document.documentElement;
      const body = document.body;
      const scrollHeight =
        Math.max(
          scrollingEl.scrollHeight ?? 0,
          docEl?.scrollHeight ?? 0,
          body?.scrollHeight ?? 0,
        ) || 0;

      const clientHeight =
        Math.max(scrollingEl.clientHeight ?? 0, window.innerHeight ?? 1) || 1;

      const scrollable = Math.max(scrollHeight - clientHeight, 1);
      const progress = scrollTop / scrollable;
      setIsVisible(progress >= 0.75);
    };

    updateVisibility();
    const onScroll = () => updateVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });
    scrollingEl.addEventListener("scroll", onScroll, {
      passive: true,
    } as AddEventListenerOptions);
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", onScroll);
      scrollingEl.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    const navigate = () => {
      // Ensure internal pages render at the top even if scroll position is preserved.
      window.scrollTo(0, 0);
      router.push(href);
    };
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as Document & {
        startViewTransition: (cb: () => void | Promise<void>) => void;
      }).startViewTransition(navigate);
    } else {
      navigate();
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={[
        "paw-pulse",
        "fixed left-1/2 bottom-4 z-50 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-amber-400/10 transition-opacity duration-300 hover:bg-amber-400/20",
        isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      aria-label={ariaLabel}
    >
      <svg viewBox="0 0 225 225" className="h-9 w-9 shrink-0" aria-hidden>
        <defs>
          <linearGradient id="paw-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD36A" />
            <stop offset="50%" stopColor="#FFB200" />
            <stop offset="100%" stopColor="#FFC857" />
          </linearGradient>
          <filter id="paw-invert">
            <feColorMatrix
              type="matrix"
              values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
            />
          </filter>
          <mask id="paw-mask">
            <image
              href="/paw-print-button.png"
              width={225}
              height={225}
              filter="url(#paw-invert)"
              preserveAspectRatio="xMidYMid meet"
            />
          </mask>
        </defs>
        <rect width={225} height={225} fill="url(#paw-gold)" mask="url(#paw-mask)" />
      </svg>
    </a>
  );
}

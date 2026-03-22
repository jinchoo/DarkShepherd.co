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
  const buttonRef = React.useRef<HTMLAnchorElement | null>(null);

  const getScrollMetrics = React.useCallback((scrollContainer: HTMLElement | Window) => {
    if (scrollContainer === window) {
      const scrollingEl =
        document.scrollingElement ?? document.documentElement ?? document.body;
      const scrollTop = Math.max(scrollingEl.scrollTop ?? 0, window.scrollY ?? 0);
      const scrollHeight =
        Math.max(
          scrollingEl.scrollHeight ?? 0,
          document.documentElement?.scrollHeight ?? 0,
          document.body?.scrollHeight ?? 0,
        ) || 0;
      const clientHeight =
        Math.max(scrollingEl.clientHeight ?? 0, window.innerHeight ?? 1) || 1;

      return { scrollTop, scrollHeight, clientHeight };
    }

    const element = scrollContainer as HTMLElement;

    return {
      scrollTop: element.scrollTop ?? 0,
      scrollHeight: element.scrollHeight ?? 0,
      clientHeight: element.clientHeight ?? 1,
    };
  }, []);

  const getNearestScrollContainer = React.useCallback((start: HTMLElement | null) => {
    let current = start?.parentElement ?? null;

    while (current) {
      const { overflowY } = window.getComputedStyle(current);
      const isScrollable = /(auto|scroll|overlay)/.test(overflowY);

      if (isScrollable && current.scrollHeight > current.clientHeight) {
        return current;
      }

      current = current.parentElement;
    }

    return window;
  }, []);

  const resolveSamePageTarget = React.useCallback((targetHref: string) => {
    if (typeof document === "undefined" || !targetHref.includes("#")) return null;

    const url = new URL(targetHref, window.location.href);
    if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) {
      return null;
    }

    const targetId = decodeURIComponent(url.hash.replace(/^#/, ""));
    if (!targetId) return null;

    return document.getElementById(targetId);
  }, []);

  React.useEffect(() => {
    const scrollContainer = getNearestScrollContainer(buttonRef.current);

    const updateVisibility = () => {
      const { scrollTop, scrollHeight, clientHeight } = getScrollMetrics(scrollContainer);
      const scrollable = Math.max(scrollHeight - clientHeight, 1);
      const progress = scrollTop / scrollable;
      setIsVisible(progress >= 0.75);
    };

    updateVisibility();
    const onScroll = () => updateVisibility();

    if (scrollContainer === window) {
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      scrollContainer.addEventListener("scroll", onScroll, {
        passive: true,
      } as AddEventListenerOptions);
    }

    window.addEventListener("resize", updateVisibility);

    return () => {
      if (scrollContainer === window) {
        window.removeEventListener("scroll", onScroll);
      } else {
        scrollContainer.removeEventListener("scroll", onScroll);
      }
      window.removeEventListener("resize", updateVisibility);
    };
  }, [getNearestScrollContainer, getScrollMetrics]);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();

    const samePageTarget = resolveSamePageTarget(href);
    if (samePageTarget) {
      samePageTarget.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const navigate = () => {
      // Ensure internal pages render at the top even if scroll position is preserved.
      window.scrollTo(0, 0);
      router.push(href, { scroll: true });
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
      ref={buttonRef}
      href={href}
      onClick={handleClick}
      className={[
        "paw-pulse",
        "fixed left-1/2 bottom-4 z-50 flex h-14 w-14 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-amber-400/10 transition-opacity duration-300 hover:bg-amber-400/20",
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

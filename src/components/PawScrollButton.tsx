"use client";

import { useRouter } from "next/navigation";
import React from "react";

type PawScrollButtonProps = {
  href?: string;
  ariaLabel?: string;
  /** "lower" moves the paw further down (e.g. on landing page); "higher" moves it slightly up */
  position?: "default" | "lower" | "higher" | "lowest";
};

export function PawScrollButton({ href = "/how-it-works", ariaLabel = "Go to How it Works", position = "default" }: PawScrollButtonProps) {
  const router = useRouter();
  const buttonRef = React.useRef<HTMLAnchorElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  const bottomClass =
    // Use positive offsets so the paw is fully visible even when parents clip overflow.
    // 24px = bottom-6, 32px = bottom-8
    position === "lowest"
      ? "bottom-8"
      : position === "lower"
      ? "bottom-6"
      : position === "higher"
      ? "bottom-8"
      : "bottom-6";

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    const navigate = () => router.push(href);
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as Document & { startViewTransition: (cb: () => void | Promise<void>) => void }).startViewTransition(navigate);
    } else {
      navigate();
    }
  }

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId: number | null = null;

    function rectsOverlap(a: DOMRect, b: DOMRect): boolean {
      return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
    }

    function computeVisibility() {
      const btn = buttonRef.current;
      if (!btn) return;

      const innerH = window.innerHeight || 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - innerH;

      const btnRect = btn.getBoundingClientRect();

      // Hide if it's outside the viewport (so it never feels cramped).
      if (btnRect.bottom <= 0 || btnRect.top >= innerH) {
        setVisible(false);
        return;
      }

      // Prevent overlap with important UI (Calendly CTA link + hero shield image).
      const criticalEls: Element[] = [];
      criticalEls.push(...Array.from(document.querySelectorAll('a[href="https://calendly.com/jin-darkshepherd/30min"]')));
      // Note: we intentionally do NOT block visibility based on the hero shield image,
      // since it spans the lower viewport and can hide the paw entirely on the landing page.

      // Hide if the button would be too close to the bottom edge.
      if (btnRect.bottom > innerH - 12) {
        setVisible(false);
        return;
      }

      for (const el of criticalEls) {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && rectsOverlap(btnRect, r)) {
          setVisible(false);
          return;
        }
      }

      setVisible(true);
    }

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        computeVisibility();
      });
    };

    const onResize = () => {
      computeVisibility();
    };

    // Initial compute after mount.
    computeVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      href={href}
      onClick={handleClick}
      className={[
        "paw-pulse absolute",
        bottomClass,
        "left-1/2 z-[999] flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-amber-400/10 transition hover:bg-amber-400/20",
        // smooth show/hide
        "transform-gpu transition-all duration-300 ease-out",
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none",
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
            <feColorMatrix type="matrix" values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0" />
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

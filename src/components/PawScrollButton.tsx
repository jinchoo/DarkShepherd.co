"use client";

import React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { navigateWithViewTransition } from "@/lib/viewTransition";

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

/** Show the paw only once the viewport is within this many px of the page bottom. */
const NEAR_BOTTOM_THRESHOLD = 140;

export function PawScrollButton({
  href = "/product",
  ariaLabel = "Go to Product",
  position = "higher",
  mode = "fixed",
  bottomOverrideClassName,
}: PawScrollButtonProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const scrollMetrics = () => {
      const doc = document.documentElement;
      const body = document.body;

      // Prefer the element that actually has scroll range. On some layouts body
      // overflows while documentElement reports viewport height only — in that
      // case body.scrollTop is the real position.
      const candidates = [
        {
          top: window.scrollY || 0,
          height: doc.scrollHeight,
          client: window.innerHeight || doc.clientHeight,
        },
        { top: doc.scrollTop, height: doc.scrollHeight, client: doc.clientHeight },
        { top: body.scrollTop, height: body.scrollHeight, client: body.clientHeight },
      ];

      let best = candidates[0];
      let bestRange = best.height - best.client;
      for (const c of candidates) {
        const range = c.height - c.client;
        // Prefer a larger range; if tied, prefer the one that has already scrolled.
        if (range > bestRange || (range === bestRange && c.top > best.top)) {
          bestRange = range;
          best = c;
        }
      }

      return { ...best, range: bestRange };
    };

    const updateVisibility = () => {
      const { top, height, client, range } = scrollMetrics();
      const remaining = height - top - client;
      const isScrollable = range > 4;
      // Require real downward scroll so short pages don't show the paw on arrival.
      const hasScrolledDown = top > 24;
      const nearBottom = remaining <= NEAR_BOTTOM_THRESHOLD;

      setIsVisible(isScrollable && hasScrolledDown && nearBottom);
    };

    updateVisibility();
    const raf = window.requestAnimationFrame(updateVisibility);

    // Scroll does not bubble — listen on window (capture) and on both common
    // scroll containers so body-as-scroller layouts still update.
    const scrollOpts: AddEventListenerOptions = { passive: true, capture: true };
    window.addEventListener("scroll", updateVisibility, scrollOpts);
    document.documentElement.addEventListener("scroll", updateVisibility, scrollOpts);
    document.body.addEventListener("scroll", updateVisibility, scrollOpts);
    window.addEventListener("resize", updateVisibility);

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateVisibility)
        : null;
    resizeObserver?.observe(document.documentElement);
    resizeObserver?.observe(document.body);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateVisibility, scrollOpts);
      document.documentElement.removeEventListener("scroll", updateVisibility, scrollOpts);
      document.body.removeEventListener("scroll", updateVisibility, scrollOpts);
      window.removeEventListener("resize", updateVisibility);
      resizeObserver?.disconnect();
    };
  }, []);

  const bottomClass =
    bottomOverrideClassName ??
    // Use positive offsets so the paw is fully visible even when parents clip overflow.
    (position === "lowest"
      ? "bottom-8"
      : position === "lower"
      ? "bottom-6"
      : position === "higher"
      ? "bottom-[12px]"
      : "bottom-6");

  const positionClass = mode === "fixed" ? "fixed" : "absolute";

  function handleClick(e: React.MouseEvent) {
    // Let modified clicks (new tab, etc.) behave natively; <Link> handles nav.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    // Navigate with the site-wide smooth page transition.
    e.preventDefault();
    navigateWithViewTransition(router, href);
  }

  const paw = (
    <Link
      href={href}
      onClick={handleClick}
      className={[
        isVisible ? "paw-bounce opacity-100" : "pointer-events-none opacity-0",
        positionClass,
        bottomClass,
        "left-1/2 z-50 flex h-14 w-14 -ml-[1.75rem] items-center justify-center rounded-full transition-opacity duration-300",
      ].join(" ")}
      aria-hidden={!isVisible}
      aria-label={ariaLabel}
      tabIndex={isVisible ? 0 : -1}
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
    </Link>
  );

  // Render into document.body so the fixed paw escapes page stacking contexts
  // (e.g. the footer) and stays clickable above all content.
  if (!mounted) return null;
  return createPortal(paw, document.body);
}

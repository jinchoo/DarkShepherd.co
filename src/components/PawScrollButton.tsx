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
  bottomOverrideClassName: _bottomOverrideClassName,
}: PawScrollButtonProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [bottomPx, setBottomPx] = React.useState(16);
  const router = useRouter();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const scrollMetrics = () => {
      const doc = document.documentElement;
      const body = document.body;

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
        if (range > bestRange || (range === bestRange && c.top > best.top)) {
          bestRange = range;
          best = c;
        }
      }

      return { ...best, range: bestRange };
    };

    const updateBottomOffset = () => {
      // Cookie banner sits at z-60 over the bottom; lift the paw above it.
      const cookie = document.querySelector<HTMLElement>('[aria-label="Cookie consent"]');
      const cookieHeight = cookie ? cookie.getBoundingClientRect().height : 0;
      const base =
        position === "lowest"
          ? 32
          : position === "lower"
            ? 24
            : position === "higher"
              ? 16
              : 24;
      // Call sites may pass bottomOverrideClassName for intent; keep a sensible
      // minimum clearance either way.
      setBottomPx(cookieHeight > 0 ? Math.ceil(cookieHeight + 12) : base);
    };

    const updateVisibility = () => {
      const { top, height, client, range } = scrollMetrics();
      const remaining = height - top - client;
      const isScrollable = range > 4;
      const hasScrolledDown = top > 24;
      const nearBottom = remaining <= NEAR_BOTTOM_THRESHOLD;

      // If the page can't scroll, the bottom is already in view — show the paw.
      setIsVisible(!isScrollable || (hasScrolledDown && nearBottom));
      updateBottomOffset();
    };

    updateVisibility();
    const raf = window.requestAnimationFrame(updateVisibility);

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
    const cookie = document.querySelector('[aria-label="Cookie consent"]');
    if (cookie) resizeObserver?.observe(cookie);

    // Cookie banner mounts/unmounts after consent — watch for it.
    const mutationObserver =
      typeof MutationObserver !== "undefined"
        ? new MutationObserver(updateVisibility)
        : null;
    mutationObserver?.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateVisibility, scrollOpts);
      document.documentElement.removeEventListener("scroll", updateVisibility, scrollOpts);
      document.body.removeEventListener("scroll", updateVisibility, scrollOpts);
      window.removeEventListener("resize", updateVisibility);
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
    };
  }, [position]);

  const positionClass = mode === "fixed" ? "fixed" : "absolute";

  function handleClick(e: React.MouseEvent) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
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
        // z-[70] sits above the cookie banner (z-60).
        "left-1/2 z-[70] flex h-14 w-14 -ml-[1.75rem] items-center justify-center rounded-full transition-opacity duration-300",
      ].join(" ")}
      style={{ bottom: bottomPx }}
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

  if (!mounted) return null;
  return createPortal(paw, document.body);
}

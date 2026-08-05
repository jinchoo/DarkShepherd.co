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
  const visibleRef = React.useRef(false);
  const bottomRef = React.useRef(16);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    let ticking = false;

    const baseBottom =
      position === "lowest" ? 32 : position === "lower" ? 24 : position === "higher" ? 16 : 24;

    const update = () => {
      ticking = false;

      const doc = document.documentElement;
      const top = window.scrollY || doc.scrollTop || 0;
      const height = doc.scrollHeight;
      const client = window.innerHeight || doc.clientHeight;
      const range = height - client;
      const remaining = height - top - client;
      const isScrollable = range > 4;
      const nextVisible =
        !isScrollable || (top > 24 && remaining <= NEAR_BOTTOM_THRESHOLD);

      if (nextVisible !== visibleRef.current) {
        visibleRef.current = nextVisible;
        setIsVisible(nextVisible);
      }

      const cookie = document.querySelector<HTMLElement>('[aria-label="Cookie consent"]');
      const cookieHeight = cookie ? cookie.getBoundingClientRect().height : 0;
      const nextBottom = cookieHeight > 0 ? Math.ceil(cookieHeight + 12) : baseBottom;
      if (nextBottom !== bottomRef.current) {
        bottomRef.current = nextBottom;
        setBottomPx(nextBottom);
      }
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [position]);

  const positionClass = mode === "fixed" ? "fixed" : "absolute";

  function handleClick(e: React.MouseEvent) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigateWithViewTransition(router, href);
  }

  const paw = (
    <div
      className={[
        isVisible ? "opacity-100" : "pointer-events-none opacity-0",
        positionClass,
        // z-[70] sits above the cookie banner (z-60).
        "left-1/2 z-[70] flex -translate-x-1/2 flex-col items-center transition-opacity duration-300",
      ].join(" ")}
      style={{ bottom: bottomPx }}
      aria-hidden={!isVisible}
    >
      <div className="translate-y-2">
        <Link
          href={href}
          onClick={handleClick}
          className={[
            isVisible ? "paw-bounce" : "",
            "flex h-14 w-14 items-center justify-center rounded-full",
          ].join(" ")}
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
      </div>
      <p className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-[11px] font-semibold tracking-[0.14em] text-transparent uppercase sm:text-xs">
        Scroll to Explore
      </p>
    </div>
  );

  if (!mounted) return null;
  return createPortal(paw, document.body);
}

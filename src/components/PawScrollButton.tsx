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
  position = "higher",
  mode = "fixed",
  bottomOverrideClassName,
}: PawScrollButtonProps) {
  const router = useRouter();

  const bottomClass =
    bottomOverrideClassName ??
    // Use positive offsets so the paw is fully visible even when parents clip overflow.
    position === "lowest"
      ? "bottom-8"
      : position === "lower"
      ? "bottom-6"
      : position === "higher"
      ? "bottom-[12px]"
      : "bottom-6";

  const positionClass = mode === "fixed" ? "fixed" : "absolute";

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
        positionClass,
        bottomClass,
        "left-1/2 z-50 flex h-14 w-14 -ml-[1.75rem] items-center justify-center rounded-full bg-amber-400/10 transition hover:bg-amber-400/20",
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

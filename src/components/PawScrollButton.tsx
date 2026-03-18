"use client";

import { useRouter } from "next/navigation";

type PawScrollButtonProps = {
  href?: string;
  ariaLabel?: string;
  /** "lower" moves the paw further down (e.g. on landing page); "higher" moves it slightly up */
  position?: "default" | "lower" | "higher" | "lowest";
};

export function PawScrollButton({ href = "/how-it-works", ariaLabel = "Go to How it Works", position = "default" }: PawScrollButtonProps) {
  const router = useRouter();

  const bottomClass =
    position === "lowest"
      ? "-bottom-48"
      : position === "lower"
      ? "-bottom-32"
      : position === "higher"
      ? "-bottom-4"
      : "-bottom-16";

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    const navigate = () => router.push(href);
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as Document & { startViewTransition: (cb: () => void | Promise<void>) => void }).startViewTransition(navigate);
    } else {
      navigate();
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`paw-pulse absolute ${bottomClass} left-1/2 z-20 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-amber-400/50 bg-amber-400/10 transition hover:border-amber-400 hover:bg-amber-400/20`}
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

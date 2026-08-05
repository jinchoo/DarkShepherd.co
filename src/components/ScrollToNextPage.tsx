"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { navigateWithViewTransition } from "@/lib/viewTransition";

type ScrollToNextPageProps = {
  /** Route to advance to when the user scrolls past the bottom. */
  nextHref?: string;
  /** Route to go back to when the user scrolls up past the top. */
  prevHref?: string;
  /** Extra scroll intent (px) needed at the bottom before going to the next page. */
  threshold?: number;
  /** Extra scroll intent (px) needed at the top before going to the previous page. */
  upThreshold?: number;
};

/**
 * Lets the user scroll/swipe past the end of the page to advance to the next
 * route, or past the top to go back to the previous route (same destinations as
 * the paw / back link), so the paw is optional.
 */
export function ScrollToNextPage({
  nextHref,
  prevHref,
  threshold = 420,
  // Scroll-up → previous page needs more intent so it doesn't feel too eager.
  upThreshold = 900,
}: ScrollToNextPageProps) {
  const router = useRouter();
  const navigated = useRef(false);
  const downAccum = useRef(0);
  const upAccum = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    navigated.current = false;

    // The real scroller may be the window, documentElement, or body, so evaluate
    // all and use whichever is genuinely scrollable (mirrors PawScrollButton).
    const metrics = () => {
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
      return best;
    };

    const atBottom = () => {
      const m = metrics();
      return m.height - m.top - m.client <= 4;
    };
    // Stricter top check so Lenis overshoot doesn't trigger prev-page too early.
    const atTop = () => metrics().top <= 1;

    const go = (href: string) => {
      if (navigated.current) return;
      navigated.current = true;
      downAccum.current = 0;
      upAccum.current = 0;
      navigateWithViewTransition(router, href);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        upAccum.current = 0;
        if (!nextHref || !atBottom()) {
          downAccum.current = 0;
          return;
        }
        downAccum.current += e.deltaY;
        if (downAccum.current >= threshold) go(nextHref);
      } else if (e.deltaY < 0) {
        downAccum.current = 0;
        if (!prevHref || !atTop()) {
          upAccum.current = 0;
          return;
        }
        // Dampen upward accumulation so prev-page nav feels slower / less twitchy.
        upAccum.current += -e.deltaY * 0.55;
        if (upAccum.current >= upThreshold) go(prevHref);
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0]?.clientY ?? 0;
      // Positive delta = finger up = scrolling down; negative = scrolling up.
      const delta = touchStartY.current - currentY;
      if (delta > 140 && nextHref && atBottom()) go(nextHref);
      else if (delta < -260 && prevHref && atTop()) go(prevHref);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [nextHref, prevHref, router, threshold, upThreshold]);

  return null;
}

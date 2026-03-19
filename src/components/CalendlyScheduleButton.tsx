"use client";

import React from "react";
import { closeCalendlyPopup, isCalendlyReady, loadCalendlyWidgetScript, subscribeCalendlyReady } from "@/lib/calendlyPopup";

type CalendlyScheduleButtonProps = {
  className?: string;
  children: React.ReactNode;
};

const CALENDLY_EVENT_URL = "https://calendly.com/jin-darkshepherd/30min";

export function CalendlyScheduleButton({
  className,
  children,
}: CalendlyScheduleButtonProps) {
  const openingRef = React.useRef(false);
  const pendingOpenRef = React.useRef(false);
  const warmedRef = React.useRef(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const [ready, setReady] = React.useState<boolean>(() => isCalendlyReady());

  React.useEffect(() => {
    if (ready) return;
    const unsubscribe = subscribeCalendlyReady(() => setReady(true));
    return unsubscribe;
  }, [ready]);

  function warmCalendlyOnce() {
    if (warmedRef.current) return;
    warmedRef.current = true;
    loadCalendlyWidgetScript().catch(() => {
      // eslint-disable-next-line no-console
      console.error("Failed to warm Calendly widget");
    });
  }

  function openCalendlyNow() {
    const w = window as unknown as { Calendly?: { initPopupWidget?: (opts: { url: string }) => void } };
    const init = w.Calendly?.initPopupWidget;
    if (!init) return false;

    init({ url: CALENDLY_EVENT_URL });

    // Wire up dismissal to Calendly's own overlay (so clicks outside close it).
    setTimeout(() => {
      const overlayEl = document.querySelector(".calendly-overlay") as HTMLElement | null;
      if (!overlayEl) return;

      const dismiss = () => {
        closeCalendlyPopup();
      };

      overlayEl.addEventListener("pointerdown", dismiss, { once: true });
      overlayEl.addEventListener("touchstart", dismiss, { once: true });
    }, 50);

    return true;
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    try {
      if (openingRef.current) return;
      openingRef.current = true;

      const actuallyReady = isCalendlyReady();
      if (actuallyReady) {
        openCalendlyNow();
        openingRef.current = false;
      } else {
        // If the user clicks before Calendly becomes ready, open as soon as it flips to ready.
        pendingOpenRef.current = true;
        warmCalendlyOnce();

        // Guard against a race: the user might click before the "ready" subscription runs.
        // Poll briefly and open as soon as Calendly is ready (script already warming in useEffect).
        const start = Date.now();
        const pollId = window.setInterval(() => {
          if (!pendingOpenRef.current) {
            window.clearInterval(pollId);
            return;
          }

          if (isCalendlyReady()) {
            pendingOpenRef.current = false;
            window.clearInterval(pollId);
            openCalendlyNow();
            openingRef.current = false;
            return;
          }

          if (Date.now() - start > 20000) {
            pendingOpenRef.current = false;
            window.clearInterval(pollId);
            openingRef.current = false;
          }
        }, 50);
      }
    } catch (err) {
      openingRef.current = false;
    }
  }

  React.useEffect(() => {
    if (!ready) return;
    if (!pendingOpenRef.current) return;
    pendingOpenRef.current = false;
    openCalendlyNow();
    openingRef.current = false;
  }, [ready]);

  React.useEffect(() => {
    // Warm Calendly when the CTA enters the viewport (only once).
    const node = buttonRef.current;
    if (!node || typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      warmCalendlyOnce();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        warmCalendlyOnce();
        obs.disconnect();
      },
      { root: null, threshold: 0.25 },
    );

    obs.observe(node);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      ref={buttonRef}
      className={className}
      onClick={handleClick}
      onMouseEnter={warmCalendlyOnce}
      onTouchStart={warmCalendlyOnce}
      type="button"
    >
      {children}
    </button>
  );
}


"use client";

import React from "react";
import { closeCalendlyPopup, loadCalendlyWidgetScript } from "@/lib/calendlyPopup";

type CalendlyScheduleButtonProps = {
  className?: string;
  children: React.ReactNode;
};

const CALENDLY_EVENT_URL = "https://calendly.com/jin-darkshepherd/30min";
const CALENDLY_WIDGET_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

export function CalendlyScheduleButton({
  className,
  children,
}: CalendlyScheduleButtonProps) {
  const openingRef = React.useRef(false);
  const warmedRef = React.useRef(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  function warmCalendlyOnce() {
    if (warmedRef.current) return;
    warmedRef.current = true;
    loadCalendlyWidgetScript().catch(() => {
      // eslint-disable-next-line no-console
      console.error("Calendly warm-up failed");
      warmedRef.current = false;
    });
  }

  function openCalendlyNow(): boolean {
    const w = window as unknown as { Calendly?: { initPopupWidget?: (opts: { url: string }) => void } };
    const init = w.Calendly?.initPopupWidget;
    if (!init) return false;

    try {
      init({ url: CALENDLY_EVENT_URL });
    } catch {
      return false;
    }

    setTimeout(() => {
      const overlayEl = document.querySelector(".calendly-overlay") as HTMLElement | null;
      if (!overlayEl) return;
      const dismiss = () => closeCalendlyPopup();
      overlayEl.addEventListener("pointerdown", dismiss, { once: true });
      overlayEl.addEventListener("touchstart", dismiss, { once: true });
    }, 50);

    return true;
  }

  function handleClick() {
    if (openingRef.current) return;
    openingRef.current = true;

    // eslint-disable-next-line no-console
    console.log("Calendly CTA clicked");

    if (openCalendlyNow()) {
      // eslint-disable-next-line no-console
      console.log("Calendly popup init called immediately");
      openingRef.current = false;
      return;
    }

    // Warm up (inject script if needed), but avoid async window.open fallbacks
    // which can be blocked by pop-up blockers.
    warmCalendlyOnce();

    const start = Date.now();
    const pollId = window.setInterval(() => {
      if (Date.now() - start > 60000) {
        // eslint-disable-next-line no-console
        const hasScript = Boolean(document.querySelector(`script[src="${CALENDLY_WIDGET_SCRIPT_SRC}"]`));
        const scriptCount = document.querySelectorAll(`script[src="${CALENDLY_WIDGET_SCRIPT_SRC}"]`).length;
        const hasCalendly = Boolean((window as any).Calendly);
        const hasInitPopupWidget = Boolean((window as any).Calendly?.initPopupWidget);
        console.error(
          `Calendly popup did not open (timeout). hasScript=${hasScript} scriptCount=${scriptCount} hasCalendly=${hasCalendly} hasInitPopupWidget=${hasInitPopupWidget}`,
        );
        window.clearInterval(pollId);
        openingRef.current = false;
        return;
      }

      if (openCalendlyNow()) {
        // eslint-disable-next-line no-console
        console.log("Calendly popup init opened after polling");
        window.clearInterval(pollId);
        openingRef.current = false;
      }
    }, 100);
  }

  React.useEffect(() => {
    const node = buttonRef.current;
    if (!node || typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      warmCalendlyOnce();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          warmCalendlyOnce();
          obs.disconnect();
        }
      },
      { root: null, threshold: 0.25 },
    );

    obs.observe(node);
    return () => obs.disconnect();
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

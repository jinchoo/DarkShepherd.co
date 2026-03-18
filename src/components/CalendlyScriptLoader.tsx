"use client";

import { useEffect } from "react";
import { loadCalendlyWidgetScript } from "@/lib/calendlyPopup";

export function CalendlyScriptLoader() {
  useEffect(() => {
    // Preload Calendly widget after mount so CTA can open instantly.
    loadCalendlyWidgetScript().catch((err) => {
      // eslint-disable-next-line no-console
      console.error("Failed to load Calendly widget script:", err);
    });
  }, []);

  return null;
}


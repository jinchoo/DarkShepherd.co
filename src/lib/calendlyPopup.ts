let calendlyScriptLoadPromise: Promise<void> | null = null;

const CALENDLY_WIDGET_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const INIT_POPUP_WIDGET_TIMEOUT_MS = 20000;
const INIT_POPUP_WIDGET_POLL_MS = 10;

let calendlyReady = false;
const calendlyReadySubscribers = new Set<() => void>();

function markCalendlyReady(): void {
  if (calendlyReady) return;
  calendlyReady = true;
  calendlyReadySubscribers.forEach((fn) => fn());
}

export function isCalendlyReady(): boolean {
  if (calendlyReady) return true;
  if (isCalendlyInitPopupWidgetReady()) {
    markCalendlyReady();
    return true;
  }
  return false;
}

export function subscribeCalendlyReady(listener: () => void): () => void {
  calendlyReadySubscribers.add(listener);
  return () => calendlyReadySubscribers.delete(listener);
}

function isCalendlyInitPopupWidgetReady(): boolean {
  if (typeof window === "undefined") return false;
  const calendly = (window as unknown as { Calendly?: { initPopupWidget?: unknown } }).Calendly;
  return Boolean(calendly?.initPopupWidget && typeof calendly.initPopupWidget === "function");
}

export async function loadCalendlyWidgetScript(): Promise<void> {
  if (typeof document === "undefined") return;
  if (typeof window !== "undefined" && isCalendlyInitPopupWidgetReady()) {
    markCalendlyReady();
    return;
  }
  if (calendlyScriptLoadPromise) return calendlyScriptLoadPromise;

  calendlyScriptLoadPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_WIDGET_SCRIPT_SRC}"]`,
    );

    const scriptToUse = existing ?? document.createElement("script");
    if (!existing) {
      scriptToUse.src = CALENDLY_WIDGET_SCRIPT_SRC;
      scriptToUse.async = true;
      // eslint-disable-next-line no-console
      console.log("Loading Calendly widget script...");
      document.head.appendChild(scriptToUse);
    }

    scriptToUse.addEventListener(
      "error",
      () => reject(new Error("Failed to load Calendly widget script")),
      { once: true },
    );

    const start = Date.now();
    const interval = window.setInterval(() => {
      if (isCalendlyInitPopupWidgetReady()) {
        window.clearInterval(interval);
        markCalendlyReady();
        resolve();
        return;
      }

      if (Date.now() - start > INIT_POPUP_WIDGET_TIMEOUT_MS) {
        window.clearInterval(interval);
        reject(new Error("Calendly initPopupWidget is not available after script wait."));
      }
    }, INIT_POPUP_WIDGET_POLL_MS);
  });

  return calendlyScriptLoadPromise;
}

export async function openCalendlyPopup(eventUrl: string): Promise<void> {
  await loadCalendlyWidgetScript();

  const calendly = (window as unknown as {
    Calendly?: { initPopupWidget?: (opts: { url: string }) => void };
  }).Calendly;

  if (!calendly?.initPopupWidget) {
    // eslint-disable-next-line no-console
    console.error("Calendly widget not ready:", {
      hasWindowCalendly: Boolean((window as unknown as { Calendly?: unknown }).Calendly),
      hasInitPopupWidget: Boolean((calendly as unknown as { initPopupWidget?: unknown })?.initPopupWidget),
      eventUrl,
    });
    throw new Error("Calendly is not available. initPopupWidget is missing after script load.");
  }

  calendly.initPopupWidget({ url: eventUrl });
}

export function closeCalendlyPopup(): void {
  const calendly = (window as unknown as {
    Calendly?: { closePopupWidget?: () => void };
  }).Calendly;

  if (typeof calendly?.closePopupWidget === "function") {
    calendly.closePopupWidget();
    return;
  }

  // Fallback: remove known modal/iframe nodes and any other Calendly-injected elements.
  const selectors = [
    "#calendly-modal",
    "#calendly-popup",
    ".calendly-overlay",
    ".calendly-popup",
    ".calendly-modal",
    '.calendly-widget',
    'iframe[src*="calendly.com"]',
    '[id*="calendly"]',
    '[class*="calendly"]',
  ];

  for (const sel of selectors) {
    document.querySelectorAll(sel).forEach((el) => el.remove());
  }

  // Also remove the most common wrapper if it exists.
  const calendlyRoot = document.getElementById("calendly-root");
  if (calendlyRoot) calendlyRoot.remove();

  // Remove any remaining known overlay.
  const openOverlays = document.querySelectorAll(".calendly-overlay, .calendly-popup, .calendly-modal");
  openOverlays.forEach((el) => el.remove());
}


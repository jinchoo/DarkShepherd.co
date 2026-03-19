// Calendly popup logic intentionally removed.
// The CTA now opens the booking page via a direct link:
// https://calendly.com/jin-darkshepherd/30min

export async function loadCalendlyWidgetScript(): Promise<void> {
  // no-op (popup removed)
}

export async function openCalendlyPopup(_eventUrl: string): Promise<void> {
  // no-op (popup removed)
}

export function closeCalendlyPopup(): void {
  // no-op (popup removed)
}

export function isCalendlyReady(): boolean {
  return false;
}

export function subscribeCalendlyReady(_listener: () => void): () => void {
  return () => {};
}


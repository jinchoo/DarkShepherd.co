export function normalizeStoreUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed.replace(/\/+$/, "");
  return `https://${trimmed.replace(/\/+$/, "")}`;
}

export function storeHostname(value: string) {
  try {
    return new URL(normalizeStoreUrl(value)).hostname.replace(/^www\./i, "").toLowerCase();
  } catch {
    return "";
  }
}

export function isValidHttpUrl(value: string) {
  try {
    const url = new URL(normalizeStoreUrl(value));
    return (url.protocol === "http:" || url.protocol === "https:") && Boolean(url.hostname.includes("."));
  } catch {
    return false;
  }
}

export function normalizeStoreName(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

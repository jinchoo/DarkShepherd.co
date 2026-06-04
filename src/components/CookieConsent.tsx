"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "ds-cookie-consent";

type ConsentValue = "accepted" | "declined" | "preferences";

const RESOLVED_VALUES: ConsentValue[] = ["accepted", "declined", "preferences"];

function storeConsent(value: ConsentValue) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Ignore storage failures (private mode, etc.).
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ConsentValue | null;
      if (!saved || !RESOLVED_VALUES.includes(saved)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function handleChoice(value: ConsentValue) {
    storeConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-2xl border border-amber-300/20 bg-[#0a0f1f]/95 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-6">
        <p className="text-sm leading-relaxed text-slate-300/90">
          We use cookies and similar technologies to improve site performance,
          analyze traffic, and enhance your experience. By clicking “Accept,” you
          consent to the use of cookies as described in our{" "}
          <Link
            href="/privacy"
            className="font-medium text-amber-300 underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/cookie-policy"
            className="font-medium text-amber-300 underline-offset-2 hover:underline"
          >
            Cookie Policy
          </Link>
          .
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={() => handleChoice("preferences")}
            className="order-3 rounded-full px-5 py-2 text-sm font-medium text-slate-300 transition hover:text-amber-300 sm:order-1"
          >
            Manage Preferences
          </button>
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="order-2 rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="order-1 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(251,191,36,0.45)] transition hover:brightness-110 sm:order-3"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

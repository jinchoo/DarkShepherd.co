"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const roles = [
  "Founder / Owner",
  "Operations",
  "Customer Support",
  "Fulfillment",
  "Engineering / Tech",
  "Other",
] as const;

const orderVolumes = [
  "Under 100",
  "100 – 500",
  "500 – 1,000",
  "1,000 – 5,000",
  "5,000+",
] as const;

const fieldClass =
  "w-full rounded-lg border border-white/15 bg-[#0a0a0a] px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 transition focus:border-amber-300/45 focus:outline-none [color-scheme:dark]";

const labelClass = "mb-1 block text-[11px] font-medium text-slate-400";

export function BetaSignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: String(data.get("fullName") ?? "").trim(),
          workEmail: String(data.get("workEmail") ?? "").trim(),
          storeName: String(data.get("storeName") ?? "").trim(),
          shopifyUrl: String(data.get("shopifyUrl") ?? "").trim(),
          role: String(data.get("role") ?? "").trim(),
          orderVolume: String(data.get("orderVolume") ?? "").trim(),
          challenge: String(data.get("challenge") ?? "").trim(),
        }),
      });

      const payload = await res.json().catch(() => null);

      if (!res.ok) {
        setErrorMessage(payload?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-amber-300/25 bg-white/[0.03] px-6 py-8 text-center">
        <p className="text-lg font-semibold text-slate-100">You&apos;re on the list.</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Thanks for applying to the DarkShepherd beta. We&apos;ll review your
          store and follow up soon.
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-amber-300/80">
          Protecting One Pack at a Time
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
      <div className="grid gap-2.5 sm:grid-cols-2">
        <div>
          <label htmlFor="beta-fullName" className={labelClass}>
            Full Name
          </label>
          <input
            id="beta-fullName"
            name="fullName"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="beta-workEmail" className={labelClass}>
            Work Email
          </label>
          <input
            id="beta-workEmail"
            name="workEmail"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="beta-storeName" className={labelClass}>
            Store Name
          </label>
          <input
            id="beta-storeName"
            name="storeName"
            required
            placeholder="Your Shopify store"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="beta-shopifyUrl" className={labelClass}>
            Shopify Store URL
          </label>
          <input
            id="beta-shopifyUrl"
            name="shopifyUrl"
            type="url"
            required
            placeholder="https://yourstore.myshopify.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="beta-role" className={labelClass}>
            Role
          </label>
          <select id="beta-role" name="role" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select your role
            </option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="beta-orderVolume" className={labelClass}>
            Average Orders Per Month
          </label>
          <select
            id="beta-orderVolume"
            name="orderVolume"
            required
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Select volume
            </option>
            {orderVolumes.map((volume) => (
              <option key={volume} value={volume}>
                {volume}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="beta-challenge" className={labelClass}>
          What&apos;s your biggest challenge with order fulfillment today?
        </label>
        <textarea
          id="beta-challenge"
          name="challenge"
          required
          rows={3}
          placeholder="Tell us what slows your team down..."
          className={`${fieldClass} min-h-[4.5rem] resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_8px_28px_rgba(251,191,36,0.28)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
      >
        {status === "loading" ? "Submitting…" : "Join the Beta"}
      </button>

      {status === "error" ? (
        <p className="text-center text-xs text-red-300/90" role="alert">
          {errorMessage}
        </p>
      ) : (
        <p className="flex items-center justify-center gap-2 text-center text-xs text-slate-500">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-amber-300/70" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V8a5 5 0 0 1 10 0v3M6.5 11h11A1.5 1.5 0 0 1 19 12.5v7A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-7A1.5 1.5 0 0 1 6.5 11Z" />
          </svg>
          Your information is safe with us. No spam, ever.
        </p>
      )}
    </form>
  );
}

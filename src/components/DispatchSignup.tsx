"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function DispatchSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setErrorMessage(
          data?.error ?? "Subscription failed. Please try again.",
        );
        setStatus("error");
        return;
      }

      setAlreadySubscribed(Boolean(data?.alreadySubscribed));
      setStatus("success");
      setEmail("");
    } catch {
      setErrorMessage("Subscription failed. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    if (alreadySubscribed) {
      return (
        <div className="rounded-xl border border-amber-300/20 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
          <p className="font-semibold">🐾 You&apos;re already part of the pack.</p>
          <p className="mt-2 text-slate-300">
            Future DarkShepherd Dispatches will be delivered directly to your
            inbox.
          </p>
          <p className="mt-2 text-slate-300">Protecting One Pack at a Time.</p>
        </div>
      );
    }

    return (
      <div className="rounded-xl border border-amber-300/20 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
        <p className="font-semibold">Welcome to the Pack. 🐾</p>
        <p className="mt-2 text-slate-300">
          Your welcome email is on its way. If it lands in Promotions or Spam,
          move it to your inbox to ensure future DarkShepherd Dispatches arrive
          successfully.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
      <label htmlFor="dispatch-email" className="sr-only">
        Email address
      </label>
      <input
        id="dispatch-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 transition focus:border-amber-300/50 focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(251,191,36,0.45)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Joining…" : "Join the Pack"}
      </button>
      {status === "error" ? (
        <p className="text-xs text-red-300/90" role="alert">
          {errorMessage}
        </p>
      ) : (
        <p className="text-xs text-slate-400">
          Security Insights. No Bark. Unsubscribe Anytime.
        </p>
      )}
    </form>
  );
}

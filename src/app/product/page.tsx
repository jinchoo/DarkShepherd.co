import type { ReactNode } from "react";
import Image from "next/image";
import { CalendlyScheduleButton } from "@/components/CalendlyScheduleButton";
import { DashboardMockup } from "@/components/DashboardMockup";
import { PawScrollButton } from "@/components/PawScrollButton";
import { ScrollToNextPage } from "@/components/ScrollToNextPage";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata = {
  title: "Product — DarkShepherd",
  description:
    "DarkShepherd gives Shopify merchants real-time visibility into order problems and helps you act fast.",
};

const goldText =
  "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent";

const grayText =
  "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent";

const heroBullets = ["Spot issues fast", "Take action in one place", "Keep orders moving"];

const attentionBullets = [
  "All order issues in one place",
  "Rich context and timelines",
  "Action in seconds",
];

const capabilities: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Real-Time Visibility",
    text: "See issues as they happen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </svg>
    ),
  },
  {
    title: "Smart Alerts",
    text: "Get notified about what matters.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 8a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6ZM9.5 18a2.5 2.5 0 0 0 5 0" />
      </svg>
    ),
  },
  {
    title: "Timeline & Context",
    text: "See the full story in one place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10M7 12h10M7 17h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 7h.01M3.5 12h.01M3.5 17h.01" />
      </svg>
    ),
  },
  {
    title: "Take Action",
    text: "Resolve issues and keep orders moving.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 20a7 7 0 0 1 14 0" />
      </svg>
    ),
  },
];

const attentionOrders: {
  id: string;
  issue: string;
  age: string;
  total: string;
  action: string;
  variant: "gold" | "outline";
}[] = [
  { id: "#1027", issue: "Paid, not fulfilled", age: "2m", total: "$89.97", action: "Assign", variant: "gold" },
  { id: "#1026", issue: "Fulfilled, no tracking", age: "18m", total: "$124.50", action: "Add Tracking", variant: "outline" },
  { id: "#1025", issue: "Customer issue", age: "1h", total: "$69.98", action: "Resolve", variant: "outline" },
  { id: "#1024", issue: "Tracking stale (7+ days)", age: "2h", total: "$33.99", action: "Resolve", variant: "outline" },
  { id: "#1023", issue: "Payment risk", age: "3h", total: "$149.00", action: "Review", variant: "outline" },
];

function CheckBullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-sm text-slate-200/90 sm:text-base">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber-400/40 text-amber-300">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.2} stroke="currentColor" className="h-3.5 w-3.5" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4 4 10-10" />
        </svg>
      </span>
      {children}
    </li>
  );
}

const eyebrowClass =
  "text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm";

export default function ProductPage() {
  return (
    <div className="font-display relative min-h-[100dvh] bg-[#050816] text-slate-100">
      <SiteBackground />
      <SiteHeader />

      <div className="relative z-10">
        <SiteContainer className="pt-12 sm:pt-16 lg:pt-20">
          {/* Hero */}
          <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.25rem]">
              <span className={grayText}>One dashboard.</span>
              <br />
              <span className={grayText}>Every order issue.</span>
              <br />
              <span className={goldText}>Nothing slips through.</span>
            </h1>

            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-slate-300/90 sm:text-lg">
              DarkShepherd gives Shopify merchants real-time visibility into
              order problems and helps you act fast.
            </p>

            <ul className="mt-6 space-y-3 text-left">
              {heroBullets.map((b) => (
                <CheckBullet key={b}>{b}</CheckBullet>
              ))}
            </ul>
          </section>

          {/* Dashboard (full width, below hero) */}
          <section className="mt-10 w-full sm:mt-12 lg:mt-14">
            <DashboardMockup />
          </section>

          {/* Core Capabilities */}
          <section className="mt-16 border-t border-white/10 pt-12 sm:mt-20 sm:pt-14">
            <p className={`text-center ${eyebrowClass} ${goldText}`}>Core Capabilities</p>
            <div className="mt-8 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((c) => (
                <div key={c.title} className="flex flex-col items-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/30 text-amber-300">
                    {c.icon}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-100">{c.title}</h3>
                  <p className="mt-1.5 max-w-[15rem] text-sm leading-relaxed text-slate-400">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* See What Needs Attention */}
          <section className="mt-16 grid grid-cols-1 items-center gap-10 border-t border-white/10 pt-12 sm:mt-20 sm:pt-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <div className="max-w-md">
              <p className={`${eyebrowClass} ${goldText}`}>See What Needs Attention</p>
              <h2 className="mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-4xl">
                <span className={grayText}>See what needs attention.</span>
              </h2>
              <ul className="mt-6 space-y-3">
                {attentionBullets.map((b) => (
                  <CheckBullet key={b}>{b}</CheckBullet>
                ))}
              </ul>
            </div>

            <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#080b16]/95 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="min-w-0 text-sm font-semibold text-slate-100 sm:text-base">
                  Orders Needing Attention
                </h3>
                <button className="shrink-0 text-[12px] font-medium text-amber-300/90 underline-offset-2 hover:underline">
                  View all
                </button>
              </div>

              {/* Mobile: stacked cards */}
              <ul className="space-y-2.5 md:hidden">
                {attentionOrders.map((o) => (
                  <li
                    key={o.id}
                    className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold text-slate-100">{o.id}</p>
                        <p className="mt-0.5 text-[12px] leading-snug text-slate-300">{o.issue}</p>
                      </div>
                      <button
                        className={[
                          "shrink-0 rounded-md px-2.5 py-1.5 text-[11px] font-semibold",
                          o.variant === "gold"
                            ? "bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-slate-950"
                            : "border border-amber-400/40 text-amber-300",
                        ].join(" ")}
                      >
                        {o.action}
                      </button>
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-400">
                      <span>Age {o.age}</span>
                      <span aria-hidden className="text-slate-600">
                        •
                      </span>
                      <span>{o.total}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Desktop / tablet: table */}
              <div className="hidden md:block">
                <div className="grid grid-cols-[4.5rem_minmax(0,1fr)_3rem_4.5rem_7.25rem] items-center gap-x-4 border-b border-white/10 pb-2 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                  <span>Order</span>
                  <span>Issue</span>
                  <span className="text-right">Age</span>
                  <span className="text-right">Total</span>
                  <span className="text-center">Action</span>
                </div>
                <ul className="divide-y divide-white/5">
                  {attentionOrders.map((o) => (
                    <li
                      key={o.id}
                      className="grid grid-cols-[4.5rem_minmax(0,1fr)_3rem_4.5rem_7.25rem] items-center gap-x-4 py-3"
                    >
                      <span className="text-[13px] font-semibold text-slate-100">{o.id}</span>
                      <span className="min-w-0 truncate text-[13px] text-slate-300">{o.issue}</span>
                      <span className="text-right text-[12px] text-slate-400">{o.age}</span>
                      <span className="text-right text-[12px] text-slate-300">{o.total}</span>
                      <button
                        className={[
                          "justify-self-center rounded-md px-3 py-1.5 text-[11px] font-semibold",
                          o.variant === "gold"
                            ? "bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-slate-950"
                            : "border border-amber-400/40 text-amber-300",
                        ].join(" ")}
                      >
                        {o.action}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-3 text-[12px] text-slate-500">Showing 1–5 of 23</p>
            </div>
          </section>

          {/* CTA banner */}
          <section className="mb-16 mt-16 sm:mb-20 sm:mt-20">
            <div className="flex flex-col items-center gap-6 rounded-2xl border border-amber-400/25 bg-white/[0.02] px-6 py-8 text-center shadow-[0_0_60px_rgba(251,191,36,0.06)] sm:flex-row sm:justify-between sm:gap-8 sm:px-10 sm:text-left">
              <div className="flex items-center gap-4">
                <Image
                  src="/darkshepherd-nav-logo.png"
                  alt="DarkShepherd"
                  width={96}
                  height={96}
                  className="h-14 w-auto shrink-0 sm:h-16"
                />
                <p className={`text-xl font-semibold sm:text-2xl ${grayText}`}>
                  Protect your revenue. Keep customers happy.
                </p>
              </div>
              <CalendlyScheduleButton className="inline-flex min-h-[3rem] shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_8px_22px_rgba(251,191,36,0.2)] transition hover:brightness-110 sm:text-base">
                Join the Beta
                <span aria-hidden>→</span>
              </CalendlyScheduleButton>
            </div>
          </section>
        </SiteContainer>
      </div>

      <PawScrollButton
        href="/integrations"
        ariaLabel="Go to Integrations"
        position="higher"
        mode="fixed"
        bottomOverrideClassName="bottom-4 sm:bottom-5 lg:bottom-6"
      />
      <ScrollToNextPage prevHref="/" nextHref="/integrations" />
    </div>
  );
}

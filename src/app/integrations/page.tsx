import type { ReactNode } from "react";
import Image from "next/image";
import { CalendlyScheduleButton } from "@/components/CalendlyScheduleButton";
import { PawScrollButton } from "@/components/PawScrollButton";
import { ScrollToNextPage } from "@/components/ScrollToNextPage";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata = {
  title: "Integrations — DarkShepherd",
  description:
    "DarkShepherd connects to Shopify for secure, read-only order visibility. More integrations coming soon.",
};

const goldText =
  "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent";

const grayText =
  "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent";

const features: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Secure",
    text: "Read-only access",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" className="h-5 w-5" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 11V8a5 5 0 0 1 10 0v3M6.5 11h11A1.5 1.5 0 0 1 19 12.5v7A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-7A1.5 1.5 0 0 1 6.5 11Z"
        />
      </svg>
    ),
  },
  {
    title: "Always Up to Date",
    text: "Real-time order data",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" className="h-5 w-5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM8.5 12l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
];

const comingSoon: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "You tell us what you need.",
    text: "We build the integrations that solve real operational problems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 4a2 2 0 1 1 4 0h3v3a2 2 0 1 1 0 4v3h-3a2 2 0 1 0-4 0H7v-3a2 2 0 1 1 0-4V4h3Z"
        />
      </svg>
    ),
  },
  {
    title: "Built with merchants.",
    text: "Your feedback shapes what we build next.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 19a4.5 4.5 0 0 1 9 0M11.5 19a4.5 4.5 0 0 1 9 0"
        />
      </svg>
    ),
  },
  {
    title: "Same promise.",
    text: "Every integration is secure, reliable, and easy to use.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" className="h-6 w-6" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3.5 19 6.5v5c0 5-3.2 8.3-7 9.5-3.8-1.2-7-4.5-7-9.5v-5L12 3.5Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function IntegrationsPage() {
  return (
    <div className="font-display relative min-h-dvh bg-[#050816] text-slate-100">
      <SiteBackground />
      <SiteHeader />

      <div className="relative z-10">
        <SiteContainer className="pt-14 sm:pt-16 lg:pt-20">
          {/* Hero: copy left, Current Integration card right */}
          <section className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="max-w-xl pt-6 sm:pt-8 lg:pt-10">
              <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.25rem]">
                <span className={grayText}>Built for Shopify.</span>
                <br />
                <span className="inline-block bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                  Focused on what matters.
                </span>
              </h1>

              <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-slate-300/90 sm:text-lg">
                DarkShepherd connects to Shopify so you can see order issues as
                they happen — without changing how you run your store.
              </p>

              <div className="mt-8 flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center text-amber-300 sm:h-11 sm:w-11">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth={1.6}
                    stroke="currentColor"
                    className="h-8 w-8 sm:h-9 sm:w-9"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3.5 19 6.5v5c0 5-3.2 8.3-7 9.5-3.8-1.2-7-4.5-7-9.5v-5L12 3.5Z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
                  </svg>
                </span>
                <p className="text-sm leading-relaxed text-slate-300/90 sm:text-base">
                  We start simple. We build what merchants actually need.
                  <br />
                  More integrations coming soon.
                </p>
              </div>
            </div>

            {/* Current Integration card — right of Built for Shopify */}
            <div className="min-w-0 rounded-2xl border border-amber-400/35 bg-[#080b16]/95 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur sm:p-7 lg:mt-12">
              <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${goldText}`}>
                Current Integration
              </p>

              <div className="mt-5 flex items-start gap-4">
                <Image
                  src="/images/shopify-bag-transparent.png"
                  alt="Shopify"
                  width={160}
                  height={160}
                  className="h-32 w-32 shrink-0 object-contain sm:h-36 sm:w-36"
                />
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">Shopify</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400 sm:text-base">
                    Connect your store in minutes. Import orders, monitor new
                    ones, and catch issues before they become bigger problems.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 border-t border-white/10 pt-5 sm:grid-cols-2 sm:gap-4 sm:pl-10 lg:pl-14">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-amber-300">{f.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-100">{f.title}</p>
                      <p className="mt-0.5 text-xs text-slate-400 sm:text-sm">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* More integrations coming soon */}
          <section className="mt-16 sm:mt-20">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-white/10" aria-hidden />
              <p className={`shrink-0 text-center text-xs font-semibold uppercase tracking-[0.24em] ${goldText}`}>
                More Integrations Coming Soon
              </p>
              <span className="h-px flex-1 bg-white/10" aria-hidden />
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-8">
              {comingSoon.map((item) => (
                <div key={item.title} className="flex flex-col items-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/35 text-amber-300">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-1.5 max-w-[16rem] text-sm leading-relaxed text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
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
                <div>
                  <p className="text-xl font-semibold text-slate-50 sm:text-2xl">
                    Start with Shopify. Stay protected.
                  </p>
                  <p className="mt-1 text-sm text-slate-400 sm:text-base">
                    Join the beta and be part of building the future of operations.
                  </p>
                </div>
              </div>
              <CalendlyScheduleButton className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_8px_22px_rgba(251,191,36,0.2)] transition hover:brightness-110 sm:text-base">
                Join the Beta
                <span aria-hidden>→</span>
              </CalendlyScheduleButton>
            </div>
          </section>
        </SiteContainer>
      </div>

      <PawScrollButton
        href="/pricing"
        ariaLabel="Go to Pricing"
        position="higher"
        mode="fixed"
        bottomOverrideClassName="bottom-4 sm:bottom-5 lg:bottom-6"
      />
      <ScrollToNextPage prevHref="/product" nextHref="/pricing" />
    </div>
  );
}

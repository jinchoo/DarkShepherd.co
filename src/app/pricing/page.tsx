import type { ReactNode } from "react";
import Image from "next/image";
import { CalendlyScheduleButton } from "@/components/CalendlyScheduleButton";
import { PawScrollButton } from "@/components/PawScrollButton";
import { ScrollToNextPage } from "@/components/ScrollToNextPage";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata = {
  title: "Pricing — DarkShepherd",
  description:
    "Pricing built around what merchants actually need. Join the DarkShepherd beta before paid plans launch.",
};

const goldText =
  "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent";

const grayText =
  "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent";

const pillars: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Focused First",
    text: "We start with what matters most to your operations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3.5 19 6.5v5c0 5-3.2 8.3-7 9.5-3.8-1.2-7-4.5-7-9.5v-5L12 3.5Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Merchant-Led",
    text: "Your feedback shapes the features we build next.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 19a4.5 4.5 0 0 1 9 0M11.5 19a4.5 4.5 0 0 1 9 0"
        />
      </svg>
    ),
  },
  {
    title: "Secure by Design",
    text: "Your data is protected with read-only access by default.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 11V8a5 5 0 0 1 10 0v3M6.5 11h11A1.5 1.5 0 0 1 19 12.5v7A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-7A1.5 1.5 0 0 1 6.5 11Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2" />
      </svg>
    ),
  },
  {
    title: "Always Improving",
    text: "New features added regularly based on real merchant needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 12a8 8 0 0 1 13.7-5.7L20 8M20 4v4h-4M20 12a8 8 0 0 1-13.7 5.7L4 16M4 20v-4h4"
        />
      </svg>
    ),
  },
];

export default function PricingPage() {
  return (
    <div className="font-display relative min-h-dvh bg-[#050816] text-slate-100">
      <SiteBackground />
      <SiteHeader />

      <div className="relative z-10">
        <SiteContainer className="pt-16 sm:pt-20 lg:pt-24">
          {/* Hero */}
          <section className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-5xl lg:text-[3.25rem]">
              <span className={grayText}>Pricing built around</span>
              <br />
              <span className={goldText}>what</span>{" "}
              <span className={goldText}>merchants</span>
              <br />
              <span className={goldText}>actually need.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
              We&apos;re starting with a limited beta so we can learn
              <br />
              which features provide the most value before
              <br />
              introducing paid plans.
            </p>
          </section>

          {/* Shopify callout */}
          <section className="mx-auto mt-12 flex max-w-lg flex-col items-center text-center sm:mt-14">
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-2 mx-auto h-16 w-40 rounded-full bg-amber-400/25 blur-2xl"
                aria-hidden
              />
              <Image
                src="/images/shopify-bag-transparent.png"
                alt="Shopify"
                width={200}
                height={200}
                className="relative h-40 w-auto object-contain sm:h-48"
                priority
              />
            </div>
            <p className="mt-5 text-xl font-semibold text-slate-50 sm:text-2xl">
              Built for{" "}
              <span className="text-[#95BF47]">Shopify.</span>
            </p>
            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              One store. Full visibility. No more blind spots.
            </p>
          </section>

          {/* Value pillars */}
          <section className="mx-auto mt-12 max-w-4xl sm:mt-14">
            <div className="rounded-2xl border border-amber-400/25 bg-white/[0.02]">
              <div className="grid grid-cols-1 divide-y divide-amber-400/20 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
                {pillars.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-center px-4 py-6 text-center sm:px-3 sm:py-7"
                  >
                    <span className="text-amber-300">{item.icon}</span>
                    <h2 className="mt-3 text-base font-semibold text-slate-50">
                      {item.title}
                    </h2>
                    <p className="mt-1.5 max-w-[12rem] text-sm leading-relaxed text-slate-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA banner */}
          <section className="mx-auto mt-8 max-w-4xl sm:mt-10">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-amber-400/25 bg-white/[0.02] px-5 py-6 text-center shadow-[0_0_60px_rgba(251,191,36,0.06)] sm:flex-row sm:justify-between sm:gap-6 sm:px-7 sm:py-7 sm:text-left">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center text-amber-300 sm:h-14 sm:w-14">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth={1.4}
                    stroke="currentColor"
                    className="h-9 w-9 sm:h-10 sm:w-10"
                    aria-hidden
                  >
                    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
                    <path strokeLinecap="round" d="M8 3.5v3M16 3.5v3M3.5 10h17" />
                    <circle cx="16.5" cy="15.5" r="2.5" />
                    <path strokeLinecap="round" d="M16.5 14.3v1.5l1 0.7" />
                  </svg>
                </span>
                <div>
                  <p className="text-lg font-semibold text-slate-50 sm:text-xl">Join the Beta</p>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-slate-400">
                    Be the first to experience DarkShepherd and help us build the
                    tools that protect your business.
                  </p>
                </div>
              </div>
              <CalendlyScheduleButton className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_8px_22px_rgba(251,191,36,0.2)] transition hover:brightness-110">
                Join the Beta
                <span aria-hidden>→</span>
              </CalendlyScheduleButton>
            </div>
          </section>

          {/* Disclaimer */}
          <p className="mb-16 mt-8 flex items-center justify-center gap-2 text-center text-xs text-slate-500 sm:mb-20 sm:text-sm">
            <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-amber-400/45 text-[10px] font-semibold text-amber-300">
              i
            </span>
            Beta participants will receive advance notice before paid plans are introduced.
          </p>
        </SiteContainer>
      </div>

      <PawScrollButton
        href="/faq"
        ariaLabel="Go to FAQ"
        position="higher"
        mode="fixed"
        bottomOverrideClassName="bottom-4 sm:bottom-5 lg:bottom-6"
      />
      <ScrollToNextPage prevHref="/integrations" nextHref="/faq" />
    </div>
  );
}

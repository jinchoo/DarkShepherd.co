import { PawScrollButton } from "@/components/PawScrollButton";
import { SmoothLink } from "@/components/SmoothLink";
import {
  InternalBackLinkRow,
  InternalPageShell,
} from "@/components/layout/InternalPageShell";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteMain } from "@/components/layout/SiteMain";
import { marketingEyebrowStyle, marketingShopifyAccentStyle } from "@/lib/marketing-styles";

export default function HowItWorksPage() {
  return (
    <div className="font-display relative min-h-screen bg-[#050816] text-slate-100">
      <SiteBackground />
      <SiteHeader />
      <SiteMain internal>
        <InternalPageShell variant="wide">
          <InternalBackLinkRow>
            <SmoothLink
              href="/what-we-check"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300/85 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
            >
              ↑ Back to What We Check
            </SmoothLink>
          </InternalBackLinkRow>

          <div className="how-it-works-section flex w-full flex-col gap-10 sm:gap-12 md:gap-16 lg:gap-18">
            <div className="flex w-full flex-col items-center gap-5 text-center sm:gap-7 md:gap-8">
              <p>
                <span
                  className="inline-block text-xl font-semibold uppercase tracking-[0.22em] sm:text-2xl md:text-3xl md:tracking-[0.28em]"
                  style={marketingEyebrowStyle}
                >
                  How It Works
                </span>
              </p>
              <h1 className="max-w-5xl text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                  A simple, read-only review{" "}
                </span>
                <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                  of your{" "}
                </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={marketingShopifyAccentStyle}
                >
                  Shopify App
                </span>
                <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                  {" "}
                  access
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/72 sm:text-lg sm:leading-[1.7] md:text-xl">
                DarkShepherd helps you see which third-party apps can access store,
                customer, and order data—so you can reduce risk without disrupting your
                operations.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8 lg:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-lg font-semibold text-slate-950">
                  1
                </div>
                <h2 className="mt-5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-xl font-semibold text-transparent sm:mt-6 sm:text-2xl">
                  Schedule a Review
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base sm:leading-[1.7]">
                  Book a short guided session so we can walk through your Shopify app
                  environment together.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8 lg:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-lg font-semibold text-slate-950">
                  2
                </div>
                <h2 className="mt-5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-xl font-semibold text-transparent sm:mt-6 sm:text-2xl">
                  Review App Access
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base sm:leading-[1.7]">
                  We examine installed apps, active permissions, outdated connections, and
                  access patterns that may expose store data.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8 lg:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-lg font-semibold text-slate-950">
                  3
                </div>
                <h2 className="mt-5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-xl font-semibold text-transparent sm:mt-6 sm:text-2xl">
                  Get a Clear Risk Summary
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base sm:leading-[1.7]">
                  Receive practical next steps on what to keep, what to question, and what
                  may need cleanup.
                </p>
              </div>
            </div>

            <p className="text-center text-sm text-white/55 sm:text-[15px]">
              Read-only process. No changes made without your approval.
            </p>
          </div>
        </InternalPageShell>

        <PawScrollButton href="/pricing" ariaLabel="Go to Pricing" />
      </SiteMain>
    </div>
  );
}

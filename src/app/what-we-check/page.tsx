import { PawScrollButton } from "@/components/PawScrollButton";
import { SmoothLink } from "@/components/SmoothLink";
import {
  InternalBackLinkRow,
  InternalPageShell,
} from "@/components/layout/InternalPageShell";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteMain } from "@/components/layout/SiteMain";
import { marketingEyebrowStyle } from "@/lib/marketing-styles";

export default function WhatWeCheckPage() {
  return (
    <div className="font-display relative bg-[#050816] text-slate-100">
      <SiteBackground />
      <SiteHeader />
      <SiteMain internal>
        <InternalPageShell variant="wide">
          <InternalBackLinkRow>
            <SmoothLink
              href="/why-it-matters"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300/85 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
            >
              ↑ Back to Why It Matters
            </SmoothLink>
          </InternalBackLinkRow>

          <div className="flex w-full flex-col gap-12 md:gap-16 lg:gap-20">
            <div className="flex w-full flex-col items-center gap-6 text-center sm:gap-8 md:gap-10">
              <p>
                <span
                  className="inline-block text-xl font-semibold uppercase tracking-[0.22em] sm:text-2xl md:text-3xl md:tracking-[0.28em]"
                  style={marketingEyebrowStyle}
                >
                  What We Check
                </span>
              </p>
              <h1 className="text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] xl:leading-[1.08]">
                <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                  We review how apps touch{" "}
                </span>
                <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                  your{" "}
                </span>
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Shopify
                </span>
                <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                  {" "}
                  store&apos;s data
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/72 sm:text-lg sm:leading-[1.7] md:text-xl">
                We analyze where app access creates unnecessary risk across your store.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10 xl:gap-12">
              <div className="min-h-0 rounded-3xl border border-white/15 bg-white/[0.05] px-6 py-7 text-left backdrop-blur-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
                <h2 className="text-xl font-semibold sm:text-2xl lg:text-[1.35rem] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                  App Permissions &amp; Data Access
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base sm:leading-[1.7] lg:text-[1.05rem]">
                  We identify what each app can access, including customer data, order
                  history, and store settings.
                </p>
              </div>

              <div className="min-h-0 rounded-3xl border border-white/15 bg-white/[0.05] px-6 py-7 text-left backdrop-blur-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
                <h2 className="text-xl font-semibold sm:text-2xl lg:text-[1.35rem] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                  Unused &amp; Overprivileged Apps
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base sm:leading-[1.7] lg:text-[1.05rem]">
                  We flag apps that are no longer in use or have more access than
                  necessary.
                </p>
              </div>

              <div className="min-h-0 rounded-3xl border border-white/15 bg-white/[0.05] px-6 py-7 text-left backdrop-blur-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
                <h2 className="text-xl font-semibold sm:text-2xl lg:text-[1.35rem] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                  Sensitive Data Exposure
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base sm:leading-[1.7] lg:text-[1.05rem]">
                  We highlight apps with access to sensitive data that could increase risk
                  if misused or compromised.
                </p>
              </div>

              <div className="min-h-0 rounded-3xl border border-white/15 bg-white/[0.05] px-6 py-7 text-left backdrop-blur-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
                <h2 className="text-xl font-semibold sm:text-2xl lg:text-[1.35rem] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                  App Overlap &amp; Redundancy
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-white/70 sm:mt-6 sm:text-base sm:leading-[1.7] lg:text-[1.05rem]">
                  We uncover overlapping apps that duplicate functionality and expand your
                  attack surface.
                </p>
              </div>
            </div>
          </div>
        </InternalPageShell>

        <PawScrollButton href="/how-it-works" ariaLabel="Go to How it Works" />
      </SiteMain>
    </div>
  );
}

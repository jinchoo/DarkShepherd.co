import { PawScrollButton } from "@/components/PawScrollButton";
import { SmoothLink } from "@/components/SmoothLink";
import { CalendlyScheduleButton } from "@/components/CalendlyScheduleButton";
import {
  InternalBackLinkRow,
  InternalPageShell,
} from "@/components/layout/InternalPageShell";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteMain } from "@/components/layout/SiteMain";
import { marketingEyebrowStyle } from "@/lib/marketing-styles";

/**
 * Pricing: narrow shell (760px), flex + gap rhythm — anchored from top, no full-viewport centering.
 */
export default function PricingPage() {
  return (
    <div className="font-display relative flex min-h-[100dvh] flex-col bg-[#050816] text-slate-100">
      <SiteBackground />
      <SiteHeader />
      <SiteMain internal className="flex min-h-0 flex-1 flex-col">
        <InternalPageShell
          variant="narrow"
          className="flex min-h-[calc(100dvh-4.25rem)] flex-1 justify-start pt-0 pb-0 sm:min-h-[calc(100dvh-4.75rem)]"
          contentClassName="flex min-h-0 flex-1 flex-col"
        >
          <InternalBackLinkRow>
            <SmoothLink
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300/85 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
            >
              ↑ Back to How It Works
            </SmoothLink>
          </InternalBackLinkRow>

          <section
            className="flex w-full min-h-[100dvh] min-w-0 flex-1 items-start"
            aria-labelledby="pricing-heading"
          >
            <div className="flex w-full min-w-0 flex-col items-center gap-8 pt-20 pb-20 text-center sm:gap-10 sm:pt-24 sm:pb-20 md:pt-28 lg:gap-12 lg:pt-32 lg:pb-24">
              <div className="flex w-full flex-col items-center gap-5 sm:gap-6">
                <div className="flex w-full flex-col items-center gap-4 sm:gap-5">
                  <p>
                    <span
                      className="inline-block text-xl font-semibold uppercase tracking-[0.22em] sm:text-2xl md:text-3xl md:tracking-[0.28em]"
                      style={marketingEyebrowStyle}
                    >
                      Pricing
                    </span>
                  </p>
                  <h1
                    id="pricing-heading"
                    className="text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl"
                  >
                    <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                      Pricing for your{" "}
                    </span>
                    <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                      Shopify App
                    </span>{" "}
                    <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                      stack
                    </span>
                  </h1>
                </div>
                <div className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:gap-4 text-center text-base leading-relaxed text-white/72 sm:text-lg sm:leading-[1.75]">
                  <p>
                    Every Shopify store is different. Pricing depends on your app stack,
                    integrations, and the level of review required.
                  </p>
                  <p>
                    We start with a guided security review to understand how apps are
                    currently accessing your store data.
                  </p>
                </div>
              </div>

              <div className="flex w-full max-w-xl flex-col items-stretch gap-8 sm:gap-10">
                <ul className="flex w-full flex-col gap-3 sm:gap-4 text-left text-base leading-relaxed text-white/80 sm:text-lg sm:leading-[1.8]">
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-xs leading-none text-transparent"
                      aria-hidden
                    >
                      🐾
                    </span>
                    <span>App permissions and data access review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-xs leading-none text-transparent"
                      aria-hidden
                    >
                      🐾
                    </span>
                    <span>Identification of unnecessary or excessive access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-xs leading-none text-transparent"
                      aria-hidden
                    >
                      🐾
                    </span>
                    <span>Detection of outdated or redundant apps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-xs leading-none text-transparent"
                      aria-hidden
                    >
                      🐾
                    </span>
                    <span>Clear, actionable risk summary</span>
                  </li>
                </ul>

                <div className="flex w-full flex-col items-center gap-6 sm:gap-8">
                  <p className="max-w-xl text-base leading-relaxed text-white/72 sm:text-lg sm:leading-[1.75]">
                    After the review, we’ll recommend next steps and pricing if ongoing
                    protection is still needed for your store.
                  </p>
                  <div className="flex w-full flex-col items-center gap-3 sm:gap-4">
                    <CalendlyScheduleButton className="inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-6 py-3 text-center text-base font-semibold text-slate-950 shadow-[0_12px_30px_rgba(251,191,36,0.45)] transition hover:brightness-110 sm:w-auto sm:px-8 sm:py-4">
                      Schedule Review
                    </CalendlyScheduleButton>
                    <p className="max-w-md text-sm leading-relaxed text-white/60">
                      Read-only review. No changes are made without your approval.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </InternalPageShell>

        <PawScrollButton href="/faq" ariaLabel="Go to FAQ" visibilityMode="always" />
      </SiteMain>
    </div>
  );
}

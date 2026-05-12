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

export default function WhyItMattersPage() {
  return (
    <div className="font-display relative bg-[#050816] text-slate-100">
      <SiteBackground />
      <SiteHeader />
      <SiteMain internal>
        <InternalPageShell variant="narrow">
          <InternalBackLinkRow>
            <SmoothLink
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300/85 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
            >
              <span aria-hidden className="text-base">
                ↑
              </span>
              <span>Back to Home</span>
            </SmoothLink>
          </InternalBackLinkRow>

          <div className="flex w-full flex-col gap-10 sm:gap-12 lg:gap-14">
            <div className="flex w-full flex-col items-center gap-5 text-center sm:gap-7">
              <p>
                <span
                  className="inline-block text-xl font-semibold uppercase tracking-[0.22em] sm:text-2xl md:text-3xl md:tracking-[0.28em]"
                  style={marketingEyebrowStyle}
                >
                  Why It Matters
                </span>
              </p>
              <div className="mx-auto flex w-full max-w-xl flex-col gap-4 text-base leading-relaxed text-white/72 sm:gap-5 sm:text-lg sm:leading-[1.75] md:text-xl">
                <p>
                  Most Shopify stores rely on multiple third-party apps to run marketing,
                  subscriptions, analytics, and operations.
                </p>
                <p>
                  Over time, many of these apps continue to retain access to your store’s
                  data — even when they’re no longer actively used.
                </p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xl">
              <ul className="flex w-full flex-col gap-3 text-left text-base leading-relaxed text-white/80 sm:gap-4 sm:text-lg sm:leading-[1.8] md:text-xl">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-xs leading-none text-transparent"
                    aria-hidden
                  >
                    🐾
                  </span>
                  <span>Customer data (PII)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-xs leading-none text-transparent"
                    aria-hidden
                  >
                    🐾
                  </span>
                  <span>Order history</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-xs leading-none text-transparent"
                    aria-hidden
                  >
                    🐾
                  </span>
                  <span>Product and inventory data</span>
                </li>
              </ul>
            </div>

            <div className="mx-auto flex w-full max-w-xl flex-col gap-4 text-center text-base leading-relaxed text-white/72 sm:gap-5 sm:text-lg sm:leading-[1.75] md:text-xl">
              <p>In many cases, apps have broader access than necessary.</p>
              <p>
                Without regular review, this creates unnecessary exposure and potential
                risk.
              </p>
              <p className="font-semibold text-white/90">
                Most Shopify stores we review have more app access than expected.
              </p>
            </div>
          </div>
        </InternalPageShell>

        <PawScrollButton
          href="/what-we-check"
          ariaLabel="Go to What We Check"
          position="higher"
          mode="fixed"
          bottomOverrideClassName="bottom-4 sm:bottom-5 lg:bottom-6"
        />
      </SiteMain>
    </div>
  );
}

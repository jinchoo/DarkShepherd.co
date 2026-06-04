import type { Metadata } from "next";
import { SmoothLink } from "@/components/SmoothLink";
import {
  InternalBackLinkRow,
  InternalPageShell,
} from "@/components/layout/InternalPageShell";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteMain } from "@/components/layout/SiteMain";
import { marketingEyebrowStyle } from "@/lib/marketing-styles";

export const metadata: Metadata = {
  title: "Cookie Policy | DarkShepherd",
  description:
    "How DarkShepherd uses cookies and similar technologies, and how you can manage them.",
};

export default function CookiePolicyPage() {
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

          <article className="flex w-full flex-col gap-8 text-left">
            <header className="flex flex-col gap-3">
              <span
                className="inline-block text-xl font-semibold uppercase tracking-[0.18em] sm:text-2xl md:text-3xl md:tracking-[0.22em]"
                style={marketingEyebrowStyle}
              >
                Cookie Policy
              </span>
              <p className="text-sm text-white/55">
                Effective Date: March 18, 2026
              </p>
            </header>

            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
              DarkShepherd uses cookies and similar technologies to improve
              website functionality and understand how visitors interact with our
              website.
            </p>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                What Are Cookies
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                Cookies are small text files stored on your device when you visit
                a website.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Types of Cookies We Use
              </h2>

              <div className="flex flex-col gap-2">
                <h3
                  className="text-base font-semibold"
                  style={marketingEyebrowStyle}
                >
                  Essential Cookies
                </h3>
                <p className="text-base leading-relaxed text-white/75">
                  Required for website functionality and security.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3
                  className="text-base font-semibold"
                  style={marketingEyebrowStyle}
                >
                  Analytics Cookies
                </h3>
                <p className="text-base leading-relaxed text-white/75">
                  Help us understand website usage and improve user experience.
                </p>
                <p className="text-base leading-relaxed text-white/75">
                  Examples may include:
                </p>
                <ul className="flex flex-col gap-2 pl-1 text-base leading-relaxed text-white/75">
                  {["Google Analytics", "Website performance monitoring tools"].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400"
                        />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h3
                  className="text-base font-semibold"
                  style={marketingEyebrowStyle}
                >
                  Marketing Cookies
                </h3>
                <p className="text-base leading-relaxed text-white/75">
                  May be used to measure the effectiveness of marketing campaigns
                  and understand visitor engagement.
                </p>
                <p className="text-base leading-relaxed text-white/75">
                  Examples may include:
                </p>
                <ul className="flex flex-col gap-2 pl-1 text-base leading-relaxed text-white/75">
                  {["LinkedIn Insight Tag", "Meta Pixel"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Managing Cookies
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                You may control cookies through your browser settings. Disabling
                certain cookies may affect website functionality.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Updates
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                We may update this Cookie Policy periodically. Any updates will be
                reflected on this page.
              </p>
            </section>
          </article>
        </InternalPageShell>
      </SiteMain>

      <SiteFooter />
    </div>
  );
}

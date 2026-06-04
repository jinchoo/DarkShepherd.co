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
  title: "Privacy Policy | DarkShepherd",
  description:
    "How DarkShepherd collects, uses, and protects the information you share with us.",
};

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </span>
              <p className="text-sm text-white/55">
                Effective Date: March 18, 2026
              </p>
            </header>

            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
              DarkShepherd (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              respects your privacy and is committed to protecting the
              information you share with us.
            </p>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Information We Collect
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                We may collect information including:
              </p>
              <ul className="flex flex-col gap-2 pl-1 text-base leading-relaxed text-white/75">
                {[
                  "Name",
                  "Email address",
                  "Company name",
                  "Website URL",
                  "Information submitted through contact forms",
                  "Scheduling information provided through Calendly",
                  "Website usage data through analytics tools",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                How We Use Information
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                We use collected information to:
              </p>
              <ul className="flex flex-col gap-2 pl-1 text-base leading-relaxed text-white/75">
                {[
                  "Respond to inquiries",
                  "Schedule consultations",
                  "Improve our website and services",
                  "Analyze website performance",
                  "Communicate with prospective customers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Analytics and Tracking
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                We may use analytics and tracking technologies including:
              </p>
              <ul className="flex flex-col gap-2 pl-1 text-base leading-relaxed text-white/75">
                {[
                  "Google Analytics",
                  "LinkedIn Insight Tag",
                  "Website performance tools",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base leading-relaxed text-white/75">
                These services may collect information regarding your interaction
                with our website.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Information Sharing
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                We do not sell personal information.
              </p>
              <p className="text-base leading-relaxed text-white/75">
                We may share information with trusted service providers necessary
                to operate our business, including scheduling, analytics, website
                hosting, and email communication services.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Data Security
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                We implement reasonable security measures designed to protect
                information from unauthorized access, disclosure, or misuse.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Your Rights
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                Depending on your location, you may have rights regarding access,
                correction, deletion, or restriction of your personal
                information.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Contact
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                Questions regarding this Privacy Policy may be directed to:{" "}
                <a
                  href="mailto:jin@darkshepherd.co"
                  className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text font-medium text-transparent underline-offset-2 hover:underline"
                >
                  jin@darkshepherd.co
                </a>
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Changes
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                We may update this Privacy Policy periodically. Updates will be
                posted on this page with a revised effective date.
              </p>
            </section>
          </article>
        </InternalPageShell>
      </SiteMain>

      <SiteFooter />
    </div>
  );
}

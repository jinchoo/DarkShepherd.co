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
  title: "Terms of Service | DarkShepherd",
  description:
    "The terms that govern your use of the DarkShepherd website, services, newsletter, and content.",
};

export default function TermsOfServicePage() {
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
                Terms of Service
              </span>
              <p className="text-sm text-white/55">
                Effective Date: March 18, 2026
              </p>
            </header>

            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
              Welcome to DarkShepherd (&quot;Company,&quot; &quot;we,&quot;
              &quot;our,&quot; or &quot;us&quot;). By accessing or using our
              website, services, newsletter, or content, you agree to these Terms
              of Service.
            </p>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Use of Website
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                You may use this website for lawful purposes only. You agree not
                to misuse, interfere with, or attempt unauthorized access to our
                systems, website, or services.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Intellectual Property
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                All content on this website, including text, graphics, logos,
                branding, and educational materials, is the property of
                DarkShepherd unless otherwise stated.
              </p>
              <p className="text-base leading-relaxed text-white/75">
                You may not reproduce, distribute, or modify content without
                prior written permission.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Newsletter
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                By subscribing to DarkShepherd Dispatch, you consent to receive
                emails, newsletters, updates, and educational content from
                DarkShepherd.
              </p>
              <p className="text-base leading-relaxed text-white/75">
                You may unsubscribe at any time using the unsubscribe link
                included in our emails.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Informational Purposes Only
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                Content provided by DarkShepherd is intended for informational
                and educational purposes only.
              </p>
              <p className="text-base leading-relaxed text-white/75">
                Information provided through our website, newsletter, blog posts,
                reports, or communications should not be considered legal,
                financial, compliance, or professional advice.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                No Guarantees
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                While we strive to provide accurate information and insights, we
                make no guarantees regarding:
              </p>
              <ul className="flex flex-col gap-2 pl-1 text-base leading-relaxed text-white/75">
                {[
                  "Accuracy",
                  "Completeness",
                  "Availability",
                  "Results from implementing recommendations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-400"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base leading-relaxed text-white/75">
                Use of our content and services is at your own risk.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Limitation of Liability
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                To the fullest extent permitted by law, DarkShepherd shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from the use of our website, newsletter,
                content, or services.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Third-Party Services
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                Our website may contain links to third-party websites, services,
                or platforms. We are not responsible for the content, policies,
                or practices of third parties.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Changes to These Terms
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                We may update these Terms of Service from time to time. Updates
                will become effective upon posting to this page.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
                Contact Information
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                Questions regarding these Terms may be directed to:{" "}
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
                Governing Law
              </h2>
              <p className="text-base leading-relaxed text-white/75">
                These Terms shall be governed by and interpreted in accordance
                with the laws of the State of Texas, without regard to conflict
                of law principles.
              </p>
            </section>
          </article>
        </InternalPageShell>
      </SiteMain>

      <SiteFooter />
    </div>
  );
}

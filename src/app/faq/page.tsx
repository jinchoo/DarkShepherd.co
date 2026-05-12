import type { ReactNode } from "react";
import { SmoothLink } from "@/components/SmoothLink";
import {
  InternalBackLinkRow,
  InternalPageShell,
} from "@/components/layout/InternalPageShell";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteMain } from "@/components/layout/SiteMain";
import { marketingEyebrowStyle } from "@/lib/marketing-styles";

type FAQItem = {
  question: string;
  answer: ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: "What happens during the security review?",
    answer:
      "We walk through your Shopify store together and review which apps have access to your data. You’ll get a clear understanding of what each app can access and where there may be unnecessary or excessive permissions.",
  },
  {
    question: "Will you make any changes to my store?",
    answer:
      "No. This is a read-only review. We do not make any changes without your approval.",
  },
  {
    question: "How long does the review take?",
    answer:
      "The guided session takes about 20 minutes. After the review, you’ll receive a clear summary of any risks and recommended next steps.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No installation is required. We simply review your existing app setup together.",
  },
  {
    question: "What kind of risks do you typically find?",
    answer:
      "Most commonly, we find apps with broader access than necessary, unused apps that still retain permissions, and overlapping tools that create unnecessary exposure.",
  },
  {
    question: "Is this only for Shopify Plus stores?",
    answer:
      "No. This applies to any Shopify store using third-party apps.",
  },
  {
    question: "What happens after the review?",
    answer:
      "After the review, we’ll provide a clear risk summary and, if needed, recommend next steps or ongoing monitoring options.",
  },
  {
    question: "Why is this important?",
    answer:
      "Many stores don’t realize how much access third-party apps retain over time. Without regular review, this can lead to unnecessary data exposure and potential security risks.",
  },
  {
    question: "How can I contact DarkShepherd?",
    answer: (
      <>
        You can reach us at{" "}
        <a
          href="mailto:jin@darkshepherd.co"
          className="font-semibold no-underline bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent transition-colors hover:brightness-110"
        >
          jin@darkshepherd.co
        </a>{" "}
        or schedule a review directly through the site.
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <div className="font-display relative bg-[#050816] text-slate-100">
      <SiteBackground />
      <SiteHeader />
      <SiteMain internal>
        <InternalPageShell variant="medium">
          <InternalBackLinkRow>
            <SmoothLink
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300/85 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
            >
              <span aria-hidden className="text-base">
                ↑
              </span>
              <span>Back to Pricing</span>
            </SmoothLink>
          </InternalBackLinkRow>

          <div className="flex w-full flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
            <div className="mx-auto max-w-2xl text-center">
              <p>
                <span
                  className="inline-block text-balance text-xl font-semibold uppercase tracking-[0.18em] sm:text-2xl md:text-3xl md:tracking-[0.24em]"
                  style={marketingEyebrowStyle}
                >
                  Frequently Asked Questions
                </span>
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:gap-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-4 text-left backdrop-blur-sm sm:px-6 sm:py-5 md:px-7"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-semibold sm:text-[17px] [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0 flex-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                      {item.question}
                    </span>
                    <span
                      className="mt-0.5 shrink-0 text-amber-300 transition group-open:rotate-180"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <div className="mt-3.5 text-sm leading-relaxed text-white/75 sm:text-base sm:leading-[1.7]">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </InternalPageShell>
      </SiteMain>
    </div>
  );
}

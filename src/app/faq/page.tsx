import Link from "next/link";
import type { ReactNode } from "react";
import { SmoothLink } from "@/components/SmoothLink";

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
    answer:
      <>
        You can reach us at{" "}
        <a
          href="mailto:jin@darkshepherd.co"
          className="no-underline bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent font-semibold transition-colors hover:brightness-110"
        >
          jin@darkshepherd.co
        </a>{" "}
        or schedule a review directly through the site.
      </>,
  },
];

export default function FAQPage() {
  return (
    <div className="font-display relative min-h-screen overflow-visible bg-[#050816] text-slate-100">
      <div
        className="pointer-events-none fixed inset-0 z-0 min-h-screen min-w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/darkshepherd-background.png)" }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-[1] min-h-screen min-w-full"
        style={{
          background:
            "radial-gradient(circle at left center, rgba(5,8,22,0.96) 0%, rgba(5,8,22,0.9) 40%, rgba(5,8,22,0.8) 70%, rgba(5,8,22,0.75) 100%)",
        }}
        aria-hidden
      />

      <header className="sticky top-2 z-50 h-[72px] w-full bg-transparent">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:max-w-7xl lg:px-12">
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <img
                src="/images/darkshepherd-shield.png"
                alt="DarkShepherd"
                className="-mt-4 h-[68px] w-auto object-contain drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]"
              />
              <span
                className="font-display text-[20px] bg-clip-text text-transparent"
                style={{
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  background: "linear-gradient(90deg, #FFC857, #FFB200, #FFD36A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                DarkShepherd
              </span>
            </div>
          </Link>

          <nav className="font-display hidden items-center gap-8 text-base font-semibold text-slate-200/80 md:flex">
            <Link
              href="/why-it-matters"
              className="text-slate-200/80 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
            >
              Why It Matters
            </Link>
            <Link
              href="/what-we-check"
              className="text-slate-200/80 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
            >
              What We Check
            </Link>
            <Link
              href="/how-it-works"
              className="text-slate-200/80 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
            >
              How it Works
            </Link>
            <Link
              href="/pricing"
              className="text-slate-200/80 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-slate-200/80 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
            >
              FAQ
            </Link>
            <div className="rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 p-[2px]">
              <button className="font-display w-full rounded-full bg-[#050816] px-5 py-2 text-sm font-semibold uppercase tracking-wide text-amber-100/90 transition hover:bg-[#0a0f1a] hover:text-amber-50">
                Login
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-5xl flex-col px-6 pb-24 pt-20 sm:px-8 lg:px-0">
        <div className="mx-auto mb-4 flex w-full max-w-2xl justify-center text-sm text-slate-300/85">
          <SmoothLink
            href="/pricing"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-300/85 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
          >
            <span className="text-[16px]">↑</span>
            <span>Back to Pricing</span>
          </SmoothLink>
        </div>

        <div className="mx-auto max-w-2xl text-center mt-20">
          <p className="text-center">
            <span
              className="inline-block text-2xl font-semibold uppercase tracking-[0.28em] md:text-3xl"
              style={{
                background: "linear-gradient(90deg, #FFD36A, #FFB200, #FFD36A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Frequently Asked Questions
            </span>
          </p>
        </div>

        <section className="mx-auto mt-10 w-full max-w-3xl space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-4 text-left backdrop-blur-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[17px] font-semibold">
                <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                  {item.question}
                </span>
                <span className="text-amber-300 transition group-open:rotate-180">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[16px] leading-relaxed text-white/75">
                {item.answer}
              </p>
            </details>
          ))}
        </section>
      </main>
    </div>
  );
}


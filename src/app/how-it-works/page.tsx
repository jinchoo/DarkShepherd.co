import Link from "next/link";
import { PawScrollButton } from "@/components/PawScrollButton";
import { SmoothLink } from "@/components/SmoothLink";

export default function HowItWorksPage() {
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

      <section className="relative z-10 mx-auto max-w-[1380px] px-8 pb-24 pt-12 md:px-12">
        <div className="mx-auto mb-8 flex max-w-[760px] justify-center">
          <SmoothLink
            href="/what-we-check"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300/85 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
          >
            ↑ Back to What We Check
          </SmoothLink>
        </div>
        <div className="mx-auto mt-10 max-w-[760px] text-center md:mt-18">
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
              How It Works
            </span>
          </p>
          <h1 className="mt-4 text-[44px] font-semibold tracking-[-0.03em] md:text-[60px]">
            <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">A simple, read-only review </span>
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">of your </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(90deg, #FFC857, #FFB200, #FFD36A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Shopify App
            </span>
            <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent"> access</span>
          </h1>
          <p className="mt-4 text-[18px] leading-[1.7] text-white/72">
            DarkShepherd helps you see which third-party apps can access store, customer,
            and order data—so you can reduce risk without disrupting your{"\u00A0"}operations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-[18px] font-semibold text-slate-950">
              1
            </div>
            <h2 className="mt-6 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-[24px] font-semibold text-transparent">
              Schedule a Review
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-white/70">
              Book a short guided session so we can walk{"\u00A0"}through your Shopify{"\u00A0"}app environment{"\u00A0"}together.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-[18px] font-semibold text-slate-950">
              2
            </div>
            <h2 className="mt-6 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-[24px] font-semibold text-transparent">
              Review App Access
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-white/70">
              We examine installed apps, active permissions, outdated connections, and
              access patterns that may expose store{"\u00A0"}data.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-[18px] font-semibold text-slate-950">
              3
            </div>
            <h2 className="mt-6 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-[24px] font-semibold text-transparent">
              Get a Clear Risk Summary
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-white/70">
              Receive practical next steps on what to keep, what to question, and what
              may need{"\u00A0"}cleanup.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-[15px] text-white/55">
          Read-only process. No changes made without your{"\u00A0"}approval.
        </p>
        <PawScrollButton href="/pricing" ariaLabel="Go to Pricing" />
      </section>
    </div>
  );
}

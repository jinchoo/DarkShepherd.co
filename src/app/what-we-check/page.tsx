import Link from "next/link";
import { PawScrollButton } from "@/components/PawScrollButton";
import { SmoothLink } from "@/components/SmoothLink";

export default function WhatWeCheckPage() {
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
            href="/why-it-matters"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300/85 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
          >
            ↑ Back to Why It Matters
          </SmoothLink>
        </div>

        <div className="mx-auto mt-8 max-w-[820px] text-center md:mt-14">
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
              What We Check
            </span>
          </p>
          <h1 className="mt-4 text-[44px] font-semibold tracking-[-0.03em] md:text-[60px]">
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
          <p className="mt-5 text-[18px] leading-[1.7] text-white/72">
            We analyze where app access creates unnecessary risk across your store.
          </p>
        </div>

        <div className="mt-16 mx-auto grid w-full max-w-[920px] grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-[24px] border border-white/15 bg-white/[0.05] px-7 pt-8 pb-4 text-left backdrop-blur-sm min-h-[190px]">
            <h2 className="text-[24px] font-semibold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              App Permissions &amp; Data Access
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-white/70">
              We identify what each app can access, including customer data, order history,
              and store settings.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/15 bg-white/[0.05] px-7 pt-8 pb-4 text-left backdrop-blur-sm min-h-[190px]">
            <h2 className="text-[24px] font-semibold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              Unused &amp; Overprivileged Apps
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-white/70">
              We flag apps that are no longer in use or have more access than necessary.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/15 bg-white/[0.05] px-7 pt-8 pb-4 text-left backdrop-blur-sm min-h-[190px]">
            <h2 className="text-[24px] font-semibold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              Sensitive Data Exposure
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-white/70">
              We highlight apps with access to sensitive data that could increase risk if
              misused or compromised.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/15 bg-white/[0.05] px-7 pt-8 pb-4 text-left backdrop-blur-sm min-h-[190px]">
            <h2 className="text-[24px] font-semibold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              App Overlap &amp; Redundancy
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-white/70">
              We uncover overlapping apps that duplicate functionality and expand your attack
              surface.
            </p>
          </div>
        </div>

        <PawScrollButton href="/how-it-works" ariaLabel="Go to How it Works" />
      </section>
    </div>
  );
}


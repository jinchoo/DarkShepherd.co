import { PawScrollButton } from "@/components/PawScrollButton";
import { SmoothLink } from "@/components/SmoothLink";
import Link from "next/link";

export default function WhyItMattersPage() {
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

      <main className="relative z-10 mx-auto flex max-w-5xl flex-col px-6 pb-24 pt-12 sm:px-8 lg:px-0">
        <div className="mx-auto mb-2 flex w-full max-w-2xl justify-center text-sm text-slate-300/85">
          <SmoothLink
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-300/85 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
          >
            <span className="text-[16px]">↑</span>
            <span>Back to Home</span>
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
              Why It Matters
            </span>
          </p>
          <p className="mt-8 text-[22px] leading-[1.7] text-white/72">
            Most Shopify stores rely on multiple third-party apps to run marketing,
            subscriptions, analytics, and operations.
          </p>
          <p className="mt-3 text-[22px] leading-[1.7] text-white/72">
            Over time, many of these apps continue to retain access to your store’s data —
            even when they’re no longer actively used.
          </p>
        </div>

        <section className="mx-auto mt-6 w-full max-w-[700px]">
          <ul className="mx-auto space-y-2 text-[20px] leading-[1.8] text-white/80 text-left max-w-[640px]">
            <li className="flex items-start gap-3 pl-0">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center text-[14px] bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                🐾
              </span>
              <span>Customer data (PII)</span>
            </li>
            <li className="flex items-start gap-3 pl-0">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center text-[14px] bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                🐾
              </span>
              <span>Order history</span>
            </li>
            <li className="flex items-start gap-3 pl-0">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center text-[14px] bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                🐾
              </span>
              <span>Product and inventory data</span>
            </li>
          </ul>

          <p className="mt-4 text-[22px] leading-[1.7] text-white/72 text-center max-w-2xl mx-auto">
            In many cases, apps have broader access than necessary.
          </p>
          <p className="mt-2 text-[22px] leading-[1.7] text-white/72 text-center max-w-2xl mx-auto">
            Without regular review, this creates unnecessary exposure and potential risk.
          </p>
          <p className="mt-2 text-[22px] leading-[1.7] text-white/90 font-semibold text-center max-w-2xl mx-auto">
            Most Shopify stores we review have more app access than{"\u00A0"}expected.
          </p>
        </section>

        <PawScrollButton
          href="/what-we-check"
          ariaLabel="Go to What We Check"
          position="higher"
        />
      </main>
    </div>
  );
}


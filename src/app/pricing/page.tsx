import Link from "next/link";
import { PawScrollButton } from "@/components/PawScrollButton";
import { SmoothLink } from "@/components/SmoothLink";
import { CalendlyScheduleButton } from "@/components/CalendlyScheduleButton";

export default function PricingPage() {
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
        <div className="mx-auto -mt-10 mb-6 flex w-full max-w-2xl justify-center">
          <SmoothLink
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300/85 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
          >
            ↑ Back to How It Works
          </SmoothLink>
        </div>

        <div className="mx-auto mt-5 max-w-2xl text-center md:mt-7">
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
              Pricing
            </span>
          </p>
          <h1 className="mt-4 text-left -translate-x-[6.25rem] text-[44px] font-semibold tracking-[-0.03em] md:text-[60px] whitespace-nowrap">
            <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              Pricing for your{" "}
            </span>
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Shopify
            </span>{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              App
            </span>{" "}
            <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              stack
            </span>
          </h1>
          <p className="mt-2 text-[18px] leading-[1.7] text-white/72">
            Every Shopify store is different. Pricing depends on your app stack,
            integrations, and the level of review required.
          </p>
          <p className="mt-1 text-[18px] leading-[1.7] text-white/72">
            We start with a guided security review to understand how apps are currently
            accessing your store data.
          </p>
        </div>

        <section className="mx-auto mt-10 w-full max-w-3xl text-left">
          <ul className="space-y-3 text-[18px] leading-[1.8] text-white/80">
            <li className="flex items-start gap-3 pl-12">
              <span
                className="mt-1 inline-flex h-4 w-4 items-center justify-center text-[14px] bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent"
              >
                🐾
              </span>
              <span>App permissions and data access review</span>
            </li>
            <li className="flex items-start gap-3 pl-12">
              <span
                className="mt-1 inline-flex h-4 w-4 items-center justify-center text-[14px] bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent"
              >
                🐾
              </span>
              <span>Identification of unnecessary or excessive access</span>
            </li>
            <li className="flex items-start gap-3 pl-12">
              <span
                className="mt-1 inline-flex h-4 w-4 items-center justify-center text-[14px] bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent"
              >
                🐾
              </span>
              <span>Detection of outdated or redundant apps</span>
            </li>
            <li className="flex items-start gap-3 pl-12">
              <span
                className="mt-1 inline-flex h-4 w-4 items-center justify-center text-[14px] bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent"
              >
                🐾
              </span>
              <span>Clear, actionable risk summary</span>
            </li>
          </ul>

          <p className="mt-6 text-center text-[18px] leading-[1.8] text-white/72">
            After the review, we’ll recommend next steps and pricing if ongoing protection is still{" "}
            needed for your store.
          </p>

          <div className="mt-3 text-center md:mt-7">
            <CalendlyScheduleButton
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_12px_30px_rgba(251,191,36,0.45)] transition hover:brightness-110"
            >
              Schedule Review
            </CalendlyScheduleButton>
            <p className="mt-4 text-sm text-white/60">
              Read-only review. No changes are made without your approval.
            </p>
          </div>
        </section>

        <PawScrollButton href="/faq" ariaLabel="Go to FAQ" position="higher" />
      </main>
    </div>
  );
}


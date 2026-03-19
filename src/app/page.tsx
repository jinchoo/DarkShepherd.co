import Image from "next/image";
import Link from "next/link";
import { PawScrollButton } from "@/components/PawScrollButton";
import { CalendlyScheduleButton } from "@/components/CalendlyScheduleButton";

export default function Home() {
  return (
    <div id="top" className="font-display relative min-h-screen overflow-visible bg-[#050816] text-slate-100">
      {/* full background image — visible layer */}
      <div
        className="pointer-events-none fixed inset-0 z-0 min-h-screen min-w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/darkshepherd-background.png)" }}
      />
      {/* full-page dark navy radial overlay over galaxy background */}
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
            <a
              href="#pricing"
              className="text-slate-200/80 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent"
            >
              Pricing
            </a>
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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col overflow-visible px-6 pb-16 pt-5 sm:px-8 lg:max-w-7xl lg:px-12">
        <main className="relative mt-0 flex-1 overflow-visible lg:mt-2">
          {/* Hero section — relative; no bottom padding so button overlays content, no gap to next section */}
          <section className="relative mx-auto w-full max-w-6xl overflow-visible px-4 pt-24 pb-0 md:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-10 overflow-visible md:grid-cols-2 lg:grid-cols-[1fr_1.35fr]">
            <div className="relative z-10 max-w-2xl shrink-0 space-y-12">
              <div className="space-y-10">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Shopify App Security
                </p>

                <h1 className="max-w-[640px] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 bg-clip-text text-transparent text-[48px] font-semibold leading-[1.1] tracking-[-0.03em] md:text-5xl lg:text-6xl">
                  Know Exactly What Every{" "}
                  <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                    Shopify App
                  </span>
                  <br />
                  Can Access
                </h1>

                <p className="max-w-[58ch] text-lg leading-relaxed text-white/70 md:text-xl">
                  Third-party apps can quietly create{" "}
                  <br />
                  <span className="font-semibold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                    permission sprawl
                  </span>{" "}
                  across your Shopify store&ndash;retaining access to
                  customer, order, and store data longer than expected. DarkShepherd
                  helps you see what&apos;s exposed and reduce risk without needing a
                  security{"\u00A0"}team.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <CalendlyScheduleButton className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-9 py-3.5 text-base font-semibold text-slate-950 shadow-[0_12px_30px_rgba(251,191,36,0.45)] transition hover:brightness-110">
                  Schedule Shopify Security Review
                </CalendlyScheduleButton>
              </div>

              <ul className="space-y-3 text-base text-slate-300/90">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent text-[12px] leading-none">
                    🐾
                  </span>
                  <span>20-minute guided review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent text-[12px] leading-none">
                    🐾
                  </span>
                  <span>Read-only analysis (no changes without approval)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent text-[12px] leading-none">
                    🐾
                  </span>
                  <span>Built specifically for Shopify merchants</span>
                </li>
              </ul>
            </div>

            {/* right side — hero shield (cropped asset + zoom in fixed wrapper) */}
            <div className="relative mt-8 flex min-w-0 flex-1 items-center justify-center overflow-visible lg:mt-0">
              <div className="relative flex items-center justify-center lg:justify-end w-full min-h-[540px] overflow-visible">
                <div className="relative w-[520px] h-[520px] lg:w-[600px] lg:h-[600px] -translate-y-28 translate-x-8 lg:translate-x-14 overflow-visible">
                  <div className="absolute inset-4 rounded-full bg-amber-400/5 blur-[70px]" aria-hidden />
                  <Image
                    src="/images/darkshepherd-shield.png"
                    alt="DarkShepherd Security Shield"
                    width={640}
                    height={640}
                    className="absolute left-1/2 top-1/2 w-[115%] h-[115%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_0_60px_rgba(255,170,0,0.55)]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <PawScrollButton href="/why-it-matters" ariaLabel="Go to Why It Matters" position="lower" />
          </section>

        </main>
      </div>
    </div>
  );
}

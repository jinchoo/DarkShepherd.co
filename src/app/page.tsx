import Image from "next/image";
import { PawScrollButton } from "@/components/PawScrollButton";
import { CalendlyScheduleButton } from "@/components/CalendlyScheduleButton";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function Home() {
  return (
    <div
      id="top"
      className="font-display relative flex min-h-[100dvh] flex-col overflow-x-hidden overflow-y-auto bg-[#050816] text-slate-100"
    >
      <SiteBackground />
      <SiteHeader />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <SiteContainer className="flex min-h-0 flex-1 flex-col pt-5 sm:pt-8 lg:pt-10">
          <section className="relative flex w-full min-w-0 flex-1 flex-col pb-16 sm:pb-20 lg:pb-24">
            <div className="grid w-full min-w-0 flex-1 grid-cols-1 items-center gap-12 md:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-14">
              <div className="relative z-10 min-w-0 max-w-2xl space-y-8 sm:space-y-10 lg:space-y-12">
                <div className="space-y-5 sm:space-y-7 lg:space-y-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/90 sm:text-sm sm:tracking-[0.35em]">
                    <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                      Shopify App Security
                    </span>
                  </p>

                  <h1 className="text-balance bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 bg-clip-text text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem]">
                    Know Exactly What Every{" "}
                    <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                      Shopify App
                    </span>{" "}
                    Can Access
                  </h1>

                  <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg sm:leading-[1.75] md:text-xl">
                    Third-party apps can quietly create{" "}
                    <span className="font-semibold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                      permission sprawl
                    </span>{" "}
                    across your Shopify store—retaining access to customer, order, and
                    store data longer than expected. DarkShepherd helps you see
                    what&apos;s exposed and reduce risk without needing a security team.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <CalendlyScheduleButton className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(251,191,36,0.45)] transition hover:brightness-110 sm:w-auto sm:min-h-[3.25rem] sm:px-9 sm:text-base">
                    Schedule Shopify Security Review
                  </CalendlyScheduleButton>
                </div>

                <ul className="space-y-3 text-sm text-slate-300/90 sm:space-y-3.5 sm:text-base">
                  <li className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-xs leading-none text-transparent"
                      aria-hidden
                    >
                      🐾
                    </span>
                    <span>20-minute guided review</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-xs leading-none text-transparent"
                      aria-hidden
                    >
                      🐾
                    </span>
                    <span>Read-only analysis (no changes without approval)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-xs leading-none text-transparent"
                      aria-hidden
                    >
                      🐾
                    </span>
                    <span>Built specifically for Shopify merchants</span>
                  </li>
                </ul>
              </div>

              <div className="relative flex min-h-[240px] w-full min-w-0 items-center justify-center pt-2 sm:min-h-[280px] lg:min-h-[400px] lg:justify-end lg:pt-0">
                <div className="relative mx-auto w-full max-w-[min(100%,20rem)] sm:max-w-[22rem] md:max-w-[24rem] lg:mx-0 lg:max-w-[min(100%,29rem)]">
                  <div
                    className="pointer-events-none absolute inset-[8%] rounded-full bg-amber-400/10 blur-[50px] sm:blur-[70px]"
                    aria-hidden
                  />
                  <Image
                    src="/images/darkshepherd-shield.png"
                    alt="DarkShepherd Security Shield"
                    width={640}
                    height={640}
                    className="relative z-[1] h-auto w-full object-contain drop-shadow-[0_0_60px_rgba(255,170,0,0.55)]"
                    priority
                    sizes="(max-width: 1023px) 100vw, 420px"
                  />
                </div>
              </div>
            </div>

            <PawScrollButton
              href="/why-it-matters"
              ariaLabel="Go to Why It Matters"
              position="higher"
              mode="fixed"
              bottomOverrideClassName="bottom-4 sm:bottom-5 lg:bottom-6"
            />
          </section>
        </SiteContainer>
      </div>
    </div>
  );
}

import { CalendlyScheduleButton } from "@/components/CalendlyScheduleButton";
import { HomeDashboardMockup } from "@/components/HomeDashboardMockup";
import { PawScrollButton } from "@/components/PawScrollButton";
import { ScrollToNextPage } from "@/components/ScrollToNextPage";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteHeader } from "@/components/layout/SiteHeader";

const goldText =
  "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent";

const features = [
  {
    title: "See what needs attention",
    text: "Real-time monitoring surfaces the orders that need your eyes right now.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} stroke="currentColor" className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </svg>
    ),
  },
  {
    title: "Understand what went wrong",
    text: "Context, timelines, and details help you diagnose issues fast.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} stroke="currentColor" className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM15.5 15.5 20 20" />
      </svg>
    ),
  },
  {
    title: "Know what to do next",
    text: "Actionable next steps and one-click tools help you resolve and move on.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} stroke="currentColor" className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM8.5 12l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div
      id="top"
      className="font-display relative flex min-h-[100dvh] min-w-0 flex-col bg-[#050816] text-slate-100"
    >
      <SiteBackground />
      <SiteHeader />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <SiteContainer className="flex min-h-0 flex-1 flex-col pt-10 sm:pt-12 lg:pt-16">
          {/* Hero */}
          <section className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm">
              <span className={goldText} aria-hidden>
                🐾
              </span>
              <span className={goldText}>Protecting One Pack at a Time</span>
            </p>

            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.35rem] xl:text-6xl">
              <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                Watch every order.
              </span>
              <br />
              <span className="lg:whitespace-nowrap">
                <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                  Catch issues{" "}
                </span>
                <span className={goldText}>before they cost you.</span>
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-slate-300/90 sm:text-lg">
              DarkShepherd monitors your Shopify operations in real time—surfacing
              problems, highlighting what needs attention,{" "}
              <span className="sm:whitespace-nowrap">
                and telling you exactly what to do next.
              </span>
            </p>

            <div className="mt-7">
              <CalendlyScheduleButton className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_8px_22px_rgba(251,191,36,0.2)] transition hover:brightness-110 sm:text-base">
                Join the Beta
                <span aria-hidden>→</span>
              </CalendlyScheduleButton>
            </div>

            <p className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
              <span aria-hidden>👥</span>
              Early access for selected Shopify merchants
            </p>
          </section>

          {/* Dashboard */}
          <section className="mt-10 w-full sm:mt-12 lg:mt-14">
            <HomeDashboardMockup />
          </section>

          {/* Features */}
          <section className="mt-6 grid grid-cols-1 gap-8 pt-2 sm:grid-cols-3 sm:gap-6 lg:mt-8 lg:pl-16">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3 text-left">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-400/30 text-amber-300">
                  {f.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-slate-100">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{f.text}</p>
                </div>
              </div>
            ))}
          </section>

          <div className="h-16" aria-hidden />
        </SiteContainer>
      </div>

      <PawScrollButton
        href="/product"
        ariaLabel="Go to Product"
        position="higher"
        mode="fixed"
        bottomOverrideClassName="bottom-2 sm:bottom-3 lg:bottom-3"
      />
      <ScrollToNextPage nextHref="/product" />
    </div>
  );
}

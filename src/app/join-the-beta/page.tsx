import type { ReactNode } from "react";
import Image from "next/image";
import { BetaSignupForm } from "@/components/BetaSignupForm";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata = {
  title: "Join the Beta — DarkShepherd",
  description:
    "Join the DarkShepherd beta. Early access for Shopify teams who want fewer order fires and more time solving.",
};

const goldText =
  "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent";

const exceptionItems: { title: string; icon: ReactNode }[] = [
  {
    title: "Paid orders that have not moved into fulfillment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden>
        <rect x="2.5" y="5" width="19" height="14" rx="2" />
        <path strokeLinecap="round" d="M2.5 9.5h19M7 14h3" />
      </svg>
    ),
  },
  {
    title: "Fulfilled orders missing tracking.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v10H3V7Zm11 3h4.5L21 13.5V17h-7V10Z" />
        <circle cx="7" cy="18.5" r="1.5" />
        <circle cx="17" cy="18.5" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Orders that appear stalled or are not progressing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden>
        <circle cx="12" cy="12" r="8.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
      </svg>
    ),
  },
  {
    title: "And other issues hiding in the order journey.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 21 19H3L12 3.5Z" />
        <path strokeLinecap="round" d="M12 10v4M12 16.5v.5" />
      </svg>
    ),
  },
];

const betaGets = [
  "Early access to DarkShepherd",
  "See which orders may need attention",
  "Review the order journey in one place",
  "Direct line to the product team",
  "Influence what we build next",
  "No cost during the beta period",
];

const weAsk = [
  "Connect one Shopify store",
  "Use DarkShepherd in real workflows",
  "Give honest feedback",
  "Join occasional short check-ins",
  "Tell us what's broken in ops today",
];

const attentionOrders = [
  {
    label: "Paid • Not fulfilled",
    order: "Order #1048",
    meta: "2d overdue",
    metaTone: "text-red-400",
    iconTone: "text-red-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path strokeLinecap="round" d="M3 10h18M8 14h4" />
      </svg>
    ),
  },
  {
    label: "Fulfilled • Missing tracking",
    order: "Order #1042",
    meta: "Needs label",
    metaTone: "text-sky-400",
    iconTone: "text-sky-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v10H3V7Zm11 3h4l3 3.5V17h-7V10Z" />
      </svg>
    ),
  },
  {
    label: "Tracking not progressing",
    order: "Order #1031",
    meta: "3d stalled",
    metaTone: "text-amber-400",
    iconTone: "text-amber-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <path strokeLinecap="round" d="M12 8v4l2.5 1.5" />
      </svg>
    ),
  },
  {
    label: "Carrier status mismatch",
    order: "Order #1024",
    meta: "Review",
    metaTone: "text-violet-400",
    iconTone: "text-violet-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 20.5 18h-17L12 3.5Z" />
        <path strokeLinecap="round" d="M12 10v4M12 16h.01" />
      </svg>
    ),
  },
  {
    label: "On hold • Inventory available",
    order: "Order #1019",
    meta: "Ready to release",
    metaTone: "text-emerald-400",
    iconTone: "text-emerald-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
      </svg>
    ),
  },
];

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-[12px] leading-snug text-slate-300 sm:text-[13px]">
      <span
        className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-500 text-[9px] font-bold text-slate-950"
        aria-hidden
      >
        ✓
      </span>
      <span>{text}</span>
    </li>
  );
}

export default function JoinTheBetaPage() {
  return (
    <div className="font-display relative min-h-dvh bg-black text-slate-100">
      <SiteHeader />

      {/* Hero — compact height like mockup; same background image */}
      <section className="relative -mt-16 w-full overflow-hidden bg-black sm:-mt-[4.5rem]">
        <div className="absolute inset-0">
          <Image
            src="/images/ops-command-center.png"
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-[center_42%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.22) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.22) 100%), linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.7) 92%, #000 100%)",
            }}
            aria-hidden
          />
        </div>

        <SiteContainer className="relative z-10 pt-24 pb-6 sm:pt-28 sm:pb-8">
          <div className="grid items-center gap-5 lg:grid-cols-[1fr_1fr] lg:gap-6">
            <div className="max-w-xl">
              <div className="flex flex-col gap-1">
                <p
                  className="inline-block w-fit bg-gradient-to-r from-[#ffe9a8] via-[#f0b429] to-[#d97706] bg-clip-text text-sm font-semibold uppercase tracking-[0.16em] text-transparent [-webkit-text-fill-color:transparent] sm:text-[15px]"
                >
                  BETA — ON THE SCENT
                </p>
                <p className="text-sm font-medium text-slate-300 sm:text-base">
                  The Pack is Almost Ready
                </p>
              </div>

              <h1 className="mt-3 text-balance text-4xl font-bold leading-[1.06] tracking-[-0.02em] sm:text-5xl lg:text-[3.1rem]">
                <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                  Join the{" "}
                </span>
                <span className={goldText}>DarkShepherd Beta</span>
              </h1>

              <p className="mt-3 max-w-md text-balance text-[15px] leading-relaxed text-slate-200 sm:text-base">
                Built for Shopify teams who spend too much time checking orders,
                chasing exceptions, and putting out fires after customers notice.
              </p>

              <p className="mt-3 text-base font-medium sm:text-lg">
                <span className="text-white">Less time searching. </span>
                <span className={goldText}>More time solving.</span>
              </p>
            </div>

            <div className="mx-auto w-full max-w-md lg:mx-0 lg:justify-self-start lg:-translate-x-14 xl:-translate-x-24">
              <div className="rounded-2xl border border-white/12 bg-black/65 p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-4">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-sm font-semibold text-white">
                    Orders Needing Attention
                  </h2>
                  <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-red-500 px-1.5 text-[11px] font-bold text-white">
                    23
                  </span>
                </div>

                <ul className="mt-2.5 space-y-1">
                  {attentionOrders.map((order) => (
                    <li
                      key={order.order}
                      className="flex items-center justify-between gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-1.5"
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        <span className={`shrink-0 ${order.iconTone}`} aria-hidden>
                          {order.icon}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[13px] text-slate-100">{order.label}</p>
                          <p className="truncate text-[11px] text-slate-500">{order.order}</p>
                        </div>
                      </div>
                      <span className={`shrink-0 text-[11px] font-medium ${order.metaTone}`}>
                        {order.meta}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      {/* Exceptions */}
      <section className="relative z-10 bg-black">
        <SiteContainer className="pt-5 pb-4 sm:pt-6 sm:pb-5">
          <p className={`mx-auto max-w-3xl text-center text-sm font-medium leading-snug sm:text-[15px] ${goldText}`}>
            During the beta, DarkShepherd will help surface order exceptions such as:
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {exceptionItems.map((item, index) => (
              <div
                key={item.title}
                className={[
                  "flex flex-col items-center px-4 text-center",
                  index > 0 ? "lg:border-l lg:border-amber-300/30" : "",
                ].join(" ")}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/45 text-amber-300">
                  {item.icon}
                </span>
                <p className="mt-2 max-w-[14rem] text-[12px] leading-snug text-slate-200 sm:text-[13px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </SiteContainer>
      </section>

      {/* Three columns */}
      <section className="relative z-10 bg-black">
        <SiteContainer className="py-4 sm:py-5">
          <div className="grid gap-3 lg:grid-cols-3 lg:gap-4">
            <div className="rounded-2xl border border-amber-300/40 px-4 py-4">
              <div className="flex items-center gap-2">
                <span className="text-amber-300" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7M12 3v9M8.5 7.5 12 4l3.5 3.5M3 12h18" />
                  </svg>
                </span>
                <h2 className="text-[15px] font-semibold text-white">What Beta Members Get</h2>
              </div>
              <ul className="mt-3 space-y-1.5">
                {betaGets.map((item) => (
                  <CheckItem key={item} text={item} />
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-300/40 px-4 py-4">
              <div className="flex items-center gap-2">
                <span className="text-amber-300" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 19a4.5 4.5 0 0 1 9 0M11.5 19a4.5 4.5 0 0 1 9 0" />
                  </svg>
                </span>
                <h2 className="text-[15px] font-semibold text-white">What We Ask From You</h2>
              </div>
              <ul className="mt-3 space-y-1.5">
                {weAsk.map((item) => (
                  <CheckItem key={item} text={item} />
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-amber-300/40 px-4 py-4 text-center">
              <Image
                src="/darkshepherd-nav-logo.png"
                alt="DarkShepherd"
                width={144}
                height={160}
                className="h-14 w-auto drop-shadow-[0_0_24px_rgba(251,191,36,0.35)]"
              />
              <h2 className="mt-2.5 text-[15px] font-semibold text-white">
                Your Store Stays in Control
              </h2>
              <p className="mt-1.5 text-[12px] leading-snug text-slate-400">
                DarkShepherd is read-only by default. We help you see what needs
                attention — without taking over your store.
              </p>
              <p className={`mt-2 text-[12px] font-semibold leading-snug ${goldText}`}>
                We do not make changes to your store without your approval.
              </p>
            </div>
          </div>
        </SiteContainer>
      </section>

      {/* Limited Beta + form */}
      <section id="apply" className="relative z-10 bg-black">
        <SiteContainer className="pt-5 pb-10 sm:pt-6 sm:pb-12">
          <div className="grid items-start gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-amber-300" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 19a4.5 4.5 0 0 1 9 0M11.5 19a4.5 4.5 0 0 1 9 0" />
                  </svg>
                </span>
                <h2 className={`text-2xl font-semibold ${goldText}`}>Limited Beta</h2>
              </div>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
                We&apos;re starting small so we can work closely with each store,
                learn from real ops workflows, and ship what merchants actually need.
              </p>

              <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden>
                  <circle cx="12" cy="12" r="8.5" />
                  <path strokeLinecap="round" d="M12 8v5M12 16h.01" />
                </svg>
                <p className="text-[13px] leading-snug text-slate-400">
                  Prefer high-volume Shopify stores with
                  <br />
                  active fulfillment operations.
                </p>
              </div>
            </div>

            <div>
              <BetaSignupForm />
            </div>
          </div>
        </SiteContainer>
      </section>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendlyScheduleButton } from "@/components/CalendlyScheduleButton";
import { SiteContainer } from "./SiteContainer";

const navLinkClass =
  "rounded-md px-2 py-1.5 text-sm text-slate-200/80 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent sm:px-3 sm:py-2 sm:text-base";

const navItems = [
  { href: "/why-it-matters", label: "Why It Matters" },
  { href: "/what-we-check", label: "What We Check" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050816]/80 backdrop-blur-md">
      <SiteContainer className="relative flex min-h-[4.25rem] items-center justify-between gap-3 py-2.5 sm:min-h-[4.75rem] sm:gap-5 sm:py-3">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/darkshepherd_logo1_cropped.png"
            alt="Dark Shepherd logo"
            width={120}
            height={120}
            className="h-10 w-auto sm:h-12 lg:h-[52px]"
            priority
          />
          <span className="truncate bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-sm font-semibold tracking-[0.06em] text-transparent sm:text-lg lg:text-xl">
            DarkShepherd
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden min-w-0 flex-1 items-center justify-end gap-1.5 lg:flex xl:gap-3"
          aria-label="Primary"
        >
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} className={navLinkClass}>
              {label}
            </Link>
          ))}
          <CalendlyScheduleButton className="ml-2 shrink-0 rounded-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_0_25px_rgba(251,191,36,0.45)] transition hover:brightness-110 sm:px-5 sm:text-sm">
            Get Started
          </CalendlyScheduleButton>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2 text-slate-100 lg:hidden"
          aria-expanded={open}
          aria-controls="site-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </SiteContainer>

      {/* Mobile panel */}
      {open ? (
        <div
          id="site-mobile-nav"
          className="border-t border-white/10 bg-[#050816]/95 backdrop-blur-md lg:hidden"
        >
          <SiteContainer className="flex flex-col gap-1.5 py-4 sm:py-5">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-4 py-3 text-base text-slate-100 transition hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-2 sm:pt-3">
              <CalendlyScheduleButton className="w-full rounded-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 px-5 py-3.5 text-center text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(251,191,36,0.45)] transition hover:brightness-110">
                Get Started
              </CalendlyScheduleButton>
            </div>
          </SiteContainer>
        </div>
      ) : null}
    </header>
  );
}

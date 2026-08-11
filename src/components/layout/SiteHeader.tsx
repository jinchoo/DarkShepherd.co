"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendlyScheduleButton } from "@/components/CalendlyScheduleButton";
import { navigateWithViewTransition } from "@/lib/viewTransition";
import { SiteContainer } from "./SiteContainer";

const navLinkClass =
  "relative inline-flex flex-col items-center rounded-md px-2 py-1.5 text-sm text-slate-200/80 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent sm:px-3 sm:py-2 sm:text-base";

const navLinkActiveTextClass =
  "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-sm font-medium text-transparent sm:text-base";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/integrations", label: "Integrations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function handleNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    // Let modified clicks (new tab, etc.) behave natively.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    setOpen(false);
    navigateWithViewTransition(router, href);
  }

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-[#050816]/80 backdrop-blur-md">
      <SiteContainer className="relative flex min-h-[4rem] items-center justify-between gap-3 py-2 sm:min-h-[4.5rem] sm:gap-4">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
          onClick={(e) => handleNav(e, "/")}
        >
          <Image
            src="/darkshepherd-nav-logo.png"
            alt="Dark Shepherd logo"
            width={144}
            height={160}
            className="h-10 w-auto sm:h-12 lg:h-[52px]"
            priority
          />
          <span className="flex min-w-0 flex-col">
            <span className="truncate bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-sm font-semibold tracking-[0.06em] text-transparent sm:text-lg lg:text-xl">
              DarkShepherd
            </span>
            <span className="truncate bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-[9px] font-medium tracking-[0.04em] text-transparent sm:text-[10px] lg:text-[11px]">
              Protecting One Pack at a Time
            </span>
          </span>
        </Link>

        {/* Desktop nav (centered) */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1.5 lg:flex xl:gap-3"
          aria-label="Primary"
        >
          {navItems.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={navLinkClass}
                aria-current={active ? "page" : undefined}
                onClick={(e) => handleNav(e, href)}
              >
                <span className={active ? navLinkActiveTextClass : undefined}>
                  {label}
                </span>
                {active ? (
                  <span
                    aria-hidden
                    className="mt-0.5 h-[2px] w-full rounded-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Right-side actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className="hidden shrink-0 text-sm text-slate-200/80 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent lg:inline-block"
            onClick={(e) => handleNav(e, "/login")}
          >
            Log in
          </Link>
          <CalendlyScheduleButton className="hidden shrink-0 rounded-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_0_14px_rgba(251,191,36,0.2)] transition hover:brightness-110 sm:px-5 sm:text-sm lg:inline-flex lg:translate-x-3">
            Join the Beta
          </CalendlyScheduleButton>

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
        </div>
      </SiteContainer>

      {/* Mobile panel */}
      {open ? (
        <div
          id="site-mobile-nav"
          className="border-t border-white/10 bg-[#050816]/95 backdrop-blur-md lg:hidden"
        >
          <SiteContainer className="flex flex-col gap-1.5 py-4 sm:py-5">
            {navItems.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={
                    active
                      ? "relative rounded-lg px-4 py-3 text-base font-medium"
                      : "rounded-lg px-4 py-3 text-base text-slate-100 transition hover:bg-white/5"
                  }
                  aria-current={active ? "page" : undefined}
                  onClick={(e) => handleNav(e, href)}
                >
                  <span
                    className={
                      active
                        ? "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent"
                        : undefined
                    }
                  >
                    {label}
                  </span>
                  {active ? (
                    <span
                      aria-hidden
                      className="absolute bottom-1.5 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500"
                    />
                  ) : null}
                </Link>
              );
            })}
            <Link
              href="/login"
              className="rounded-lg px-4 py-3 text-base text-slate-100 transition hover:bg-white/5"
              onClick={(e) => handleNav(e, "/login")}
            >
              Log in
            </Link>
            <div className="pt-2 sm:pt-3">
              <CalendlyScheduleButton className="w-full rounded-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 px-5 py-3.5 text-center text-sm font-semibold text-slate-950 shadow-[0_0_14px_rgba(251,191,36,0.2)] transition hover:brightness-110">
                Join the Beta
              </CalendlyScheduleButton>
            </div>
          </SiteContainer>
        </div>
      ) : null}
    </header>
    {/* Reserves space so page content does not sit under the fixed header */}
    <div className="h-16 shrink-0 sm:h-[4.5rem]" aria-hidden />
    </>
  );
}

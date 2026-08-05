import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { DispatchSignup } from "@/components/DispatchSignup";
import { SiteContainer } from "./SiteContainer";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "instagram";
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/product" },
      { label: "Contact", href: "mailto:jin@darkshepherd.co", external: true },
      {
        label: "Join the Beta",
        href: "https://calendly.com/jin-darkshepherd/30min",
        external: true,
      },
    ],
  },
  {
    heading: "Explore DarkShepherd",
    links: [
      { label: "Why it Matters", href: "/" },
      { label: "What We Check", href: "/product#checks" },
      { label: "How It Works", href: "/integrations" },
    ],
  },
];

const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/darkshepherd/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/darkshepherdsecurity/",
    icon: "instagram",
  },
];

const socialIcons: Record<SocialLink["icon"], ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#0A66C2" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <defs>
        <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="25%" stopColor="#fa7e1e" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="75%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <path
        fill="url(#ig-gradient)"
        d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.94c-3.14 0-3.51.01-4.75.07-.99.04-1.53.21-1.89.35-.47.18-.81.4-1.17.76-.36.36-.58.7-.76 1.17-.14.36-.31.9-.35 1.89-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.04.99.21 1.53.35 1.89.18.47.4.81.76 1.17.36.36.7.58 1.17.76.36.14.9.31 1.89.35 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.99-.04 1.53-.21 1.89-.35.47-.18.81-.4 1.17-.76.36-.36.58-.7.76-1.17.14-.36.31-.9.35-1.89.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.99-.21-1.53-.35-1.89a3.15 3.15 0 0 0-.76-1.17 3.15 3.15 0 0 0-1.17-.76c-.36-.14-.9-.31-1.89-.35-1.24-.06-1.61-.07-4.75-.07zm0 3.3a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2zm0 7.59a2.99 2.99 0 1 0 0-5.98 2.99 2.99 0 0 0 0 5.98zm5.85-7.81a1.08 1.08 0 1 1-2.15 0 1.08 1.08 0 0 1 2.15 0z"
      />
    </svg>
  ),
};

const linkClass =
  "text-sm text-slate-300/80 transition hover:bg-gradient-to-r hover:from-amber-200 hover:via-amber-400 hover:to-amber-500 hover:bg-clip-text hover:text-transparent";

const headingClass =
  "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-xs font-semibold uppercase tracking-[0.2em] text-transparent";

function FooterLinkItem({ label, href, external }: FooterLink) {
  if (external) {
    return (
      <a
        href={href}
        className={`${linkClass} no-underline`}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      >
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={linkClass}>
      {label}
    </Link>
  );
}

function PawTrail() {
  // Ascending trail of glowing gold paws.
  const paws = [
    "text-lg",
    "text-xl -translate-y-1.5",
    "text-2xl -translate-y-3",
    "text-3xl -translate-y-5",
  ];
  return (
    <div className="flex items-end gap-1.5" aria-hidden>
      {paws.map((cls, i) => (
        <span
          key={i}
          className={`bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text leading-none text-transparent drop-shadow-[0_0_10px_rgba(251,191,36,0.55)] ${cls}`}
        >
          🐾
        </span>
      ))}
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 transition hover:opacity-80"
        >
          {socialIcons[social.icon]}
        </a>
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-auto pt-16 sm:pt-20 lg:pt-24">
      <SiteContainer className="flex flex-col gap-12 py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — Brand identity */}
          <div className="flex flex-col gap-5 lg:col-span-3">
            <div className="flex items-center gap-3">
              <Image
                src="/darkshepherd-nav-logo.png"
                alt="DarkShepherd logo"
                width={144}
                height={160}
                className="h-11 w-auto"
              />
              <div className="flex flex-col">
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-lg font-semibold tracking-[0.06em] text-transparent">
                  DarkShepherd
                </span>
                <span className="text-xs text-slate-400">Protecting One Pack at a Time.</span>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-slate-300/80">
              Independent Shopify security +
              <br />
              systems visibility for modern ecommerce brands.
            </p>

            <div className="mt-2 sm:mt-3">
              <SocialIcons />
            </div>
          </div>

          {/* CENTER — Navigation */}
          <nav className="grid grid-cols-2 gap-8 lg:col-span-4" aria-label="Footer">
            {footerColumns.map((column) => (
              <div key={column.heading} className="flex flex-col gap-3">
                <h3 className={headingClass}>{column.heading}</h3>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      <FooterLinkItem {...link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* RIGHT — Dispatch signup card */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-amber-300/30 bg-white/[0.03] px-6 pt-10 pb-6 text-center shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:pt-12">
              <PawTrail />

              <div className="flex flex-col gap-1">
                <p className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-2xl font-semibold text-transparent">
                  Follow the Pack
                </p>
                <p className="text-base font-semibold text-slate-100">Join DarkShepherd Dispatch</p>
                <p className="text-sm leading-relaxed text-slate-300/80">
                  Weekly security insights, investigations, and ecommerce operational intelligence.
                </p>
              </div>

              <DispatchSignup />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6">
          {/* Centered DarkShepherd icon between two divider lines */}
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-white/10" aria-hidden />
            <Image
              src="/darkshepherd-nav-logo.png"
              alt="DarkShepherd"
              width={144}
              height={160}
              className="h-8 w-auto opacity-90"
            />
            <span className="h-px flex-1 bg-white/10" aria-hidden />
          </div>

          <div className="-mt-6 flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-1">
              <span>© 2026 DarkShepherd. All rights reserved.</span>
              <span>A product of CodeCraftBrew LLC</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
              <span aria-hidden className="text-slate-600">
                •
              </span>
              <Link href="/cookie-policy" className={linkClass}>
                Cookie Policy
              </Link>
              <span aria-hidden className="text-slate-600">
                •
              </span>
              <Link href="/terms" className={linkClass}>
                Terms of Service
              </Link>
              <span aria-hidden className="text-slate-600">
                •
              </span>
            </div>
          </div>
        </div>
      </SiteContainer>
    </footer>
  );
}

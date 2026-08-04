import Image from "next/image";

/**
 * Static home-page dashboard visual. Product page uses DashboardMockup instead.
 */

type IconName =
  | "bars"
  | "shieldCheck"
  | "calendar"
  | "bell"
  | "truck"
  | "workflow"
  | "chart"
  | "plug"
  | "gear"
  | "alert"
  | "doc"
  | "clock"
  | "chevronDown"
  | "chevronRight";

function Icon({ name, className = "h-4 w-4" }: { name: IconName; className?: string }) {
  const common = {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.7,
    stroke: "currentColor",
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "bars":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V10M10 20V4M16 20v-7" />
        </svg>
      );
    case "shieldCheck":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3.5 19 6.5v5c0 5-3.2 8.3-7 9.5-3.8-1.2-7-4.5-7-9.5v-5L12 3.5Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v3M17 4v3M4 8h16M5 6h14v14H5V6Z" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 8a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6ZM9.5 18a2.5 2.5 0 0 0 5 0"
          />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 6h11v9H3V6ZM14 9h4l3 3v3h-7V9ZM7.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          />
        </svg>
      );
    case "workflow":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6h4v4H6V6ZM14 14h4v4h-4v-4ZM8 10v4h4M14 8h-2v2"
          />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        </svg>
      );
    case "plug":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 7V3M15 7V3M8 7h8v4a4 4 0 0 1-4 4v5M10 11v2M14 11v2"
          />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.4 13-.3 1 1.3 1.6-1.4 2.4-2-.5-.9.6-.5 2h-2.8l-.5-2-.9-.6-2 .5L6.6 15l1.3-1.6-.3-1 .3-1L6.6 9l1.4-2.4 2 .5.9-.6.5-2h2.8l.5 2 .9.6 2-.5L20.4 9l-1.3 1.6.3 1Z"
          />
        </svg>
      );
    case "alert":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v4m0 3.5h.01M10.3 4.3 2.8 17.5A2 2 0 0 0 4.5 20.5h15a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z"
          />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 3.5h7l4 4V20.5H7V3.5ZM14 3.5v4h4"
          />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7.5V12l3 2"
          />
        </svg>
      );
    case "chevronDown":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      );
    case "chevronRight":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
        </svg>
      );
  }
}

const goldText =
  "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent";

const panelClass = "rounded-xl border border-white/10 bg-[#0d1018] p-3.5 sm:p-4";

const sidebarNav: {
  label: string;
  icon: IconName;
  badge?: string;
  active?: boolean;
}[] = [
  { label: "Overview", icon: "bars", active: true },
  { label: "Orders Needing Attention", icon: "shieldCheck", badge: "23" },
  { label: "Order Timeline", icon: "calendar" },
  { label: "Alerts", icon: "bell", badge: "8" },
  { label: "Shipments", icon: "truck" },
  { label: "Rules", icon: "workflow" },
  { label: "Reports", icon: "chart" },
  { label: "Integrations", icon: "plug" },
  { label: "Settings", icon: "gear" },
];

const stats: {
  label: string;
  value: string;
  delta: string;
  up: boolean;
  icon: IconName;
  color: string;
}[] = [
  {
    label: "Orders Needing Attention",
    value: "23",
    delta: "23% vs last 7 days",
    up: true,
    icon: "alert",
    color: "#ef4444",
  },
  {
    label: "Paid, Not Fulfilled",
    value: "8",
    delta: "33% vs last 7 days",
    up: true,
    icon: "doc",
    color: "#f97316",
  },
  {
    label: "Fulfilled, No Tracking",
    value: "9",
    delta: "12% vs last 7 days",
    up: true,
    icon: "truck",
    color: "#eab308",
  },
  {
    label: "Quietly Stalled",
    value: "6",
    delta: "8% vs last 7 days",
    up: false,
    icon: "clock",
    color: "#a855f7",
  },
];

const alerts: { id: string; text: string; time: string; color: string }[] = [
  { id: "#1027", text: "Paid, not fulfilled", time: "2m ago", color: "#ef4444" },
  { id: "#1026", text: "Fulfilled, no tracking", time: "15m ago", color: "#f97316" },
  { id: "#1025", text: "Quietly stalled", time: "42m ago", color: "#a855f7" },
  { id: "#1024", text: "Paid, not fulfilled", time: "1h ago", color: "#ef4444" },
  { id: "#1023", text: "Fulfilled, no tracking", time: "2h ago", color: "#eab308" },
];

const timeline: { label: string; meta: string; color: string }[] = [
  { label: "Order Placed", meta: "142 orders · May 13", color: "#22c55e" },
  { label: "Payment Captured", meta: "138 orders · May 13", color: "#22c55e" },
  { label: "Fulfillment Started", meta: "96 orders · May 13", color: "#f97316" },
  { label: "Tracking Updated", meta: "81 orders · May 13", color: "#a855f7" },
  { label: "Stable Orders", meta: "74 orders · May 13", color: "#64748b" },
];

const issueTypes: { label: string; count: number; pct: number; color: string }[] = [
  { label: "Paid, Not Fulfilled", count: 10, pct: 43, color: "#ef4444" },
  { label: "Fulfilled, No Tracking", count: 6, pct: 26, color: "#f97316" },
  { label: "Quietly Stalled", count: 4, pct: 17, color: "#a855f7" },
  { label: "Other Issues", count: 3, pct: 14, color: "#eab308" },
];

const lineSeries = [
  { color: "#ef4444", d: "M8 70 C 30 62, 50 48, 70 52 S 110 28, 130 34 S 170 18, 192 22" },
  { color: "#f97316", d: "M8 78 C 30 74, 50 68, 70 64 S 110 50, 130 54 S 170 42, 192 40" },
  { color: "#eab308", d: "M8 86 C 30 82, 50 76, 70 78 S 110 66, 130 62 S 170 58, 192 52" },
  { color: "#a855f7", d: "M8 92 C 30 90, 50 88, 70 86 S 110 80, 130 78 S 170 74, 192 70" },
];

const days = ["May 7", "May 8", "May 9", "May 10", "May 11", "May 12", "May 13"];

function PanelLink({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-0.5 text-[11px] font-medium text-amber-300/90">
      {label}
      <Icon name="chevronRight" className="h-3.5 w-3.5" />
    </span>
  );
}

export function HomeDashboardMockup() {
  return (
    <div className="relative w-full">
      <div
        className="pointer-events-none absolute -inset-x-6 -top-8 bottom-0 rounded-[2rem] bg-amber-400/[0.06] blur-2xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c12] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        <div className="flex min-w-0">
          {/* Sidebar */}
          <aside className="hidden w-[220px] shrink-0 flex-col justify-between border-r border-white/10 bg-[#080a10] p-4 lg:flex">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <Image
                  src="/darkshepherd-nav-logo.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-6 w-auto"
                />
                <span className={`text-[11px] font-bold tracking-[0.12em] ${goldText}`}>
                  DARKSHEPHERD
                </span>
              </div>

              <nav className="space-y-0.5">
                {sidebarNav.map((item) => (
                  <div
                    key={item.label}
                    className={[
                      "flex items-center justify-between rounded-lg px-2.5 py-2 text-[12px]",
                      item.active
                        ? "bg-gradient-to-r from-amber-400/15 to-amber-400/5 font-medium text-amber-200"
                        : "text-slate-400",
                    ].join(" ")}
                  >
                    <span className="flex min-w-0 items-center gap-2.5">
                      <Icon
                        name={item.icon}
                        className={[
                          "h-[16px] w-[16px] shrink-0",
                          item.active ? "text-amber-300" : "text-slate-500",
                        ].join(" ")}
                      />
                      <span className="truncate">{item.label}</span>
                    </span>
                    {item.badge ? (
                      <span className="ml-1 shrink-0 rounded-full bg-rose-500 px-1.5 py-0.5 text-[9px] font-bold text-white">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>
                ))}
              </nav>
            </div>

            <div className="mt-6 flex items-center gap-2.5 border-t border-white/10 pt-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-[11px] font-bold text-amber-300">
                LS
              </span>
              <div className="min-w-0">
                <p className="truncate text-[12px] font-semibold text-slate-100">Live Noti Supply</p>
                <p className="truncate text-[10px] text-slate-500">Plan: Pro • 2500+</p>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1 p-3.5 sm:p-5">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">Overview</h2>
                <p className="text-xs text-slate-400">
                  Real-time snapshot of your store operations.
                </p>
              </div>
              <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-slate-300">
                <Icon name="calendar" className="h-3.5 w-3.5 text-slate-400" />
                May 7 – May 13, 2025
                <Icon name="chevronDown" className="h-3.5 w-3.5 text-slate-500" />
              </span>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-2 gap-2.5 xl:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className={panelClass}>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-2xl font-bold tracking-tight text-slate-50">{s.value}</p>
                      <p className="mt-0.5 text-[11px] leading-tight text-slate-400">{s.label}</p>
                    </div>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${s.color}22`, color: s.color }}
                    >
                      <Icon name={s.icon} className="h-4 w-4" />
                    </span>
                  </div>
                  <p
                    className={[
                      "mt-2.5 text-[11px] font-medium",
                      s.up ? "text-emerald-400" : "text-rose-400",
                    ].join(" ")}
                  >
                    {s.up ? "▲" : "▼"} {s.delta}
                  </p>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div className="mt-2.5 grid grid-cols-1 gap-2.5 lg:grid-cols-[1.35fr_1fr]">
              <div className={panelClass}>
                <h3 className="mb-3 text-sm font-semibold text-slate-100">Orders Over Time</h3>
                <div className="relative">
                  <svg viewBox="0 0 200 110" className="h-36 w-full" aria-hidden>
                    {[0, 25, 50, 75, 100].map((y) => (
                      <line
                        key={y}
                        x1="8"
                        x2="192"
                        y1={10 + y * 0.85}
                        y2={10 + y * 0.85}
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="1"
                      />
                    ))}
                    {["50", "25", "0"].map((label, i) => (
                      <text
                        key={label}
                        x="0"
                        y={18 + i * 36}
                        fill="rgba(148,163,184,0.7)"
                        fontSize="7"
                      >
                        {label}
                      </text>
                    ))}
                    {lineSeries.map((s) => (
                      <path
                        key={s.color}
                        d={s.d}
                        fill="none"
                        stroke={s.color}
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    ))}
                  </svg>
                  <div className="mt-1 flex justify-between px-1 text-[9px] text-slate-500">
                    {days.map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[9px] text-slate-400">
                    {[
                      ["#ef4444", "Needs Attention"],
                      ["#f97316", "Not Fulfilled"],
                      ["#eab308", "No Tracking"],
                      ["#a855f7", "Stalled"],
                    ].map(([color, label]) => (
                      <span key={label} className="flex items-center gap-1">
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={panelClass}>
                <h3 className="mb-3 text-sm font-semibold text-slate-100">Issues by Type</h3>
                <div className="flex items-center gap-4">
                  <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
                    <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90" aria-hidden>
                      {/* 43% red, 26% orange, 17% purple, 14% yellow */}
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="5"
                        strokeDasharray="38 62"
                        strokeDashoffset="0"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="5"
                        strokeDasharray="23 77"
                        strokeDashoffset="-38"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#a855f7"
                        strokeWidth="5"
                        strokeDasharray="15 85"
                        strokeDashoffset="-61"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#eab308"
                        strokeWidth="5"
                        strokeDasharray="12 88"
                        strokeDashoffset="-76"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <p className="text-lg font-bold text-slate-50">23</p>
                      <p className="text-[9px] text-slate-400">Total Issues</p>
                    </div>
                  </div>
                  <ul className="min-w-0 flex-1 space-y-2">
                    {issueTypes.map((item) => (
                      <li key={item.label} className="flex items-start gap-2 text-[11px]">
                        <span
                          className="mt-1 h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <div className="min-w-0">
                          <p className="truncate text-slate-300">{item.label}</p>
                          <p className="text-slate-500">
                            {item.count} ({item.pct}%)
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="mt-2.5 grid grid-cols-1 gap-2.5 md:grid-cols-3">
              <div className={panelClass}>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-100">Recent Alerts</h3>
                  <PanelLink label="View all" />
                </div>
                <ul className="space-y-2.5">
                  {alerts.map((a) => (
                    <li key={`${a.id}-${a.time}`} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: a.color }}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-[12px] text-slate-200">
                          <span className="font-semibold text-slate-100">{a.id}</span> {a.text}
                        </p>
                      </div>
                      <span className="shrink-0 text-[10px] text-slate-500">{a.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={panelClass}>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-100">Order Timeline (Last)</h3>
                  <PanelLink label="View all" />
                </div>
                <ul className="space-y-0">
                  {timeline.map((t, i) => (
                    <li key={t.label} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <span
                          className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                          style={{ backgroundColor: t.color }}
                        />
                        {i < timeline.length - 1 ? (
                          <span className="my-0.5 w-px flex-1 bg-white/10" />
                        ) : null}
                      </div>
                      <div className="pb-3">
                        <p className="text-[12px] font-medium text-slate-200">{t.label}</p>
                        <p className="text-[10px] text-slate-500">{t.meta}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={panelClass}>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-100">Top Issue Types</h3>
                  <PanelLink label="View report" />
                </div>
                <ul className="space-y-3">
                  {issueTypes.map((item) => (
                    <li key={item.label}>
                      <div className="mb-1 flex items-center justify-between gap-2 text-[11px]">
                        <span className="truncate text-slate-300">{item.label}</span>
                        <span className="shrink-0 text-slate-500">
                          {item.count} · {item.pct}%
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="flex items-center justify-center gap-2 border-t border-white/10 bg-[#080a10] px-4 py-2.5">
          <Image
            src="/darkshepherd-nav-logo.png"
            alt=""
            width={18}
            height={18}
            className="h-4 w-auto"
          />
          <p className="text-[11px] text-slate-400 sm:text-xs">
            Protect the merchant. Protect the customer.{" "}
            <span className={goldText}>Prevent every order.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

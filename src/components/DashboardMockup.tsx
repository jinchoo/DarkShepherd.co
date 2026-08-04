import Image from "next/image";

/**
 * Static, non-interactive recreation of the DarkShepherd product dashboard.
 * Used on the product page. All data is illustrative sample data.
 */

type IconName =
  | "grid"
  | "bag"
  | "bell"
  | "truck"
  | "sliders"
  | "chart"
  | "puzzle"
  | "gear"
  | "alert"
  | "cash"
  | "clock"
  | "calendar"
  | "filter"
  | "refresh"
  | "chevronRight"
  | "chevronDown"
  | "list"
  | "user";

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
    case "grid":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A1.5 1.5 0 0 1 5.5 4h3A1.5 1.5 0 0 1 10 5.5v3A1.5 1.5 0 0 1 8.5 10h-3A1.5 1.5 0 0 1 4 8.5v-3ZM14 5.5A1.5 1.5 0 0 1 15.5 4h3A1.5 1.5 0 0 1 20 5.5v3A1.5 1.5 0 0 1 18.5 10h-3A1.5 1.5 0 0 1 14 8.5v-3ZM4 15.5A1.5 1.5 0 0 1 5.5 14h3A1.5 1.5 0 0 1 10 15.5v3A1.5 1.5 0 0 1 8.5 20h-3A1.5 1.5 0 0 1 4 18.5v-3ZM14 15.5A1.5 1.5 0 0 1 15.5 14h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3Z" />
        </svg>
      );
    case "bag":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12l-1 13H7L6 7ZM9 7V5.5a3 3 0 0 1 6 0V7" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6ZM9.5 18a2.5 2.5 0 0 0 5 0" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h11v9H3V6ZM14 9h4l3 3v3h-7V9ZM7.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        </svg>
      );
    case "sliders":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h10M18 8h2M4 16h2M10 16h10M14 5v6M8 13v6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        </svg>
      );
    case "puzzle":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 4a2 2 0 1 1 4 0h3v3a2 2 0 1 1 0 4v3h-3a2 2 0 1 0-4 0H7v-3a2 2 0 1 1 0-4V4h3Z" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.4 13-.3 1 1.3 1.6-1.4 2.4-2-.5-.9.6-.5 2h-2.8l-.5-2-.9-.6-2 .5L6.6 15l1.3-1.6-.3-1 .3-1L6.6 9l1.4-2.4 2 .5.9-.6.5-2h2.8l.5 2 .9.6 2-.5L20.4 9l-1.3 1.6.3 1Z" />
        </svg>
      );
    case "alert":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 3.5h.01M10.3 4.3 2.8 17.5A2 2 0 0 0 4.5 20.5h15a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z" />
        </svg>
      );
    case "cash":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18v10H3V7ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 9.5v5M18 9.5v5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7.5V12l3 2" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v3M17 4v3M4 8h16M5 6h14v14H5V6Z" />
        </svg>
      );
    case "filter":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16l-6 7v5l-4 2v-7L4 5Z" />
        </svg>
      );
    case "refresh":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12a8 8 0 0 1 13.7-5.7L20 8M20 4v4h-4M20 12a8 8 0 0 1-13.7 5.7L4 16M4 20v-4h4" />
        </svg>
      );
    case "chevronRight":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
        </svg>
      );
    case "chevronDown":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      );
    case "list":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 20a7 7 0 0 1 14 0" />
        </svg>
      );
  }
}

function Sparkline({ points, color }: { points: string; color: string }) {
  return (
    <svg viewBox="0 0 100 32" preserveAspectRatio="none" className="h-8 w-20" aria-hidden>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const sidebarNav: { label: string; icon: IconName; badge?: string; active?: boolean }[] = [
  { label: "Overview", icon: "grid", active: true },
  { label: "Orders", icon: "bag" },
  { label: "Alerts", icon: "bell", badge: "23" },
  { label: "Shipments", icon: "truck" },
  { label: "Rules", icon: "sliders" },
  { label: "Reports", icon: "chart" },
  { label: "Integrations", icon: "puzzle" },
  { label: "Settings", icon: "gear" },
];

const stats: {
  label: string;
  value: string;
  delta: string;
  up: boolean;
  icon: IconName;
  color: string;
  points: string;
}[] = [
  {
    label: "Orders Needing Attention",
    value: "23",
    delta: "15%",
    up: true,
    icon: "alert",
    color: "#f59e0b",
    points: "0,24 14,20 28,22 42,14 56,16 70,8 84,11 100,5",
  },
  {
    label: "Paid, Not Fulfilled",
    value: "8",
    delta: "33%",
    up: true,
    icon: "cash",
    color: "#22c55e",
    points: "0,26 14,22 28,24 42,18 56,20 70,12 84,9 100,6",
  },
  {
    label: "Fulfilled, No Tracking",
    value: "9",
    delta: "13%",
    up: true,
    icon: "truck",
    color: "#3b82f6",
    points: "0,20 14,22 28,16 42,18 56,12 70,14 84,9 100,10",
  },
  {
    label: "Quietly Stalled",
    value: "6",
    delta: "14%",
    up: false,
    icon: "clock",
    color: "#a855f7",
    points: "0,8 14,12 28,10 42,16 56,14 70,20 84,18 100,24",
  },
];

const alerts: { id: string; text: string; time: string; color: string }[] = [
  { id: "#1027", text: "Paid, not fulfilled", time: "2m ago", color: "#ef4444" },
  { id: "#1026", text: "Fulfilled, no tracking", time: "18m ago", color: "#f59e0b" },
  { id: "#1025", text: "Customer notes indicate an issue", time: "1h ago", color: "#f59e0b" },
  { id: "#1024", text: "Tracking not updated in 7+ days", time: "1h ago", color: "#a855f7" },
  { id: "#1023", text: "Payment captured, order risk", time: "3h ago", color: "#ef4444" },
];

const timeline: { label: string; date: string; done: boolean }[] = [
  { label: "Order Placed", date: "May 12, 9:14 am", done: true },
  { label: "Paid", date: "May 12, 9:14 am", done: true },
  { label: "Fulfilled", date: "May 12, 11:02 am", done: false },
  { label: "Complete", date: "—", done: false },
];

const orders: {
  id: string;
  issue: string;
  age: string;
  total: string;
  action: string;
  variant: "gold" | "outline";
}[] = [
  { id: "#1027", issue: "Paid, not fulfilled", age: "2m", total: "$89.97", action: "Assign", variant: "gold" },
  { id: "#1026", issue: "Fulfilled, no tracking", age: "18m", total: "$124.50", action: "Add Tracking", variant: "outline" },
  { id: "#1025", issue: "Customer issue", age: "1h", total: "$59.98", action: "Resolve", variant: "outline" },
  { id: "#1024", issue: "Tracking stale (7+ days)", age: "2h", total: "$33.99", action: "Resolve", variant: "outline" },
  { id: "#1023", issue: "Payment risk", age: "3h", total: "$149.00", action: "Review", variant: "outline" },
];

const goldText =
  "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent";
const panelClass =
  "rounded-xl border border-white/10 bg-white/[0.02] p-4";

function PanelHeader({ title, badge }: { title: string; badge?: string }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
        {badge ? (
          <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
            {badge}
          </span>
        ) : null}
      </div>
      <button className="flex items-center gap-0.5 text-[11px] font-medium text-amber-300/90">
        View all
        <Icon name="chevronRight" className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

export function DashboardMockup() {
  return (
    <div className="relative w-full">
      {/* soft gold glow behind the panel */}
      <div
        className="pointer-events-none absolute -inset-x-6 -top-8 bottom-0 rounded-[2rem] bg-amber-400/[0.06] blur-2xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080b16]/95 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur">
        <div className="flex min-w-0">
          {/* Sidebar */}
          <aside className="hidden w-56 shrink-0 flex-col justify-between border-r border-white/10 bg-white/[0.015] p-4 md:flex">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
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
                <Icon name="list" className="h-4 w-4 text-slate-500" />
              </div>

              <nav className="space-y-1">
                {sidebarNav.map((item) => (
                  <div
                    key={item.label}
                    className={[
                      "flex items-center justify-between rounded-lg px-3 py-2 text-[13px] transition",
                      item.active
                        ? "bg-amber-400/10 font-medium text-amber-200"
                        : "text-slate-300/80 hover:bg-white/5",
                    ].join(" ")}
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon name={item.icon} className="h-[18px] w-[18px]" />
                      {item.label}
                    </span>
                    {item.badge ? (
                      <span className="rounded-full bg-amber-400/15 px-1.5 py-0.5 text-[10px] font-semibold text-amber-300">
                        {item.badge}
                      </span>
                    ) : null}
                  </div>
                ))}
              </nav>
            </div>

            <div className="mt-6 flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.02] p-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-amber-300 to-amber-500 text-[11px] font-bold text-slate-950">
                LW
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-semibold text-slate-100">
                  Lone Wolf Supply Co.
                </p>
                <p className="truncate text-[10px] text-slate-400">lonewolfsupply.com</p>
              </div>
              <Icon name="chevronDown" className="h-4 w-4 text-slate-500" />
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1 p-4 sm:p-5">
            {/* Header row */}
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-100">Overview</h2>
                <p className="text-xs text-slate-400">
                  Real-time snapshot of your store operations.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-slate-300">
                  <Icon name="calendar" className="h-3.5 w-3.5 text-slate-400" />
                  May 7 – May 14, 2024
                </span>
                <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-slate-300">
                  <Icon name="filter" className="h-3.5 w-3.5 text-slate-400" />
                  Filters
                </span>
                <span className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-1.5 text-slate-400">
                  <Icon name="refresh" className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className={panelClass}>
                  <div className="mb-2 flex items-start justify-between">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${s.color}1f`, color: s.color }}
                    >
                      <Icon name={s.icon} className="h-4 w-4" />
                    </span>
                    <Sparkline points={s.points} color={s.color} />
                  </div>
                  <p className="text-2xl font-bold text-slate-50">{s.value}</p>
                  <p className="mt-0.5 text-[11px] leading-tight text-slate-400">{s.label}</p>
                  <p
                    className={[
                      "mt-2 flex items-center gap-1 text-[11px] font-medium",
                      s.up ? "text-emerald-400" : "text-rose-400",
                    ].join(" ")}
                  >
                    <span>{s.up ? "▲" : "▼"}</span>
                    {s.delta}
                    <span className="font-normal text-slate-500">vs May 1 – May 7</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Panels */}
            <div className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-3">
              {/* Recent Alerts */}
              <div className={panelClass}>
                <PanelHeader title="Recent Alerts" badge="23" />
                <ul className="space-y-3">
                  {alerts.map((a) => (
                    <li key={a.id} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: a.color }}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-[12px] text-slate-200">
                          <span className="font-semibold text-slate-100">{a.id}</span>{" "}
                          {a.text}
                        </p>
                      </div>
                      <span className="shrink-0 text-[10px] text-slate-500">{a.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 border-t border-white/5 pt-2 text-[10px] text-slate-500">
                  Showing 1–5 of 23 alerts
                </p>
              </div>

              {/* Order Timeline */}
              <div className={panelClass}>
                <PanelHeader title="Order Timeline" />
                <div className="flex items-center justify-between">
                  {timeline.map((t, i) => (
                    <div key={t.label} className="flex flex-1 flex-col items-center text-center">
                      <div className="flex w-full items-center">
                        <span
                          className={[
                            "h-1 flex-1",
                            i === 0 ? "opacity-0" : t.done ? "bg-amber-400/60" : "bg-white/10",
                          ].join(" ")}
                        />
                        <span
                          className={[
                            "h-2.5 w-2.5 shrink-0 rounded-full",
                            t.done ? "bg-amber-400" : "border border-white/25 bg-transparent",
                          ].join(" ")}
                        />
                        <span
                          className={[
                            "h-1 flex-1",
                            i === timeline.length - 1
                              ? "opacity-0"
                              : timeline[i + 1].done
                              ? "bg-amber-400/60"
                              : "bg-white/10",
                          ].join(" ")}
                        />
                      </div>
                      <p className="mt-1.5 text-[10px] font-medium text-slate-300">{t.label}</p>
                      <p className="text-[9px] text-slate-500">{t.date}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.02] p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-[12px] font-semibold text-slate-100">#1027</span>
                    <span className="rounded bg-rose-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-rose-300">
                      Paid, Not Fulfilled
                    </span>
                    <span className="rounded bg-amber-400/15 px-1.5 py-0.5 text-[9px] font-semibold text-amber-300">
                      High Priority
                    </span>
                    <span className="ml-auto text-[9px] text-slate-500">2m ago</span>
                  </div>
                  <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-[10px]">
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Customer</dt>
                      <dd className="text-slate-300">John D.</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Total</dt>
                      <dd className="text-slate-300">$89.97</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Items</dt>
                      <dd className="text-slate-300">2</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Order Date</dt>
                      <dd className="text-slate-300">May 12</dd>
                    </div>
                  </dl>
                  <p className="mt-2 text-[10px] text-slate-400">
                    <span className="text-slate-500">Notes: </span>
                    Express shipping selected. Customer messaged about delivery.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <button className="rounded-md bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-2.5 py-1.5 text-[10px] font-semibold text-slate-950">
                      Create Fulfillment
                    </button>
                    <button className="flex items-center gap-1 rounded-md border border-white/15 px-2.5 py-1.5 text-[10px] font-medium text-slate-200">
                      <Icon name="user" className="h-3 w-3" />
                      Assign
                    </button>
                    <button className="rounded-md border border-white/15 px-2 py-1.5 text-[10px] font-medium text-slate-300">
                      •••
                    </button>
                  </div>
                </div>
              </div>

              {/* Orders Needing Attention */}
              <div className={panelClass}>
                <PanelHeader title="Orders Needing Attention" />
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-2 text-[10px] font-medium uppercase tracking-wide text-slate-500">
                  <span>Order</span>
                  <span>Issue</span>
                  <span className="text-right">Action</span>
                </div>
                <ul className="mt-1 divide-y divide-white/5">
                  {orders.map((o) => (
                    <li
                      key={o.id}
                      className="grid grid-cols-[auto_1fr_auto] items-center gap-x-2 py-2"
                    >
                      <div>
                        <p className="text-[11px] font-semibold text-slate-100">{o.id}</p>
                        <p className="text-[9px] text-slate-500">{o.total}</p>
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-[11px] text-slate-300">{o.issue}</p>
                        <p className="text-[9px] text-slate-500">{o.age}</p>
                      </div>
                      <button
                        className={[
                          "shrink-0 rounded-md px-2.5 py-1 text-[10px] font-semibold",
                          o.variant === "gold"
                            ? "bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-slate-950"
                            : "border border-white/15 text-slate-200",
                        ].join(" ")}
                      >
                        {o.action}
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 border-t border-white/5 pt-2 text-[10px] text-slate-500">
                  Showing 1–5 of 23
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

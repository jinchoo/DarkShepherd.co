"use client";

const roles = [
  "Founder / Owner",
  "Operations",
  "Customer Support",
  "Fulfillment",
  "Engineering / Tech",
  "Other",
] as const;

const orderVolumes = [
  "Under 100",
  "100 – 500",
  "500 – 1,000",
  "1,000 – 5,000",
  "5,000+",
] as const;

const fieldClass =
  "w-full rounded-lg border border-white/15 bg-[#0a0a0a] px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 transition focus:border-amber-300/45 focus:outline-none [color-scheme:dark]";

const labelClass = "mb-1 block text-[11px] font-medium text-slate-400";

export function BetaSignupForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-2.5"
    >
      <div className="grid gap-2.5 sm:grid-cols-2">
        <div>
          <label htmlFor="beta-fullName" className={labelClass}>
            Full Name
          </label>
          <input
            id="beta-fullName"
            name="fullName"
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="beta-workEmail" className={labelClass}>
            Work Email
          </label>
          <input
            id="beta-workEmail"
            name="workEmail"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="beta-storeName" className={labelClass}>
            Store Name
          </label>
          <input
            id="beta-storeName"
            name="storeName"
            placeholder="Your Shopify store"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="beta-shopifyUrl" className={labelClass}>
            Shopify Store URL
          </label>
          <input
            id="beta-shopifyUrl"
            name="shopifyUrl"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="yourstore.myshopify.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="beta-role" className={labelClass}>
            Role
          </label>
          <select id="beta-role" name="role" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select your role
            </option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="beta-orderVolume" className={labelClass}>
            Average Orders Per Month
          </label>
          <select
            id="beta-orderVolume"
            name="orderVolume"
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Select volume
            </option>
            {orderVolumes.map((volume) => (
              <option key={volume} value={volume}>
                {volume}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="beta-challenge" className={labelClass}>
          What&apos;s your biggest challenge with order fulfillment today?
        </label>
        <textarea
          id="beta-challenge"
          name="challenge"
          rows={3}
          placeholder="Tell us what slows your team down..."
          className={`${fieldClass} min-h-[4.5rem] resize-y`}
        />
      </div>

      <div
        aria-disabled="true"
        className="inline-flex w-full cursor-default select-none items-center justify-center rounded-lg bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-6 py-2.5 text-sm font-semibold text-slate-950 opacity-90 shadow-[0_8px_28px_rgba(251,191,36,0.28)] sm:text-base"
      >
        The Pack is Almost Ready
      </div>

      <p className="flex items-center justify-center gap-2 text-center text-xs text-slate-500">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-amber-300/70" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V8a5 5 0 0 1 10 0v3M6.5 11h11A1.5 1.5 0 0 1 19 12.5v7A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-7A1.5 1.5 0 0 1 6.5 11Z" />
        </svg>
        Your information is safe with us. No spam, ever.
      </p>
    </form>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero min-h-screen bg-[#0a1628] py-32 text-slate-100">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes hero-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .hero-float { animation: hero-float 5.5s ease-in-out infinite; }
      ` }} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-24 px-6 py-16 lg:grid-cols-2 lg:px-10">
        <div className="relative flex flex-col justify-center space-y-10">
          {/* Subtle gradient glass behind text — improves contrast, no border */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.85]"
            style={{
              background:
                "linear-gradient(135deg, rgba(248,250,252,0.06) 0%, rgba(248,250,252,0.02) 50%, transparent 100%)",
            }}
            aria-hidden
          />
          <h1 className="relative z-10 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Your headline here
          </h1>
          <p className="relative z-10 max-w-lg text-lg text-slate-300">
            Supporting copy for your hero section. Replace with your own
            messaging.
          </p>
          <div className="relative z-10 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-lg bg-slate-100 px-6 py-3 font-medium text-slate-900 transition hover:bg-white"
            >
              Primary action
            </button>
            <button
              type="button"
              className="rounded-lg border border-slate-500 px-6 py-3 font-medium text-slate-100 transition hover:border-slate-400"
            >
              Secondary
            </button>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="hero-float relative aspect-square w-full max-w-md lg:max-w-lg">
            {/* Radial glow behind shield */}
            <div
              className="pointer-events-none absolute inset-0 rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(251, 191, 36, 0.35) 0%, rgba(251, 191, 36, 0.12) 40%, transparent 70%)",
              }}
              aria-hidden
            />
            <Image
              src="/shield.png"
              alt=""
              fill
              className="relative z-10 object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

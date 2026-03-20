import { SiteBackground } from "@/components/layout/SiteBackground";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function WhyItMattersPage() {
  return (
    <div className="font-display relative bg-[#050816] text-slate-100">
      <SiteBackground />
      <SiteHeader />
      <main className="w-full">
        <div className="mx-auto max-w-[900px] px-6 pt-6 pb-16">
          <p>Back to Home</p>
          <h1>WHY IT MATTERS</h1>
          <p>Test content</p>
        </div>
      </main>
    </div>
  );
}

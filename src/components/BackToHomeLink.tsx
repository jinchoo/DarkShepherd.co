"use client";

import { useRouter } from "next/navigation";

export function BackToHomeLink() {
  const router = useRouter();

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    const navigate = () => router.push("/");
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as Document & { startViewTransition: (cb: () => void | Promise<void>) => void }).startViewTransition(navigate);
    } else {
      navigate();
    }
  }

  return (
    <a
      href="/"
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300/90 transition hover:text-amber-200"
      aria-label="Back to Home"
    >
      <span aria-hidden>↑</span>
      Back to Home
    </a>
  );
}

"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { navigateWithViewTransition } from "@/lib/viewTransition";

type SmoothLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function SmoothLink({ href, className, children }: SmoothLinkProps) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Let modified clicks (new tab, etc.) behave natively.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigateWithViewTransition(router, href);
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}


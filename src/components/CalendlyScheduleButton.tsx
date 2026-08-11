"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { navigateWithViewTransition } from "@/lib/viewTransition";

type CalendlyScheduleButtonProps = {
  className?: string;
  children: React.ReactNode;
};

const BETA_HREF = "/join-the-beta";

export function CalendlyScheduleButton({
  className,
  children,
}: CalendlyScheduleButtonProps) {
  const router = useRouter();

  return (
    <Link
      className={`${className ?? ""} no-underline`}
      href={BETA_HREF}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        navigateWithViewTransition(router, BETA_HREF);
      }}
    >
      {children}
    </Link>
  );
}

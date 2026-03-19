"use client";

import React from "react";

type CalendlyScheduleButtonProps = {
  className?: string;
  children: React.ReactNode;
};

const CALENDLY_EVENT_URL = "https://calendly.com/jin-darkshepherd/30min";

export function CalendlyScheduleButton({
  className,
  children,
}: CalendlyScheduleButtonProps) {
  return (
    <a
      className={`${className ?? ""} no-underline`}
      href={CALENDLY_EVENT_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

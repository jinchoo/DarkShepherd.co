import type { ReactNode } from "react";

type SiteSectionProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
};

/**
 * Vertical section rhythm: mobile py-14 → desktop py-24 (mobile-first).
 */
export function SiteSection({ children, className = "", as: Tag = "section" }: SiteSectionProps) {
  return (
    <Tag
      className={[
        "w-full min-w-0 py-14 sm:py-16 md:py-20 lg:py-24",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}

import type { ReactNode } from "react";

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Site-wide content width: max 1280px, horizontal padding clamp(16px, 4vw, 48px).
 */
export function SiteContainer({ className = "", children }: SiteContainerProps) {
  return (
    <div
      className={[
        "ds-site-container mx-auto w-full min-w-0 max-w-[1280px]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

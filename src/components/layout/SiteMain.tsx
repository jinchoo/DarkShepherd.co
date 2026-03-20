import type { ReactNode } from "react";
import { SiteContainer } from "./SiteContainer";

type SiteMainProps = {
  children: ReactNode;
  className?: string;
  /** Extra top padding under sticky header (mobile-first). */
  topPadding?: "default" | "compact" | "none";
  /**
   * Use with InternalPageShell: no default top padding (shell owns pt-24+).
   * Keeps modest bottom padding for fixed paw / scroll affordances.
   */
  internal?: boolean;
};

/**
 * Main column: consistent vertical rhythm + shared horizontal container.
 */
export function SiteMain({
  children,
  className = "",
  topPadding = "default",
  internal = false,
}: SiteMainProps) {
  const pt =
    internal || topPadding === "none"
      ? "pt-0"
      : topPadding === "compact"
        ? "pt-6 sm:pt-8 md:pt-10"
        : "pt-8 sm:pt-10 md:pt-12 lg:pt-14";

  const pb = internal ? "pb-12 sm:pb-16 lg:pb-20" : "pb-16 sm:pb-20 lg:pb-24";

  return (
    <main className={["relative z-10 w-full min-w-0", pb, pt, className].join(" ")}>
      <SiteContainer className="flex min-w-0 flex-col">{children}</SiteContainer>
    </main>
  );
}

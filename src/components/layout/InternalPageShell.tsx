import type { ReactNode } from "react";
import { ScrollToTopOnMount } from "./ScrollToTopOnMount";

export type InternalPageVariant = "narrow" | "medium" | "wide";

const variantMaxWidth: Record<InternalPageVariant, string> = {
  /** Text-heavy pages: Why It Matters, Pricing */
  narrow: "max-w-[760px]",
  /** FAQ, mixed content */
  medium: "max-w-[980px]",
  /** Card / grid pages: What We Check, How It Works */
  wide: "max-w-[1180px]",
};

type InternalPageShellProps = {
  variant: InternalPageVariant;
  children: ReactNode;
  /** Extra classes on the outer shell (padding wrapper). */
  className?: string;
  /** Extra classes on the inner width-constrained column. */
  contentClassName?: string;
};

/**
 * Internal marketing pages: intentional top anchor (not hugging navbar), variant max-width,
 * balanced bottom padding. Does not use vertical centering — content flows from a stable top rhythm.
 * Outer width follows SiteContainer (1280px); inner column is narrow | medium | wide.
 */
export function InternalPageShell({
  variant,
  children,
  className = "",
  contentClassName = "",
}: InternalPageShellProps) {
  return (
    <div
      className={[
        "flex w-full min-w-0 flex-col",
        "pt-20 md:pt-24 lg:pt-28",
        "pb-16 md:pb-20",
        className,
      ].join(" ")}
    >
      <ScrollToTopOnMount />
      <div
        className={[
          "mx-auto w-full min-w-0",
          variantMaxWidth[variant],
          contentClassName,
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

/** Consistent back-link row above page body (full width of shell column). */
export function InternalBackLinkRow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "flex w-full justify-center",
        "pb-8 md:pb-10",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import React from "react";

type SmoothLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function SmoothLink({ href, className, children }: SmoothLinkProps) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const navigate = () => {
      // Prevent preserved scroll position from making internal pages land low.
      window.scrollTo(0, 0);
      router.push(href);
    };

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as Document & { startViewTransition: (cb: () => void | Promise<void>) => void }).startViewTransition(
        navigate,
      );
    } else {
      navigate();
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}


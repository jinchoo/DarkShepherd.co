"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useEffect, useRef } from "react";
import { scrollToTopInstant } from "@/lib/smoothScroll";

/**
 * Pin each new route to the top once, before paint. No timers, no body locks.
 */
export function ScrollToTopOnRouteChange() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;
    scrollToTopInstant();
  }, [pathname]);

  return null;
}

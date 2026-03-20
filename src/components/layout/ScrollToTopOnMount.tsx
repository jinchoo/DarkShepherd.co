"use client";

import { useEffect } from "react";

/**
 * Internal pages sometimes land low due to preserved/Restored scroll position.
 * This makes internal routes deterministic by forcing scroll to top on mount.
 */
export function ScrollToTopOnMount() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // If the browser supports manual scroll restoration, disable it.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return null;
}


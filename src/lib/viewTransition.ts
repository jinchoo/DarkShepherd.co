type MinimalRouter = {
  push: (href: string, options?: { scroll?: boolean }) => void;
};

/**
 * Navigate with an optional view transition. Uses `scroll: false` so Next.js
 * does not animate/jump the outgoing page; the destination is pinned to top
 * by ScrollToTopOnRouteChange after the route mounts.
 */
export function navigateWithViewTransition(router: MinimalRouter, href: string) {
  const navigate = () => {
    router.push(href, { scroll: false });
  };

  if (typeof document !== "undefined" && "startViewTransition" in document) {
    (
      document as Document & {
        startViewTransition: (cb: () => void | Promise<void>) => void;
      }
    ).startViewTransition(navigate);
  } else {
    navigate();
  }
}

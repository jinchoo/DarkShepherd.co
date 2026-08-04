type MinimalRouter = { push: (href: string) => void };

/**
 * Navigate to `href` using the View Transitions API when available so the
 * site-wide slide-up page transition (see globals.css) plays. Falls back to a
 * plain push otherwise. Resets scroll so the destination renders at the top.
 */
export function navigateWithViewTransition(router: MinimalRouter, href: string) {
  const navigate = () => {
    window.scrollTo(0, 0);
    router.push(href);
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

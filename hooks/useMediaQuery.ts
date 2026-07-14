"use client";

import { useSyncExternalStore } from "react";

/** Scholar’s margin collapses below this width (matches globals.css). */
export const NARROW_MARGIN_QUERY = "(max-width: 70.99rem)";

/** Phone nav drawer breakpoint (matches globals.css). */
export const PHONE_NAV_QUERY = "(max-width: 40rem)";

function subscribe(query: string, onChange: () => void) {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/**
 * SSR/hydration snapshot should prefer the “collapsed” layout (true for
 * max-width queries) so mobile first paint stays quiet; desktop CSS
 * !important overrides keep the wide layout correct before the effect runs.
 */
export function useMediaQuery(query: string, serverSnapshot = true) {
  return useSyncExternalStore(
    (onChange) => subscribe(query, onChange),
    () => window.matchMedia(query).matches,
    () => serverSnapshot,
  );
}

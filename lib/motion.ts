import { spring } from "@/lib/springs";

/**
 * Typographic motion — same three-tier springs as Fluid Functionalism UI.
 * Sidenotes / margin notes use moderate (panel); header chrome uses fast.
 * Exits are one tier quicker via spring.*.exit when AnimatePresence is used.
 */
export const quietTransition = spring.moderate;

export const quietTransitionFast = spring.fast;

export const quietTransitionSlow = spring.slow;

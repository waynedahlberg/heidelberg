/** Shared Motion curves — aligned with the View Transitions fade in globals.css. */
export const easeQuiet = [0.4, 0, 0.2, 1] as const;

export const quietTransition = {
  duration: 0.28,
  ease: easeQuiet,
} as const;

export const quietTransitionFast = {
  duration: 0.22,
  ease: easeQuiet,
} as const;

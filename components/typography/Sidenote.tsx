"use client";

import { useMediaQuery, NARROW_MARGIN_QUERY } from "@/hooks/useMediaQuery";
import { quietTransition } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";
import { useId, useState, type ReactNode } from "react";

/**
 * A numbered sidenote in the scholar's margin (Tufte mechanics; EoTS 6.1 —
 * notes belong beside the text they serve, not exiled to the foot of the page).
 *
 * Wide viewports: the note floats into the right margin, numbered
 * automatically by a CSS counter. Narrow viewports: the note hides behind
 * its superscript number; tapping the number reveals it inline with a short
 * Motion height/opacity fade.
 *
 * Usage in MDX, inline within a sentence:
 *   ...the Pequod's crew<Sidenote>Melville shipped aboard the whaler
 *   Acushnet in 1841.</Sidenote> was drawn from every island...
 */
export function Sidenote({ children }: { children: ReactNode }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const narrow = useMediaQuery(NARROW_MARGIN_QUERY, true);
  const reduceMotion = useReducedMotion();
  const expanded = !narrow || open;

  return (
    <>
      <button
        type="button"
        className="margin-toggle sidenote-number"
        aria-expanded={narrow ? open : undefined}
        aria-controls={narrow ? id : undefined}
        tabIndex={narrow ? 0 : -1}
        onClick={() => {
          if (narrow) setOpen((value) => !value);
        }}
      />
      <motion.span
        id={id}
        role="note"
        className="sidenote"
        initial={false}
        animate={expanded ? "open" : "closed"}
        variants={{
          open: {
            height: "auto",
            opacity: 1,
            display: "block",
          },
          closed: {
            height: 0,
            opacity: 0,
            transitionEnd: { display: "none" },
          },
        }}
        transition={reduceMotion ? { duration: 0 } : quietTransition}
        style={{ overflow: "hidden" }}
      >
        {children}
      </motion.span>
    </>
  );
}

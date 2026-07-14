"use client";

import { useMediaQuery, NARROW_MARGIN_QUERY } from "@/hooks/useMediaQuery";
import { quietTransition } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import { useId, useState, type ReactNode } from "react";

/**
 * An unnumbered margin note — for asides, glosses, and marginalia that need
 * no anchor in the text. On narrow viewports a rubric ⊕ marks the spot;
 * tapping it reveals the note inline with a short Motion height/opacity fade.
 */
export function MarginNote({ children }: { children: ReactNode }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const narrow = useMediaQuery(NARROW_MARGIN_QUERY, true);
  const reduceMotion = useReducedMotion();
  const expanded = !narrow || open;

  return (
    <>
      <button
        type="button"
        className="margin-toggle"
        aria-label={open ? "Hide margin note" : "Show margin note"}
        aria-expanded={narrow ? open : undefined}
        aria-controls={narrow ? id : undefined}
        tabIndex={narrow ? 0 : -1}
        onClick={() => {
          if (narrow) setOpen((value) => !value);
        }}
      >
        <span className="marginnote-glyph" aria-hidden="true">
          &#8853;
        </span>
      </button>
      <motion.span
        id={id}
        role="note"
        className="marginnote"
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

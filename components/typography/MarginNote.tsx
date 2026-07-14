"use client";

import { useId, type ReactNode } from "react";

/**
 * An unnumbered margin note — for asides, glosses, and marginalia that need
 * no anchor in the text. On narrow viewports a rubric hedera (❧) marks the
 * spot; tapping it reveals the note inline.
 */
export function MarginNote({ children }: { children: ReactNode }) {
  const id = useId();
  return (
    <>
      <label htmlFor={id} className="margin-toggle">
        <span className="marginnote-glyph">&#8853;</span>
      </label>
      <input type="checkbox" id={id} className="margin-toggle" />
      <span className="marginnote">{children}</span>
    </>
  );
}

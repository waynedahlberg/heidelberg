"use client";

import { useId, type ReactNode } from "react";

/**
 * A numbered sidenote in the scholar's margin (Tufte mechanics; EoTS 6.1 —
 * notes belong beside the text they serve, not exiled to the foot of the page).
 *
 * Wide viewports: the note floats into the right margin, numbered
 * automatically by a CSS counter. Narrow viewports: the note hides behind
 * its superscript number; tapping the number reveals it inline. No JS runs —
 * the toggle is a checkbox.
 *
 * Usage in MDX, inline within a sentence:
 *   ...the Pequod's crew<Sidenote>Melville shipped aboard the whaler
 *   Acushnet in 1841.</Sidenote> was drawn from every island...
 */
export function Sidenote({ children }: { children: ReactNode }) {
  const id = useId();
  return (
    <>
      <label htmlFor={id} className="margin-toggle sidenote-number" />
      <input type="checkbox" id={id} className="margin-toggle" />
      <span className="sidenote">{children}</span>
    </>
  );
}

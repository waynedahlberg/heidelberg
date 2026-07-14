import type { ReactNode } from "react";

/**
 * The one deliberately loud element on the page. Set large in Alegreya
 * italic, centered between hairlines, marked with the rubric hedera.
 * Use at most one per essay — a pull quote competes with the text,
 * and Bringhurst's counsel is that nothing should.
 */
export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <aside className="pullquote fullwidth" role="presentation">
      {typeof children === "string" ? <p>{children}</p> : children}
    </aside>
  );
}

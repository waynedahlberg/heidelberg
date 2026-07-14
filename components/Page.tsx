import type { ReactNode } from "react";

type Shell = "folio" | "measure";

/**
 * Site page shell. Defaults to the folio width (measure + gutter +
 * scholar's margin) so every route shares one outer edge. Pass
 * `shell="measure"` only when a page must opt out of the reserved margin.
 */
export function Page({
  children,
  shell = "folio",
}: {
  children: ReactNode;
  shell?: Shell;
}) {
  return (
    <div className="page" data-shell={shell === "folio" ? undefined : shell}>
      {children}
    </div>
  );
}

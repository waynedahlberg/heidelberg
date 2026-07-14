import type { ReactNode } from "react";
import { QuoteSource } from "./QuoteSource";

/**
 * A chapter-opening epigraph: italic, set apart from the text block,
 * attributed in small caps + italic work title (EoTS ch. 4; tufte-css
 * div.epigraph).
 *
 *   <Epigraph author="Herman Melville" work="Moby-Dick" year="1851">
 *     Call me Ishmael.
 *   </Epigraph>
 */
export function Epigraph({
  children,
  author,
  work,
  year,
}: {
  children: ReactNode;
  author?: string;
  work?: string;
  year?: string;
}) {
  return (
    <blockquote className="epigraph">
      {typeof children === "string" ? <p>{children}</p> : children}
      {(author || work) && <QuoteSource author={author} work={work} year={year} />}
    </blockquote>
  );
}

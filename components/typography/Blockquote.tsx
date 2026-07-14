import type { ReactNode } from "react";
import { QuoteSource } from "./QuoteSource";

/**
 * A block quotation with proper attribution (EoTS 2.3.3): indented one
 * unit, a size smaller, source set as small-caps author + italic work.
 */
export function Blockquote({
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
    <blockquote>
      {children}
      {(author || work) && <QuoteSource author={author} work={work} year={year} />}
    </blockquote>
  );
}

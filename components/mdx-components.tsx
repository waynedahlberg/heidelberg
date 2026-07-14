import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import {
  Sidenote,
  MarginNote,
  Epigraph,
  QuoteSource,
  PullQuote,
  Blockquote,
  Newthought,
  SectionBreak,
  Verse,
  Figure,
  SmallCaps,
} from "@/components/typography";

/**
 * The components available inside every MDX essay. Plain markdown maps to
 * the typeset defaults (styling lives in globals.css under .typeset);
 * the typographic set is in scope without imports.
 */
export const mdxComponents: MDXComponents = {
  // Markdown element overrides
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="table-wrap">
      <table {...props} />
    </div>
  ),
  hr: () => <SectionBreak />,

  // The typographic component set
  Sidenote,
  MarginNote,
  Epigraph,
  QuoteSource,
  PullQuote,
  Blockquote,
  Newthought,
  SectionBreak,
  Verse,
  Figure,
  SmallCaps,
};

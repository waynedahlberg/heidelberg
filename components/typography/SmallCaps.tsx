import type { ReactNode } from "react";

/**
 * True small caps via the Alegreya SC companion face — never synthesized
 * (EoTS 3.2.2; webtypography 3.2.2). For abbreviations, prefer <abbr>,
 * which is styled identically; use this for names and emphasis:
 *
 *   <SmallCaps>Ahab</SmallCaps> had been in colleges, as well as ’mong the cannibals…
 */
export function SmallCaps({ children }: { children: ReactNode }) {
  return <span className="smallcaps">{children}</span>;
}

import type { ReactNode } from "react";

/**
 * Opens a section the way fine books do: the first few words set in
 * letterspaced true small caps (Tufte's "newthought"; EoTS 4.1).
 *
 *   <p className="flush"><Newthought>In the beginning</Newthought> was the word…</p>
 */
export function Newthought({ children }: { children: ReactNode }) {
  return <span className="newthought">{children}</span>;
}

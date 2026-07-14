"use client";

import { InputCopy } from "@/components/ui/input-copy";

const citation =
  "Thoreau, Henry David. Walden; or, Life in the Woods. Boston: Ticknor and Fields, 1854.";

export function DemoInputCopyCite() {
  return (
    <aside className="ui-demo" aria-label="Copy citation for Walden extract">
      <p className="ui-demo-label">Copy — Cite this extract</p>
      <InputCopy value={citation} label="Cite this extract" />
    </aside>
  );
}

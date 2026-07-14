"use client";

import { useState } from "react";
import { ColorPickerPopover } from "@/components/ui/color-picker";

const bookishReds = [
  "#94321f",
  "#6b1f14",
  "#8b2942",
  "#a8482a",
  "#5c1a12",
  "#7a2e1e",
];

export function DemoColorRubric() {
  const [value, setValue] = useState("#94321f");

  return (
    <aside className="ui-demo" aria-label="Color picker for rubric red">
      <p className="ui-demo-label">Colour — Rubric red for the margin</p>
      <div className="flex flex-col gap-2">
        <ColorPickerPopover
          triggerLabel="Rubric red"
          defaultValue="#94321f"
          value={value}
          onValueChange={(next) => setValue(next)}
          swatches={bookishReds}
        />
        <p className="text-[13px] text-muted-foreground tabular-nums">
          Current ink: {value}
        </p>
      </div>
    </aside>
  );
}

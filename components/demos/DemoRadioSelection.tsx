"use client";

import { useState } from "react";
import { RadioGroup, RadioItem } from "@/components/ui/radio-group";

const modes = [
  {
    value: "variation",
    label: "Variation",
    gloss: "Slight differences among individuals — the raw material of change.",
  },
  {
    value: "inheritance",
    label: "Inheritance",
    gloss: "What is useful tends to be passed on; what is not, fades.",
  },
  {
    value: "struggle",
    label: "Struggle",
    gloss: "More are born than can survive; competition sorts the living.",
  },
] as const;

export function DemoRadioSelection() {
  const [mode, setMode] = useState("variation");
  const selected = modes.find((m) => m.value === mode);

  return (
    <aside className="ui-demo" aria-label="Radio group for natural selection modes">
      <p className="ui-demo-label">Radio — Modes of natural selection</p>
      <RadioGroup value={mode} onValueChange={setMode}>
        {modes.map((m, i) => (
          <RadioItem key={m.value} label={m.label} index={i} value={m.value} />
        ))}
      </RadioGroup>
      {selected && (
        <p className="mt-2 text-[13px] text-muted-foreground">{selected.gloss}</p>
      )}
    </aside>
  );
}

"use client";

import { useState } from "react";
import { CheckboxGroup, CheckboxItem } from "@/components/ui/checkbox-group";

const contenders = [
  "Dogs of the same litter",
  "Seedlings in a crowded bed",
  "Parasites upon their hosts",
  "Birds for nesting sites",
  "Weeds among the wheat",
];

export function DemoCheckboxStruggle() {
  const [checked, setChecked] = useState<Set<number>>(
    () => new Set([0, 2])
  );

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <aside className="ui-demo" aria-label="Checkbox group for what contends">
      <p className="ui-demo-label">Checkbox — What contends</p>
      <CheckboxGroup checkedIndices={checked}>
        {contenders.map((label, i) => (
          <CheckboxItem
            key={label}
            label={label}
            index={i}
            checked={checked.has(i)}
            onToggle={() => toggle(i)}
          />
        ))}
      </CheckboxGroup>
    </aside>
  );
}

"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { TabsSubtle, TabsSubtleItem } from "@/components/ui/tabs-subtle";

const metaphors = [
  { value: "wedge", label: "The wedge of life" },
  { value: "tree", label: "The branching tree" },
  { value: "war", label: "A war of nature" },
  { value: "net", label: "An entangled bank" },
];

const readings = ["Literal", "Metaphorical", "Malthusian"] as const;

export function DemoSelectTabs() {
  const [metaphor, setMetaphor] = useState("wedge");
  const [tab, setTab] = useState(1);

  return (
    <aside className="ui-demo" aria-label="Select and tabs for struggle metaphors">
      <p className="ui-demo-label">Select & Tabs — Struggle metaphors</p>
      <div className="flex flex-col gap-4">
        <Select value={metaphor} onValueChange={setMetaphor}>
          <SelectTrigger placeholder="Choose a metaphor…" />
          <SelectContent>
            {metaphors.map((m, i) => (
              <SelectItem key={m.value} value={m.value} index={i}>
                {m.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <TabsSubtle selectedIndex={tab} onSelect={setTab}>
          {readings.map((label, i) => (
            <TabsSubtleItem key={label} label={label} index={i} />
          ))}
        </TabsSubtle>
        <p className="text-[13px] text-muted-foreground">
          {tab === 0 &&
            "Read as description of plants and animals competing for light, food, and room."}
          {tab === 1 &&
            "Read as figure: struggle names pressure without implying conscious combat."}
          {tab === 2 &&
            "Read through Malthus — populations press against means of subsistence."}
        </p>
      </div>
    </aside>
  );
}

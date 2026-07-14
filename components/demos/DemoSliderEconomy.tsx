"use client";

import { useState } from "react";
import { SliderComfortable } from "@/components/ui/slider";

export function DemoSliderEconomy() {
  const [houseBudget, setHouseBudget] = useState(28);
  const [boardThickness, setBoardThickness] = useState(2);

  return (
    <aside className="ui-demo" aria-label="Sliders for Walden house economy">
      <p className="ui-demo-label">Sliders — Thoreau&apos;s house economy</p>
      <div className="flex flex-col gap-3 w-full">
        {/* Open / continuous — Comfortable scrubber */}
        <SliderComfortable
          label="House budget"
          value={houseBudget}
          onChange={setHouseBudget}
          min={0}
          max={40}
          step={1}
          variant="scrubber"
          formatValue={(v) => `$${v}`}
        />
        {/* Incremented — Comfortable pips */}
        <SliderComfortable
          label="Board thickness"
          value={boardThickness}
          onChange={setBoardThickness}
          min={1}
          max={4}
          step={1}
          variant="pips"
          formatValue={(v) => `${v}"`}
        />
      </div>
    </aside>
  );
}

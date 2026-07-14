"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export function DemoSwitchCivility() {
  const [glosses, setGlosses] = useState(true);

  return (
    <aside className="ui-demo" aria-label="Switch for modern glosses">
      <p className="ui-demo-label">Switch — Modern glosses</p>
      <Switch
        label="Show modern glosses"
        checked={glosses}
        onToggle={() => setGlosses((v) => !v)}
      />
      {glosses && (
        <p className="mt-2 text-[13px] text-muted-foreground">
          Glosses paraphrase eighteenth-century phrasing for today&apos;s reader —
          e.g. &ldquo;do not spit into the fire&rdquo; becomes a note on shared space.
        </p>
      )}
    </aside>
  );
}

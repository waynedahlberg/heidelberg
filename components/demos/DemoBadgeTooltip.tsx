"use client";

import { Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";

export function DemoBadgeTooltip() {
  return (
    <aside className="ui-demo" aria-label="Manuscript status badges and tooltip">
      <p className="ui-demo-label">Badge & Tooltip — Manuscript status</p>
      <div className="flex flex-wrap items-center gap-2">
        <Badge color="amber" variant="dot">
          In fair copy
        </Badge>
        <Badge color="emerald" variant="dot">
          Press-ready
        </Badge>
        <Badge color="rose" variant="solid">
          Marginalia
        </Badge>
        <Tooltip content="Folio 47 — ink still drying on the last emendation">
          <Button variant="ghost" size="icon-sm" aria-label="Manuscript note">
            <Info />
          </Button>
        </Tooltip>
      </div>
    </aside>
  );
}

"use client";

import { useState } from "react";
import { Save, Feather, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DemoButtons() {
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    window.setTimeout(() => setSaving(false), 1800);
  };

  return (
    <aside className="ui-demo" aria-label="Button specimen for draft essays">
      <p className="ui-demo-label">Buttons — Save a draft essay</p>
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="primary" leadingIcon={Save} loading={saving} onClick={handleSave}>
          Save draft
        </Button>
        <Button variant="secondary" leadingIcon={Feather}>
          Annotate
        </Button>
        <Button variant="ghost" leadingIcon={Eye}>
          Preview
        </Button>
      </div>
    </aside>
  );
}

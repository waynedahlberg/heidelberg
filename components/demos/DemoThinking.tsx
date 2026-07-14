"use client";

import { ThinkingIndicator } from "@/components/ui/thinking-indicator";

export function DemoThinking() {
  return (
    <aside className="ui-demo" aria-label="Thinking indicator while setting type">
      <p className="ui-demo-label">Thinking — Setting type</p>
      <ThinkingIndicator />
    </aside>
  );
}

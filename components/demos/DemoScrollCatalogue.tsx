"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

const catalogue = [
  "The white bear of the poles",
  "The white shark of the tropics",
  "The albatross of the Antarctic",
  "The White Steed of the prairies",
  "The Albino man",
  "The white bull of the sacred herd",
  "The white elephant of Siam",
  "The white peacock of Juno",
  "The white dove of the ark",
  "The white horse of the Revelation",
  "The white shroud of the dead",
  "The white squall upon the waters",
];

export function DemoScrollCatalogue() {
  return (
    <aside className="ui-demo" aria-label="Scrollable catalogue of whiteness">
      <p className="ui-demo-label">Scroll — Melville’s white catalogue</p>
      <ScrollArea className="max-h-40 w-full rounded-md border border-border">
        <ul className="space-y-1.5 p-3 text-[13px] text-muted-foreground">
          {catalogue.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ScrollArea>
    </aside>
  );
}

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

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function DemoScrollCatalogue() {
  return (
    <aside className="ui-demo" aria-label="Scrollable catalogue of whiteness">
      <p className="ui-demo-label">Scroll — Melville’s white catalogue</p>
      <p className="mb-[calc(var(--baseline)*0.75)] text-muted-foreground">
        Thumb stays quiet until hover;{" "}
        <span
          className="lowercase tracking-[0.08em]"
          style={{ fontFamily: "var(--font-sc)" }}
        >
          scroll-fade
        </span>{" "}
        marks that more lies below.
      </p>
      <ScrollArea
        className="max-h-40 w-full rounded-md border border-border"
        viewportClassName="scroll-fade"
      >
        <ul className="space-y-1.5 p-3 text-[13px] text-muted-foreground">
          {catalogue.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ScrollArea>

      <p className="ui-demo-label mt-[calc(var(--baseline)*1.25)]">
        Scroll — months across the measure
      </p>
      <ScrollArea
        orientation="horizontal"
        className="w-full rounded-md border border-border"
        viewportClassName="scroll-fade-x"
      >
        <ul className="flex w-max gap-3 p-3 text-[13px] text-muted-foreground">
          {months.map((month) => (
            <li
              key={month}
              className="shrink-0 rounded-md bg-muted px-3 py-1.5"
            >
              {month}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </aside>
  );
}

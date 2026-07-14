"use client";

import { Tabs, TabsList, TabItem, TabPanel } from "@/components/ui/tabs";

export function DemoSegmentedTabs() {
  return (
    <aside className="ui-demo" aria-label="Tabs for Darwin’s three principles">
      <p className="ui-demo-label">Tabs — Variation, Inheritance, Struggle</p>
      <Tabs defaultValue="variation" className="flex flex-col gap-3">
        <TabsList>
          <TabItem value="variation" label="Variation" />
          <TabItem value="inheritance" label="Inheritance" />
          <TabItem value="struggle" label="Struggle" />
        </TabsList>
        <TabPanel value="variation" className="text-[13px] text-muted-foreground leading-relaxed">
          Individuals of the same species differ — slightly, endlessly — in
          habit, structure, and constitution. Darwin begins here: without
          difference, selection has nothing to seize.
        </TabPanel>
        <TabPanel value="inheritance" className="text-[13px] text-muted-foreground leading-relaxed">
          That which varies tends to be transmitted. The slight advantage,
          once born, may reappear in the offspring — the quiet hinge of the
          whole argument.
        </TabPanel>
        <TabPanel value="struggle" className="text-[13px] text-muted-foreground leading-relaxed">
          More are born than can survive. From this pressure — Malthus writ
          upon the living world — favourable variations are preserved, and
          the unfavourable destroyed.
        </TabPanel>
      </Tabs>
    </aside>
  );
}

"use client";

import {
  AccordionGroup,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function DemoAccordionCivility() {
  return (
    <aside className="ui-demo" aria-label="Accordion on Washington's Rules of Civility">
      <p className="ui-demo-label">Accordion — Three themes of Washington&apos;s Rules</p>
      <AccordionGroup type="single" collapsible defaultValue="body">
        <AccordionItem value="body" index={0}>
          <AccordionTrigger>Body</AccordionTrigger>
          <AccordionContent>
            Carriage, countenance, and the quiet discipline of the hand at table —
            how one sits, stands, and eats before company.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="table" index={1}>
          <AccordionTrigger>Table</AccordionTrigger>
          <AccordionContent>
            The shared meal as a school of manners: reach not greedily, speak not
            with a full mouth, leave room for the conversation of others.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="conscience" index={2}>
          <AccordionTrigger>Conscience</AccordionTrigger>
          <AccordionContent>
            Inward civility — speak truth without cruelty, keep confidences, and
            judge privately what you would not have judged of yourself.
          </AccordionContent>
        </AccordionItem>
      </AccordionGroup>
    </aside>
  );
}

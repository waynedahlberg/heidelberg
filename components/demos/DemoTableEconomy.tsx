"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const rows = [
  { item: "Boards", cost: "$8.03½" },
  { item: "Refuse shingles", cost: "$4.00" },
  { item: "Laths", cost: "$1.25" },
  { item: "Two second-hand windows", cost: "$2.43" },
];

export function DemoTableEconomy() {
  return (
    <aside className="ui-demo" aria-label="Table of Walden building costs">
      <p className="ui-demo-label">Table — Cost of the Walden house</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Outlay</TableHead>
            <TableHead className="text-right">Dollars</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row.item} index={i}>
              <TableCell>{row.item}</TableCell>
              <TableCell className="text-right tabular-nums">{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </aside>
  );
}

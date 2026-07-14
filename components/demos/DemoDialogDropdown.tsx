"use client";

import { useState } from "react";
import { BookMarked, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownTrigger,
  DropdownContent,
} from "@/components/ui/dropdown";
import { MenuItem } from "@/components/ui/menu-item";

const catalogue = [
  { label: "The white bear", note: "Ursus — polar, from Scoresby" },
  { label: "The white shark", note: "Carcharodon — teeth like ivory" },
  { label: "The albatross", note: "Diomedea — white as driven snow" },
];

export function DemoDialogDropdown() {
  const [checkedIndex, setCheckedIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside className="ui-demo" aria-label="Dialog and dropdown for whiteness reading">
      <p className="ui-demo-label">Dialog & Dropdown — Whiteness in the catalogue</p>
      <div className="flex flex-wrap items-center gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" leadingIcon={BookMarked}>
              Confirm reading note
            </Button>
          </DialogTrigger>
          <DialogContent size="sm">
            <DialogHeader>
              <DialogTitle>Pin this note?</DialogTitle>
              <DialogDescription>
                &ldquo;It was the whiteness of the whale that above all things
                appalled me&rdquo; — save as a marginalium on Chapter XLII?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">Dismiss</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="primary">Pin note</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownTrigger
            render={
              <Button
                variant="tertiary"
                trailingIcon={ChevronDown}
                active={menuOpen}
              >
                {catalogue[checkedIndex].label}
              </Button>
            }
          />
          <DropdownContent checkedIndex={checkedIndex}>
            {catalogue.map((item, i) => (
              <MenuItem
                key={item.label}
                label={item.label}
                index={i}
                checked={checkedIndex === i}
                onSelect={() => setCheckedIndex(i)}
              />
            ))}
          </DropdownContent>
        </DropdownMenu>
      </div>
      <p className="mt-2 text-[13px] text-muted-foreground">
        {catalogue[checkedIndex].note}
      </p>
    </aside>
  );
}

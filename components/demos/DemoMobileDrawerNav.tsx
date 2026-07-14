"use client";

import { useRef, useState } from "react";
import { Link } from "next-view-transitions";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileDrawer } from "@/components/ui/mobile-drawer";

const nav = [
  { href: "/", label: "Home" },
  { href: "/essays", label: "Essays" },
  { href: "/colophon", label: "Colophon" },
] as const;

export function DemoMobileDrawerNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <aside className="ui-demo" aria-label="Mobile drawer for essay navigation">
      <p className="ui-demo-label">Drawer — Essay navigation</p>
      <Button
        ref={triggerRef}
        variant="secondary"
        leadingIcon={Menu}
        onClick={() => setOpen(true)}
      >
        Open contents
      </Button>
      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        triggerRef={triggerRef}
      >
        <nav className="flex flex-col gap-1 pt-2" aria-label="Site">
          <p className="px-3 pb-2 text-[12px] text-muted-foreground">
            Contents
          </p>
          {nav.map((item) => (
            <Button key={item.href} variant="ghost" className="justify-start" asChild>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
      </MobileDrawer>
    </aside>
  );
}

"use client";

import { Elevated } from "@/lib/elevated";

/**
 * Nested elevation specimen — page → card → popover → menu.
 * Each Elevated panel lifts off its substrate via SurfaceProvider context;
 * popover/menu keep a fixed shadow weight so they still read as overlays
 * three layers down (Fluid Functionalism Surfaces directive).
 *
 * The outer well is recessed paper so light mode (flat surface colors) still
 * shows the first lift; dark mode climbs the warm additive ladder.
 */
export function DemoSurfaces() {
  return (
    <aside className="ui-demo" aria-label="Nested surface elevation">
      <p className="ui-demo-label">Surfaces — nested elevation</p>
      <p className="mb-[calc(var(--baseline)*0.75)] text-muted-foreground">
        Eight levels; each shell tells the next what it sits on. No props
        passed between layers — only substrate context.
      </p>

      <div className="rounded-lg bg-paper-recessed p-4 text-[13px] text-muted-foreground shadow-surface-1">
        <span
          className="lowercase tracking-[0.14em]"
          style={{ fontFamily: "var(--font-sc)", color: "var(--rubric)" }}
        >
          Page · substrate
        </span>

        <Elevated offset={2} className="mt-3 rounded-md p-4">
          <span
            className="lowercase tracking-[0.14em]"
            style={{ fontFamily: "var(--font-sc)", color: "var(--rubric)" }}
          >
            Card · surface +2
          </span>
          <p className="mt-1 mb-0">
            Lifted off the floor — in light, shadow carries the step; in dark,
            the sheet itself lightens.
          </p>

          <Elevated
            offset={2}
            shadowLevel={3}
            className="mt-3 rounded-md p-4"
          >
            <span
              className="lowercase tracking-[0.14em]"
              style={{ fontFamily: "var(--font-sc)", color: "var(--rubric)" }}
            >
              Popover · +2 · shadow fixed
            </span>
            <p className="mt-1 mb-0">
              Background tracks the substrate; popover shadow stays at level 3
              so it still reads as a floating sheet.
            </p>

            <Elevated
              offset={2}
              shadowLevel={3}
              className="mt-3 rounded-md p-3"
            >
              <span
                className="lowercase tracking-[0.14em]"
                style={{ fontFamily: "var(--font-sc)", color: "var(--rubric)" }}
              >
                Menu · +2 · shadow fixed
              </span>
              <p className="mt-1 mb-0">
                Three nests deep and still legible — the same pattern dialogs
                and dropdowns use on this site.
              </p>
            </Elevated>
          </Elevated>
        </Elevated>
      </div>
    </aside>
  );
}

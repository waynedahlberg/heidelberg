"use client";

import { ShapeProvider } from "@/lib/shape-context";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { ReactNode } from "react";

/**
 * Fluid Functionalism providers, shaped for Aldine:
 * rounded (not pill) chrome so interactive specimens sit quietly in the book.
 */
export function UiProviders({ children }: { children: ReactNode }) {
  return (
    <ShapeProvider defaultShape="rounded">
      <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
    </ShapeProvider>
  );
}

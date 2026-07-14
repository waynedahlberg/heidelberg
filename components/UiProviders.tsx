"use client";

import { MotionConfig } from "framer-motion";
import { ShapeProvider } from "@/lib/shape-context";
import { SurfaceProvider } from "@/lib/surface-context";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { ReactNode } from "react";

/**
 * Fluid Functionalism providers, shaped for Heidelberg:
 * — surface-1 as the page substrate so Elevated / Dialog / Dropdown lift
 *   relative to the book without props
 * — MotionConfig reducedMotion="user" so OS reduce-motion drops transforms
 *   while opacity fades remain (FF motion directive)
 * — rounded (not pill) chrome so interactive specimens sit quietly in the book
 */
export function UiProviders({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SurfaceProvider value={1}>
        <ShapeProvider defaultShape="rounded">
          <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
        </ShapeProvider>
      </SurfaceProvider>
    </MotionConfig>
  );
}

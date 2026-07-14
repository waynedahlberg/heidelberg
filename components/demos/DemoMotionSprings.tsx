"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { spring } from "@/lib/springs";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    key: "fast" as const,
    label: "fast",
    note: "0.08s · hover, fades",
    enter: spring.fast,
    exit: spring.fast.exit,
  },
  {
    key: "moderate" as const,
    label: "moderate",
    note: "0.16s · dropdowns, tabs",
    enter: spring.moderate,
    exit: spring.moderate.exit,
  },
  {
    key: "slow" as const,
    label: "slow",
    note: "0.24s · dialogs, drawers",
    enter: spring.slow,
    exit: spring.slow.exit,
  },
];

/**
 * Three-tier spring specimen — exits one tier quicker than entrances
 * (Fluid Functionalism Motion directive).
 */
export function DemoMotionSprings() {
  const [pulse, setPulse] = useState(0);
  const [showExitDemo, setShowExitDemo] = useState(true);

  return (
    <aside className="ui-demo" aria-label="Motion spring tiers">
      <p className="ui-demo-label">Motion — three springs</p>
      <p className="mb-[calc(var(--baseline)*0.75)] text-muted-foreground">
        One vocabulary for the whole book: fast, moderate, slow — exit always
        a little quicker than enter.
      </p>

      <div className="mb-3 flex flex-wrap gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setPulse((n) => n + 1)}
        >
          Replay springs
        </Button>
        <Button
          variant="tertiary"
          size="sm"
          onClick={() => setShowExitDemo((v) => !v)}
        >
          Toggle exit demo
        </Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.key}
            className="rounded-md border border-border bg-card p-3 shadow-surface-2"
          >
            <p
              className="mb-1 lowercase tracking-[0.14em]"
              style={{ fontFamily: "var(--font-sc)", color: "var(--rubric)" }}
            >
              {tier.label}
            </p>
            <p className="mb-3 text-[12px] text-muted-foreground">{tier.note}</p>
            <div className="relative h-8 overflow-hidden rounded-sm bg-muted">
              <motion.span
                key={`${tier.key}-${pulse}`}
                className="absolute top-1 left-1 size-6 rounded-full"
                style={{ background: "var(--ink)" }}
                initial={{ x: 0, opacity: 0.35 }}
                animate={{ x: "4.5rem", opacity: 1 }}
                transition={tier.enter}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-md border border-border bg-card p-3 shadow-surface-3">
        <p
          className="mb-2 lowercase tracking-[0.14em]"
          style={{ fontFamily: "var(--font-sc)", color: "var(--rubric)" }}
        >
          Faster exit
        </p>
        <div className="relative flex h-16 items-center justify-center overflow-hidden rounded-sm bg-muted">
          <AnimatePresence mode="wait">
            {showExitDemo ? (
              <motion.div
                key="panel"
                className="rounded-md bg-surface-5 px-4 py-2 text-[13px] text-foreground shadow-surface-5"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.97,
                  transition: spring.slow.exit,
                }}
                transition={spring.slow}
              >
                Opens on slow · closes on slow.exit
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </aside>
  );
}

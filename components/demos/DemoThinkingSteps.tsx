"use client";

import {
  ThinkingSteps,
  ThinkingStepsHeader,
  ThinkingStepsContent,
  ThinkingStep,
  ThinkingStepDetails,
  ThinkingStepSources,
  ThinkingStepSource,
} from "@/components/ui/thinking-steps";

export function DemoThinkingSteps() {
  return (
    <aside className="ui-demo" aria-label="Thinking steps for an Origin chapter">
      <p className="ui-demo-label">Thinking — Composing an Origin argument</p>
      <ThinkingSteps defaultOpen>
        <ThinkingStepsHeader>Thinking</ThinkingStepsHeader>
        <ThinkingStepsContent>
          <ThinkingStep
            icon="lightbulb"
            label="Frame the chapter"
            description="Open with variation under domestication, then turn to nature."
            status="complete"
            delay={0.05}
          />
          <ThinkingStep
            icon="search"
            label="Gather the evidence"
            description="Pigeons, plants, and the silent pressure of numbers."
            status="complete"
            delay={0.12}
          >
            <ThinkingStepDetails
              summary="Notes from the draft"
              details={[
                "Cite the rock-pigeon as the domestic type",
                "Keep Malthus in the margin, not the headline",
              ]}
            />
            <ThinkingStepSources>
              <ThinkingStepSource color="amber" delay={0.08}>
                Origin, Ch. I
              </ThinkingStepSource>
              <ThinkingStepSource color="blue" delay={0.14}>
                Malthus
              </ThinkingStepSource>
            </ThinkingStepSources>
          </ThinkingStep>
          <ThinkingStep
            icon="pencil"
            label="State the struggle"
            description="Name the pressure without implying conscious combat."
            status="active"
            delay={0.18}
            isLast
          />
        </ThinkingStepsContent>
      </ThinkingSteps>
    </aside>
  );
}

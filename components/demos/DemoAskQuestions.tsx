"use client";

import { useState } from "react";
import {
  AskUserQuestions,
  type AskUserAnswer,
  type AskUserQuestion,
} from "@/components/ui/ask-user-questions";

const questions: AskUserQuestion[] = [
  {
    id: "section",
    title: "Which canto of Song of Myself shall we annotate first?",
    layout: "stacked",
    options: [
      {
        id: "loaf",
        title: "§1 — Loafing",
        description: "I loaf and invite my soul",
      },
      {
        id: "grass",
        title: "§6 — The grass",
        description: "A child said What is the grass?",
      },
      {
        id: "ferry",
        title: "§50 — Crossing",
        description: "The spotted hawk swoops by",
      },
    ],
  },
  {
    id: "pace",
    title: "At what pace shall we read?",
    options: [
      { id: "leisurely", title: "Leisurely", description: "Line by line" },
      { id: "steady", title: "Steady", description: "Stanza by stanza" },
      { id: "sweep", title: "In a sweep", description: "The whole canto" },
    ],
  },
  {
    id: "margin",
    title: "What belongs in the margin?",
    multiSelect: true,
    options: [
      { id: "echoes", title: "Echoes from Leaves" },
      { id: "diction", title: "Diction notes" },
      { id: "silence", title: "Silence — leave it bare" },
    ],
    nextLabel: "Finish",
  },
];

export function DemoAskQuestions() {
  const [confirmation, setConfirmation] = useState<string | null>(null);

  const handleComplete = (answers: Record<string, AskUserAnswer>) => {
    const section = answers.section?.selectedIds[0] ?? "unknown";
    const pace = answers.pace?.selectedIds[0] ?? "unknown";
    setConfirmation(
      `Noted — we begin with ${section}, at a ${pace} pace. Whitman’s catalogue awaits.`
    );
  };

  return (
    <aside className="ui-demo" aria-label="Ask questions for Song of Myself">
      <p className="ui-demo-label">Questions — Annotating Song of Myself</p>
      {confirmation ? (
        <p className="text-[13px] text-muted-foreground">{confirmation}</p>
      ) : (
        <AskUserQuestions questions={questions} onComplete={handleComplete} />
      )}
    </aside>
  );
}

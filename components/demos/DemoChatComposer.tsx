"use client";

import { useState } from "react";
import { ChatMessage } from "@/components/ui/chat-message";
import { InputMessage } from "@/components/ui/input-message";

type Message = {
  id: string;
  from: "user" | "assistant";
  text: string;
};

const seed: Message[] = [
  {
    id: "1",
    from: "user",
    text: "Why does the white whale appall Ishmael more than the chase itself?",
  },
  {
    id: "2",
    from: "assistant",
    text: "It is the whiteness — that blank, cumulative horror — which above all things undoes him. Colour without kindness.",
  },
];

export function DemoChatComposer() {
  const [messages, setMessages] = useState<Message[]>(seed);
  const [draft, setDraft] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const handleSend = (value: string) => {
    if (!value.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), from: "user", text: value.trim() },
    ]);
    setDraft("");
    setFiles([]);
  };

  return (
    <aside className="ui-demo" aria-label="Chat composer on the white whale">
      <p className="ui-demo-label">Chat — A question for Ishmael</p>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2.5">
          {messages.map((m) => (
            <ChatMessage key={m.id} from={m.from}>
              {m.text}
            </ChatMessage>
          ))}
        </div>
        <InputMessage
          value={draft}
          onValueChange={setDraft}
          onSend={handleSend}
          placeholder="Ask after the white whale…"
          files={files}
          onFilesChange={setFiles}
          sendLabel="Send"
        />
      </div>
    </aside>
  );
}

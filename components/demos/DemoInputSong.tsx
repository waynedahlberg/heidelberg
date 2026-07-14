"use client";

import { useState } from "react";
import { User, Quote, MapPin } from "lucide-react";
import { InputGroup, InputField } from "@/components/ui/input-group";

export function DemoInputSong() {
  const [name, setName] = useState("");
  const [line, setLine] = useState("");
  const [place, setPlace] = useState("");

  return (
    <aside className="ui-demo" aria-label="Input group for commonplace book">
      <p className="ui-demo-label">Input — Commonplace book entry</p>
      <InputGroup>
        <InputField
          index={0}
          label="Name"
          placeholder="Walt Whitman"
          icon={User}
          value={name}
          onChange={setName}
        />
        <InputField
          index={1}
          label="Favorite line"
          placeholder="I loaf and invite my soul…"
          icon={Quote}
          value={line}
          onChange={setLine}
        />
        <InputField
          index={2}
          label="Place of reading"
          placeholder="Brooklyn ferry, dusk"
          icon={MapPin}
          value={place}
          onChange={setPlace}
        />
      </InputGroup>
    </aside>
  );
}

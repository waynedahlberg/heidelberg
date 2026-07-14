"use client";

import { useEffect, useRef, useState } from "react";
import { RefreshCw } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThinkingIndicator } from "@/components/ui/thinking-indicator";

const RECAP_MS = 2800;

export function DemoRecapControls() {
  const [admitDescent, setAdmitDescent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [published, setPublished] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleRecapitulate = () => {
    if (!admitDescent || loading) return;
    setPublished(false);
    setLoading(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setLoading(false);
      setPublished(true);
      timerRef.current = null;
    }, RECAP_MS);
  };

  return (
    <aside className="ui-demo" aria-label="Recap controls for Origin of Species">
      <p className="ui-demo-label">Recap — Descent with modification</p>
      <div className="flex flex-col gap-3">
        <Switch
          label="Admit descent with modification"
          checked={admitDescent}
          onToggle={() => setAdmitDescent((v) => !v)}
        />
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="primary"
            leadingIcon={RefreshCw}
            loading={loading}
            disabled={!admitDescent}
            aria-busy={loading}
            onClick={handleRecapitulate}
          >
            Recapitulate
          </Button>
          <Badge color={published ? "emerald" : "amber"} variant="dot">
            {published ? "Published" : "Draft"}
          </Badge>
        </div>
        {loading && (
          <ThinkingIndicator className="px-0 text-muted-foreground" />
        )}
      </div>
    </aside>
  );
}

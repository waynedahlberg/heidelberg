"use client";

import { useEffect, useState } from "react";
import { FileThumbnail } from "@/components/ui/file-thumbnail";

/**
 * Specimen mark as an attached file — exercises FileThumbnail with a
 * generated SVG (no network). Used inside chat/composer flows elsewhere;
 * here it stands alone so the control is visible in the type specimen.
 */
export function DemoFileMark() {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
  <rect width="160" height="160" fill="#f5f1e4"/>
  <rect x="12" y="12" width="136" height="136" fill="none" stroke="#94321f" stroke-width="2"/>
  <text x="80" y="88" text-anchor="middle" fill="#23201a" font-family="Georgia, serif" font-size="18">Heidelberg</text>
</svg>`;
    setFile(new File([svg], "heidelberg-mark.svg", { type: "image/svg+xml" }));
  }, []);

  return (
    <aside className="ui-demo" aria-label="File thumbnail specimen mark">
      <p className="ui-demo-label">File thumbnail — Press mark</p>
      {file ? (
        <FileThumbnail file={file} size={96} />
      ) : (
        <p className="m-0 text-[13px] text-muted-foreground">Preparing mark…</p>
      )}
    </aside>
  );
}

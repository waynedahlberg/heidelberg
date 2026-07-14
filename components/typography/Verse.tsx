/**
 * Verse set as the poet broke it (EoTS 2.3.5): ragged right, no
 * hyphenation, runover lines hung by a double indent. Stanzas are
 * separated by blank lines in the `text` prop.
 *
 *   <Verse text={`I celebrate myself, and sing myself,
 *   And what I assume you shall assume,
 *
 *   My tongue, every atom of my blood…`} />
 */
export function Verse({ text, source }: { text: string; source?: React.ReactNode }) {
  const stanzas = text
    .split(/\n\s*\n/)
    .map((s) => s.split("\n").map((l) => l.trimEnd()).filter((l) => l.length > 0));

  return (
    <div className="verse">
      {stanzas.map((lines, i) => (
        <span className="verse-stanza" key={i}>
          {lines.map((line, j) => (
            <span className="verse-line" key={j}>
              {line}
            </span>
          ))}
        </span>
      ))}
      {source}
    </div>
  );
}

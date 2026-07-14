/**
 * The attribution line for quotations, after The Proportional Web:
 * author in true small caps, work in italic, year in old-style figures.
 */
export function QuoteSource({
  author,
  work,
  year,
}: {
  author?: string;
  work?: string;
  year?: string;
}) {
  return (
    <footer className="quote-source">
      {author && <span className="qs-author">{author}</span>}
      {author && work && ", "}
      {work && <cite className="qs-work">{work}</cite>}
      {year && `, ${year}`}
    </footer>
  );
}

import type { ReactNode } from "react";

/**
 * A figure whose caption sits in the scholar's margin on wide viewports
 * (tufte-css margin-caption), beneath the image otherwise. Set
 * `fullwidth` to let the image span measure + margin.
 *
 *   <Figure
 *     src="/images/plate-1.jpg"
 *     alt="Diagram of divergence of taxa"
 *     author="Charles Darwin"
 *     work="On the Origin of Species"
 *     caption="The only illustration in the first edition."
 *   />
 */
export function Figure({
  src,
  alt,
  caption,
  author,
  work,
  fullwidth = false,
  children,
}: {
  src?: string;
  alt?: string;
  caption?: ReactNode;
  author?: string;
  work?: string;
  fullwidth?: boolean;
  children?: ReactNode;
}) {
  const classes = fullwidth ? "fullwidth" : "margin-caption";
  return (
    <figure className={classes}>
      {src ? <img src={src} alt={alt ?? ""} /> : children}
      {(caption || author || work) && (
        <figcaption>
          {author && <span className="fig-author">{author}</span>}
          {author && work && ", "}
          {work && <span className="fig-work">{work}</span>}
          {(author || work) && caption && ". "}
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

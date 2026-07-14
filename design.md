# design.md — The Aldine Typographic System

> A portable specification for building web projects in the tradition of
> Robert Bringhurst's *The Elements of Typographic Style*. Copy this file
> into a new project and you have the whole system in one page: the tokens,
> the rules, and the recipes. Everything below is implemented in
> `app/globals.css`; this document explains what each decision is and why,
> so it can be reproduced anywhere — a different framework, a plain HTML
> page, a design tool.

---

## 0 · The system in one paragraph

One versatile typeface family (**Alegreya**, with its true small-caps
companion **Alegreya SC**, and **Courier Prime** for the machine voice); a
single text **measure** of ~62 characters; every vertical distance a
multiple of one **baseline** unit (28px); **old-style figures** in prose and
**lining/tabular figures** in tables; **true small caps** for headings,
names, and abbreviations; **justified, hyphenated** body text with book
paragraph indents; ink on warm paper plus **one rubric red** used sparingly
for wayfinding; and a **scholar's margin** for sidenotes. Nothing is
decoration. Every rule cites Bringhurst, Rutter, Tufte, or Butterick.

---

## 1 · Design tokens

Copy these into `:root`. They are the entire vocabulary; change them and the
whole design scales coherently.

### 1.1 Ink & paper

```
--paper:            #fdfbf3;   /* warm book-paper white (not pure #fff)      */
--ink:              #23201a;   /* soft black (not pure #000 — it glares)     */
--ink-faded:        #6f6a5e;   /* captions, folios, bylines                  */
--rubric:           #94321f;   /* the one accent — links, ornaments, numbers */
--rule:             #d9d3c1;   /* hairlines                                  */
--paper-recessed:   #f5f1e4;   /* code, optional table stripes               */
```

Dark mode is a single `@media (prefers-color-scheme: dark)` override of the
same six variables — never a separate stylesheet.

### 1.2 Proportion

```
--body-size:  1.25rem;    /* 20px — Alegreya reads small; go up from 16     */
--baseline:   1.75rem;    /* 28px leading → ratio 1.40 (EoTS 2.2.1)         */
--measure:    62ch;       /* 45–75 ideal; ~66 is Bringhurst's "ideal book"  */
--margin-w:   16.5ch;     /* scholar's margin width (Tufte)                  */
--gutter:     4ch;        /* space between measure and margin               */
--indent:     1.5em;      /* paragraph indent ≈ one lead (EoTS 2.3.2)       */
--rule-w:     1px;        /* hairline weight                                */
```

### 1.3 Type scale (book fractions, not a decimal ramp)

The scale is built from simple musical fractions of the body size —
7/8 · 1 · 9/8 · 5/4 · 3/2 · 7/4 · 2 · 5/2 — the way a book is, not a
decimal modular ramp. Rank is carried by **form** (small caps, italic) as
much as by size.

```
--size-caption:  1rem;         /* 16px — sidenotes, captions, folios         */
--size-small:    1.09375rem;   /* 17.5px = 7/8 — asides, blockquotes         */
--size-body:     1.25rem;      /* 20px = 1                                   */
--size-h3:       1.40625rem;   /* 22.5px = 9/8 — italic subheads             */
--size-h2:       1.25rem;      /* small caps carry rank at body size         */
--size-title:    2.1875rem;    /* 35px = 7/4 — article titles                */
--size-display:  3.125rem;     /* 50px = 5/2 — masthead                      */
--leading-caption: 1.3125rem;  /* 21px = ¾ baseline                          */
```

### 1.4 The three faces

| Voice | Face | Used for |
| --- | --- | --- |
| Text | Alegreya (roman + italic, variable) | body, titles, emphasis |
| Small caps | Alegreya SC (400/500/700) | headings, names, abbreviations, labels |
| Machine | Courier Prime (400/700 + italic) | code, `kbd`, `samp` |

Load all three self-hosted (`next/font/google` or `@font-face`), exposing
each as a CSS variable: `--font-alegreya`, `--font-alegreya-sc`,
`--font-courier-prime`. **Alegreya SC's lowercase letters _are_ its small
caps** — so `text-transform: lowercase` on that family yields true small
caps, never the browser's ugly synthesized ones.

---

## 2 · The non-negotiable rules

These are the rules that make the difference between "a serif blog" and a
typographic system. Skip any of them and the effect collapses.

1. **One measure.** All body content is capped at `--measure`. 45–75
   characters per line; never full-viewport-width prose. *(EoTS 2.1.2)*
2. **Baseline rhythm.** Every vertical margin, padding, and line-height is a
   multiple (or clean fraction) of `--baseline`. Headings take `2×`, block
   matter `1×`. *(EoTS 2.2)*
3. **Paragraphs indent, they don't gap.** `p + p { text-indent: 1.5em }`
   with no top margin. The first paragraph after a heading/rule/figure is
   flush. *(EoTS 2.3.2)*
4. **Old-style figures in prose.** `font-variant-numeric: oldstyle-nums`
   globally; switch to `lining-nums tabular-nums` only in tables and code.
   *(EoTS 3.2)*
5. **True small caps, never faux.** Use the SC companion face for all small
   caps: headings, `<abbr>`, names. Letterspace them `0.06–0.14em`.
   *(EoTS 3.2.2)*
6. **Ligatures & kerning on.** `font-kerning: normal`,
   `font-variant-ligatures: common-ligatures contextual`,
   `text-rendering: optimizeLegibility`. Ligatures **off** in code.
   *(EoTS 3.1, 5.1.1)*
7. **Justify with hyphenation, or don't justify.** `text-align: justify` +
   `hyphens: auto` + `hyphenate-limit-chars: 6 3 3` + `text-wrap: pretty`.
   Modern browsers do this acceptably at this measure. *(Rutter; EoTS 2.1.3)*
8. **One accent color, used like a rubricator.** Rubric red for links-on-
   hover, sidenote numbers, ornaments — never for backgrounds or large
   areas. *(EoTS 6)*
9. **Notes in the margin, not the foot.** Numbered sidenotes in the scholar's
   margin; collapse to tap-to-reveal below `--measure + margin`. *(Tufte)*
10. **Hang the punctuation.** `hanging-punctuation: first last` on `html`
    (progressive enhancement). *(EoTS 5.5)*
11. **Balance titles, pretty-wrap prose.** `text-wrap: balance` on headings,
    `text-wrap: pretty` on paragraphs.

---

## 3 · The scholar's margin (the signature move)

The layout that distinguishes this system. The page column is normally one
`--measure`; on an essay it becomes `--measure + --gutter + --margin-w` and
sits left-of-center, leaving a right margin for notes.

```css
.page.with-margin { max-width: calc(var(--measure) + var(--gutter) + var(--margin-w)); }

.sidenote, .marginnote {
  float: right; clear: right;
  width: var(--margin-w);
  margin-right: calc(-1 * (var(--margin-w) + var(--gutter)));
  font-size: var(--size-caption);
}
```

Numbering is a pure-CSS counter (`counter-reset: sidenote-counter` on the
article, `counter-increment` on each). Below the breakpoint (`71rem`) the
note hides and a checkbox `label` reveals it inline — **no JavaScript**.

**Breakpoint note:** the reveal breakpoint must be expressed in `rem`, not
`ch`, because `ch` shrinks with the font at small viewports and the media
query would fire inconsistently.

---

## 4 · Component recipes

Each maps to a React component in `components/typography/` and a CSS class.
In a non-React project, the CSS classes alone reproduce them.

| Element | Class / component | Rule of thumb |
| --- | --- | --- |
| Numbered sidenote | `.sidenote` / `<Sidenote>` | Replaces footnotes entirely |
| Unnumbered margin note | `.marginnote` / `<MarginNote>` | Glosses, dates, sources |
| Drop cap (versal) | `.drop-cap` | Once, on the opening paragraph, 3 lines deep, in rubric |
| New thought | `.newthought` / `<Newthought>` | Opening words of a section, spaced small caps |
| Epigraph | `.epigraph` / `<Epigraph>` | Chapter-opening quotation, italic |
| Block quotation | `blockquote` / `<Blockquote>` | Indented, a size down, SC + italic source |
| Pull quote | `.pullquote` / `<PullQuote>` | **At most one per essay** — the only loud element |
| Verse | `.verse` / `<Verse>` | Ragged right, no hyphens, runovers double-indented |
| Section break | `.section-break` / `<SectionBreak>` | Hedera (❧) ornament, not a solid rule |
| Figure + margin caption | `.margin-caption` / `<Figure>` | Caption floats into the scholar's margin |
| Small caps | `.smallcaps` / `<SmallCaps>` | Names and emphasis; use `<abbr>` for abbreviations |
| Table | `.typeset table` | SC head, rule of ink above + hairline below, lining/tabular figures |

### OpenType utility classes (for specimen work)

```
.lining .oldstyle .tabular .frac .ordn .dlig .noliga
```

---

## 5 · Adapting the system

- **Change the typeface.** Swap the three `--font-*` variables. Keep the
  small-caps companion — it is load-bearing. Good alternates: EB Garamond +
  EB Garamond SC; Cormorant + Cormorant SC; Source Serif 4 (has SC).
- **Change the color.** Edit the six ink/paper tokens. Keep `--paper` warm
  and off-white, `--ink` soft not pure-black, and hold the accent to one
  hue.
- **Change the scale.** Multiply `--body-size` and `--baseline` together to
  preserve the 1.4 ratio; keep the scale a set of clean fractions.
- **Tighten or widen.** Adjust `--measure` within 45–75ch. If you widen
  past ~68ch, bump `--baseline` up a touch — longer lines want more lead.
- **Drop the margin.** Omit `.with-margin`; sidenotes then always render
  inline. The system still holds as a single-column book page.

---

## 6 · Where modern React helps — without overshadowing

The vision is Bringhurst's; React is only the press. Places where components
earn their keep *because* they enforce the craft rather than decorate it:

- **`<Sidenote>` / `<MarginNote>`** — encapsulate the checkbox-toggle markup
  and the CSS counter so authors write one tag, and the margin mechanics are
  never gotten wrong.
- **`<Verse>`** — parses a plain string into hung lines and stanzas, so poems
  are pasted verbatim and the runover-indent rule is applied for you.
- **`<Figure>`** — wires the caption into the scholar's margin automatically.
- **MDX** — lets nineteenth-century prose be authored as prose, with the
  typographic components in scope, no imports.
- **`next/font`** — subsets and self-hosts the faces at build time; the full
  OpenType feature set ships and no request leaves for a font server.

Deliberately **avoided**: entrance animations, scroll effects, parallax,
color transitions, anything that competes with the text. Bringhurst's whole
counsel is that the page should disappear and leave only the reading. The
React here is structural, not theatrical.

---

## 7 · Checklist for a new page

- [ ] Body capped at `--measure`; essays use `.with-margin` + `.typeset`
- [ ] All vertical spacing a multiple of `--baseline`
- [ ] Paragraphs indent; first-after-heading is `.flush`
- [ ] Numerals old-style in prose, lining/tabular in tables
- [ ] Every abbreviation in `<abbr>`; names in `<SmallCaps>` where wanted
- [ ] At most one pull quote; at most one drop cap (the opener)
- [ ] Links quiet, rubric only on hover
- [ ] Dark mode checked (the six tokens invert cleanly)
- [ ] Print stylesheet: nav/footer hidden, ink on white

*See `PRINCIPLES.md` for the reasoning and citations behind every rule above.*

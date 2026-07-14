# Aldine

A Next.js + TypeScript blog starter built as a working demonstration of
Robert Bringhurst's *The Elements of Typographic Style*, applied to the
modern web. One typeface family (Alegreya + Alegreya SC + Courier Prime), a
single measure, a fixed baseline rhythm, true small caps, old-style figures,
justified prose, and sidenotes in a Tufte-style scholar's margin.

Sample content is drawn from nineteenth-century texts — Melville, Thoreau,
Darwin, Whitman — chosen because prose of that quality asks for careful
setting and exercises every feature of the system.

## Quick start

```
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (static)
```

Node 18.18+ (20+ recommended). Fonts are self-hosted at build time via
`next/font`; no network request for type at runtime.

## What's here

```
app/
  layout.tsx              three fonts wired to CSS variables
  globals.css             THE SYSTEM — tokens, rhythm, every element (well-commented)
  page.tsx                home / table of contents
  essays/                 index + [slug] MDX renderer
  about, colophon, contact, not-found
components/
  Header.tsx, Footer.tsx  masthead + nav + colophon footer
  mdx-components.tsx       maps markdown + the typographic set into MDX
  typography/             Sidenote, MarginNote, Epigraph, PullQuote, Blockquote,
                          Newthought, SectionBreak, Verse, Figure, SmallCaps
lib/posts.ts              front-matter loader + long-form date formatter
content/posts/*.mdx       five sample essays (specimen + four extracts)
design.md                 PORTABLE spec — copy into any project
PRINCIPLES.md             the reasoning and citations behind every rule
```

## The two documents

- **`design.md`** — the portable specification. Tokens, the non-negotiable
  rules, the scholar's-margin recipe, component table, and how to adapt the
  system (swap the face, the color, the scale). Copy it into a new project
  and you have the whole system on one page.
- **`PRINCIPLES.md`** — the reasoning: the five authorities (Bringhurst,
  Rutter, Tufte, Butterick, Wickström), each rule and how faithfully the web
  can keep it, and where print and screen genuinely differ.

## Writing an essay

Add an `.mdx` file to `content/posts/`. Front-matter:

```yaml
---
title: "..."
subtitle: "..."
kicker: "Extract"      # small-caps label above the title
author: "..."          # rendered as "after ___"
date: "1854-08-09"     # ISO; shown as "9 August 1854"
description: "..."      # index blurb
order: 3               # position in the contents
---
```

The typographic components are in scope without imports — write
`<Sidenote>…</Sidenote>`, `<PullQuote>`, `<Verse text={…} />`, etc. Plain
markdown maps to the typeset defaults; `---` becomes a hedera section break.

## Making it yours

Everything is driven by the tokens at the top of `app/globals.css`. To
re-skin: change the six ink/paper variables and the three `--font-*` families
(keep a true small-caps companion — it's load-bearing). See `design.md §5`.

# Aldine

A Next.js + TypeScript blog starter built as a working demonstration of
Robert Bringhurst's *The Elements of Typographic Style*, applied to the
modern web. One typeface family (Alegreya + Alegreya SC + Courier Prime), a
single measure, a fixed baseline rhythm, true small caps, old-style figures,
justified prose, and sidenotes in a Tufte-style scholar's margin.

Interactive chrome follows
[Fluid Functionalism](https://www.fluidfunctionalism.com) as a **behavioral
layer**: nested surfaces, scroll-fade, three shared springs, and the full FF
component kit (buttons, dialogs, menus, tabs, sliders, tables, inputs, chat /
thinking UI, …), remapped to Aldine ink and paper so controls stay quiet
inside the book. See `design.md` §6.

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
  layout.tsx              fonts + UiProviders (Motion / Surface / Shape)
  globals.css             THE SYSTEM — typographic tokens, FF surfaces,
                          scroll-fade, springs-related keyframes
  page.tsx                home / table of contents
  essays/                 index + [slug] MDX renderer
  about, colophon, contact, not-found
components/
  UiProviders.tsx         MotionConfig + SurfaceProvider + ShapeProvider
  Header.tsx, Footer.tsx  masthead + nav + colophon footer
  mdx-components.tsx      typographic set + FF demos in MDX scope
  typography/             Sidenote, MarginNote, Epigraph, PullQuote, …
  ui/                     FF component kit (Button, Dialog, Select, Tabs, …)
  demos/                  in-essay specimens — one literary demo per control family
lib/
  springs.ts              fast / moderate / slow (+ .exit)
  elevated.tsx            nestable surface lift
  surface-context.tsx     substrate level (root = 1)
  motion.ts               typographic reveals → same springs
  posts.ts                front-matter loader + long-form dates
content/posts/*.mdx       sample essays (specimen + literary extracts)
design.md                 PORTABLE spec — copy into any project
PRINCIPLES.md             reasoning, citations, two-layer model
```

## The two documents

- **`design.md`** — the portable specification. Tokens, non-negotiable
  typographic rules, the scholar's-margin recipe, the Fluid Functionalism
  behavioral layer (§6), and how to adapt the system. Copy it into a new
  project and you have the whole system on one page.
- **`PRINCIPLES.md`** — the reasoning: the authorities (Bringhurst, Rutter,
  Tufte, Butterick, Wickström, Fluid Functionalism), each rule and how
  faithfully the web can keep it, and the two-layer model (reading vs
  behavioral).

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

Typographic components and FF demos are in scope without imports — write
`<Sidenote>…</Sidenote>`, `<PullQuote>`, `<DemoSurfaces />`,
`<DemoSliderEconomy />`, etc. Plain markdown maps to the typeset defaults;
`---` becomes a hedera section break. Demo → component → essay map:
`design.md` §6.6.

## Making it yours

Everything is driven by the tokens at the top of `app/globals.css`. To
re-skin: change the six ink/paper variables and the three `--font-*` families
(keep a true small-caps companion — it's load-bearing). Surface and shadow
ladders follow those tokens; see `design.md` §5–§6.

To add or refresh an FF component:

```
npx shadcn@latest add https://www.fluidfunctionalism.com/r/<name>.json
```

Then re-check Aldine semantic mapping in `globals.css` (and spinner
keyframes if the button was overwritten).

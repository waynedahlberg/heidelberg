# design.md — The Aldine Typographic System

> A portable specification for building web projects in the tradition of
> Robert Bringhurst's *The Elements of Typographic Style*, with a Fluid
> Functionalism behavioral layer for interactive chrome. Copy this file into
> a new project and you have the whole system in one page: the tokens, the
> rules, and the recipes. Typography lives in `app/globals.css`; surfaces,
> springs, and UI primitives live beside it in `lib/` and `components/ui/`.
> This document explains what each decision is and why, so it can be
> reproduced anywhere — a different framework, a plain HTML page, a design
> tool.

---

## 0 · The system in one paragraph

One versatile typeface family (**Alegreya**, with its true small-caps
companion **Alegreya SC**, and **Courier Prime** for the machine voice); a
single text **measure** of ~62 characters; every vertical distance a
multiple of one **baseline** unit (28px); **old-style figures** in prose and
**lining/tabular figures** in tables; **true small caps** for headings,
names, and abbreviations; **justified, hyphenated** body text with book
paragraph indents; ink on warm paper plus **one rubric red** used sparingly
for wayfinding; and a **scholar's margin** for sidenotes. Interactive chrome
adds a **Fluid Functionalism** behavioral layer — nested surfaces, scroll
affordance, three shared springs — remapped to the same ink and paper. Nothing
is decoration. Typographic rules cite Bringhurst, Rutter, Tufte, or Butterick;
behavioral rules cite Fluid Functionalism.

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
same six variables — never a separate stylesheet. The interactive surface
ladder (see §6) rides the same switch: light mode flattens to paper and lets
**shadow** carry elevation; dark mode climbs a warm additive ladder over
`--paper`.

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

## 6 · Fluid Functionalism — the behavioral layer

Typography is the reading layer. When the page must also *act* — dialogs,
menus, scroll regions, toggles — the interactive chrome follows
[Fluid Functionalism](https://www.fluidfunctionalism.com): state made
legible, never decorative. The book voice (Alegreya, measure, rubric) stays
primary; FF supplies surfaces, scroll affordances, and motion vocabulary.
Components are installed from the FF shadcn registry into `components/ui/`;
semantic tokens are remapped to Aldine ink & paper in `globals.css`.

### 6.1 Surfaces (elevation)

Eight surface levels that nest. Each container knows its own level and tells
whatever opens inside — a dropdown on the page and the same dropdown inside
a dialog both land at the right depth without props between them.

| Piece | Role |
| --- | --- |
| `--surface-1` … `--surface-8` + `--shadow-1` … `--shadow-8` | bg/shadow pairs (Tailwind: `bg-surface-*`, `shadow-surface-*`) |
| `SurfaceProvider` | React context for the current substrate (root = `1`) |
| `Elevated` (`lib/elevated.tsx`) | Wrap a panel: `offset` steps above substrate; optional fixed `shadowLevel` |

Conventional offsets: **2** for dropdown / popover / select; **4** for
dialog / modal. Light mode: surfaces flatten to `--paper` early — **shadow
alone** carries elevation. Dark mode: progressively lighter warm sheets over
the floor, with inset-highlight shadow recipes.

```tsx
// Root (components/UiProviders.tsx)
<SurfaceProvider value={1}>{children}</SurfaceProvider>

// Nested lift — background climbs; popover shadow can stay fixed
<Elevated offset={2} shadowLevel={3}>{/* menu */}</Elevated>
```

### 6.2 Scrollbars

`ScrollArea` (`components/ui/scroll-area.tsx`): a quiet thumb that widens on
hover; native overflow on touch-primary devices. Pair with the vendored CSS
utilities in `globals.css`:

- `scroll-fade` — vertical edge dissolve (scroll-driven where supported)
- `scroll-fade-x` — horizontal variant

```tsx
<ScrollArea className="max-h-40" viewportClassName="scroll-fade">
  …
</ScrollArea>
```

### 6.3 Motion

Three springs in `lib/springs.ts` — nothing invents its own timing:

| Tier | Enter | Exit | Use for |
| --- | --- | --- | --- |
| `spring.fast` | 0.08s | 0.06s | hover, fades, small toggles |
| `spring.moderate` | 0.16s · bounce 0 | 0.12s | dropdowns, tabs, drawers |
| `spring.slow` | 0.24s · bounce 0.12 | 0.16s | dialogs, thinking steps |

Exits are always **one tier quicker** than entrances. The app tree wraps
`<MotionConfig reducedMotion="user">` so OS reduce-motion drops transforms
and keeps opacity fades. Typographic reveals (sidenotes, phone nav) use the
same tokens via `lib/motion.ts`.

### 6.4 Providers & shape

`UiProviders` composes, in order: `MotionConfig` → `SurfaceProvider` →
`ShapeProvider` (default **rounded**, not pill) → `TooltipProvider`. Shape
keeps interactive specimens quiet inside the book; elevation and springs
keep nested chrome honest.

### 6.5 Component kit (`components/ui/`)

Installed from the [FF registry](https://www.fluidfunctionalism.com) via
shadcn. All of them share surfaces + springs; none should invent local
timing, elevation, or a second accent. Aldine defaults: **rounded** shape,
rubric focus ring, ink/paper semantics.

| Component | File | Role in Aldine |
| --- | --- | --- |
| **Button** | `button.tsx` | Primary actions; loading spinner replaces the label (not overlays it) |
| **Badge** | `badge.tsx` | Quiet status chips (manuscript state, etc.) |
| **Tooltip** | `tooltip.tsx` | Short gloss when the margin cannot hold a note |
| **Switch** | `switch.tsx` | Binary preference; thumb uses `spring.moderate` |
| **Slider** / **SliderComfortable** | `slider.tsx` | Continuous / stepped values — prefer Comfortable in essays |
| **RadioGroup** / **RadioItem** | `radio-group.tsx` | Single choice among peers |
| **CheckboxGroup** / **CheckboxItem** | `checkbox-group.tsx` | Multi-select with proximity hover |
| **Select** | `select.tsx` | Compact menu of options; elevates via surface context |
| **Dropdown** + **MenuItem** | `dropdown.tsx`, `menu-item.tsx` | Action / check menus; fixed shadow weight when nested |
| **Dialog** | `dialog.tsx` | Modal sheet at substrate +4 |
| **Accordion** | `accordion.tsx` | Expanding sections (rules, glosses) |
| **Tabs** / **TabsSubtle** | `tabs.tsx`, `tabs-subtle.tsx` | Segmented vs understated tab chrome |
| **Table** | `table.tsx` | Interactive rows; lining figures still apply via `.typeset` |
| **ScrollArea** | `scroll-area.tsx` | Clipped lists; pair with `scroll-fade` / `scroll-fade-x` |
| **MobileDrawer** | `mobile-drawer.tsx` | Sheet from the edge when the measure is too narrow for nav |
| **InputGroup** / **InputField** | `input-group.tsx` | Labeled text entry inside the measure |
| **InputCopy** | `input-copy.tsx` | Copy-to-clipboard field (citations, paths) |
| **InputMessage** | `input-message.tsx` | Composer / chat input with attachments |
| **ChatMessage** | `chat-message.tsx` | Bubbles for short dialogic specimens |
| **AskUserQuestions** | `ask-user-questions.tsx` | Structured Q&A panels |
| **ColorPickerPopover** | `color-picker.tsx` | Rubric / ink swatch picking |
| **ThinkingIndicator** | `thinking-indicator.tsx` | Indeterminate “working” status |
| **ThinkingSteps** | `thinking-steps.tsx` | Multi-step progress disclosure |
| **FileThumbnail** | `file-thumbnail.tsx` | Attached file / press-mark chip |

Supporting pieces (not usually authored alone): `menu-item` (dropdown rows),
shape / surface / icon context from `lib/`.

**Aldine remapping checklist** after any `shadcn add` from the registry:

1. Semantic colors still point at `--ink` / `--paper` / `--rubric` (not cool gray).
2. Focus ring is `--focus-ring: var(--rubric)`.
3. Shape default remains `rounded` in `UiProviders`.
4. Button spinner keyframes (`.ff-spinner-path`) live **outside** `@theme` in
   `globals.css` — registry overwrites of `button.tsx` can drop the class hook.
5. Dialogs respect `scrollbar-gutter: stable` (see
   `html body[data-scroll-locked]` override — do not remove).

Install or refresh:

```
npx shadcn@latest add https://www.fluidfunctionalism.com/r/<name>.json
```

### 6.6 Specimens in MDX

Demos live in `components/demos/`, exported from `components/demos/index.ts`,
and registered in `mdx-components.tsx` — no imports in essays. Prefer
**literary context** over a component zoo: the control should feel like a
tool the text asked for.

| Demo | Components exercised | Essay |
| --- | --- | --- |
| `<DemoSurfaces />` | `Elevated`, surface ladder | Specimen; Whiteness |
| `<DemoMotionSprings />` | `spring.*`, Button | Specimen |
| `<DemoScrollCatalogue />` | ScrollArea + scroll-fade | Whiteness |
| `<DemoButtons />` | Button (incl. loading) | Specimen |
| `<DemoBadgeTooltip />` | Badge, Tooltip, Button | Specimen |
| `<DemoThinking />` | ThinkingIndicator | Specimen |
| `<DemoColorRubric />` | ColorPickerPopover | Specimen |
| `<DemoMobileDrawerNav />` | MobileDrawer, Button | Specimen |
| `<DemoFileMark />` | FileThumbnail | Specimen |
| `<DemoDialogDropdown />` | Dialog, Dropdown, MenuItem | Whiteness |
| `<DemoChatComposer />` | ChatMessage, InputMessage | Whiteness |
| `<DemoAccordionCivility />` | Accordion | Rules of Civility |
| `<DemoSwitchCivility />` | Switch | Rules of Civility |
| `<DemoTableEconomy />` | Table | Economy |
| `<DemoSliderEconomy />` | SliderComfortable | Economy |
| `<DemoInputCopyCite />` | InputCopy | Economy |
| `<DemoRadioSelection />` | RadioGroup | Natural Selection |
| `<DemoSegmentedTabs />` | Tabs | Natural Selection |
| `<DemoCheckboxStruggle />` | CheckboxGroup | Struggle for Existence |
| `<DemoSelectTabs />` | Select, TabsSubtle | Struggle for Existence |
| `<DemoInputSong />` | InputGroup | Song of Myself |
| `<DemoAskQuestions />` | AskUserQuestions | Song of Myself |
| `<DemoRecapControls />` | Button, Switch, Badge, ThinkingIndicator | Recapitulation |
| `<DemoThinkingSteps />` | ThinkingSteps | Recapitulation |

Styling hook for demos: `.ui-demo` / `.ui-demo-label` in `globals.css` —
hairline rules, small-caps label in rubric, capped at `--measure`.

---

## 7 · Where modern React helps — without overshadowing

The vision is Bringhurst's; React is only the press. Places where components
earn their keep *because* they enforce the craft rather than decorate it:

- **`<Sidenote>` / `<MarginNote>`** — encapsulate the toggle markup and the
  CSS counter so authors write one tag, and the margin mechanics are never
  gotten wrong. Narrow-viewport reveal uses the shared spring tokens.
- **`<Verse>`** — parses a plain string into hung lines and stanzas, so poems
  are pasted verbatim and the runover-indent rule is applied for you.
- **`<Figure>`** — wires the caption into the scholar's margin automatically.
- **MDX** — lets nineteenth-century prose be authored as prose, with the
  typographic set and FF demos in scope, no imports.
- **`next/font`** — subsets and self-hosts the faces at build time; the full
  OpenType feature set ships and no request leaves for a font server.
- **`UiProviders` + FF UI** — surfaces, scroll-fade, and springs so interactive
  chrome stays legible without inventing per-component timing or elevation.

Deliberately **avoided**: decorative entrance animations, parallax, scroll-
hijacking theatrics, gradients-as-decoration, second accent colors, anything
that competes with the text. Functional motion — a dialog settling, a
sidenote unfolding, a scrollbar that admits more content — is allowed when
it makes state readable. Bringhurst's counsel still holds: the page should
disappear and leave the reading. The behavioral layer is structural honesty
for controls, not theatre.

---

## 8 · Checklist for a new page

- [ ] Body capped at `--measure`; essays use `.with-margin` + `.typeset`
- [ ] All vertical spacing a multiple of `--baseline`
- [ ] Paragraphs indent; first-after-heading is `.flush`
- [ ] Numerals old-style in prose, lining/tabular in tables
- [ ] Every abbreviation in `<abbr>`; names in `<SmallCaps>` where wanted
- [ ] At most one pull quote; at most one drop cap (the opener)
- [ ] Links quiet, rubric only on hover
- [ ] Dark mode checked (ink/paper tokens + surface ladder)
- [ ] Interactive chrome uses FF components from `components/ui/` — not one-off controls
- [ ] Overlays use `Elevated` / surface context — no ad-hoc z-index stacks
- [ ] Motion from `lib/springs` (or `lib/motion`) — no ad-hoc durations
- [ ] Scroll regions: `ScrollArea` + `scroll-fade` / `scroll-fade-x` when clipped
- [ ] New FF demos registered in `mdx-components.tsx` and placed in literary context
- [ ] Print stylesheet: nav/footer hidden, ink on white

*See `PRINCIPLES.md` for the reasoning and citations behind every rule above.*

# The Elements of Typographic Style, Applied to This Project

*A summary of the principles, rules, and practices behind the Aldine system —
drawn from Robert Bringhurst and the others who have carried his method onto
the screen. Where `design.md` is the specification, this is the reasoning:
why each rule exists, whom it comes from, and how faithfully the web can keep
it.*

---

## I · The one governing idea

Bringhurst opens *The Elements of Typographic Style* with a sentence that is
the whole discipline in nine words:

> **Typography exists to honor content.**

Everything else is a consequence. Type is not decoration applied to text; it
is the text made visible, and the typographer's whole job is to serve the
reading and then disappear. Bringhurst's second formulation is equally load-
bearing: good typography is *"an ethical activity,"* a matter of attention
and care rather than taste or fashion. The rules that follow are not
arbitrary conventions — each is a specific technique for reducing friction
between the reader and the words.

This project takes that literally. Every rule in the stylesheet can name the
principle it serves. Nothing is present because it "looks nice"; where a
detail cannot justify itself in terms of legibility, navigation, or honesty,
it is left out.

---

## II · The five authorities

The system stands on five bodies of work, each solving a different part of
the problem.

**Robert Bringhurst — *The Elements of Typographic Style* (1992; 4.3, 2012).**
The canon. A book organized as a set of numbered rules covering rhythm and
proportion, harmony and counterpoint, the treatment of prose, the choice and
combination of type, and the shaping of the page. Written for print, but its
principles are about human reading, which has not changed.

**Richard Rutter — *The Elements of Typographic Style Applied to the Web*
(webtypography.net) and *Web Typography* (2017).** Rutter went through
Bringhurst rule by rule and worked out what each means in CSS — what
survives the translation to a fluid, resolution-independent medium and what
must be rethought. This project's rule numbering echoes his.

**Edward Tufte — *Tufte CSS* and the design of his own books.** The source of
the *scholar's margin*: notes, figures, and citations set beside the text
rather than beneath it, so the reader never leaves the line to consult them.
The sidenote mechanics here are Tufte's, ported.

**Matthew Butterick — *Practical Typography* (practicaltypography.com).** The
pragmatist. Butterick strips the discipline to the decisions that matter most
for ordinary documents — measure, point size, line spacing, and restraint —
and is quotable on what *not* to do ("links should not look like Christmas
lights").

**Oskar Wickström — *The Proportional Web* (2024).** A recent, focused
demonstration that Bringhurst's *page* — not just his type — can be rebuilt in
the browser. The specific palette of this project (Alegreya + Alegreya SC +
Courier Prime, rhythm expressed in `rem`) is built directly on Wickström's
example.

**Mickaël — *Fluid Functionalism* (fluidfunctionalism.com).** Not a
typographic authority: a behavioral one. When the page must also act —
menus, dialogs, scroll regions, toggles — FF supplies the vocabulary for
making state changes legible: nested surfaces, honest scroll affordances,
and three shared spring speeds. This project treats FF as a *layer under
the chrome*, remapped to Aldine ink and paper, never as a second visual
identity. See `design.md` §6.

---

## III · The rules, and how the web keeps them

### 1 · Rhythm and proportion

**Choose a comfortable measure. (EoTS 2.1.2)** Bringhurst's anything from 45
to 75 characters per line for a single-column page, with 66 the "ideal."
Lines longer than that tire the eye on the return sweep; shorter ones chop
the prose. *Kept exactly:* `--measure: 62ch`, and no body text is ever wider.
This is the single most important rule and the one the open web most often
breaks.

**Choose a leading that suits the measure. (EoTS 2.2.1)** Longer lines need
more lead. At this measure and size the ratio is 1.4 — 28px of leading on a
20px body. *Kept exactly.*

**Set a rhythm and hold it. (EoTS 2.2.2)** In metal type the baseline grid is
physical; on the web it must be imposed. Every vertical measurement in the
system is a multiple or clean fraction of the 28px baseline, so the text on
facing screens lines up as it would across a book's gutter. *Kept, with
effort* — this is the rule that most repays vigilance and most easily drifts.

**Don't compose without a scale. (EoTS 3.1)** Sizes come from a set of book
fractions (7/8, 9/8, 5/4, 3/2, 7/4, 2, 5/2) rather than arbitrary pixels.
Crucially, *rank is signaled by form as much as size*: an `h2` here is set in
small caps at body size, not in large bold, because a well-made page is
quiet. *Kept.*

### 2 · The treatment of prose

**Mark paragraphs with an indent, not a blank line. (EoTS 2.3.2)** The book
convention for five centuries: an indent starts a new paragraph and the page
keeps its even color; the first paragraph after a break is flush. The web's
default (a blank line, no indent) is a screen habit, not a reading
improvement. *Kept* — `p + p { text-indent }`, no inter-paragraph gap.

**Set opening words in small caps. (EoTS 4.1 / Tufte's "newthought.")** A
section's first words in letterspaced small caps ease the eye into a new
passage. *Kept* as `.newthought`.

**Quote at a size below the text, and attribute quietly. (EoTS 2.3.3)** No
oversized quotation marks, no colored bars — an indent, a smaller size, and a
small-caps-and-italic source line. *Kept.*

**Set verse as the poet broke it. (EoTS 2.3.5)** Flush left, ragged right,
never justified or hyphenated, with runover lines hung by a consistent indent
so a fold is never mistaken for a line. *Kept* in the `<Verse>` component.

### 3 · Harmony, counterpoint, and the choice of type

**Choose faces that suit the subject, and few of them. (EoTS 6.2 / 7)**
Bringhurst argues for one versatile family rather than a wardrobe. This
project uses one text face (Alegreya), its true small-caps companion, and one
monospace for the machine voice — three voices, one family sensibility.
*Kept.*

**Use true small caps and real italics. (EoTS 3.2.2, 4.3)** Faux small caps
(the browser shrinking capitals) and faux italics (slanting the roman) are
crude; the system uses the drawn SC face and the drawn italic throughout.
*Kept* — this is why Alegreya SC is a hard dependency, not a nicety.

**Use the correct figures. (EoTS 3.2.1)** Old-style (text) figures in running
prose, where they sit among lowercase letters like words; lining, tabular
figures in tables and code, where they must align and sum. *Kept* via
`font-variant-numeric`, switched by context.

**Kern, and set the ligatures. (EoTS 3.1, 5.1.1)** Metal type kerns and
ligates by physical necessity; on the web these are opt-in and often left
off. The system turns on kerning, common and contextual ligatures, and
`optimizeLegibility` — and turns ligatures *off* in code, where characters
must stay literal. *Kept.*

### 4 · Color, and the shape of the page

**Give the page an even gray, then rubricate sparingly. (EoTS 6)** A well-set
page of black text has an even overall tone — a "color" — that nothing should
mottle. Accent color, historically the rubricator's red, is reserved for
wayfinding: the first letter, a note number, an ornament. This project holds
to a single rubric red on warm off-white paper with soft-black ink (never
pure `#000` on pure `#fff`, which glares on a lit screen). *Kept, adapted* —
the warm paper and softened black are screen-specific departures Bringhurst
would recognize as serving the same end.

**Put the notes where the eye can reach them. (Tufte; EoTS 6.1)** Footnotes
send the reader to the bottom of the page and back; sidenotes stand beside
the passage they serve. On a wide screen the scholar's margin holds them; on
a narrow one they fold behind their number. *Kept*, and arguably improved —
the web can hide and reveal a note without turning a leaf.

**Hang the punctuation. (EoTS 5.5)** Opening quotes and hyphens set slightly
into the margin so the text edge reads as straight. *Kept where supported*
(`hanging-punctuation`) as progressive enhancement.

---

## IV · Where print and web genuinely differ

Bringhurst wrote for a fixed page. Three of his assumptions must be rethought,
not merely ported:

**The page has no fixed size.** The book's page is a known rectangle;
the browser's is unknown and fluid. The system answers with a *measure* that
holds constant while the viewport around it changes, and a rhythm expressed
in relative units so it scales as one piece. The layout degrades in one
deliberate step — the scholar's margin collapses at a set breakpoint — rather
than reflowing chaotically.

**Justification is riskier.** Metal type was justified by a compositor; the
browser justifies by algorithm and can open "rivers" of white space. The old
web advice was simply *never justify*. Modern engines, with `hyphens`,
`hyphenate-limit-chars`, and `text-wrap: pretty`, do well enough at a
controlled measure that this project justifies its prose as the book does —
a considered departure from web orthodoxy, reversible by one line if a given
body of text doesn't take it.

**The screen emits light.** Pure black on pure white vibrates on a backlit
display in a way it never did on paper. Hence warm paper, softened ink, and a
dark mode that is a genuine inversion of the same six tokens rather than an
afterthought.

---

## V · The counsel of restraint

The hardest principle is the one that governs all the others, and it is a
principle of omission. Bringhurst:

> **The typographer's one essential task is to interpret and communicate the
> text. Its tone, its tempo, its logical structure, its physical size, all
> determine the possibilities of its typographic form.**

Which is to say: the typographer's taste is expressed mostly in what is left
out. This is why the system permits *at most one pull quote* per essay and
*at most one drop cap* (the opener); why links are quiet ink until the cursor
approaches; why there are no decorative entrance animations, no parallax, no
gradients-as-ornament, no second accent color. Each of these would be a small
theft of the reader's attention from the text, and the whole method is a
refusal of that theft.

**Functional motion is not that theft.** A sidenote that unfolds so the
reader sees where the gloss came from; a dialog that settles so the modal
state is obvious; a scrollbar that admits there is more below — these make
state readable. They are held to the same standard as type: if the motion
does not clarify, it is left out. Fluid Functionalism's three springs and
faster exits exist so that clarity stays consistent; nothing invents its
own tempo.

Applied to a React codebase, the discipline inverts the usual instinct. The
components here exist to *enforce* craft: `<Sidenote>` so the margin
mechanics are never wrong, `<Verse>` so runovers always hang, `next/font`
so the real OpenType features always ship, `SurfaceProvider` / `Elevated`
so overlays lift honestly, `lib/springs` so timing is shared. The framework
is the press. The book is still the point.

---

## VI · Two layers, one page

Aldine is easiest to keep coherent when you name the layers:

| Layer | Job | Source of truth |
| --- | --- | --- |
| **Reading** | Honor the text — measure, rhythm, faces, ink/paper, notes | Bringhurst et al.; `globals.css` typographic tokens; `components/typography/` |
| **Behavioral** | Honor interactive state — elevation, scroll, motion, controls | Fluid Functionalism; `lib/springs`, `lib/elevated`, `lib/surface-*`; `components/ui/` |

The reading layer never borrows FF's default cool grays or pill chrome. The
behavioral layer never invents a second measure, a second accent, or a
one-off animation curve.

The FF **component kit** (Button, Dialog, Dropdown, Select, Accordion, Tabs,
Slider, Table, ScrollArea, Switch, Radio/Checkbox groups, inputs, chat /
ask-questions, thinking indicators, color picker, file thumbnail,
mobile drawer, …) is not a second design system. It is one registry family
that already speaks surfaces and springs; Aldine only remaps tokens and
hosts specimens in literary context. Full inventory and demo → essay map:
`design.md` §6.5–§6.6. Specimens should feel like tools inside the book,
not a dashboard pasted into a chapter.

---

## VII · Further reading, in order of usefulness

1. Robert Bringhurst, *The Elements of Typographic Style*, v4.3 — read it
   once through, then keep it as a reference.
2. Richard Rutter, [webtypography.net](https://webtypography.net) — the free,
   rule-by-rule web translation; and his book *Web Typography* (2017).
3. Matthew Butterick, [Practical Typography](https://practicaltypography.com)
   — start here if you read only one thing.
4. Edward Tufte, [Tufte CSS](https://edwardtufte.github.io/tufte-css/) and the
   Tufte handout style — for the margin and the ethic of data-ink.
5. Oskar Wickström, [The Proportional Web](https://owickstrom.github.io/the-proportional-web/)
   — the closest sibling to this project.
6. Tim Brown, *Flexible Typesetting* (A Book Apart, 2018) — responsive scales
   and rhythm; and his tool [Modular Scale](https://modularscale.com).
7. Bram Stein, *Webfont Handbook* (A Book Apart, 2017) — loading, subsetting,
   and OpenType features on the web in depth.
8. Donny Trương, [Professional Web Typography](https://prodesigntools.web.unc.edu)
   — a concise, free primer.
9. Jason Santa Maria, *On Web Typography* (A Book Apart, 2014).
10. Ellen Lupton, *Thinking with Type* (2nd ed., 2010) — the best illustrated
    introduction to the vocabulary.
11. [Fluid Functionalism](https://www.fluidfunctionalism.com) — surfaces,
    scrollbars, and motion as a behavioral system for interactive chrome;
    see especially
    [Surfaces](https://www.fluidfunctionalism.com/docs/surfaces),
    [Scrollbars](https://www.fluidfunctionalism.com/docs/scrollbars), and
    [Motion](https://www.fluidfunctionalism.com/docs/motion).

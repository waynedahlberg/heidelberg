import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Page } from "@/components/Page";
import { Newthought, SectionBreak, MarginNote } from "@/components/typography";

export const metadata: Metadata = {
  title: "Colophon",
  description:
    "How this site is made: typefaces, measure, rhythm, tools, and sources.",
};

export default function ColophonPage() {
  return (
    <Page>
      <Header current="/colophon" />
      <main>
        <article>
          <header className="article-header">
            <p className="kicker">Colophon</p>
            <h1 className="article-title">How this site is made</h1>
            <p className="article-subtitle">
              A colophon is a book’s account of itself — its types, paper,
              and press. Every site built with care deserves one.
            </p>
          </header>
          <div className="typeset">
            <h2>The types</h2>
            <p className="flush">
              <Newthought>The text face is Alegreya,</Newthought> designed by
              Juan Pablo del Peral for Huerta Tipográfica and awarded a place
              in the ATypI “Letter.2” selection of the best typefaces of the
              decade.
              <MarginNote>
                Alegreya was conceived for literature: a calligraphic
                humanist face with the vigor of the Renaissance but drawn
                for long immersive reading.
              </MarginNote>{" "}
              Body matter is set in the variable roman and italic. True
              small caps come from its companion face, Alegreya SC — never
              synthesized by the browser. Code and other machine speech is
              set in Courier Prime, Alan Dague-Greene’s screenwriter’s
              revival of Courier, whose typewriter plainness keeps the two
              voices honest. All fonts are subset and self-hosted at build
              time via <code>next/font</code>; no request ever leaves for a
              font server.
            </p>
            <h2>The page</h2>
            <p className="flush">
              The measure is 62 characters — inside Bringhurst’s 45–75
              band, near his “ideal” 66. The leading is 28px against a 20px
              body (a ratio of 1.4), and every vertical interval on the
              page is a multiple of that 28px baseline. Figures in prose are
              old-style; figures in tables are lining and tabular. Prose is
              justified with CSS hyphenation, as in the book. Notes sit in a
              scholar’s margin of 16½ characters, after Edward Tufte’s
              practice; on a narrow screen they fold behind their reference
              numbers. The palette is ink on paper plus a single rubric red,
              used as the medieval rubricators used it — for wayfinding,
              not ornament.
            </p>
            <h2>The press</h2>
            <p className="flush">
              Built with Next.js and TypeScript; styled with Tailwind CSS v4
              design tokens over hand-set CSS; essays authored in MDX and
              rendered statically. The full system is documented in{" "}
              <code>design.md</code> (the portable specification) and{" "}
              <code>PRINCIPLES.md</code> (the reasoning), both in the
              repository root.
            </p>
            <h2>The chrome</h2>
            <p className="flush">
              <Newthought>When the page must also act</Newthought> — open a
              dialog, nest a menu, admit a longer catalogue — the interactive
              layer follows{" "}
              <a href="https://www.fluidfunctionalism.com">
                Fluid Functionalism
              </a>
              : eight nested surface levels so overlays lift relative to
              whatever they sit in; scroll regions that fade at the edge and
              keep a quiet thumb until hover; three spring speeds shared by
              every control, with exits a little quicker than entrances. The
              same registry supplies the component kit — buttons, dialogs,
              dropdowns, selects, accordions, tabs, sliders, tables, switches,
              radio and checkbox groups, inputs, chat and ask-question panels,
              thinking indicators, a color picker, file thumbnails, a mobile
              drawer — all remapped to this site’s ink and paper, rounded not
              pill. Motion that clarifies state is kept; motion that decorates
              is left out. Specimens appear in the essays where the text asks
              for a tool, not as a separate component zoo; the inventory lives
              in <code>design.md</code> §6.
            </p>
            <SectionBreak />
            <h2>Sources &amp; further reading</h2>
            <ul>
              <li>
                Robert Bringhurst, <em>The Elements of Typographic Style</em>,
                v4.3 (Hartley &amp; Marks, 2012) — the canon.
              </li>
              <li>
                Richard Rutter, <a href="https://webtypography.net">
                The Elements of Typographic Style Applied to the Web</a> —
                Bringhurst’s rules translated, rule by rule, into CSS.
              </li>
              <li>
                Oskar Wickström, <a href="https://owickstrom.github.io/the-proportional-web/">
                The Proportional Web</a> — the Alegreya + Courier Prime
                system and rem-based rhythm this site builds on.
              </li>
              <li>
                Edward Tufte et al., <a href="https://edwardtufte.github.io/tufte-css/">
                Tufte CSS</a> — sidenote and margin mechanics.
              </li>
              <li>
                Matthew Butterick, <a href="https://practicaltypography.com">
                Practical Typography</a> — the pragmatist’s companion.
              </li>
              <li>
                Richard Rutter, <em>Web Typography</em> (Ampersand, 2017) —
                the full book-length treatment of type on screens.
              </li>
              <li>
                Tim Brown, <a href="https://modularscale.com">Modular Scale</a>{" "}
                and <em>Flexible Typesetting</em> (A Book Apart, 2018).
              </li>
              <li>
                Donny Trương, <a href="https://prodesigntools.web.unc.edu">
                Professional Web Typography</a> — a free, concise primer.
              </li>
              <li>
                <a href="https://type-scale.com">Typescale</a> and{" "}
                <a href="https://gridlover.net">Gridlover</a> — tools for
                scales and vertical rhythm.
              </li>
              <li>
                Bram Stein, <em>Webfont Handbook</em> (A Book Apart, 2017) —
                loading, subsetting, and OpenType features in depth.
              </li>
              <li>
                <a href="https://www.fluidfunctionalism.com">
                  Fluid Functionalism
                </a>{" "}
                — surfaces, scrollbars, and motion for interactive chrome;
                see{" "}
                <a href="https://www.fluidfunctionalism.com/docs/surfaces">
                  Surfaces
                </a>
                ,{" "}
                <a href="https://www.fluidfunctionalism.com/docs/scrollbars">
                  Scrollbars
                </a>
                , and{" "}
                <a href="https://www.fluidfunctionalism.com/docs/motion">
                  Motion
                </a>
                .
              </li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </Page>
  );
}

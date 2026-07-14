import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Page } from "@/components/Page";
import { Newthought, SectionBreak, Sidenote } from "@/components/typography";

export const metadata: Metadata = {
  title: "About",
  description: "What Aldine is, and why it is set the way it is.",
};

export default function AboutPage() {
  return (
    <Page>
      <Header current="/about" />
      <main>
        <article>
          <header className="article-header">
            <p className="kicker">About this journal</p>
            <h1 className="article-title">An apology for fine typography</h1>
            <p className="article-subtitle">
              Being a brief account of this journal, its namesake, and its
              convictions.
            </p>
          </header>
          <div className="typeset">
            <p className="flush drop-cap">
              <Newthought>Aldine takes its name</Newthought> from the press of
              Aldus Manutius, the Venetian printer who, five centuries before
              anyone owned a screen, understood that a book is an instrument
              for reading and that everything in it — the type, the measure,
              the margins, the ink — should serve the reader’s eye and
              nothing else.
              <Sidenote>
                The Aldine Press, Venice, fl. 1494–1597. Aldus commissioned
                the first italic type from Francesco Griffo and printed the
                first portable classics, the ancestors of every paperback.
              </Sidenote>{" "}
              This site carries that conviction onto the web.
            </p>
            <p>
              It is a working demonstration of Robert Bringhurst’s{" "}
              <em>The Elements of Typographic Style</em> applied to a modern
              stack: one versatile typeface family, a measure of about
              sixty-five characters, a fixed baseline rhythm, true small
              caps, old-style figures, and a scholar’s margin for notes. The
              essays are drawn from nineteenth-century texts — Melville,
              Thoreau, Darwin, Whitman — because prose of that quality asks
              for, and rewards, careful setting.
            </p>
            <SectionBreak />
            <p className="flush">
              <Newthought>Nothing here is decoration.</Newthought> Every rule
              in the stylesheet cites its source in Bringhurst, Rutter,
              Tufte, or Butterick. If a detail cannot justify itself — if it
              does not make the text easier to read, easier to navigate, or
              more honest — it is left out. That is the whole method, and it
              is portable: see the <a href="/colophon">colophon</a> for how
              this site is made, and the accompanying <code>design.md</code>{" "}
              for how to make another like it.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </Page>
  );
}

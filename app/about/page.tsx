import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Page } from "@/components/Page";
import { Newthought, SectionBreak, Sidenote } from "@/components/typography";

export const metadata: Metadata = {
  title: "About",
  description: "What Heidelberg is, and why it is set the way it is.",
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
              <Newthought>Heidelberg takes its name</Newthought> from the
              university city on the Neckar — a place where scholarship and
              the printed book have shared a desk for centuries, and where
              the craft of the press still means something more than a
              machine.
              <Sidenote>
                Heidelberg’s university, founded 1386, is among Europe’s
                oldest; the city’s name also travels with Heidelberger
                Druckmaschinen, the pressworks that carried letterpress and
                offset into the industrial age.
              </Sidenote>{" "}
              This site carries that conviction onto the web: a book is an
              instrument for reading, and everything in it — the type, the
              measure, the margins, the ink — should serve the reader’s eye
              and nothing else.
            </p>
            <p>
              It is a working demonstration of Robert Bringhurst’s{" "}
              <em>The Elements of Typographic Style</em> applied to a modern
              stack: one versatile typeface family, a measure of about
              sixty-five characters, a fixed baseline rhythm, true small
              caps, old-style figures, and a scholar’s margin for notes.
              Where the page must also act — menus, dialogs, scroll — a
              quieter behavioral layer from{" "}
              <a href="https://www.fluidfunctionalism.com">
                Fluid Functionalism
              </a>{" "}
              keeps interactive state legible without stealing the book’s
              voice. The essays are drawn from nineteenth-century texts —
              Melville, Thoreau, Darwin, Whitman — because prose of that
              quality asks for, and rewards, careful setting.
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

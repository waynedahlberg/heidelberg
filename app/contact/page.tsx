import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to the editors of Aldine.",
};

export default function ContactPage() {
  return (
    <div className="page">
      <Header current="/contact" />
      <main>
        <header className="article-header">
          <p className="kicker">Correspondence</p>
          <h1 className="article-title">Write to the editors</h1>
          <p className="article-subtitle">
            Even a form can be set like a book page: small-caps labels,
            hairline rules, and no box in sight.
          </p>
        </header>
        <form
          className="typeset-form"
          action="mailto:editors@example.com"
          method="post"
          encType="text/plain"
        >
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" autoComplete="name" />

          <label htmlFor="email">Your address</label>
          <input id="email" name="email" type="email" autoComplete="email" />

          <label htmlFor="subject">Concerning</label>
          <input id="subject" name="subject" type="text" />

          <label htmlFor="message">Your letter</label>
          <textarea id="message" name="message" rows={8} />

          <button type="submit">Post the letter</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

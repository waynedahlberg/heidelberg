import { Link } from "next-view-transitions";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="page">
      <Header />
      <main>
        <header className="article-header">
          <p className="kicker">Errata</p>
          <h1 className="article-title">This leaf is missing</h1>
          <p className="article-subtitle">
            The page you seek was never bound into this volume, or has been
            cut from it.
          </p>
        </header>
        <p>
          Return to the <Link href="/">table of contents</Link>.
        </p>
      </main>
      <Footer />
    </div>
  );
}

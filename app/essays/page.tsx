import { Link } from "next-view-transitions";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Essays",
  description: "The complete archive, set in Alegreya after Bringhurst.",
};

export default function EssaysPage() {
  const posts = getAllPosts();

  return (
    <div className="page">
      <Header current="/essays" />
      <main>
        <header className="article-header">
          <p className="kicker">The archive</p>
          <h1 className="article-title">Essays</h1>
          <p className="article-subtitle">
            Specimens and set pieces — each essay exercises a different part
            of the typographic system.
          </p>
        </header>
        <ol className="toc-list">
          {posts.map((post, i) => (
            <li key={post.slug}>
              <Link href={`/essays/${post.slug}`} className="toc-entry">
                <span className="toc-meta">
                  <span>
                    {String(i + 1).padStart(2, "0")} · {post.kicker ?? "Essay"}
                    {post.author ? ` · after ${post.author}` : ""}
                  </span>
                  <span>{formatDate(post.date)}</span>
                </span>
                <p className="toc-title">{post.title}</p>
                {post.subtitle && (
                  <p className="toc-description">{post.subtitle}</p>
                )}
              </Link>
            </li>
          ))}
        </ol>
      </main>
      <Footer />
    </div>
  );
}

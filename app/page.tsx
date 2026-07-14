import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllPosts, formatDate } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="page">
      <Header current="/" />
      <main>
        <header className="article-header">
          <p className="kicker">A journal of typographic craft</p>
          <h1 className="article-title">
            Typography exists to honor content.
          </h1>
          <p className="article-subtitle">
            Essays set after Robert Bringhurst’s Elements of Typographic
            Style — one typeface, one measure, one baseline, and the
            patience to get the details right.
          </p>
        </header>

        <h2
          className="smallcaps"
          style={{
            fontSize: "var(--size-caption)",
            fontWeight: 500,
            letterSpacing: "0.16em",
            borderBottom: "var(--rule-w) solid var(--ink)",
            paddingBottom: "calc(var(--baseline) / 4)",
            margin: "0",
            lineHeight: "var(--baseline)",
          }}
        >
          Contents
        </h2>
        <ol className="toc-list">
          {posts.map((post, i) => (
            <li key={post.slug}>
              <Link href={`/essays/${post.slug}`} className="toc-entry">
                <span className="toc-meta">
                  <span>
                    {String(i + 1).padStart(2, "0")} · {post.kicker ?? "Essay"}
                  </span>
                  <span>{formatDate(post.date)}</span>
                </span>
                <p className="toc-title">{post.title}</p>
                {post.description && (
                  <p className="toc-description">{post.description}</p>
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

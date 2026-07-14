import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { mdxComponents } from "@/components/mdx-components";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="page with-margin">
      <Header current="/essays" />
      <main>
        <article>
          <header className="article-header">
            <p className="kicker">{post.kicker ?? "Essay"}</p>
            <h1 className="article-title">{post.title}</h1>
            {post.subtitle && (
              <p className="article-subtitle">{post.subtitle}</p>
            )}
            <p className="byline">
              {post.author && (
                <>
                  after <span className="byline-name">{post.author}</span> ·{" "}
                </>
              )}
              {formatDate(post.date)}
            </p>
          </header>
          <div className="typeset">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

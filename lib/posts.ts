import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export interface PostMeta {
  slug: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  author?: string;
  date: string; // ISO 8601
  description?: string;
  order?: number;
}

export interface Post extends PostMeta {
  content: string;
}

function parsePost(filename: string): Post {
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    subtitle: data.subtitle,
    kicker: data.kicker,
    author: data.author,
    date: data.date ?? "1900-01-01",
    description: data.description,
    order: data.order,
    content,
  };
}

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(parsePost)
    .sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
      return a.date < b.date ? 1 : -1;
    });
}

export function getPostBySlug(slug: string): Post | undefined {
  const file = ["mdx", "md"]
    .map((ext) => path.join(POSTS_DIR, `${slug}.${ext}`))
    .find((p) => fs.existsSync(p));
  if (!file) return undefined;
  return parsePost(path.basename(file));
}

/** Long-form date in the manner of a title page: “14 July 1851”. */
export function formatDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

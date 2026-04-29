import fs from "fs";
import path from "path";
import { Locales } from "./i18n/i18n";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  locale: Locales;
}

const postsDir = path.join(process.cwd(), "src/content/posts");

export function getPostSlugs(locale: Locales): string[] {
  const dir = path.join(postsDir, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.(mdx|md)$/, ""));
}

export async function getPost(
  slug: string,
  locale: Locales,
): Promise<PostMeta | null> {
  try {
    const mod = await import(`@/content/posts/${locale}/${slug}.mdx`);

    const metadata = mod.metadata ?? {};

    return {
      slug,
      locale,
      // content: mod.default,
      title: metadata.title ?? slug,
      date: metadata.date
        ? new Date(metadata.date).toISOString()
        : new Date().toISOString(),
      description: metadata.description ?? "",
      tags: metadata.tags ?? [],
    };
  } catch {
    return null;
  }
}

export async function getAllPosts(locale: Locales): Promise<PostMeta[]> {
  const slugs = getPostSlugs(locale);

  const posts = await Promise.all(slugs.map((slug) => getPost(slug, locale)));

  return posts
    .filter((p): p is PostMeta => p !== null)
    .map(({ ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

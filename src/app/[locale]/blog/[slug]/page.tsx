import {
  AsyncPageLocalesProps,
  getClientT,
  Locales,
  locales,
} from "@/shared/lib/i18n/i18n";
import { i18formatDate } from "@/shared/lib/i18n/i18n.date";
import { getPostSlugs } from "@/shared/lib/mdx";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const params: { locale: Locales; slug: string }[] = [];

  for (const locale of locales) {
    const slugs = await getPostSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

async function loadPost(locale: Locales, slug: string) {
  try {
    const mod = await import(`@/content/posts/${locale}/${slug}.mdx`);
    return mod;
  } catch {
    return null;
  }
}

export default async function PostPage({
  params,
}: AsyncPageLocalesProps<{ slug: string }>) {
  const { slug } = await params;
  const { locale, t } = await getClientT(params);

  const post = await loadPost(locale, slug);
  if (!post) notFound();

  const { default: Content, metadata } = post;

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 space-y-10">
      <Link
        href={`/${locale}/blog`}
        className="text-xs font-mono text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
      >
        {t.blog.back}
      </Link>

      <header className="space-y-3">
        <time className="text-xs font-mono text-zinc-400">
          {i18formatDate(metadata?.date, locale)}
        </time>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
          {metadata?.title}
        </h1>

        {metadata?.description && (
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            {metadata.description}
          </p>
        )}

        {metadata?.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {metadata.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <Content />
      </article>
    </div>
  );
}

import Link from "next/link";

import { AsyncPageLocalesProps, getClientT } from "@/shared/lib/i18n/i18n";
import { getAllPosts } from "@/shared/lib/mdx";
import { i18formatDate } from "@/shared/lib/i18n/i18n.date";

export default async function BlogPage({ params }: AsyncPageLocalesProps) {
  const { t, locale } = await getClientT(params);
  const posts = getAllPosts(locale);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-12">
      <header className="space-y-2">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          {t.blog.title}
        </p>
        <h1 className="text-4xl font-bold tracking-tight">{t.blog.title}</h1>
      </header>

      {posts.length === 0 ? (
        <p className="text-zinc-400">{t.blog.noPosts}</p>
      ) : (
        <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="group flex flex-col gap-1 py-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-lg font-medium group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-xs font-mono text-zinc-400 shrink-0 mt-1">
                    {i18formatDate(post.date, locale, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
                {post.description && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {post.description}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-zinc-400 dark:text-zinc-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

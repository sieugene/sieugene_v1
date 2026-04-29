import { ArticlePreview } from "@/features/posts/ui/ArticlePreview";
import { AsyncPageLocalesProps, getClientT } from "@/shared/lib/i18n/i18n";
import { getAllPosts } from "@/shared/lib/mdx";

export default async function BlogPage({ params }: AsyncPageLocalesProps) {
  const { t, locale } = await getClientT(params);
  const posts = await getAllPosts(locale);

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
          {posts.map((post, index) => (
            <ArticlePreview locale={locale} post={post} key={index} />
          ))}
        </ul>
      )}
    </div>
  );
}

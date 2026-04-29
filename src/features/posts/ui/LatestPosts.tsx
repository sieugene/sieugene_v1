import { Locales, Translations } from "@/shared/lib/i18n/i18n";
import { getAllPosts } from "@/shared/lib/mdx";
import Link from "next/link";
import { ArticlePreview } from "./ArticlePreview";
import { ROUTES } from "@/shared/lib/routes";

type Props = {
  locale: Locales;
  t: Translations;
};
export const LatestPosts = async ({ locale, t }: Props) => {
  const allPosts = await getAllPosts(locale);
  const posts = allPosts.slice(0, 3);
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          {t.blog.title}
        </h2>
        <Link
          href={ROUTES.blog(locale)}
          className="text-xs font-mono text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
        >
          all →
        </Link>
      </div>
      {posts.length === 0 ? (
        <p className="text-sm text-zinc-400">{t.blog.noPosts}</p>
      ) : (
        <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {posts.map((post, index) => (
            <ArticlePreview post={post} key={index} locale={locale} />
          ))}
        </ul>
      )}
    </>
  );
};

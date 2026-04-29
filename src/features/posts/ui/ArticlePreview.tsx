import { Locales } from "@/shared/lib/i18n/i18n";
import { i18formatDate } from "@/shared/lib/i18n/i18n.date";
import { PostMeta } from "@/shared/lib/mdx";
import { ROUTES } from "@/shared/lib/routes";
import Link from "next/link";
import { FC } from "react";

type Props = {
  post: PostMeta;
  locale: Locales;
};
export const ArticlePreview: FC<Props> = ({ post, locale }) => {
  return (
    <li key={post.slug}>
      <Link
        href={ROUTES.blogBySlug(locale, post.slug)}
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
  );
};

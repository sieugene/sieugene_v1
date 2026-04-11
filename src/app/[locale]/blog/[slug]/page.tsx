import { notFound } from 'next/navigation'
import Link from 'next/link'
import { locales, defaultLocale, type Locale } from '@/lib/i18n'
import { getPostSlugs } from '@/lib/mdx';

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []

  for (const locale of locales) {
    // ⚠️ теперь читаем файлы напрямую (или хардкод / glob)
    const slugs = await getPostSlugs(locale)
    for (const slug of slugs) {
      params.push({ locale, slug })
    }
  }

  return params
}

function toLocale(s: string): Locale {
  return locales.includes(s as Locale) ? (s as Locale) : defaultLocale
}

// 👇 helper (замена getPost)
async function loadPost(locale: string, slug: string) {
  try {
    const mod = await import(`@/content/posts/${locale}/${slug}.mdx`)
    return mod
  } catch {
    return null
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale: raw, slug } = await params
  const locale = toLocale(raw)

  const post = await loadPost(locale, slug)
  if (!post) notFound()

  const { default: Content, metadata } = post

  const backLabel =
    locale === 'ja'
      ? '← ブログへ戻る'
      : locale === 'ru'
      ? '← Назад к блогу'
      : '← Back to blog'

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 space-y-10">
      <Link
        href={`/${locale}/blog`}
        className="text-xs font-mono text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
      >
        {backLabel}
      </Link>

      <header className="space-y-3">
        <time className="text-xs font-mono text-zinc-400">
          {new Date(metadata?.date).toLocaleDateString(
            locale === 'ja' ? 'ja-JP' : locale === 'ru' ? 'ru-RU' : 'en-US',
            { year: 'numeric', month: 'long', day: 'numeric' }
          )}
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
  )
}
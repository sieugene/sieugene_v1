import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Locale } from './i18n'

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  tags?: string[]
  locale: Locale
}

export interface Post extends PostMeta {
  content: string
}

const postsDir = path.join(process.cwd(), 'src/content/posts')

export function getPostSlugs(locale: Locale): string[] {
  const dir = path.join(postsDir, locale)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.(mdx|md)$/, ''))
}

export function getPost(slug: string, locale: Locale): Post | null {
  const extensions = ['.mdx', '.md']
  let raw: string | null = null

  for (const ext of extensions) {
    const filePath = path.join(postsDir, locale, `${slug}${ext}`)
    if (fs.existsSync(filePath)) {
      raw = fs.readFileSync(filePath, 'utf-8')
      break
    }
  }

  if (!raw) return null

  const { data, content } = matter(raw)
  return {
    slug,
    locale,
    content,
    title: data.title ?? slug,
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    description: data.description ?? '',
    tags: data.tags ?? [],
  }
}

export function getAllPosts(locale: Locale): PostMeta[] {
  return getPostSlugs(locale)
    .map((slug) => getPost(slug, locale))
    .filter((p): p is Post => p !== null)
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

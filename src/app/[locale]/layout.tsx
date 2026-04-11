import type { Metadata } from 'next'
import '../globals.css'
import { locales, defaultLocale, type Locale } from '@/lib/i18n'
import Nav from '@/components/Nav'


export const metadata: Metadata = {
  title: 'Eugene — Frontend Engineer',
  description: 'Frontend engineer specialising in React, Next.js, TypeScript. Based in Japan.',
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

function toLocale(s: string): Locale {
  return locales.includes(s as Locale) ? (s as Locale) : defaultLocale
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  const locale = toLocale(raw)
  const lang = locale === 'ja' ? 'ja' : locale === 'ru' ? 'ru' : 'en'

  return (
    <html lang={lang}>
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased transition-colors">
        <Nav locale={locale} />
        <main>{children}</main>
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Eugene
        </footer>
      </body>
    </html>
  )
}

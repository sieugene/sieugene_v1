'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { locales, type Locale } from '@/lib/i18n'
import ThemeToggle from '@/features/theme/ui/ThemeToggle'

const localeLabel: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
  ja: '日本語',
}

interface NavProps {
  locale: Locale
}

export default function Nav({ locale }: NavProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  // Strip current locale prefix from path
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'

  const links = [
    { href: `/${locale}`, label: locale === 'ja' ? 'ホーム' : locale === 'ru' ? 'Главная' : 'Home' },
    { href: `/${locale}/about`, label: locale === 'ja' ? '自己紹介' : locale === 'ru' ? 'Обо мне' : 'About' },
    { href: `/${locale}/projects`, label: locale === 'ja' ? 'プロジェクト' : locale === 'ru' ? 'Проекты' : 'Projects' },
    { href: `/${locale}/blog`, label: locale === 'ja' ? 'ブログ' : locale === 'ru' ? 'Блог' : 'Blog' },
    { href: `/${locale}/contact`, label: locale === 'ja' ? 'お問い合わせ' : locale === 'ru' ? 'Контакты' : 'Contact' },
  ]

  function switchLocale(next: Locale) {
    // Set cookie so middleware remembers choice
    document.cookie = `locale=${next};path=/;max-age=31536000`
    router.push(`/${next}${pathWithoutLocale}`)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="font-mono text-sm font-semibold tracking-tight hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
        >
          sieugene
        </Link>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-6 text-sm">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== `/${locale}` && pathname.startsWith(link.href))
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 ${
                    isActive
                      ? 'text-zinc-900 dark:text-zinc-100 font-medium'
                      : 'text-zinc-500 dark:text-zinc-400'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="flex items-center gap-1 rounded-full border border-zinc-200 dark:border-zinc-700 p-0.5 text-xs font-mono">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  loc === locale
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {localeLabel[loc]}
              </button>
            ))}
          </div>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-1 text-zinc-500"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-px bg-current mb-1" />
            <span className="block w-5 h-px bg-current mb-1" />
            <span className="block w-5 h-px bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <ul className="flex flex-col px-4 py-3 gap-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

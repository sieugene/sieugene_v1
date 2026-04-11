import { getT, locales, defaultLocale, type Locale } from '@/lib/i18n'

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale = locales.includes(raw as Locale) ? (raw as Locale) : defaultLocale
  const t = getT(locale)

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-10">
      <header className="space-y-2">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          {t.contact.title}
        </p>
        <h1 className="text-4xl font-bold tracking-tight">{t.contact.title}</h1>
      </header>

      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
        {t.contact.subtitle}
      </p>

      <div className="flex gap-4 flex-wrap">
        <a
          href="mailto:your@email.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          {t.contact.email}
        </a>
        <a
          href="https://github.com/sieugene"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-700 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
        >
          {t.contact.github} ↗
        </a>
      </div>

      {/* Social links */}
      <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
        {[
          { label: 'GitHub', href: 'https://github.com/sieugene' },
          { label: 'Twitter / X', href: '#' },
          { label: 'LinkedIn', href: '#' },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group max-w-xs py-2 border-b border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors"
          >
            <span className="text-sm font-mono text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
              {link.label}
            </span>
            <span className="text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 transition-colors">
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

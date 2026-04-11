import { getT, locales, defaultLocale, type Locale } from '@/lib/i18n'

const stack = [
  { category: 'Frontend', items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vite'] },
  { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'REST', 'GraphQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code'] },
  { category: 'Learning', items: ['Python', 'Scikit-learn', 'PyTorch', 'ML fundamentals'] },
]

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale = locales.includes(raw as Locale) ? (raw as Locale) : defaultLocale
  const t = getT(locale)

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-16">
      <header className="space-y-4">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          {t.about.title}
        </p>
        <h1 className="text-4xl font-bold tracking-tight">{t.about.title}</h1>
        <p className="text-lg leading-relaxed max-w-2xl text-zinc-600 dark:text-zinc-400">
          {t.about.body}
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          {t.about.stack}
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {stack.map((group) => (
            <div key={group.category} className="space-y-2">
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-mono rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

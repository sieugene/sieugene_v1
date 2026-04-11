import { getT, locales, defaultLocale, type Locale } from '@/lib/i18n'

const projects = [
  {
    name: 'yomikomi',
    desc: {
      en: 'Browser-based Japanese OCR app using PaddleOCR and ONNX Runtime Web. Runs fully client-side with iOS Safari WebAssembly memory optimisations.',
      ru: 'Браузерное приложение для японского OCR на PaddleOCR и ONNX Runtime Web. Работает полностью на клиенте с оптимизациями памяти для iOS Safari.',
      ja: 'PaddleOCRとONNX Runtime Webを使ったブラウザベースの日本語OCRアプリ。iOS SafariのWASMメモリ最適化を含み、完全にクライアントサイドで動作します。',
    },
    tech: ['Next.js', 'TypeScript', 'PaddleOCR', 'ONNX', 'WASM'],
    github: 'https://github.com/sieugene',
    live: null,
  },
  {
    name: 'sieugene v1',
    desc: {
      en: 'Previous personal portfolio website built with Next.js and TypeScript.',
      ru: 'Предыдущий персональный сайт-портфолио на Next.js и TypeScript.',
      ja: '以前のNext.js・TypeScriptで作ったポートフォリオサイト。',
    },
    tech: ['Next.js', 'TypeScript', 'React'],
    github: 'https://github.com/sieugene/sieugene_v1',
    live: null,
  },
]

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  const locale = locales.includes(raw as Locale) ? (raw as Locale) : defaultLocale
  const t = getT(locale)

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-12">
      <header className="space-y-2">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          {t.projects.title}
        </p>
        <h1 className="text-4xl font-bold tracking-tight">{t.projects.title}</h1>
      </header>

      <div className="grid gap-5">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-mono font-semibold text-base">{p.name}</h2>
              <div className="flex gap-3 shrink-0">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    {t.projects.viewCode} ↗
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    {t.projects.viewLive} ↗
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {p.desc[locale]}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-xs font-mono rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

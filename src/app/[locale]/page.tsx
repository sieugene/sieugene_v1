import { BASE_STUCK } from '@/@pages/about/lib/about.constants';
import { GITHUB_LINK } from "@/entities/contact/lib/constants";
import { ContactGroupBtns } from "@/entities/contact/ui/ContactGroupBtns";
import { LatestPosts } from "@/features/posts/ui/LatestPosts";
import { AsyncPageLocalesProps, getClientT } from "@/shared/lib/i18n/i18n";
import { ROUTES } from '@/shared/lib/routes';
import { Button } from "@/shared/ui/Button";
import Link from "next/link";


const projects = [
  {
    name: "yomikomi",
    desc: "Browser-based Japanese OCR using PaddleOCR + ONNX Runtime Web.",
    tech: ["Next.js", "WASM", "PaddleOCR"],
    github: GITHUB_LINK,
  },
  {
    name: "sieugene v1",
    desc: "Previous personal portfolio — the one that came before this.",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/sieugene/sieugene_v1",
  },
];

export default async function HomePage({ params }: AsyncPageLocalesProps) {
  const { t, locale } = await getClientT(params);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-32">
      {/* ── Hero ── */}
      <section className="min-h-[60vh] flex flex-col justify-center gap-6">
        <p className="text-sm font-mono text-zinc-400 dark:text-zinc-500 tracking-widest uppercase">
          {t.hero.greeting}
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-none">
          {t.hero.name}
        </h1>
        <p className="text-xl sm:text-2xl text-zinc-500 dark:text-zinc-400 font-light max-w-md">
          {t.hero.role}
        </p>
        <p className="text-base text-zinc-400 dark:text-zinc-500 max-w leading-relaxed italic">
          &ldquo;{t.hero.tagline}&rdquo;
        </p>
        <div className="flex gap-3 pt-2 flex-wrap">
          <Button as={Link} href={ROUTES.projects(locale)}>
            {t.hero.cta}
          </Button>
          <Button as={Link} href={ROUTES.blog(locale)} variant="outline">
            {t.hero.blog}
          </Button>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="space-y-6">
        <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          {t.about.title}
        </h2>
        <p className="text-lg leading-relaxed max-w-2xl text-zinc-700 dark:text-zinc-300">
          {t.about.body}
        </p>
        <div className="space-y-2">
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
            {t.about.stack}
          </p>
          <div className="flex flex-wrap gap-2">
            {BASE_STUCK.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full text-xs font-mono border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
            {t.projects.title}
          </h2>
          <Link
            href={ROUTES.projects(locale)}
            className="text-xs font-mono text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 space-y-3 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <h3 className="font-mono font-semibold text-sm">{p.name}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-zinc-400 dark:text-zinc-500"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-1">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  github ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Blog preview ── */}
      <section id="blog" className="space-y-6">
        <LatestPosts locale={locale} t={t} />
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="space-y-6 pb-10">
        <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          {t.contact.title}
        </h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300">
          {t.contact.subtitle}
        </p>
        <ContactGroupBtns t={t} />
      </section>
    </div>
  );
}

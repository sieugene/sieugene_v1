import { ContactGroupBtns } from "@/entities/contact/ui/ContactGroupBtns";
import { AsyncPageLocalesProps, getClientT } from "@/shared/lib/i18n/i18n";
import { getAllPosts } from "@/shared/lib/mdx";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Git",
];

const projects = [
  {
    name: "yomikomi",
    desc: "Browser-based Japanese OCR using PaddleOCR + ONNX Runtime Web.",
    tech: ["Next.js", "WASM", "PaddleOCR"],
    github: "https://github.com/sieugene",
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
  const posts = getAllPosts(locale).slice(0, 3);

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
        <p className="text-base text-zinc-400 dark:text-zinc-500 max-w-sm leading-relaxed italic">
          &ldquo;{t.hero.tagline}&rdquo;
        </p>
        <div className="flex gap-3 pt-2 flex-wrap">
          <Button as={Link} href={`/${locale}/projects`}>
            {t.hero.cta}
          </Button>
          <Button as={Link} href={`/${locale}/blog`} variant="outline">
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
            {stack.map((s) => (
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
            href={`/${locale}/projects`}
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
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
            {t.blog.title}
          </h2>
          <Link
            href={`/${locale}/blog`}
            className="text-xs font-mono text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            all →
          </Link>
        </div>
        {posts.length === 0 ? (
          <p className="text-sm text-zinc-400">{t.blog.noPosts}</p>
        ) : (
          <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-4 group"
                >
                  <span className="font-medium group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors">
                    {post.title}
                  </span>
                  <time className="text-xs font-mono text-zinc-400 shrink-0">
                    {new Date(post.date).toLocaleDateString(
                      locale === "ja"
                        ? "ja-JP"
                        : locale === "ru"
                          ? "ru-RU"
                          : "en-US",
                      { year: "numeric", month: "short", day: "numeric" },
                    )}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        )}
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

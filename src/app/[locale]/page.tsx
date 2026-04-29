import { BASE_STUCK } from "@/@pages/about/lib/about.constants";
import { ContactGroupBtns } from "@/entities/contact/ui/ContactGroupBtns";
import { LatestPosts } from "@/features/posts/ui/LatestPosts";
import { Projects } from "@/features/projects/ui";
import { AsyncPageLocalesProps, getClientT } from "@/shared/lib/i18n/i18n";
import { ROUTES } from "@/shared/lib/routes";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";

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
          <Projects showOnlyLastProjects locale={locale} />
        </div>
      </section>

      <section id="blog" className="space-y-6">
        <LatestPosts locale={locale} t={t} />
      </section>

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

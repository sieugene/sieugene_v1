import { Projects } from "@/features/projects/ui";
import { AsyncPageLocalesProps, getClientT } from "@/shared/lib/i18n/i18n";

export default async function ProjectsPage({ params }: AsyncPageLocalesProps) {
  const { t, locale } = await getClientT(params);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-12">
      <header className="space-y-2">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          {t.projects.title}
        </p>
        <h1 className="text-4xl font-bold tracking-tight">
          {t.projects.title}
        </h1>
      </header>

      <div className="grid gap-5">
        <Projects locale={locale} />
      </div>
    </div>
  );
}

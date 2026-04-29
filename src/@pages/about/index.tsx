import { Translations } from "@/shared/lib/i18n/i18n";
import { FC } from "react";
import { currentStack, legacyStack } from "./lib/about.constants";

type Props = {
  t: Translations;
};
export const AboutPage: FC<Props> = ({ t }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-20">
      {/* Header */}
      <header className="space-y-4">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          {t.about.title}
        </p>
        <h1 className="text-4xl font-bold tracking-tight">{t.about.title}</h1>
        <p className="text-lg leading-relaxed max-w-2xl text-zinc-600 dark:text-zinc-400">
          {t.about.body}
        </p>
      </header>

      {/* Current stack */}
      <section className="space-y-6">
        <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          {t.about.stack}
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {currentStack.map((group) => (
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

      {/* Timeline */}
      <section className="space-y-6">
        <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          {t.about.timeline}
        </h2>
        <div className="space-y-5">
          {t.about.timelineItems.map((item) => (
            <div key={item.year} className="flex gap-6">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 w-16 shrink-0 pt-0.5">
                {item.year}
              </span>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Also worked with */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
          {t.about.alsoWorkedWith}
        </h2>
        <div className="flex flex-wrap gap-2">
          {legacyStack.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 text-xs font-mono rounded-full border border-zinc-100 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

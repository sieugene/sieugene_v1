import { FC } from "react";
import { PROJECTS_LIST } from "../lib/projects.constants";
import { Locales } from '@/shared/lib/i18n/i18n';

type Props = {
  locale: Locales
  showOnlyLastProjects?: boolean;
};
export const Projects: FC<Props> = ({ showOnlyLastProjects = false, locale }) => {
  const projects = showOnlyLastProjects
    ? PROJECTS_LIST.slice(0, 2)
    : PROJECTS_LIST;
  return (
    <>
      {projects.map((p) => (
        <div
          key={p.name}
          className="flex justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 space-y-3 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
        >
          <div>
            <h3 className="font-mono font-semibold text-sm">{p.name}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {p.desc[locale]}
            </p>
            <div className="flex flex-wrap gap-1.5">
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
            </div>
          </div>
          <div className="flex gap-3 pt-1">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Code ↗
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

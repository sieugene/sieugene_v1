import { SOCIAL_LINKS } from "../../lib/constants";

export const SocialLinks = () => {
  return (
    <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
      {SOCIAL_LINKS.map((link) => (
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
  );
};

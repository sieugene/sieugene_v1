import { ReactNode } from "react";

export const H1 = ({ children }: { children: ReactNode }) => (
  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mt-12 mb-6 first:mt-0 text-zinc-900 dark:text-zinc-100">
    {children}
  </h1>
);

export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mt-10 mb-4 text-zinc-800 dark:text-zinc-200 border-b border-zinc-100 dark:border-zinc-800 pb-2">
    {children}
  </h2>
);

export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="text-lg font-semibold mt-8 mb-3 text-zinc-800 dark:text-zinc-200">
    {children}
  </h3>
);

export const P = ({ children }: { children: ReactNode }) => (
  <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-5">
    {children}
  </p>
);

export const UL = ({ children }: { children: ReactNode }) => (
  <ul className="my-5 space-y-2 pl-0 list-none">
    {children}
  </ul>
);

export const OL = ({ children }: { children: ReactNode }) => (
  <ol className="my-5 space-y-2 pl-0 list-none counter-reset-item">
    {children}
  </ol>
);

export const LI = ({ children }: { children: ReactNode }) => (
  <li className="flex gap-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
    <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
    <span>{children}</span>
  </li>
);

export const Blockquote = ({ children }: { children: ReactNode }) => (
  <blockquote className="my-6 pl-4 border-l-2 border-zinc-300 dark:border-zinc-700">
    <div className="text-base leading-7 text-zinc-500 dark:text-zinc-400 italic">
      {children}
    </div>
  </blockquote>
);

export const InlineCode = ({ children }: { children: ReactNode }) => (
  <code className="px-1.5 py-0.5 text-sm font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
    {children}
  </code>
);

export const Pre = ({ children }: { children: ReactNode }) => (
  <div className="my-6 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
    <pre className="!rounded-none !border-0 !m-0">{children}</pre>
  </div>
);

export const HR = () => (
  <hr className="my-10 border-0 border-t border-zinc-100 dark:border-zinc-800" />
);

export const Strong = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
    {children}
  </strong>
);

export const A = ({
  children,
  href,
  ...props
}: {
  children: ReactNode;
  href?: string;
  [key: string]: unknown;
}) => (
  <a
    href={href}
    className="text-zinc-900 dark:text-zinc-100 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-zinc-300 transition-colors"
    target={href?.startsWith("http") ? "_blank" : undefined}
    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    {...props}
  >
    {children}
  </a>
);

export const Table = ({ children }: { children: ReactNode }) => (
  <div className="my-6 overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
    <table className="w-full text-sm text-left">{children}</table>
  </div>
);

export const TH = ({ children }: { children: ReactNode }) => (
  <th className="px-4 py-3 font-mono font-medium text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
    {children}
  </th>
);

export const TD = ({ children }: { children: ReactNode }) => (
  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
    {children}
  </td>
);

export const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  blockquote: Blockquote,
  code: InlineCode,
  pre: Pre,
  hr: HR,
  strong: Strong,
  a: A,
  table: Table,
  th: TH,
  td: TD,
};
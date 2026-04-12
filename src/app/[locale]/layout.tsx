import {
  AsyncLayoutLocalesProps,
  AsyncPageLocalesProps,
  getClientT,
  locales,
} from "@/shared/lib/i18n/i18n";
import Nav from "@/shared/ui/Nav";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Eugene — Frontend Engineer",
  description:
    "Frontend engineer specialising in React, Next.js, TypeScript. Based in Japan.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: AsyncLayoutLocalesProps & {
  children: React.ReactNode;
}) {
  const { locale, t } = await getClientT(params as unknown as AsyncPageLocalesProps['params']);

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased transition-colors">
        <Nav locale={locale} t={t}/>
        <main>{children}</main>
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Eugene
        </footer>
      </body>
    </html>
  );
}

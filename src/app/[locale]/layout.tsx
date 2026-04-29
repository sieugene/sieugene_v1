import {
  AsyncLayoutLocalesProps,
  AsyncPageLocalesProps,
  getClientT,
  locales,
} from "@/shared/lib/i18n/i18n";
import { HREFLANG, KEYWORDS } from "@/shared/lib/i18n/metadata/page.metadata";
import Nav from "@/shared/ui/Nav";
import type { Metadata } from "next";
import "../globals.css";

const BASE_URL = "https://sieugene.vercel.app"; // ← change to your real domain

export async function generateMetadata({
  params,
}: AsyncLayoutLocalesProps): Promise<Metadata> {
  const { locale, t } = await getClientT(
    params as unknown as AsyncPageLocalesProps["params"],
  );

  // Build hreflang alternates for all supported locales
  const alternateLanguages = Object.fromEntries(
    locales.map((l) => [HREFLANG[l], `${BASE_URL}/${l}`]),
  );
  const baseTitle = "sieugene";

  return {
    title: {
      // Page-level titles slot into this template automatically
      template: `%s | ${baseTitle} — ${t.hero.role}`,
      default: `${baseTitle} — ${t.hero.role}`,
    },
    description: t.about.body.slice(0, 160),
    keywords: KEYWORDS[locale],
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: alternateLanguages,
    },
    openGraph: {
      type: "website",
      locale: HREFLANG[locale],
      url: `${BASE_URL}/${locale}`,
      siteName: `${baseTitle} — ${t.hero.role}`,
      title: `${baseTitle} — ${t.hero.role}`,
      description: t.about.body.slice(0, 160),
    },
    twitter: {
      card: "summary",
      title: `${baseTitle} — ${t.hero.role}`,
      description: t.about.body.slice(0, 160),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: AsyncLayoutLocalesProps & {
  children: React.ReactNode;
}) {
  const { locale, t } = await getClientT(
    params as unknown as AsyncPageLocalesProps["params"],
  );

  return (
    <html lang={HREFLANG[locale]}>
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased transition-colors">
        <Nav locale={locale} t={t} />
        <main>{children}</main>
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} sieugene
        </footer>
      </body>
    </html>
  );
}

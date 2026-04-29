import { AboutPage } from "@/@pages/about";
import { AsyncPageLocalesProps, getClientT } from "@/shared/lib/i18n/i18n";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: AsyncPageLocalesProps): Promise<Metadata> {
  const { t } = await getClientT(params);
  return {
    title: t.about.title,
    // Optionally override description for this specific page:
    // description: "...",
    // Optionally override canonical for this page:
    // alternates: { canonical: `https://sieugene/${locale}/about` },
  };
}

export default async function Page({ params }: AsyncPageLocalesProps) {
  const { t } = await getClientT(params);

  return <AboutPage t={t} />;
}

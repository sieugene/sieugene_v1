import { AboutPage } from "@/@pages/about";
import { AsyncPageLocalesProps, getClientT } from "@/shared/lib/i18n/i18n";

export default async function Page({ params }: AsyncPageLocalesProps) {
  const { t } = await getClientT(params);

  return <AboutPage t={t} />;
}

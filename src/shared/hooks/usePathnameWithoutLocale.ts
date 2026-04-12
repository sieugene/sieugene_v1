import { Locales } from "../lib/i18n/i18n";
import { usePathname } from "next/navigation";

export const usePathnameWithoutLocale = (locale: Locales) => {
  const pathname = usePathname();
  return pathname.replace(`/${locale}`, "") || "/";
};

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookie } from "react-use";

export function usePersistLocaleCookie() {
  const { locale, defaultLocale } = useRouter();
  const [_, updateCookie] = useCookie("NEXT_LOCALE");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(persistLocaleCookie, [locale, defaultLocale]);

  function persistLocaleCookie() {
    updateCookie(locale || defaultLocale || "");
  }
}

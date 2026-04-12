import { Locales } from "./i18n";

function getLocaleString(locale: Locales): string {
  switch (locale) {
    case "ja":
      return "ja-JP";
    case "ru":
      return "ru-RU";
    case "en":
    default:
      return "en-US";
  }
}

export function i18formatDate(
  date: string | number | Date,
  locale: Locales,
  options?: Intl.DateTimeFormatOptions,
) {
  const localeString = getLocaleString(locale);

  return new Date(date).toLocaleDateString(
    localeString,
    options || {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
}

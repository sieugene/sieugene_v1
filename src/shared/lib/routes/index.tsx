import { Locales } from '../i18n/i18n';

export const ROUTES = {
  home: (locale: Locales) => `/${locale}`,
  notes: (locale: Locales) => `/${locale}/notes`,
  projects: (locale: Locales) => `/${locale}/projects`,
  about: (locale: Locales) => `/${locale}/about`,
  blog: (locale: Locales) => `/${locale}/blog`,
  contact: (locale: Locales) => `/${locale}/contact`,
  certificates: (locale: Locales) => `/${locale}/certificates`,
} as const;

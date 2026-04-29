// Per-locale keyword arrays — more relevant than a single global string.

import { Locales } from '../i18n';

// Covers local search intent (Japan: Japanese-language queries, Russia: Cyrillic).
export const KEYWORDS: Record<Locales, string[]> = {
  [Locales.EN]: [
    "fullstack engineer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "eugene poluakov",
    "sieugene",
    "frontend developer japan",
    "web developer portfolio",
    "node.js developer",
  ],
  [Locales.RU]: [
    "фронтенд разработчик",
    "фулстек разработчик",
    "react разработчик",
    "next.js разработчик",
    "typescript разработчик",
    "евгений поляков разработчик",
    "веб разработчик портфолио",
    "разработчик в японии",
    "node.js разработчик",
  ],
  [Locales.JA]: [
    "フルスタックエンジニア",
    "フロントエンドエンジニア",
    "Reactエンジニア",
    "Next.jsエンジニア",
    "TypeScriptエンジニア",
    "Webエンジニア ポートフォリオ",
    "ユージーン ポリャコフ",
    "Node.js エンジニア",
  ],
};

// Maps locale to BCP-47 hreflang tag
export const HREFLANG: Record<Locales, string> = {
  [Locales.EN]: "en",
  [Locales.RU]: "ru",
  [Locales.JA]: "ja",
};
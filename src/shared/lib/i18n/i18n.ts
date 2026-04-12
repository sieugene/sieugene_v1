export enum Locales {
  EN = "en",
  RU = "ru",
  JA = "ja",
}
export const locales = Object.values(Locales);
export const defaultLocale: Locales = Locales.EN;

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Eugene",
      role: "Frontend Engineer",
      tagline: "Building interfaces that feel inevitable.",
      cta: "See my work",
      blog: "Read blog",
    },
    about: {
      title: "About me",
      body: "I'm a frontend engineer with 6+ years of experience, specialised in React, Next.js, and TypeScript. Based in Japan, I build fast, accessible, and well-crafted products. Currently exploring machine learning on the side.",
      stack: "Stack",
    },
    projects: {
      title: "Projects",
      viewCode: "Code",
      viewLive: "Live",
    },
    blog: {
      title: "Blog",
      readMore: "Read more →",
      noPosts: "No posts yet.",
      back: "← Back to blog",
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk.",
      email: "Email me",
      github: "GitHub",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      projects: "Проекты",
      blog: "Блог",
      contact: "Контакты",
    },
    hero: {
      greeting: "Привет, я",
      name: "Евгений",
      role: "Фронтенд-разработчик",
      tagline:
        "Создаю интерфейсы, которые ощущаются как само собой разумеющееся.",
      cta: "Мои работы",
      blog: "Читать блог",
    },
    about: {
      title: "Обо мне",
      body: "Фронтенд-разработчик с опытом 6+ лет, специализируюсь на React, Next.js и TypeScript. Живу в Японии, создаю быстрые и хорошо продуманные продукты. Параллельно изучаю машинное обучение.",
      stack: "Стек",
    },
    projects: {
      title: "Проекты",
      viewCode: "Код",
      viewLive: "Открыть",
    },
    blog: {
      title: "Блог",
      readMore: "Читать далее →",
      noPosts: "Постов пока нет.",
      back: "← Назад к блогу",
    },
    contact: {
      title: "Контакты",
      subtitle: "Есть проект? Давайте обсудим.",
      email: "Написать",
      github: "GitHub",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      about: "自己紹介",
      projects: "プロジェクト",
      blog: "ブログ",
      contact: "お問い合わせ",
    },
    hero: {
      greeting: "こんにちは、",
      name: "ユージーンです",
      role: "フロントエンドエンジニア",
      tagline: "必然的に感じるインターフェースをつくっています。",
      cta: "実績を見る",
      blog: "ブログを読む",
    },
    about: {
      title: "自己紹介",
      body: "React・Next.js・TypeScriptを専門とする、経験6年以上のフロントエンドエンジニアです。日本在住。速くてアクセシブルなプロダクトを追求しています。趣味で機械学習も勉強中。",
      stack: "スタック",
    },
    projects: {
      title: "プロジェクト",
      viewCode: "コード",
      viewLive: "見る",
    },
    blog: {
      title: "ブログ",
      readMore: "続きを読む →",
      noPosts: "まだ投稿がありません。",
      back: "← ブログへ戻る",
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "プロジェクトについて話しましょう。",
      email: "メールする",
      github: "GitHub",
    },
  },
} satisfies Record<Locales, unknown>;

export function getT(locale: Locales) {
  return translations[locale];
}

export type Translations = ReturnType<typeof getT>;

export type AsyncPageLocalesProps<TParams extends object = object> = {
  params: Promise<{ locale: Locales } & TParams>;
};
// avoid Next conflict with strict types
export type AsyncLayoutLocalesProps<TParams extends object = object> = {
  params: Promise<{ locale: string } & TParams>;
};

export const getClientT = async (
  params: AsyncPageLocalesProps["params"],
): Promise<{ t: Translations; locale: Locales }> => {
  const { locale: raw } = await params;
  const locale = locales.includes(raw as Locales)
    ? (raw as Locales)
    : defaultLocale;
  return {
    t: getT(locale),
    locale,
  };
};

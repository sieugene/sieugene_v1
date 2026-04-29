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
      role: "Fullstack Engineer",
      tagline: "Building reliable web applications.",
      cta: "See my work",
      blog: "Read blog",
    },
    about: {
      title: "About me",
      body: "Fullstack Engineer with 7+ years of experience. Started with PHP, moved to React in 2018 — been here since. I worked on the frontend side for a long time, then expanded into fullstack. I care about clean architecture, readable code, and keeping up with what's actually useful in the ecosystem. Currently based in Japan, actively exploring machine learning on the side.",
      stack: "Stack",
      timeline: "Timeline",
      alsoWorkedWith: "Also worked with",
      timelineItems: [
        {
          year: "2017",
          note: "Started with PHP — online stores, CRM systems, e-commerce.",
        },
        {
          year: "2018",
          note: "Moved to React. Wrote class components, pure Redux — before hooks.",
        },
        {
          year: "2021",
          note: "Went fullstack: Node.js backend, GraphQL APIs, blockchain (Solidity, Truffle).",
        },
        {
          year: "2022",
          note: "Moved to Japan. Focused on Japanese, kept building side projects.",
        },
        {
          year: "2023 – Apr 2026",
          note: "Part-time contracts at several IT companies — frontend and fullstack.",
        },
        {
          year: "2026 – now",
          note: "Fullstack engineer at a Japanese IT company.",
        },
      ],
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
      role: "Fullstack разработчик",
      tagline:
        "Создаю надёжные веб-приложения.",
      cta: "Мои работы",
      blog: "Читать блог",
    },
    about: {
      title: "Обо мне",
      body: "Фронтенд-разработчик с опытом 7+ лет. Начинал с PHP, в 2018 году перешёл на React — с тех пор здесь. Долгое время работал на фронтенде, потом расширился в fullstack. Ценю чистую архитектуру, читаемый код и слежу за тем, что реально полезно в экосистеме. Сейчас живу в Японии, параллельно изучаю машинное обучение.",
      stack: "Стек",
      timeline: "История",
      alsoWorkedWith: "Также работал с",
      timelineItems: [
        {
          year: "2017",
          note: "Начал с PHP — интернет-магазины, CRM-системы, e-commerce.",
        },
        {
          year: "2018",
          note: "Перешёл на React. Писал class-компоненты, чистый Redux — до появления hooks.",
        },
        {
          year: "2021",
          note: "Стал fullstack: backend на Node.js, GraphQL API, блокчейн (Solidity, Truffle).",
        },
        {
          year: "2022",
          note: "Переехал в Японию. Сфокусировался на японском, продолжал делать pet-проекты.",
        },
        {
          year: "2023 – апр 2026",
          note: "Контракты на part-time в нескольких IT-компаниях — frontend и fullstack.",
        },
        {
          year: "2026 – сейчас",
          note: "Fullstack-инженер в японской IT-компании.",
        },
      ],
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
      role: "フルスタックエンジニア",
      tagline: "信頼性の高いWebアプリケーションを開発しています。",
      cta: "実績を見る",
      blog: "ブログを読む",
    },
    about: {
      title: "自己紹介",
      body: "7年以上の経験を持つフロントエンドエンジニアです。PHPからスタートし、2018年にReactへ移行。長くフロントエンドを専門にしてきましたが、その後フルスタックにも領域を広げました。クリーンなアーキテクチャと読みやすいコードを大切にし、エコシステムの動向を追い続けています。現在は日本在住。機械学習も独学中。",
      stack: "スタック",
      timeline: "経歴",
      alsoWorkedWith: "使用経験あり",
      timelineItems: [
        {
          year: "2017",
          note: "PHPからスタート — ECサイト、CRMシステムなどを開発。",
        },
        {
          year: "2018",
          note: "Reactへ移行。Hooks以前のclassコンポーネント＋Reduxで開発。",
        },
        {
          year: "2021",
          note: "フルスタックへ拡張：Node.jsバックエンド、GraphQL API、ブロックチェーン（Solidity、Truffle）。",
        },
        {
          year: "2022",
          note: "日本へ移住。日本語学習に注力しつつ、個人開発を継続。",
        },
        {
          year: "2023 – 2026年4月",
          note: "複数のIT企業でパートタイム契約 — フロントエンドおよびフルスタック。",
        },
        {
          year: "2026 – 現在",
          note: "日本のIT企業でフルスタックエンジニアとして勤務。",
        },
      ],
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

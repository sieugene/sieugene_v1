import { Locales } from '@/shared/lib/i18n/i18n'

type Desc = {
  [l in Locales]: string
}

export const PROJECTS_LIST = [
  {
    name: "yomikomi",
    desc: {
      [Locales.EN]: "A free, open-source manga and Japanese book reader with a privacy-first learning toolkit. Includes in-browser OCR, dictionary, and translation powered by WebAssembly and ONNX.",
      [Locales.RU]: "Бесплатный open-source ридер манги и японских книг с упором на приватность. Включает OCR, словарь и перевод, работающие прямо в браузере.",
      [Locales.JA]: "プライバシー重視の無料オープンソース日本語リーダー。OCR・辞書・翻訳がすべてブラウザ内で動作します。",
    } as Desc,
    tech: ["Next.js", "WebAssembly", "ONNX", "PaddleOCR", "OCR", "Japanese Reader"],
    github: "https://github.com/sieugene/yomikomi",
  },

  {
    name: "jp-reader",
    desc: {
      [Locales.EN]: "Monorepo application with Go and Flask backends for manga processing. Supports upload, processing pipelines, reader UI, and Japanese learning tools.",
      [Locales.RU]: "Монорепозиторий с бэкендами на Go и Flask для обработки манги. Поддерживает загрузку, обработку, просмотр и инструменты для изучения японского.",
      [Locales.JA]: "GoとFlaskのバックエンドを持つモノレポアプリ。マンガのアップロード、処理、閲覧、日本語学習機能を提供します。",
    } as Desc,
    tech: ["Go", "Flask", "PostgreSQL", "RabbitMQ", "React", "Manga Reader", "Mokuro"],
    github: "https://github.com/sieugene/jp-reader",
  },

  {
    name: "mf-nextjs",
    desc: {
      [Locales.EN]: "Microfrontend architecture using Next.js and Module Federation with server-side rendering support.",
      [Locales.RU]: "Микрофронтенд-архитектура на Next.js с использованием Module Federation и поддержкой SSR.",
      [Locales.JA]: "Next.jsとModule Federationを使ったマイクロフロントエンド構成。SSRにも対応。",
    } as Desc,
    tech: ["Next.js", "Module Federation", "SSR"],
    github: "https://github.com/sieugene/mf-nextjs",
  },

  {
    name: "dashboard",
    desc: {
      [Locales.EN]: "Fullstack dashboard application with drag-and-drop widgets, flexible layout system, and real-time UI updates.",
      [Locales.RU]: "Фуллстек дашборд с drag-and-drop виджетами, гибкой системой компоновки и обновлениями в реальном времени.",
      [Locales.JA]: "ドラッグ＆ドロップ対応のフルスタックダッシュボード。柔軟なレイアウトとリアルタイム更新を実現。",
    } as Desc,
    tech: ["Next.js", "React"],
    github: "https://github.com/sieugene/dashboard",
  },

  {
    name: "Schat",
    desc: {
      [Locales.EN]: "Realtime chat application with emoji support, voice messages, and image sharing.",
      [Locales.RU]: "Реалтайм чат с поддержкой эмодзи, голосовых сообщений и отправки изображений.",
      [Locales.JA]: "絵文字・音声メッセージ・画像送信に対応したリアルタイムチャットアプリ。",
    } as Desc,
    tech: ["React", "Redux", "Firebase"],
    github: "https://github.com/sieugene/Schat",
  },

  {
    name: "nft-marketplace-backend",
    desc: {
      [Locales.EN]: "Backend service for preparing ERC-1155 metadata and deploying NFTs with preview support on OpenSea.",
      [Locales.RU]: "Бэкенд для подготовки метаданных ERC-1155 и деплоя NFT с предпросмотром на OpenSea.",
      [Locales.JA]: "ERC-1155メタデータ生成とNFTデプロイを行うバックエンド。OpenSeaでのプレビューにも対応。",
    } as Desc,
    tech: ["Solidity", "NestJS", "ERC1155", "OpenSea", "Metadata"],
    github: "https://github.com/sieugene/nft-marketplace-backend",
  },

  {
    name: "subtitles-hook",
    desc: {
      [Locales.EN]: "Video player with subtitle support and integrated dictionary (Yomitan-like). Allows generating Japanese subtitles and looking up words while watching.",
      [Locales.RU]: "Видеоплеер с субтитрами и встроенным словарём (как Yomitan). Позволяет генерировать японские субтитры и смотреть перевод прямо во время просмотра.",
      [Locales.JA]: "字幕対応の動画プレイヤー。Yomitanのような辞書機能を内蔵し、日本語字幕の生成や視聴中の単語検索が可能。",
    } as Desc,
    tech: ["React", "Video Player", "Subtitles", "Dictionary"],
    github: "https://github.com/sieugene/subtitles-hook",
  },
]
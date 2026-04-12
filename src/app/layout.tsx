import { Metadata } from "next";

export const metadata: Metadata = {
  keywords:
    "sieugene, eugene poluakov, Евгений Поляков, frontend developer, react developer, russia, フロントエンド開発者、リアクト開発者, 日本",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

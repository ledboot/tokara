import type { Metadata } from "next";
import "@fontsource-variable/noto-sans-sc";
import "./globals.css";
import { Header, Footer } from "@/components/shell";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: { default: "Tokara — 连接模型，释放创造力", template: "%s · Tokara" },
  description:
    "一个 API，连接多种 AI 模型。Tokara 为开发者提供简洁、统一的模型接入体验。",
  icons: { icon: "/symbol.webp" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main">
          跳转到内容
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { PageIntro } from "@/components/ui";
export const metadata: Metadata = { title: "开始构建" };
export default function StartPage() {
  const consoleUrl = process.env.TOKARA_CONSOLE_URL;
  const validUrl =
    consoleUrl && /^https:\/\//.test(consoleUrl) ? consoleUrl : null;
  return (
    <main id="main" className="container subpage">
      <PageIntro
        eyebrow="MAKE YOUR NEXT IDEA HAPPEN"
        title="你的下一次创造，从这里开始。"
      >
        了解模型，准备密钥，发出第一个请求。
        <br />
        把接入变简单，把时间留给想法。
      </PageIntro>
      {!validUrl && (
        <div className="notice">
          <Info size={15} />
          <span>
            正式控制台即将接入。你可以先浏览模型和接入示例，当前官网不提供账号注册、充值或
            API 调用服务。
          </span>
        </div>
      )}
      <div className="start-grid">
        {[
          [
            "01",
            "找到适合你的模型",
            "按对话、编程、深度推理或多模态场景探索模型，了解模型 ID 与能力。",
            "/models",
            "探索模型广场",
          ],
          [
            "02",
            "准备好你的访问密钥",
            validUrl
              ? "进入正式控制台创建 API Key，并获取服务提供的 Base URL。"
              : "正式控制台接入后，你可以创建 API Key 并获取 Base URL。先了解认证方式。",
            validUrl ?? "/docs#authentication",
            validUrl ? "前往控制台" : "了解身份认证",
          ],
          [
            "03",
            "发送第一个请求",
            "选择熟悉的开发语言，替换密钥、请求地址和模型参数，开启你的构建之旅。",
            "/docs#request",
            "查看接入示例",
          ],
        ].map(([n, t, d, url, label]) => (
          <article key={n} className="start-card">
            <span>{n}</span>
            <h2>{t}</h2>
            <p>{d}</p>
            <a className="text-link" href={url}>
              {label}
              <ArrowUpRight size={15} />
            </a>
          </article>
        ))}
      </div>
      <div className="start-actions">
        <Link className="button" href="/docs">
          开始阅读文档 <ArrowUpRight size={16} />
        </Link>
        <Link className="button button-outline" href="/pricing">
          了解计费方式
        </Link>
      </div>
    </main>
  );
}

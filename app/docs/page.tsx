import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { PageIntro } from "@/components/ui";
import { CodeExample } from "@/components/code-example";
import { models } from "@/lib/models";
export const metadata: Metadata = { title: "开发文档" };
export default async function DocsPage({
  searchParams,
}: {
  searchParams: Promise<{ model?: string }>;
}) {
  const params = await searchParams;
  const model = models.find((m) => m.id === params.model)?.id ?? "gpt-4.1";
  return (
    <main id="main" className="container subpage docs-layout">
      <aside className="docs-sidebar" aria-label="文档目录">
        <span>DEVELOPER DOCUMENTATION</span>
        <a href="#quickstart">快速开始</a>
        <a href="#authentication">身份认证</a>
        <a href="#request">发送第一个请求</a>
        <a href="#models">模型与参数</a>
        <a href="#errors">错误处理</a>
        <a href="#security">隐私与安全</a>
      </aside>
      <article className="docs-content">
        <PageIntro
          eyebrow="FROM YOUR FIRST LINE TO YOUR NEXT IDEA"
          title="几行代码，连接更多可能。"
        >
          使用熟悉的 OpenAI SDK，开始你的 Tokara 接入之旅。
        </PageIntro>
        <section className="doc-section" id="quickstart">
          <h2>01. 准备开发环境</h2>
          <p>
            在你的项目中安装 OpenAI SDK。下方提供 Python、Node.js 和 cURL
            示例。开始之前，请先从正式服务控制台获取 API Key 与 Base URL。
          </p>
          <h3>Python</h3>
          <pre className="terminal-command">pip install openai</pre>
          <h3>Node.js</h3>
          <pre className="terminal-command">npm install openai</pre>
          <div className="notice">
            <Info size={14} />
            <span>
              官网尚未配置正式控制台和 API 地址。代码中的
              YOUR_TOKARA_BASE_URL、YOUR_TOKARA_API_KEY
              为待替换占位符，无法直接调用。
            </span>
          </div>
        </section>
        <section className="doc-section" id="authentication">
          <h2>02. 配置身份认证</h2>
          <p>
            通过{" "}
            <code className="inline-code">
              Authorization: Bearer YOUR_TOKARA_API_KEY
            </code>{" "}
            请求头进行认证。使用 SDK 时，将密钥传给{" "}
            <code className="inline-code">api_key</code>（Python）或{" "}
            <code className="inline-code">apiKey</code>（Node.js）即可。
          </p>
          <p>
            Base URL 应包含服务提供的 API 版本路径（例如{" "}
            <code className="inline-code">/v1</code>
            ）。请使用控制台给出的完整地址。
          </p>
        </section>
        <section className="doc-section" id="request">
          <h2>03. 发送第一个请求</h2>
          <p>替换密钥和请求地址，选择需要的模型，即可发起对话请求。</p>
          <div style={{ marginTop: 20 }}>
            <CodeExample model={model} />
          </div>
        </section>
        <section className="doc-section" id="models">
          <h2>04. 模型与参数</h2>
          <p>
            修改 <code className="inline-code">model</code>{" "}
            参数即可切换模型。不同模型的上下文长度、工具调用和流式能力可能不同，请以正式模型文档为准。首次接入建议先使用最小请求验证连通性，再添加可选参数。
          </p>
          <Link className="text-link" href="/models" style={{ marginTop: 15 }}>
            浏览模型 ID 与能力 <ArrowUpRight size={14} />
          </Link>
        </section>
        <section className="doc-section" id="errors">
          <h2>05. 常见错误处理</h2>
          <div className="pricing-table-wrap">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>状态码</th>
                  <th>建议处理方式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>400</td>
                  <td>检查模型 ID、请求格式及支持的参数。</td>
                </tr>
                <tr>
                  <td>401</td>
                  <td>检查 API Key 是否有效、是否正确传入。</td>
                </tr>
                <tr>
                  <td>429</td>
                  <td>降低并发，按响应提示使用退避策略重试。</td>
                </tr>
                <tr>
                  <td>5xx</td>
                  <td>短暂等待后重试，并查看服务状态。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="doc-section" id="security">
          <h2>隐私与密钥安全</h2>
          <p>
            API Key
            应仅保存在服务端环境变量中。不要放入浏览器代码、公开仓库或带有
            NEXT_PUBLIC_ 前缀的环境变量。生产环境请使用 HTTPS，并定期轮换密钥。
          </p>
          <p>
            正式服务的数据保留、上游处理方式和隐私条款需在上线前补充。请先确认数据处理约定，再发送敏感内容。
          </p>
        </section>
      </article>
    </main>
  );
}

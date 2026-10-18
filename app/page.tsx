import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Route,
  ShieldCheck,
  Zap,
  Plus,
  Globe2,
  SlidersHorizontal,
} from "lucide-react";
import { models } from "@/lib/models";
import { CallToAction, ModelCard, ProviderIcon } from "@/components/ui";
import { CodeExample } from "@/components/code-example";
export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-content">
          <Link href="/models" className="announcement">
            <span className="announcement-badge">为创造者而建</span>
            <span>一个入口，探索 AI 的更多可能</span>
            <ArrowRight size={14} />
          </Link>
          <div className="hero-eyebrow">
            <span /> THE API FOR YOUR NEXT BIG IDEA
          </div>
          <h1>
            连接全球模型，
            <br />
            <span>释放每一份创造力。</span>
          </h1>
          <p className="hero-description">
            不止于连接。用一个 API，轻松调用多种主流 AI 模型。
            <br className="desktop-break" />
            更简单的接入，更自由的构建，从 Tokara 开始。
          </p>
          <div className="hero-actions">
            <Link className="button" href="/start">
              开始构建 <ArrowUpRight size={17} />
            </Link>
            <Link className="button button-outline" href="/docs">
              <Code2 size={17} /> 阅读开发文档 <ArrowRight size={15} />
            </Link>
          </div>
          <div className="hero-benefits">
            <span>
              <Check size={13} /> OpenAI 格式兼容
            </span>
            <span>
              <Check size={13} /> 按实际用量付费
            </span>
            <span>
              <Check size={13} /> 无缝切换模型
            </span>
          </div>
          <div
            className="connection-stage"
            aria-label="通过 Tokara 统一连接 AI 模型的架构示意"
          >
            <div className="stage-label">
              <span className="tiny-dot" /> ONE API. ENDLESS POSSIBILITIES.
            </div>
            <div className="routing-diagram">
              <div className="app-node">
                <div className="app-node-icon">
                  <Code2 size={24} />
                </div>
                <div>
                  <strong>你的应用</strong>
                  <span>Your next big idea</span>
                </div>
                <span className="node-port" />
              </div>
              <div className="routing-line routing-line-in">
                <span>统一 API</span>
                <i />
              </div>
              <div className="tokara-node">
                <span className="tokara-node-icon">
                  <Image
                    src="/symbol.webp"
                    alt="Tokara"
                    width={1022}
                    height={817}
                  />
                </span>
                <span className="tokara-node-name">tokara</span>
                <span className="node-subtitle">为每一次请求，找到可能</span>
              </div>
              <div className="routing-line routing-line-out">
                <span>智能连接</span>
                <i />
              </div>
              <div className="providers-nodes">
                {[
                  ["openai", "OpenAI"],
                  ["anthropic", "Anthropic"],
                  ["gemini", "Google Gemini"],
                  ["deepseek", "DeepSeek"],
                ].map(([symbol, name]) => (
                  <div className="provider-node" key={symbol}>
                    <ProviderIcon name={symbol} small />
                    <span>{name}</span>
                    <span className="provider-node-dot" />
                  </div>
                ))}
              </div>
            </div>
            <div className="stage-footer">
              <span>
                <ShieldCheck size={13} /> 安全传输
              </span>
              <span className="stage-footer-center">
                少一点接入成本，多一点创造空间。
              </span>
              <span>
                <Route size={13} /> 灵活路由
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="providers-strip container">
        <p>汇聚优秀模型，让选择回到你手中</p>
        <div className="provider-logos">
          <span>
            <ProviderIcon name="openai" small />
            OpenAI
          </span>
          <span className="anthropic-wordmark">ANTHROPIC</span>
          <span>
            <ProviderIcon name="gemini" small />
            Google Gemini
          </span>
          <span className="deepseek-wordmark">
            <ProviderIcon name="deepseek" small />
            deepseek
          </span>
          <span className="qwen-wordmark">
            <ProviderIcon name="qwen" small />
            Qwen
          </span>
          <span className="more-models">
            以及更多 <Plus size={14} />
          </span>
        </div>
      </section>
      <section className="section container" id="features">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span /> LESS FRICTION, MORE CREATION
            </div>
            <h2>
              复杂留给我们，
              <br />
              简单留给你的代码。
            </h2>
          </div>
          <p>
            从第一个请求到下一个产品，
            <br />
            为开发者打造顺手的 AI 基础连接。
          </p>
        </div>
        <div className="feature-grid">
          {[
            {
              icon: Layers3,
              title: "一个 API，多种可能",
              desc: "统一的接口规范，连接不同厂商的模型。不再维护多套 SDK，一次接入，自由探索。",
              label: "ONE ENDPOINT",
              graphic: "stack",
            },
            {
              icon: Zap,
              title: "轻松接入，即刻开跑",
              desc: "兼容 OpenAI SDK 与现有工具链。替换 API Key 和请求地址，让熟悉的代码继续发挥作用。",
              label: "DEVELOPER FIRST",
              graphic: "code",
            },
            {
              icon: SlidersHorizontal,
              title: "用多少，付多少",
              desc: "按 Token 用量计费，清楚了解每次调用的成本。灵活选择模型，让每一份预算用得更好。",
              label: "STAY IN CONTROL",
              graphic: "meter",
            },
          ].map((f, i) => (
            <article key={f.title} className="feature-card">
              <div className="feature-card-label">
                <f.icon size={18} />
                <span>
                  0{i + 1} / {f.label}
                </span>
              </div>
              <div
                className={`feature-graphic graphic-${f.graphic}`}
                aria-hidden="true"
              >
                {i === 0 ? (
                  <>
                    <span>GPT</span>
                    <span>Claude</span>
                    <span>Gemini</span>
                    <span className="graphic-unified">
                      /v1/chat/completions <Check size={13} />
                    </span>
                  </>
                ) : i === 1 ? (
                  <div>
                    <span>
                      <span className="code-minus">−</span> base_url ={" "}
                      <s>multiple_endpoints</s>
                    </span>
                    <span>
                      <span className="code-plus">+</span> base_url ={" "}
                      <b>tokara_endpoint</b>
                    </span>
                    <span className="mini-code-note">
                      就改这两行，开启无限可能。
                    </span>
                  </div>
                ) : (
                  <div className="mini-chart">
                    <div>
                      <span>每一份用量，都清清楚楚</span>
                      <span>↗</span>
                    </div>
                    <div className="chart-bars">
                      {[25, 39, 30, 51, 44, 65, 55, 76, 63, 82, 72, 96].map(
                        (n, j) => (
                          <i style={{ height: `${n}%` }} key={j} />
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="models-section">
        <div className="container section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span /> THE RIGHT MODEL FOR EVERY IDEA
              </div>
              <h2>好模型，触手可及。</h2>
              <p>对话、编程、推理、多模态，总有适合你的选择。</p>
            </div>
            <Link className="text-link" href="/models">
              探索模型广场 <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="model-grid">
            {models.slice(0, 3).map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
          <p className="models-note">
            <Globe2 size={13} />{" "}
            一个统一入口，连接不同模型生态。具体可用模型以正式服务为准。
          </p>
        </div>
      </section>
      <section className="section container integration-section">
        <div className="integration-copy">
          <div className="eyebrow">
            <span /> BUILT TO FIT YOUR WORKFLOW
          </div>
          <h2>
            熟悉的代码，
            <br />
            全新的可能。
          </h2>
          <p>
            不用从零开始，也不用改变你的开发习惯。
            <br />
            用你熟悉的 SDK，发出第一个请求。
          </p>
          <div className="integration-steps">
            {[
              ["01", "获取 API Key", "在控制台创建专属于你的访问密钥。"],
              ["02", "替换请求地址", "配置 Tokara 接口地址，保留原有代码。"],
              ["03", "选择模型，开始构建", "一个参数，自由切换适合你的模型。"],
            ].map(([n, t, d]) => (
              <div key={n}>
                <span>{n}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
          <Link className="text-link" href="/docs">
            查看快速开始指南 <ArrowRight size={16} />
          </Link>
        </div>
        <CodeExample />
      </section>
      <section className="container section faq-section">
        <div>
          <div className="eyebrow">
            <span /> GOOD QUESTIONS, CLEAR ANSWERS
          </div>
          <h2>你可能还想了解</h2>
          <p>关于 Tokara 的一些常见问题。</p>
          <Link className="text-link" href="/docs">
            在文档中了解更多 <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="faq-list">
          {[
            [
              "Tokara 是什么？",
              "Tokara 是面向开发者的 AI API 中转服务，通过统一格式连接不同厂商的模型，帮助你简化集成、切换模型和管理调用。",
            ],
            [
              "可以直接使用 OpenAI SDK 吗？",
              "可以。对于兼容的模型，只需配置 Tokara 的 Base URL 和 API Key，并使用模型广场中对应的模型 ID。不同模型支持的参数可能存在差异。",
            ],
            [
              "如何计算 API 调用费用？",
              "通常分别按输入和输出 Token 计费。定价页提供示例计算器，正式价格、余额和实际账单以接入后的控制台为准。",
            ],
            [
              "现有应用迁移到 Tokara 麻烦吗？",
              "如果你的应用已经使用 OpenAI 兼容接口，通常可以从替换 API Key、Base URL 和模型 ID 开始。建议先在开发环境验证流式输出、工具调用等所需能力。",
            ],
          ].map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <Plus size={17} />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <CallToAction />
    </main>
  );
}

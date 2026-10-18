import Link from "next/link";
import { ArrowUpRight, MoveUpRight, Sparkles } from "lucide-react";
import { models } from "@/lib/models";
export function ProviderIcon({
  name,
  small = false,
}: {
  name: string;
  small?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`provider-icon ${name} ${small ? "provider-small" : ""}`}
    >
      {name === "openai" ? (
        <span className="openai-mark">❋</span>
      ) : name === "anthropic" ? (
        <span className="anthropic-mark">✳</span>
      ) : name === "gemini" ? (
        <span className="gemini-mark">✦</span>
      ) : name === "deepseek" ? (
        <span className="deepseek-mark">≈</span>
      ) : (
        <span>✧</span>
      )}
    </span>
  );
}
export function ModelCard({ model }: { model: (typeof models)[number] }) {
  return (
    <Link href={`/docs?model=${model.id}`} className="model-card">
      <div className="model-card-top">
        <ProviderIcon name={model.symbol} />
        <span className="provider-name">{model.provider}</span>
        <MoveUpRight size={17} />
      </div>
      <h3>{model.name}</h3>
      <p>{model.description}</p>
      <div className="tags">
        {model.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="model-card-bottom">
        <span>OpenAI 兼容接口</span>
        <ArrowUpRight size={15} />
      </div>
    </Link>
  );
}
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="page-intro">
      <div className="eyebrow">
        <span /> {eyebrow}
      </div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
export function CallToAction() {
  return (
    <section className="container cta">
      <div className="cta-decoration" aria-hidden="true">
        ✳
      </div>
      <div className="eyebrow">
        <Sparkles size={15} /> YOUR NEXT IDEA STARTS HERE
      </div>
      <h2>
        你的下一个想法，
        <br />
        从一次连接开始。
      </h2>
      <p>把复杂的模型接入交给 Tokara，专注创造真正重要的事。</p>
      <Link className="button button-white" href="/start">
        开启构建之旅 <ArrowUpRight size={16} />
      </Link>
      <span className="cta-note">统一接口 · 按量计费 · 灵活切换</span>
    </section>
  );
}

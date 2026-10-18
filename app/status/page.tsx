import type { Metadata } from "next";
import { CircleDashed, Radio } from "lucide-react";
import { PageIntro, ProviderIcon } from "@/components/ui";
export const metadata: Metadata = { title: "服务状态" };
export default function StatusPage() {
  return (
    <main id="main" className="container subpage">
      <PageIntro
        eyebrow="A CLEAR VIEW OF YOUR CONNECTION"
        title="每一次连接，都值得被看见。"
      >
        在这里了解 Tokara 各项服务与模型通道的运行情况。
      </PageIntro>
      <div className="status-panel">
        <div className="status-summary">
          <Radio size={25} />
          <div>
            <h2>实时监控尚未接入</h2>
            <p>正式监控接入后，将在此展示各通道的实际可用性。</p>
          </div>
        </div>
        {[
          ["", "Tokara API 网关"],
          ["openai", "OpenAI 模型通道"],
          ["anthropic", "Anthropic 模型通道"],
          ["gemini", "Google Gemini 模型通道"],
          ["deepseek", "DeepSeek 模型通道"],
        ].map(([symbol, name]) => (
          <div className="status-row" key={name}>
            <span>
              {symbol ? (
                <ProviderIcon name={symbol} small />
              ) : (
                <Radio size={18} />
              )}{" "}
              {name}
            </span>
            <span>
              <CircleDashed size={12} /> 等待监控数据
            </span>
          </div>
        ))}
      </div>
      <p className="status-caption">
        当前未进行实时探测。此页不代表正式服务的运行状态或可用性承诺。
      </p>
    </main>
  );
}

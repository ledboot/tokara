import type { Metadata } from "next";
import Link from "next/link";
import { Info, ArrowUpRight } from "lucide-react";
import { models } from "@/lib/models";
import { PageIntro, ProviderIcon } from "@/components/ui";
import { Calculator } from "@/components/calculator";
export const metadata: Metadata = { title: "透明定价" };
export default function PricingPage() {
  return (
    <main id="main" className="container subpage">
      <PageIntro
        eyebrow="SIMPLE PRICING, CLEAR POSSIBILITIES"
        title="每一份用量，都清清楚楚。"
      >
        根据实际调用量计费，灵活选择适合你的模型。
        <br />
        没有复杂的计算，让构建的每一步都心中有数。
      </PageIntro>
      <div className="notice">
        <Info size={15} />
        <span>
          当前为定价展示数据，用于演示费用计算，不构成正式报价。所有金额单位为
          USD / 1M Tokens，正式价格需在上线前配置。
        </span>
      </div>
      <div className="pricing-table-wrap">
        <table className="pricing-table">
          <thead>
            <tr>
              <th>模型 / MODEL</th>
              <th>输入 / 1M Tokens</th>
              <th>输出 / 1M Tokens</th>
              <th>开始接入</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model.id}>
                <td>
                  <div className="table-model">
                    <ProviderIcon name={model.symbol} small />
                    <div>
                      {model.name}
                      <span>{model.id}</span>
                    </div>
                  </div>
                </td>
                <td>${model.input.toFixed(2)}</td>
                <td>${model.output.toFixed(2)}</td>
                <td>
                  <Link className="text-link" href={`/docs?model=${model.id}`}>
                    查看示例 <ArrowUpRight size={13} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Calculator />
    </main>
  );
}

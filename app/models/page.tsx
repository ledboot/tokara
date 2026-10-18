import type { Metadata } from "next";
import { Catalog } from "@/components/catalog";
import { PageIntro } from "@/components/ui";
export const metadata: Metadata = { title: "模型广场" };
export default function ModelsPage() {
  return (
    <main id="main" className="container subpage">
      <PageIntro
        eyebrow="A WORLD OF INTELLIGENCE, ONE API"
        title="为你的想法，找到好模型。"
      >
        从日常对话到复杂推理，用统一接口探索不同模型的能力。
        <br />
        按场景选择，随时切换，让灵感不受限制。
      </PageIntro>
      <Catalog />
    </main>
  );
}

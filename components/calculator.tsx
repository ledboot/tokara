"use client";
import { useState } from "react";
import { models } from "@/lib/models";
export function Calculator() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState(1);
  const [output, setOutput] = useState(0.5);
  const model = models[index];
  return (
    <section className="calculator">
      <div>
        <div className="eyebrow">
          <span /> PLAN YOUR NEXT BUILD
        </div>
        <h2>先算一算，再开始。</h2>
        <p>
          调整每月预计 Token 用量，了解示例成本。
          <br />
          此估算不代表正式报价，不含额外服务费用。
        </p>
        <div className="estimate" aria-live="polite">
          <span>每月示例费用</span>
          <strong>
            ${(model.input * input + model.output * output).toFixed(2)}{" "}
            <small>USD</small>
          </strong>
        </div>
      </div>
      <div className="calculator-fields">
        <div className="field">
          <label htmlFor="estimate-model">选择模型</label>
          <select
            id="estimate-model"
            value={index}
            onChange={(e) => setIndex(Number(e.target.value))}
          >
            {models.map((m, i) => (
              <option key={m.id} value={i}>
                {m.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="input-tokens">
            输入 Token <span>{input.toFixed(1)} M / 月</span>
          </label>
          <input
            id="input-tokens"
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={input}
            onChange={(e) => setInput(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label htmlFor="output-tokens">
            输出 Token <span>{output.toFixed(1)} M / 月</span>
          </label>
          <input
            id="output-tokens"
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={output}
            onChange={(e) => setOutput(Number(e.target.value))}
          />
        </div>
      </div>
    </section>
  );
}

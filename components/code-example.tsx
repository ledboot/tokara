"use client";
import { useState } from "react";
import { Check, Copy, Terminal, ArrowUpRight } from "lucide-react";
import Link from "next/link";
export function CodeExample({ model = "gpt-4.1" }: { model?: string }) {
  const [language, setLanguage] = useState("Python");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const code =
    language === "Python"
      ? `from openai import OpenAI\n\nclient = OpenAI(\n    api_key="YOUR_TOKARA_API_KEY",\n    base_url="YOUR_TOKARA_BASE_URL"\n)\n\nresponse = client.chat.completions.create(\n    model="${model}",\n    messages=[\n        {"role": "user", "content": "你好，Tokara！"}\n    ]\n)\n\nprint(response.choices[0].message.content)`
      : language === "Node.js"
        ? `import OpenAI from "openai";\n\nconst client = new OpenAI({\n  apiKey: process.env.TOKARA_API_KEY,\n  baseURL: process.env.TOKARA_BASE_URL,\n});\n\nconst response = await client.chat.completions.create({\n  model: "${model}",\n  messages: [\n    { role: "user", content: "你好，Tokara！" }\n  ],\n});\n\nconsole.log(response.choices[0].message.content);`
        : `curl "$TOKARA_BASE_URL/chat/completions" \\\n  -H "Authorization: Bearer $TOKARA_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "model": "${model}",\n    "messages": [\n      {"role": "user", "content": "你好，Tokara！"}\n    ]\n  }'`;
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setError(false);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError(true);
    }
  }
  return (
    <div className="code-window">
      <div className="code-toolbar">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>
          hello_tokara
          {language === "Python"
            ? ".py"
            : language === "Node.js"
              ? ".js"
              : ".sh"}
        </span>
        <span className="code-tool-label">
          <Terminal size={12} /> QUICK START
        </span>
      </div>
      <div className="code-tabs">
        {["Python", "Node.js", "cURL"].map((lang) => (
          <button
            key={lang}
            aria-pressed={language === lang}
            className={language === lang ? "selected" : ""}
            onClick={() => setLanguage(lang)}
          >
            {lang}
          </button>
        ))}
        <button className="copy-button" aria-label="复制代码" onClick={copy}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? "已复制" : "复制"}</span>
        </button>
      </div>
      <pre className="code-body">
        <code>
          {code.split("\n").map((line, index) => (
            <span className="code-line" key={index}>
              <span className="line-number">{index + 1}</span>
              <span>
                {line
                  .split(
                    /("[^"\n]*"|'[^'\n]*'|\bfrom\b|\bimport\b|\bconst\b|\bawait\b|\bprint\b)/g,
                  )
                  .map((token, i) => (
                    <span
                      key={i}
                      className={
                        /^['"]/.test(token)
                          ? "syntax-string"
                          : /^(from|import|const|await|print)$/.test(token)
                            ? "syntax-keyword"
                            : ""
                      }
                    >
                      {token}
                    </span>
                  ))}
              </span>
            </span>
          ))}
        </code>
      </pre>
      {error && (
        <p role="alert" className="copy-error">
          Clipboard access failed. Select the code and copy it manually.
        </p>
      )}
      <div className="code-footer">
        <span>
          <span className="tiny-dot" /> 兼容 OpenAI SDK
        </span>
        <Link href="/docs">
          完整接入文档 <ArrowUpRight size={13} />
        </Link>
      </div>
    </div>
  );
}

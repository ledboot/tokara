"use client";
import { useState } from "react";
import { Search, RotateCcw } from "lucide-react";
import { models } from "@/lib/models";
import { ModelCard } from "./ui";
export function Catalog() {
  const [filter, setFilter] = useState("全部模型");
  const [search, setSearch] = useState("");
  const filtered = models.filter(
    (m) =>
      (filter === "全部模型" || m.type === filter || m.tags.includes(filter)) &&
      `${m.name} ${m.provider} ${m.id} ${m.tags.join(" ")}`
        .toLowerCase()
        .includes(search.toLowerCase().trim()),
  );
  return (
    <>
      <div className="catalog-controls">
        <div className="filter-tabs" aria-label="模型分类">
          {["全部模型", "通用对话", "编程开发", "深度推理", "多模态"].map(
            (type) => (
              <button
                key={type}
                className={filter === type ? "selected" : ""}
                aria-pressed={filter === type}
                onClick={() => setFilter(type)}
              >
                {type}
              </button>
            ),
          )}
        </div>
        <label className="search-field">
          <Search size={15} />
          <input
            type="search"
            aria-label="搜索模型或厂商"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="搜索模型、厂商或能力…"
          />
        </label>
      </div>
      <div className="catalog-meta">
        <span aria-live="polite">共找到 {filtered.length} 个模型</span>
        <span>模型目录为展示配置 · 可用性以正式服务为准</span>
      </div>
      {filtered.length ? (
        <div className="model-grid catalog-grid">
          {filtered.map((model) => (
            <ModelCard model={model} key={model.id} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={28} />
          <h3>还没有找到这个模型</h3>
          <p>试试其他关键词，或者查看全部模型。</p>
          <button
            className="button button-outline"
            onClick={() => {
              setSearch("");
              setFilter("全部模型");
            }}
          >
            <RotateCcw size={14} /> 重置筛选
          </button>
        </div>
      )}
    </>
  );
}

import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <div className="eyebrow" style={{ justifyContent: "center" }}>
        404 / NOT FOUND
      </div>
      <h1>这个连接，还没有抵达。</h1>
      <p>你访问的页面不存在，回到首页探索更多可能。</p>
      <Link href="/" className="button">
        返回首页 →
      </Link>
    </main>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, ArrowRight, Menu, X } from "lucide-react";
export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label="Tokara 首页"
    >
      <Image
        className="brand-image"
        src="/logo.webp"
        alt="tokara"
        width={1433}
        height={305}
        priority
      />
    </Link>
  );
}
const links = [
  ["/", "首页"],
  ["/models", "模型广场"],
  ["/pricing", "定价"],
  ["/docs", "开发文档"],
];
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Brand />
        <nav className={open ? "nav nav-open" : "nav"} aria-label="主导航">
          {links.map(([href, label]) => (
            <Link
              onClick={() => setOpen(false)}
              className={path === href ? "active" : ""}
              href={href}
              key={href}
            >
              {label}
            </Link>
          ))}
          <Link
            className="nav-status"
            onClick={() => setOpen(false)}
            href="/status"
          >
            服务状态 <ArrowUpRight size={12} />
          </Link>
        </nav>
        <Link className="button button-small header-cta" href="/start">
          开始使用 <ArrowUpRight size={15} />
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <Brand />
          <p>让模型连接更简单，让创造不设限。</p>
        </div>
        <div className="footer-links">
          <Link href="/models">模型广场</Link>
          <Link href="/pricing">透明定价</Link>
          <Link href="/docs">开发文档</Link>
          <Link href="/status">
            服务状态 <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Tokara. All rights reserved.</span>
        <span>Built for developers. Made for possibilities.</span>
        <Link href="/docs#security">
          隐私与安全 <ArrowRight size={12} />
        </Link>
      </div>
    </footer>
  );
}

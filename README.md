# Tokara 官网

Next.js App Router + TypeScript，采用 SSR、Noto Sans SC 自托管分片字体、品牌色 `#02776F`。

## 本地运行

```sh
npm install
npm run dev
```

打开 http://localhost:3000。

## 检查与生产运行

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

所有页面通过根布局的 `force-dynamic` 在请求时服务端渲染；交互筛选、代码复制和估算器为小型客户端组件。需要 Node.js 20.9 或更新版本，不支持静态导出。

## 页面

- `/` 首页：品牌介绍、连接架构、模型、接入示例、常见问题
- `/models` 模型筛选和搜索
- `/pricing` 展示价格和费用估算器
- `/docs` 开发说明（支持 `?model=模型ID`）
- `/start` 接入引导
- `/status` 监控待接入说明

## 正式上线前的配置

当前为完整官网前端，不包含 API 网关、账户、充值、计费后台或实时监控。

1. 在 `lib/models.ts` 配置正式模型和价格。当前数据为示例，不构成正式报价；替换后同步更新页面提示。
2. 复制 `.env.example` 为 `.env.local`，配置 `TOKARA_CONSOLE_URL` 为 HTTPS 控制台地址。未配置时显示接入引导，不会伪造登录或注册功能。
3. 在接入示例中配置正式 API 地址，并补充实际模型参数、限流和错误定义。示例使用占位符，不发送请求、不收集密钥。
4. 接入真实状态监控，再替换 `/status` 的等待数据提示。
5. 根据实际业务补充服务协议与隐私政策。

Logo 来自用户提供的资源，`public/logo.webp`、`public/symbol.webp` 为裁去透明留白的版本；原图也保留在 `public/tokara-*.webp`。字体通过 `@fontsource-variable/noto-sans-sc` 随站点提供，不依赖 Google Fonts。

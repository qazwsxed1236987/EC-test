## Getting Started

若需要更改測試 port 則修改 package.json 內
"dev": "next dev -p 80",
"start": "next start -p 80",
其 80 為指定 port

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Deploy on Vercel

本專案為 react next 並使用 Vercel 部屬，其端口預設為 http:80 https:443
部屬流程為將 github 連結至 Vercel 並使用自動化部屬即可

若有需要詳細可檢查以下網址，有更多消息。
[Next.js deployment documentation](https://nextjs.org/docs/deployment).

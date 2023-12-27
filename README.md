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

## 程式說明
利用next框架製作
串接 https://jsonplaceholder.typicode.com/ api，並使用其中會員及相簿、相片資料
製作一個簡易相簿功能
登入帳號驗證使用數字 1-10

## 部屬於 Vercel

本專案為 react next 並使用 Vercel 部屬，其端口預設為 http:80 https:443
部屬流程為將 github 連結至 Vercel 並使用自動化部屬即可

若有需要詳細可檢查以下網址，有更多消息。
[Next.js deployment documentation](https://nextjs.org/docs/deployment).

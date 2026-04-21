# Bicome 官網 — 部署指南

## 產生部署檔

```bash
npm install     # 第一次部署前
npm run build
```

產物輸出到 `/out`（由 `vite.config.ts` 指定）。內容包含：

- `index.html` — 入口
- `assets/index-*.js` / `assets/index-*.css` — 打包後的 JS/CSS（含 hash，利於長期快取）
- `favicon.ico` / `favicon-16.png` / `favicon-32.png` / `apple-touch-icon.png` / `android-chrome-192.png` / `android-chrome-512.png`
- `og-image.png` — 分享到 LINE / FB / X 的卡片圖（1200×630）
- `site.webmanifest` — PWA lite 設定
- `robots.txt` / `sitemap.xml` — SEO
- `icon.png` — 原始 logo source
- `images/` — hero 圖 + 15 個 case 縮圖
- `videos/` — 3 支 SuccessVideos 影片

## 靜態託管

整個 `/out` 目錄 rsync / 上傳到任一靜態主機即可：

- **Netlify / Vercel**：拖拉資料夾；或連 repo + 指令 `npm run build`，發佈目錄 `out`
- **Cloudflare Pages**：Build command `npm run build`、Output directory `out`
- **自家 Nginx / S3 / CDN**：`rsync -av out/ user@host:/var/www/bicome/`

## SPA 路由 fallback

這是 React SPA。所有未匹配的路徑都要 rewrite 到 `/index.html` 才能讓前端 router 接手。

**Netlify** — 在 `out/_redirects` 加（會自動被 Netlify 讀取）：

```
/*    /index.html   200
```

**Vercel / Cloudflare Pages** — `vercel.json` 或 `_redirects` 類似設定；或在 UI 選 "single-page application"。

**Nginx** — `location /` 加上 `try_files $uri $uri/ /index.html;`。

## 環境變數

目前無必要的環境變數 — 所有內容都是靜態。未來若接 CMS / API，可在 `.env.production` 加 `VITE_*` 變數。

## Cache-Control 建議

- `assets/*.js` / `assets/*.css`：`Cache-Control: public, max-age=31536000, immutable`（檔名有 hash）
- `index.html`：`Cache-Control: public, max-age=0, must-revalidate`（入口要能即時更新）
- `og-image.png` / `favicon*`：`Cache-Control: public, max-age=86400`

## 上線前 checklist

- [x] `npm run build` 成功
- [x] 無 console 錯誤
- [x] 0 死連結（已掃描驗證）
- [x] 0 死路由（/contact、/webfx、/consultant 都已清除）
- [x] SEO meta（title、description、og:*、twitter:*、JSON-LD × 3）
- [x] 4 語系切換（zh-TW / en / ja / th）— `?lang=xx` 或 LanguageSwitcher
- [x] Favicon 全套（16 / 32 / 180 / 192 / 512 + manifest）
- [x] 響應式（mobile / tablet / desktop）
- [x] Lighthouse-friendly（WebP hero、lazy video、font-display swap、prefers-reduced-motion）

## 驗證指令

```bash
# 本機模擬生產環境
npm run preview

# 打開 http://localhost:4173
```

## 產物大小參考

| 檔案 | 大小 | gzip |
|---|---|---|
| index.html | 7.28 KB | 2.41 KB |
| JS bundle | 383 KB | 118 KB |
| CSS bundle | 66 KB | 10 KB |
| OG image | 77 KB | — |
| 完整 /out | ~22 MB | — |

其中 `/videos` 佔 20 MB（3 支影片），可考慮改用 CDN 或 YouTube embed 再瘦身。

## i18n 後續補完

目前已接線的 section：Navbar、Hero、TeamSection、Footer、BackToTop、LanguageSwitcher。

尚未接線（仍為 zh-TW 寫死）：
- CoreServices
- IndustryMatrix（含 15 個 case 名稱 — 品牌名通常保留原文）
- MethodologyCEO
- PrivateDomainFramework（三階段 + 四步驟）
- SuccessVideos
- CulturePillars
- BicomeCloudFX（Loyalty 詳細）
- AIHighlights

補完方式：參考 Navbar / Hero 的 `useTranslation` 寫法，在 `src/i18n/local/<lang>/common.ts` 四個檔案補 key，component 內用 `t('key.path')` 取代硬編碼字串。

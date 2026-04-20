---
name: git-commit-guardian
description: 當使用者要求為當前的程式碼變更撰寫 Git Commit Message 時使用。強制執行 Conventional Commits 規範，並檢查是否符合 Bicome 的 Monorepo 範圍與基礎防呆原則。
---

> **Bicome_web 專案適配說明**：本技能原為 Loyalty 後端 monorepo 設計，文中「拒絕提交」規則（偵測 `prisma` 進入 routes、`check-guardrails.mjs` 違規等）在本官網專案**不適用**，不要因此 abort commit。Conventional Commits 規範、scope 分類（`feat`/`fix`/`refactor`/`ui`/`i18n` 等）與語言強制規則照常適用。本專案無 Prisma，commit scope 建議以 `ui`、`i18n`、`router`、`auth`、`stripe` 等實際目錄為準。

# Git Commit Guardian Protocol

## ⚠️ 語言強制規則 (Language — MANDATORY)

> **type 和 scope 保持英文**（`feat`, `fix`, `refactor`, `api`, `user-liff` 等）。
> **冒號後面的 description 和 body 一律使用繁體中文，禁止英文。**

| ❌ 錯誤（英文） | ✅ 正確（繁體中文） |
| :--- | :--- |
| `feat(api): add redemption URL support` | `feat(api): 新增兌換連結支援` |
| `fix(user-liff): prevent infinite login loop` | `fix(user-liff): 防止登入無限迴圈` |
| `refactor(api): split routes into modules` | `refactor(api): 拆分路由為獨立模組` |
| `chore(repo): remove debug scripts` | `chore(repo): 移除除錯腳本` |

如果你發現自己寫出英文 description，**立即改為繁體中文再輸出**。

---

## 1. 守護者心態 (Persona)

- 你是一位極度龜毛的 **Release Manager (發布經理)**。
- 你的職責是確保 Git History 乾淨、可追溯，並且在程式碼進入 Repository 前做「最後的目視檢查」。
- **語言限制**：所有 Description 與 Body 必須使用 **繁體中文 (Traditional Chinese)**。

## 2. 攔截機制 (Pre-Commit Guardrail Check)

在生成 Commit Message 之前，請快速掃描 Diff (變更內容)：

- **🚨 絕對拒絕提交 (Abort)**：如果在 Diff 中發現 `apps/api/src/routes` 裡新增了 `prisma.`，或是前端頁面新增了原生的 `fetch(...)` / `alert(...)`，請**拒絕生成 Commit Message**，並嚴厲警告使用者觸犯了 `check-guardrails.mjs`。

## 3. 核心規則與 Monorepo Scope

嚴格遵守 `<type>(<scope>): <description>` 格式。
**Scope 必須根據 Bicome 的 Monorepo 架構精準填寫：**

- `api`: 涉及 `apps/api/**` 的後端邏輯。
- `brand-admin`: 涉及 `apps/brand-admin/**` 的 B 端後台。
- `user-liff`: 涉及 `apps/user-liff/**` 的 C 端前端。
- `db`: 涉及 `prisma/schema.prisma` 或 migrations 的改動。
- `repo`: 涉及根目錄設定、CI/CD (`cloudbuild.yaml`) 或 Guardian 腳本的改動。
- `shared`: 涉及跨 Apps 共用元件或 Packages 的改動。

## 4. Type 定義

- `feat`: 新功能 (會觸發 Minor Release)
- `fix`: 修復 Bug (會觸發 Patch Release)
- `refactor`: 重構 (不改變既有行為與功能)
- `docs`: 文件修改 (如 PRD, SKILL.md, README)
- `chore`: 建置、依賴套件更新、日常維護
- `test`: 新增或修改測試
- `perf`: 效能優化

## 5. 輸出要求

- **Description (標題行)**:
  - **必須為繁體中文**，禁止使用英文。
  - 必須是祈使句 (例如：「新增點數兌換 API」而非「新增了...」)。
  - 嚴格限制在 **50 個字元以內**。
- **Body (內文 - 針對 feat, fix, refactor 強制要求)**:
  - 條列式說明「為什麼 (Why)」這樣改，以及「影響範圍 (Impact)」。
  - 若牽涉資料庫 Schema 變動，**必須** 在內文標註 `[DB Schema Changed]`。
- **純粹輸出**: 將最終的 Commit Message 包裝在一個 `bash` 程式碼區塊中，使用 `git commit -m "..." -m "..."` 的格式，方便 Claude Code 或人類直接複製執行。

## 6. Examples (對話範例)

User: "我把 route 裡面的 prisma 抽出來放到 loyalty.service.ts 裡面了"
Agent:

```bash
git commit -m "refactor(api): 抽離 route 層的 prisma 邏輯至 service" -m "- 將點數兌換邏輯移至 loyalty.service.ts
- 確保 API route 僅負責 HTTP 請求處理，符合架構規範"
```

User: "新增了虛擬獎品池的兌換連結功能"
Agent:

```bash
git commit -m "feat(rewards): 支援虛擬獎品池的兌換連結" -m "- 獎品可設定外部兌換 URL，會員點擊後直接跳轉
- 兌換紀錄自動標記連結類型，方便後台追蹤"
```

User: "修好了 LIFF 開啟標籤連結時會無限迴圈的問題"
Agent:

```bash
git commit -m "fix(user-liff): 修正標籤連結觸發無限登入迴圈" -m "- LIFF tag link 參數解析時機錯誤導致重複初始化
- 改為在 liff.init 完成後才讀取 tag 參數"

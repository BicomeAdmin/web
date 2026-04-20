# Claude Instructions — Bicome 官網

## 1. Pre-flight Skill Routing (MUST DO FIRST)

在產生、重構或修改任何程式碼之前，你 **必須**：

1. 靜默讀取 `.agent/skills/INDEX.md`。
2. 檢查使用者請求是否命中表中任一「觸發條件」。
3. 若命中，靜默讀取對應的 `SKILL.md`，並嚴格依照其專屬規範執行。
4. 執行前，套用 `INDEX.md` §行為準則 中定義的 **Behavioral Protocol (Gate 0-5)**。這些準則不受載入哪個技能影響。
5. 若多個技能同時命中，選擇最接近使用者**主要意圖**的那一個。若真正模稜兩可，請向使用者確認，不要同時載入多個。

## 2. 專案技術棧 (Project Stack)

- **前端**：React 19 + Vite + TypeScript
- **樣式**：Tailwind CSS
- **路由**：react-router-dom v7
- **i18n**：i18next（含繁中、英、日等多語系）
- **第三方**：Firebase 12、Supabase、Stripe、Recharts

## 3. Core Guardrails

- 遵循 SOLID / DRY / KISS，優先可讀性。
- 不要引入未經授權的第三方依賴。
- 修改 i18n 鍵時，務必同步所有語系檔，不允許單一語系鍵缺漏。
- 不在 UI 層保留 `console.log`、`debugger`、`alert` 等 debug 殘留。
- 不直接使用 `window.location.reload()` 做狀態重整，改用 React 狀態或 router navigation。
- 敏感憑證（Firebase、Supabase、Stripe keys）一律透過環境變數，嚴禁硬編碼。

## 4. Skill 庫來源

`.agent/skills/` 目錄下的技能改編自 Bicome 內部 Loyalty 專案，於 2026-04-20 移植至本專案並適配 React 前端情境。詳見 `.agent/skills/INDEX.md` 的「來源與適配說明」。

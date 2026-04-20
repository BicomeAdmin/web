# Bicome_web AI Skills Index (技能總表)

## 路由指令 (Routing Protocol)

給所有 AI Agent：當你收到人類的任務指示時，請先分析任務意圖。如果意圖符合下表的「觸發條件 (Trigger)」，你 **必須** 在實際執行任務前，靜默讀取對應的 `SKILL.md` 檔案，並嚴格依照該技能的規範執行。

若無符合的技能，請回歸基礎防禦規範進行開發。

**觸發精確度**：只有當使用者的主要意圖直接對應觸發條件時才啟用。附帶提及某關鍵字不代表觸發（例如在 UI 任務中提到「連結到後端」不代表觸發設計類技能）。

**多重匹配**：若請求同時匹配多個技能，選擇最貼近使用者**主要意圖**的那一個。真正模稜兩可時，請向使用者確認，不要同時載入多個技能。

## 專案技術棧 (Project Stack)

本專案為 **Bicome 官網**，以下列技術實作：

- **前端框架**：React 19 + Vite + TypeScript
- **樣式**：Tailwind CSS + PostCSS
- **路由**：react-router-dom v7
- **i18n**：i18next + react-i18next + browser-languagedetector
- **第三方**：Firebase 12、Supabase、Stripe
- **圖表**：Recharts

## 行為準則 (Behavioral Protocol)

無論載入哪個技能，以下行為準則在每次任務執行時都必須遵守。

### Gate 0：想清楚再動手 (Think Before Coding)

收到任務後，在寫任何程式碼之前：
- 明確列出你對需求的假設。任何不確定的假設，停下來問人類。
- 如果任務可以有多種解讀，列出解讀並詢問哪一種正確。
- 如果存在更簡單的替代方案，主動提出。
- 感到困惑或範圍不清楚時，停止並提問，不要猜測。
- ⚡ 免責：當需求已經非常明確（例如「把這個變數改名」），簡要列出假設即可直接執行。

### Gate 1：程式碼品質基線 (Code Quality Baseline)

所有程式碼產出必須遵循 **SOLID、DRY、KISS** 原則：
- **SOLID**：特別注意單一職責 (Single Responsibility)，一個函式只做一件事，一個模組只有一個變更理由。
- **DRY**：寫新程式碼前先搜尋 codebase，重用既有實作，不重複造輪子。
- **KISS**：寫最少量能解決問題的程式碼。不預建「未來可能用到」的抽象層。
- 只使用一次的邏輯不需要抽函式。只有一個實作的介面不需要建立。
- 不要為不可能發生的場景撰寫錯誤處理。
- 優先選擇可讀性高、意圖清楚的寫法，而非「聰明」的寫法。
- 自我檢查：「一個資深工程師會不會覺得這太複雜了？」

### Gate 2：精準修改 (Surgical Changes)

- 不要「順便」改善鄰近的程式碼、註解、格式或命名。
- 不要重構沒有問題的程式碼。匹配周圍既有的程式碼風格。
- 發現不相關但值得改進的問題，以備註提出（「另外注意到 X，不在本次範圍」），不要直接修改。
- 自我檢查：「每一行變更是否都能直接追溯到使用者的請求？」

### Gate 3：目標驅動 (Goal-Driven Execution)

- 開始前先陳述完成的定義 (Definition of Done)：需要通過什麼驗證？產出什麼結果？
- 將模糊需求轉化為可驗證的具體步驟。
- 多步驟任務先列計畫，每步標註驗證方式。

### Gate 4：Anti-Slop 產出品質戒律

LLM 特別容易產出以下低品質模式，必須主動迴避：
- **禁止教學式註解**：不要為顯而易見的程式碼加上 `// 遍歷陣列` 這種註解。只在邏輯不自明時才註解。
- **禁止殘留 debug 輸出**：不要留下 `console.log`、`console.debug` 或臨時 print 語句。
- **禁止只用一次的 helper function**：三行邏輯不需要抽成獨立函式，除非顯著提升可讀性。
- **禁止重複解法**：修改程式碼前先搜尋 codebase，確認是否已有類似實作可重用。

### Gate 5：行動判斷框架 (Ask-vs-Act)

**應該停下來問的情境：**
- 任務可以有多種合理做法，且各有 trade-off
- 需求不完整或有歧義
- 動作不可逆（刪除檔案、發送通知、推送遠端、修改 i18n 鍵結構）
- 需要診斷資訊才能判斷

**可以直接行動的情境：**
- 指令明確且無歧義
- 動作可逆且低風險（編輯檔案、建立新元件）
- Codebase 中已有既定模式可循
- 使用者已明確授權此類操作

### 與技能的關係

- 如果載入的技能已有更詳細的前置確認流程，以技能版本為主。
- 行為準則不覆寫技能的領域規範，而是補充技能未涵蓋的行為面向。

## 技能路由表 (Skill Routing Table)

| 技能名稱 (Skill) | 檔案路徑 (Path) | 觸發條件 (Trigger / Intent) |
| :--- | :--- | :--- |
| **UI UX Pro Max** | `.agent/skills/ui-ux-pro-max/SKILL.md` | 當人類要求設計 UI 風格、選擇配色方案、字型搭配、建立設計系統、或需要專業的視覺設計指導時。 |
| **UI Component Crafter** | `.agent/skills/ui-component-crafter/SKILL.md` | 當人類要求開發前端介面、設計 React 元件、美化排版或套用 Tailwind CSS 時。 |
| **UX Flow Reviewer** | `.agent/skills/ux-flow-reviewer/SKILL.md` | 當人類要求審查使用者流程、檢查互動體驗完整性、確認狀態處理是否齊全、或評估前端頁面的 UX 品質時。 |
| **Accessibility Checker** | `.agent/skills/accessibility-checker/SKILL.md` | 當人類要求檢查無障礙合規性、進行 a11y 審查、確認 WCAG 合規、或改善元件的可及性時。 |
| **Performance Optimizer** | `.agent/skills/performance-optimizer/SKILL.md` | 當人類要求優化效能、加速載入、減少打包大小、或改善前端回應速度時。 |
| **Harsh Code Reviewer** | `.agent/skills/harsh-code-reviewer/SKILL.md` | 當人類要求審查程式碼 (Code Review)、尋找潛在 Bug、或是檢查 PR 時。 |
| **Clean Code Refactor** | `.agent/skills/clean-code-refactor/SKILL.md` | 當人類要求優化程式碼、重構、降低巢狀結構或提升程式碼品質時。 |
| **Doc Craftsman** | `.agent/skills/doc-craftsman/SKILL.md` | 當人類要求撰寫技術文件、或是為程式碼補上 JSDoc/註解時。 |
| **Git Commit Guardian** | `.agent/skills/git-commit-guardian/SKILL.md` | 當人類要求生成 Commit Message，或進行 Git 提交操作前。 |

## 覆寫原則 (Override Rule)

若本專案未來在根目錄新增 `AGENTS.md` 或其他防禦規範，其優先權高於個別技能。技能規範不可牴觸全域規範。

## 來源與適配說明 (Origin & Adaptation Notes)

本技能庫改編自 Bicome 內部 Loyalty 專案的 `.agent/skills/`，於 2026-04-20 移植至官網專案。已排除與 Loyalty 後端強耦合的技能（DB Schema Architect、API Route Designer、Unit Test Architect、System Design Advisor、Health Monitor、Code Sweep、Workflow Chains、Test Pipeline、Skill Self-Improvement）。保留的 9 個技能中，部分文件仍保留 Loyalty 原始範例（Prisma、`apps/api`、`check-guardrails.mjs` 等），每個受影響技能的開頭都有「Bicome_web 專案適配說明」標示該忽略哪些規則、應聚焦於何種前端情境。

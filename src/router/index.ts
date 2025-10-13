import { useNavigate, useRoutes, type NavigateFunction } from "react-router-dom";
import { useEffect } from "react";
import routes from "./config";

// ----------------- START: Navigation Service (非 React 環境導航功能) -----------------
// 使用一個私有變數來儲存 useNavigate 實例，取代污染全局 window
let navigateInstance: ReturnType<typeof useNavigate> | null = null;
let navigateResolver: ((navigate: ReturnType<typeof useNavigate>) => void) | null;

// 供外部程式碼（例如 Redux, 服務層）使用的 Promise
export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  navigateResolver = resolve;
});

/**
 * 供外部程式碼（非 React Component）使用的導航函數。
 * @param args - navigate function arguments (to, options)
 */
export function navigateTo(...args: Parameters<NavigateFunction>) {
  if (navigateInstance) {
    navigateInstance(...args);
  } else {
    // 如果 navigate 尚未初始化，則等待 Promise 完成後再執行
    navigatePromise.then(navigate => navigate(...args));
  }
}
// ----------------- END: Navigation Service -----------------


/**
 * 路由初始化組件，負責渲染路由並注入 useNavigate 實例到 Service。
 */
export function AppRoutes() {
  const element = useRoutes(routes);
  const navigate = useNavigate();

  useEffect(() => {
    // 只在 navigateInstance 尚未設定時執行初始化
    if (!navigateInstance) {
      navigateInstance = navigate;
      if (navigateResolver) {
        navigateResolver(navigate);
      }
    }
  }, [navigate]); // navigate 作為依賴項，確保在組件生命週期內穩定運行

  return element;
}

// 注意：我們已移除舊的 declare global { interface Window ... } 區塊，
// 以及所有對 window.REACT_APP_NAVIGATE 的引用。
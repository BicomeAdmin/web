import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import messages from './local/index';

/**
 * 官網 i18n 設定
 * - 主要市場：zh-TW（預設）
 * - 支援：en、ja、th
 * - 偵測順序：localStorage → querystring → navigator → htmlTag
 */
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'zh-TW',
        supportedLngs: ['zh-TW', 'en', 'ja', 'th'],
        load: 'currentOnly', // 禁止 fallback 到 zh (避免 zh-TW 掉成 zh)
        debug: false,
        resources: messages,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            // 優先順序：querystring (分享連結直指) > localStorage (使用者選過的) > navigator > htmlTag
            order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
            lookupQuerystring: 'lang',
            lookupLocalStorage: 'bicome-lang',
            caches: ['localStorage'],
        },
    });

const syncHtmlLang = (lng: string) => {
    if (typeof document !== 'undefined') {
        document.documentElement.lang = lng;
    }
};

// 初始設定（同步、不等 event）+ 後續切換都同步 <html lang>
syncHtmlLang(i18n.language);
i18n.on('languageChanged', syncHtmlLang);

export default i18n;

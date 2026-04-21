import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
    { code: 'zh-TW', label: '繁體中文', short: '繁中' },
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'ja', label: '日本語', short: 'JP' },
    { code: 'th', label: 'ภาษาไทย', short: 'TH' },
];

type Props = {
    variant?: 'dark' | 'light';
};

export default function LanguageSwitcher({ variant = 'dark' }: Props) {
    const { i18n, t } = useTranslation();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, []);

    const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

    const trigger = variant === 'dark'
        ? 'bg-white/[0.03] border-white/10 text-white/70 hover:text-white hover:bg-white/[0.06]'
        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-white';

    const menu = variant === 'dark'
        ? 'bg-[#0a1f1a]/95 border-white/10 text-white/80'
        : 'bg-white border-gray-200 text-gray-700';

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-label={t('lang.label')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-semibold transition-colors ${trigger}`}
            >
                <i className="ri-global-line text-base" aria-hidden="true"></i>
                <span>{currentLang.short}</span>
                <i className={`ri-arrow-down-s-line text-base transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true"></i>
            </button>
            {open && (
                <div
                    role="menu"
                    className={`absolute right-0 mt-2 w-36 rounded-xl border shadow-xl backdrop-blur-xl overflow-hidden ${menu}`}
                >
                    {LANGUAGES.map((lang) => {
                        const isActive = lang.code === i18n.language;
                        return (
                            <button
                                key={lang.code}
                                type="button"
                                role="menuitem"
                                onClick={() => {
                                    i18n.changeLanguage(lang.code);
                                    setOpen(false);
                                }}
                                className={`w-full px-4 py-2.5 text-left text-sm transition-colors flex items-center justify-between ${
                                    isActive
                                        ? variant === 'dark'
                                            ? 'bg-emerald-500/15 text-emerald-300 font-bold'
                                            : 'bg-emerald-50 text-emerald-700 font-bold'
                                        : variant === 'dark'
                                            ? 'hover:bg-white/5'
                                            : 'hover:bg-gray-50'
                                }`}
                            >
                                <span>{lang.label}</span>
                                {isActive && <i className="ri-check-line" aria-hidden="true"></i>}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

import { useTranslation } from 'react-i18next';
import { useCountUp } from '../../hooks/useCountUp';
import { useMagnetic } from '../../hooks/useMagnetic';

export default function HeroCEO() {
    const { t } = useTranslation();
    const brandsCount = useCountUp(300, { duration: 1600 });
    const reachCount = useCountUp(50, { duration: 1800 });
    const satCount = useCountUp(90, { duration: 2000 });
    const ctaRef = useMagnetic<HTMLAnchorElement>({ strength: 0.3, radius: 140 });

    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-[#0a1f1a] via-[#020617] to-[#020617]">
            {/* 背景光暈 × Aurora 漂移 */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* 主光暈 - Bicome 綠 */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/20 rounded-full blur-[150px] animate-glow-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/15 rounded-full blur-[180px] animate-glow-pulse" style={{ animationDelay: '2s' }} />

                {/* Aurora 緩慢漂移 */}
                <div className="aurora-layer" />

                {/* 網格背景 */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* 左側內容 */}
                    <div className="space-y-10">
                        {/* 標籤 */}
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-sm">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                                <span className="text-sm font-medium text-emerald-400 tracking-wide">{t('hero.badge')}</span>
                            </div>
                            <div className="hidden md:flex items-center gap-2 text-xs">
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-500/15 text-emerald-300 rounded-md border border-emerald-500/30">
                                    <i className="ri-sparkling-2-line" aria-hidden="true"></i> {t('hero.pill.ai')}
                                </span>
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-500/15 text-amber-300 rounded-md border border-amber-500/30">
                                    <i className="ri-gamepad-line" aria-hidden="true"></i> {t('hero.pill.loyalty')}
                                </span>
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-teal-500/15 text-teal-300 rounded-md border border-teal-500/30">
                                    <i className="ri-team-line" aria-hidden="true"></i> {t('hero.pill.advisory')}
                                </span>
                            </div>
                        </div>

                        {/* 主標題 */}
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-[1.05] tracking-tighter">
                                <span className="block text-white/45 text-xl md:text-2xl lg:text-3xl font-bold mb-4 tracking-normal">
                                    {t('hero.preTitle')}
                                </span>
                                <span className="shimmer-text bg-gradient-to-r from-emerald-400 via-emerald-200 via-50% to-emerald-400 bg-clip-text text-transparent">
                                    {t('hero.titleA')}
                                </span>
                                <br />
                                <span className="text-white">{t('hero.titleB')}</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/55 leading-relaxed max-w-xl">
                                {t('hero.sub')}
                            </p>
                        </div>

                        {/* CTA 按鈕 */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                ref={ctaRef}
                                href="#team"
                                className="group relative px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl overflow-hidden shadow-2xl shadow-emerald-900/20 transition-shadow duration-300 hover:shadow-emerald-500/40 will-change-transform"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {t('hero.cta')}
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            </a>
                        </div>

                        {/* 數據統計 — 進場 count-up */}
                        <div className="pt-8 border-t border-white/10">
                            <div className="grid grid-cols-3 gap-8">
                                <div className="space-y-1">
                                    <div className="text-3xl md:text-4xl font-display font-extrabold text-white tabular-nums">
                                        {brandsCount}<span className="text-emerald-400">+</span>
                                    </div>
                                    <div className="text-sm text-white/40">{t('hero.stats.brands')}</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-3xl md:text-4xl font-display font-extrabold text-white tabular-nums">
                                        {reachCount}<span className="text-amber-400">M</span>
                                    </div>
                                    <div className="text-sm text-white/40">{t('hero.stats.reach')}</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-3xl md:text-4xl font-display font-extrabold text-white tabular-nums">
                                        {satCount}<span className="text-emerald-400">%</span>
                                    </div>
                                    <div className="text-sm text-white/40">{t('hero.stats.satisfaction')}</div>
                                </div>
                            </div>
                            <div className="mt-4 text-[10px] text-white/25">{t('hero.stats.footnote')}</div>
                        </div>
                    </div>

                    {/* 右側視覺 */}
                    <div className="relative hidden lg:block">
                        <div
                            className="group/spot relative"
                            onMouseMove={(e) => {
                                const r = e.currentTarget.getBoundingClientRect();
                                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
                            }}
                        >
                            {/* 主圖容器 - 玻璃擬態 */}
                            <div className="relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-sm p-2 shadow-[0_0_60px_rgba(16,185,129,0.15)]">
                                <img
                                    src="/images/hero_professional.png"
                                    alt="Bicome 專業團隊協作"
                                    className="w-full h-auto object-cover rounded-xl"
                                />
                                {/* 邊緣光暈 */}
                                <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
                                {/* 滑鼠跟隨 Spotlight（lg+ 才有） */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-0 group-hover/spot:opacity-100 transition-opacity duration-500 rounded-xl"
                                    style={{
                                        background: 'radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(16,185,129,0.22), transparent 60%)',
                                        mixBlendMode: 'screen',
                                    }}
                                />
                            </div>

                            {/* 浮動卡片 - AI 即時判讀 */}
                            <div className="absolute -left-6 bottom-16 bg-[#0a1f1a]/90 backdrop-blur-xl rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.2)] p-4 border border-emerald-500/20">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                                        <i className="ri-sparkling-2-line text-xl text-white" aria-hidden="true"></i>
                                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-emerald-400 font-bold tracking-[0.2em] uppercase mb-0.5">{t('hero.aiCard.label')}</div>
                                        <div className="text-base font-display font-extrabold text-white leading-tight">{t('hero.aiCard.title')}</div>
                                        <div className="text-[11px] text-white/45">{t('hero.aiCard.desc')}</div>
                                    </div>
                                </div>
                            </div>

                            {/* 浮動卡片 - LINE 社群 */}
                            <div className="absolute -right-4 top-16 bg-[#0a1f1a]/90 backdrop-blur-xl rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.2)] p-4 border border-emerald-500/20">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.04 2 11c0 4.41 3.63 8.62 8.74 8.62.35 0 .71-.02 1.06-.05.3.68.72 1.33 1.26 1.89.17.17.41.26.65.26.12 0 .24-.02.36-.07.36-.15.58-.5.58-.89v-1.6c4.37-.82 7.35-4.27 7.35-8.16C22 6.04 17.52 2 12 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-white">{t('hero.lineCard.title')}</div>
                                        <div className="text-xs text-white/50">{t('hero.lineCard.desc')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 底部漸層過渡 - 無可見顏色 */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-transparent to-transparent" />
        </section>
    );
}

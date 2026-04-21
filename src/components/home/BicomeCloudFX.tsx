import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';
import { useMagnetic } from '../../hooks/useMagnetic';

export default function BicomeCloudFX() {
    const grid = useInView<HTMLDivElement>();
    const dash = useInView<HTMLDivElement>();
    const tiers_ = useInView<HTMLDivElement>();
    const stats = useInView<HTMLDivElement>();
    const ctaRef = useMagnetic<HTMLAnchorElement>({ strength: 0.25, radius: 120 });

    // 對齊實際產品的 8 個核心模組，AI 智慧中心放首位
    const coreFeatures = [
        { icon: 'ri-sparkling-2-line', name: 'AI 智慧中心', desc: '任務推薦、行為分群、流失預警', accent: true },
        { icon: 'ri-chat-smile-3-line', name: '聊天戰情室', desc: 'LINE 社群數據即時同步與判讀' },
        { icon: 'ri-target-line', name: '任務中心', desc: '週期 / 新手 / 推薦 / 無限任務' },
        { icon: 'ri-medal-line', name: 'XP 成長路徑', desc: '8 階等級制與里程碑體系' },
        { icon: 'ri-trophy-line', name: '英雄榜', desc: 'XP / 任務王 / 富豪 / 連登 / KOC 五榜' },
        { icon: 'ri-gift-line', name: '積分兌換', desc: '虛擬、實體、服務完整兌換機制' },
        { icon: 'ri-calendar-check-line', name: '登入地圖', desc: '連續簽到階梯獎勵（+6 → +10000）' },
        { icon: 'ri-magic-line', name: '互動彩蛋', desc: '轉盤、許願池、寵物養成三位一體' },
    ];

    // 實際 8 階等級
    const tiers = [
        { name: '新手', icon: 'ri-leaf-line', active: true },
        { name: '棒棒會員', icon: 'ri-flashlight-line', active: true },
        { name: '入門', icon: 'ri-seedling-line', active: true },
        { name: '進階', icon: 'ri-vip-diamond-line', active: true, current: true },
        { name: '行者', icon: 'ri-vip-crown-line', active: false },
        { name: '定者', icon: 'ri-medal-line', active: false },
        { name: '高級', icon: 'ri-vip-line', active: false },
        { name: 'Boss', icon: 'ri-fire-line', active: false },
    ];

    // 登入地圖階梯（對齊實際產品）
    const loginMap = [
        { days: '3天', pts: 6, done: true },
        { days: '7天', pts: 25, done: true },
        { days: '14天', pts: 100, done: false, current: true },
        { days: '30天', pts: 500, done: false },
        { days: '60天', pts: 1000, done: false },
        { days: '90天', pts: 10000, done: false },
    ];

    // 英雄榜多 tab
    const leaderboardTabs = ['XP 排行', '任務王', '富豪們', '連續登入', 'KOC'];

    const integrations = [
        { name: 'Shopline', logo: 'SL' },
        { name: 'Cyberbiz', logo: 'CB' },
        { name: '91APP', logo: '91' },
    ];

    const activity = useCountUp(156, { duration: 1600, start: stats.visible });
    const repurchase = useCountUp(89, { duration: 1600, start: stats.visible });
    const ltvX = useCountUp(32, { duration: 1600, start: stats.visible });

    return (
        <section
            id="loyalty"
            className="relative py-24 md:py-32 overflow-hidden text-white bg-gradient-to-br from-[#0a1f1a] via-[#020617] to-[#0a1410]"
        >
            {/* Aurora + 網格 */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="aurora-layer" />
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[140px] animate-glow-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-amber-500/10 rounded-full blur-[160px] animate-glow-pulse" style={{ animationDelay: '3s' }} />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                        backgroundSize: '80px 80px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* 標題區 */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-[11px] font-bold rounded-full mb-6 border border-emerald-500/20 uppercase tracking-[0.3em]">
                        <i className="ri-sparkling-2-line" aria-hidden="true"></i>
                        Bicome 冒險世界
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-[1.08] mb-6 tracking-tighter">
                        讓用戶{' '}
                        <span className="shimmer-text bg-gradient-to-r from-emerald-400 via-amber-300 via-50% to-emerald-400 bg-clip-text text-transparent">玩上癮</span>
                        {' '}的 AI 忠誠系統
                    </h2>
                    <p className="text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
                        把會員制度重構為 RPG 式的成長旅程，讓 AI 即時判讀用戶行為、自動推薦任務、預警流失。
                        <span className="text-emerald-400 font-semibold"> 300+ 品牌</span>驗證、可接入 Shopline / Cyberbiz / 91APP 的遊戲化架構。
                    </p>
                </div>

                {/* 八大核心模組（AI 智慧中心作為 accent 頭牌） */}
                <div
                    ref={grid.ref}
                    data-reveal={grid.visible ? 'in' : 'out'}
                    className="reveal-parent grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16"
                >
                    {coreFeatures.map((feature) => (
                        <div
                            key={feature.name}
                            className={`group p-5 rounded-2xl border transition-all duration-300 ${
                                feature.accent
                                    ? 'bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]'
                                    : 'bg-white/[0.03] border-white/10 hover:border-emerald-500/30 hover:bg-white/[0.05]'
                            }`}
                        >
                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border transition-colors ${
                                feature.accent
                                    ? 'bg-gradient-to-br from-emerald-400 to-teal-500 border-emerald-300/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                                    : 'bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 group-hover:from-emerald-500/30 group-hover:to-emerald-500/10'
                            }`}>
                                <i className={`${feature.icon} text-xl ${feature.accent ? 'text-white' : 'text-emerald-400'}`} aria-hidden="true"></i>
                            </div>
                            <div className="flex items-center gap-2 mb-1.5">
                                <div className={`text-[15px] font-display font-bold ${feature.accent ? 'text-white' : ''}`}>{feature.name}</div>
                                {feature.accent && (
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 uppercase tracking-wider">Core</span>
                                )}
                            </div>
                            <div className={`text-[12px] leading-relaxed ${feature.accent ? 'text-emerald-100/70' : 'text-white/45'}`}>{feature.desc}</div>
                        </div>
                    ))}
                </div>

                {/* Dashboard mockup — 對齊實際產品 */}
                <div className="mb-16">
                    <div className="text-center mb-6">
                        <div className="text-[11px] text-white/40 uppercase tracking-[0.3em] mb-2">Product Glimpse</div>
                        <div className="text-sm text-white/70">這是使用者每天會看到的實際畫面</div>
                    </div>
                    <div
                        ref={dash.ref}
                        data-reveal={dash.visible ? 'in' : 'out'}
                        className="reveal-parent grid lg:grid-cols-3 gap-5"
                    >
                        {/* 1. XP 錢包卡（對齊實際產品的深紫漸層） */}
                        <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-indigo-900/60 via-purple-800/50 to-rose-800/60">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/30 rounded-full blur-3xl" />
                            <div className="relative p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 border border-white/20">
                                        <i className="ri-wallet-3-line text-amber-200 text-sm" aria-hidden="true"></i>
                                        <span className="text-xs font-bold text-white">我的錢包</span>
                                    </div>
                                    <span className="text-[10px] text-white/60 uppercase tracking-wider">MEMBER</span>
                                </div>
                                <div className="mb-2">
                                    <div className="text-[11px] text-white/70 mb-1">可用餘額</div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl md:text-5xl font-display font-extrabold text-white tabular-nums">34,395</span>
                                        <span className="text-sm text-white/70">積分</span>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-baseline justify-between text-[11px] text-white/70">
                                    <span>升級到 <span className="font-bold text-white">行者</span></span>
                                    <span className="tabular-nums">還差 306 XP</span>
                                </div>
                                <div className="relative h-1.5 mt-2 bg-white/15 rounded-full overflow-hidden">
                                    <div
                                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-300 via-rose-300 to-pink-300 rounded-full transition-all duration-[2000ms] ease-out"
                                        style={{ width: dash.visible ? '72%' : '0%' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 2. 登入地圖（實際產品獨有亮點） */}
                        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
                            <div className="relative p-6">
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-2">
                                        <i className="ri-calendar-check-line text-amber-300" aria-hidden="true"></i>
                                        <span className="text-sm font-display font-bold">登入地圖</span>
                                        <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">最高 12 天</span>
                                    </div>
                                </div>
                                <div className="text-[12px] text-white/60 mb-4">
                                    已連續登入 <span className="text-white font-bold">2 天</span>，再 <span className="text-amber-300 font-bold">12 天</span>獲得 <span className="text-amber-300 font-bold">+100</span> 積分
                                </div>
                                <div className="relative">
                                    <div className="absolute left-3 right-3 top-4 h-0.5 bg-gradient-to-r from-emerald-400/40 via-amber-400/40 to-white/10" />
                                    <div className="relative grid grid-cols-6 gap-1">
                                        {loginMap.map((step) => (
                                            <div key={step.days} className="flex flex-col items-center">
                                                <div
                                                    className={`relative w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                                                        step.done
                                                            ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                                                            : step.current
                                                                ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)] ring-4 ring-amber-400/20'
                                                                : 'bg-white/10 text-white/40'
                                                    }`}
                                                >
                                                    {step.done ? '✓' : step.current ? '●' : ''}
                                                </div>
                                                <div className={`text-[10px] mt-1.5 font-bold tabular-nums ${step.current ? 'text-amber-300' : step.done ? 'text-emerald-300' : 'text-white/40'}`}>+{step.pts}</div>
                                                <div className="text-[9px] text-white/40">{step.days}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. 英雄榜（多 tab，對齊實際產品） */}
                        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
                            <div className="relative p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <i className="ri-trophy-line text-emerald-400" aria-hidden="true"></i>
                                        <span className="text-sm font-display font-bold">英雄榜</span>
                                    </div>
                                </div>
                                {/* 多 tab 指示（不可互動，僅視覺呈現多榜機制） */}
                                <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1 scrollbar-none">
                                    {leaderboardTabs.map((tab, i) => (
                                        <span
                                            key={tab}
                                            className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                                                i === 0
                                                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                                                    : 'bg-white/5 text-white/50 border-white/10'
                                            }`}
                                        >
                                            {tab}
                                        </span>
                                    ))}
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { n: '私域小助理 Joce', p: '1,675', rank: 1 },
                                        { n: '備客｜阿樂', p: '194', rank: 2 },
                                        { n: '備客｜Judy', p: '142', rank: 3 },
                                    ].map((u) => {
                                        const style = {
                                            1: { bg: 'bg-gradient-to-r from-amber-500/15 to-transparent', border: 'border-amber-500/30', num: 'text-amber-300 bg-amber-500/15' },
                                            2: { bg: '', border: 'border-white/10', num: 'text-slate-200 bg-white/10' },
                                            3: { bg: '', border: 'border-white/10', num: 'text-orange-300 bg-orange-500/10' },
                                        }[u.rank as 1 | 2 | 3];
                                        return (
                                            <div key={u.n} className={`flex items-center gap-3 p-2.5 rounded-lg border ${style.bg} ${style.border}`}>
                                                <span className={`w-7 h-7 rounded-full flex items-center justify-center font-display font-bold text-xs ${style.num}`}>
                                                    {u.rank}
                                                </span>
                                                <span className="text-[13px] flex-1 font-medium truncate">{u.n}</span>
                                                <span className="text-[11px] text-white/50 tabular-nums">{u.p} XP</span>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="mt-3 pt-3 border-t border-white/10">
                                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                        <i className="ri-user-smile-line text-lg text-emerald-400" aria-hidden="true"></i>
                                        <span className="text-[13px] flex-1 font-medium">我的排名</span>
                                        <span className="text-sm font-display font-bold text-emerald-400">#28</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 8 階等級路徑 */}
                <div className="mb-16">
                    <div className="text-center mb-6">
                        <div className="text-[11px] text-white/40 uppercase tracking-[0.3em] mb-2">8-Tier Progression</div>
                        <div className="text-sm text-white/70">從 <span className="text-emerald-400 font-bold">新手</span> 到 <span className="text-amber-300 font-bold">Boss</span> — 八階成長路徑</div>
                    </div>
                    <div
                        ref={tiers_.ref}
                        data-reveal={tiers_.visible ? 'in' : 'out'}
                        className="reveal-parent relative flex items-center justify-between gap-1 md:gap-3 max-w-4xl mx-auto"
                    >
                        <div className="absolute left-0 right-0 top-5 h-[2px] bg-gradient-to-r from-emerald-500/40 via-amber-500/40 to-rose-500/40" />
                        {tiers.map((tier) => (
                            <div key={tier.name} className="relative flex flex-col items-center gap-2 flex-1">
                                <div
                                    className={`relative w-10 h-10 rounded-full flex items-center justify-center text-base transition-all ${
                                        tier.current
                                            ? 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-[0_0_25px_rgba(16,185,129,0.5)] ring-4 ring-emerald-400/20'
                                            : tier.active
                                                ? 'bg-emerald-500/15 border border-emerald-400/30 text-emerald-300'
                                                : 'bg-white/5 border border-white/10 text-white/30'
                                    }`}
                                >
                                    <i className={`${tier.icon} ${tier.current ? 'text-white' : ''}`} aria-hidden="true"></i>
                                </div>
                                <div className={`text-[10px] md:text-[11px] font-bold ${tier.current ? 'text-emerald-400' : tier.active ? 'text-white/80' : 'text-white/40'}`}>
                                    {tier.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 整合串接 strip */}
                <div className="mb-14 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white/40">
                    <span className="text-[11px] uppercase tracking-[0.3em]">無縫整合</span>
                    <div className="flex items-center gap-6">
                        {integrations.map((i) => (
                            <div key={i.name} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10">
                                <span className="w-6 h-6 rounded bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-400/20 flex items-center justify-center text-[10px] font-display font-black text-emerald-300">
                                    {i.logo}
                                </span>
                                <span className="text-xs font-semibold text-white/70">{i.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 成效數據 + CTA */}
                <div
                    ref={stats.ref}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-900/30 via-white/[0.02] to-amber-900/20 p-8 md:p-10"
                >
                    <div className="absolute -left-20 -top-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl" />
                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="flex flex-wrap gap-10 justify-center lg:justify-start">
                            <div>
                                <div className="text-3xl md:text-4xl font-display font-extrabold text-emerald-400 tabular-nums">+{activity}%</div>
                                <div className="text-xs text-white/50 mt-1">用戶活躍度</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-display font-extrabold text-teal-300 tabular-nums">+{repurchase}%</div>
                                <div className="text-xs text-white/50 mt-1">回購率提升</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-display font-extrabold text-amber-400 tabular-nums">{(ltvX / 10).toFixed(1)}x</div>
                                <div className="text-xs text-white/50 mt-1">LTV 增長</div>
                            </div>
                        </div>
                        <a
                            ref={ctaRef}
                            href="#team"
                            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-display font-bold rounded-xl overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:shadow-[0_0_60px_rgba(16,185,129,0.45)] transition-shadow whitespace-nowrap will-change-transform"
                        >
                            <span className="relative z-10 inline-flex items-center gap-2">
                                免費體驗冒險世界
                                <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" aria-hidden="true"></i>
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

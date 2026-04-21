import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';

export default function BicomeCloudFX() {
    const grid = useInView<HTMLDivElement>();
    const dash = useInView<HTMLDivElement>();
    const stats = useInView<HTMLDivElement>();

    const coreFeatures = [
        { icon: 'ri-gamepad-line', name: '遊戲化', desc: '將會員機制轉化為進度感' },
        { icon: 'ri-target-line', name: '任務系統', desc: '每日/每週任務驅動活躍' },
        { icon: 'ri-gift-line', name: '獎勵引擎', desc: '點數、優惠券、實體兌換' },
        { icon: 'ri-medal-line', name: '徽章與等級', desc: '身份認同與社交榮耀' },
        { icon: 'ri-trophy-line', name: '排行榜', desc: '激發良性競爭與黏著' },
    ];

    const levelIcons = ['ri-leaf-line', 'ri-star-line', 'ri-vip-diamond-line', 'ri-vip-crown-line', 'ri-fire-line'];

    const activity = useCountUp(156, { duration: 1600, start: stats.visible });
    const repurchase = useCountUp(89, { duration: 1600, start: stats.visible });
    const ltvX = useCountUp(32, { duration: 1600, start: stats.visible }); // 顯示為 3.2x

    return (
        <section
            id="loyalty"
            className="relative py-24 md:py-32 overflow-hidden text-white bg-gradient-to-br from-[#0a1f1a] via-[#020617] to-[#0a1410]"
        >
            {/* Aurora + 網格背景：與 Hero 同語言 */}
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
                        Loyalty Product
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-[1.08] mb-6 tracking-tighter">
                        讓用戶{' '}
                        <span className="shimmer-text bg-gradient-to-r from-emerald-400 via-amber-300 via-50% to-emerald-400 bg-clip-text text-transparent">玩上癮</span>
                        {' '}的忠誠計劃
                    </h2>
                    <p className="text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
                        把會員制度重構成一場持續進化的升級旅程。我們為品牌設計任務、點數、徽章、排行榜，
                        <span className="text-emerald-400 font-semibold"> 300+ 品牌</span>驗證的遊戲化架構。
                    </p>
                </div>

                {/* 五大核心功能 */}
                <div
                    ref={grid.ref}
                    data-reveal={grid.visible ? 'in' : 'out'}
                    className="reveal-parent grid md:grid-cols-3 lg:grid-cols-5 gap-3 mb-14"
                >
                    {coreFeatures.map((feature) => (
                        <div
                            key={feature.name}
                            className="group p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all duration-300"
                        >
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:from-emerald-500/30 group-hover:to-emerald-500/10 transition-colors">
                                <i className={`${feature.icon} text-xl text-emerald-400`} aria-hidden="true"></i>
                            </div>
                            <div className="text-[15px] font-display font-bold mb-1.5">{feature.name}</div>
                            <div className="text-[12px] text-white/45 leading-relaxed">{feature.desc}</div>
                        </div>
                    ))}
                </div>

                {/* Dashboard Mockup — 三欄 */}
                <div
                    ref={dash.ref}
                    data-reveal={dash.visible ? 'in' : 'out'}
                    className="reveal-parent grid lg:grid-cols-3 gap-5 mb-14"
                >
                    {/* 等級進度 */}
                    <div className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 rounded-2xl p-6 overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
                        <div className="relative">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                    <i className="ri-vip-diamond-line text-lg text-white" aria-hidden="true"></i>
                                </div>
                                <div className="flex-1">
                                    <div className="text-[10px] text-white/40 tracking-widest uppercase">Current Tier</div>
                                    <div className="text-base font-display font-bold">鑽石會員</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xl font-display font-extrabold text-emerald-400 tabular-nums">3,580</div>
                                    <div className="text-[10px] text-white/40">累積點數</div>
                                </div>
                            </div>
                            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                                <div
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 rounded-full transition-all duration-[2000ms] ease-out"
                                    style={{ width: dash.visible ? '75%' : '0%' }}
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                {levelIcons.map((iconClass, i) => (
                                    <div
                                        key={i}
                                        className={`relative w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                                            i <= 2
                                                ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                                                : i === 3
                                                    ? 'bg-white/10 border border-white/20 text-white/60 ring-2 ring-emerald-400/30'
                                                    : 'bg-white/5 border border-white/10 text-white/25'
                                        }`}
                                    >
                                        <i className={`${iconClass} text-sm`} aria-hidden="true"></i>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 text-[11px] text-white/50 text-center">
                                再 <span className="text-emerald-400 font-bold">420 點</span> 升級為傳奇會員
                            </div>
                        </div>
                    </div>

                    {/* 今日任務 */}
                    <div className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 rounded-2xl p-6 overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
                        <div className="relative">
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-2">
                                    <i className="ri-target-line text-amber-400" aria-hidden="true"></i>
                                    <span className="text-sm font-display font-bold">今日任務</span>
                                </div>
                                <span className="text-xs text-white/40 tabular-nums">2 / 3 完成</span>
                            </div>
                            <div className="space-y-2.5">
                                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                                        <i className="ri-check-line text-white text-xs" aria-hidden="true"></i>
                                    </div>
                                    <span className="text-sm flex-1">每日簽到</span>
                                    <span className="text-xs font-bold text-emerald-400">+50</span>
                                </div>
                                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                                        <i className="ri-check-line text-white text-xs" aria-hidden="true"></i>
                                    </div>
                                    <span className="text-sm flex-1">分享社群貼文</span>
                                    <span className="text-xs font-bold text-emerald-400">+100</span>
                                </div>
                                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/20 ring-1 ring-amber-400/20">
                                    <div className="w-6 h-6 rounded-full border-2 border-amber-400/40 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                    </div>
                                    <span className="text-sm flex-1 text-white/80">完成首購體驗</span>
                                    <span className="text-xs font-bold text-amber-400">+500</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 排行榜 */}
                    <div className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 rounded-2xl p-6 overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
                        <div className="relative">
                            <div className="flex items-center gap-2 mb-5">
                                <i className="ri-trophy-line text-emerald-400" aria-hidden="true"></i>
                                <span className="text-sm font-display font-bold">本月排行榜</span>
                            </div>
                            <div className="space-y-2">
                                {[
                                    { n: '王小明', p: '12,580', rank: 1 },
                                    { n: '林美玲', p: '11,230', rank: 2 },
                                    { n: '陳大偉', p: '10,890', rank: 3 },
                                ].map((u) => {
                                    const style = {
                                        1: { bg: 'bg-gradient-to-r from-amber-500/15 to-transparent', border: 'border-amber-500/30', num: 'text-amber-400 bg-amber-500/10' },
                                        2: { bg: '', border: 'border-white/10', num: 'text-slate-200 bg-white/10' },
                                        3: { bg: '', border: 'border-white/10', num: 'text-orange-300 bg-orange-500/10' },
                                    }[u.rank as 1 | 2 | 3];
                                    return (
                                        <div
                                            key={u.n}
                                            className={`flex items-center gap-3 p-2.5 rounded-lg border ${style.bg} ${style.border}`}
                                        >
                                            <span className={`w-7 h-7 rounded-full flex items-center justify-center font-display font-bold text-xs ${style.num}`}>
                                                {u.rank}
                                            </span>
                                            <span className="text-sm flex-1 font-medium">{u.n}</span>
                                            <span className="text-xs text-white/50 tabular-nums">{u.p} pt</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="mt-3 pt-3 border-t border-white/10">
                                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                    <i className="ri-user-smile-line text-lg text-emerald-400" aria-hidden="true"></i>
                                    <span className="text-sm flex-1 font-medium">我的排名</span>
                                    <span className="text-sm font-display font-bold text-emerald-400">#28</span>
                                </div>
                            </div>
                        </div>
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
                                <div className="text-3xl md:text-4xl font-display font-extrabold text-emerald-400 tabular-nums">
                                    +{activity}%
                                </div>
                                <div className="text-xs text-white/50 mt-1">用戶活躍度</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-display font-extrabold text-teal-300 tabular-nums">
                                    +{repurchase}%
                                </div>
                                <div className="text-xs text-white/50 mt-1">回購率提升</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-display font-extrabold text-amber-400 tabular-nums">
                                    {(ltvX / 10).toFixed(1)}x
                                </div>
                                <div className="text-xs text-white/50 mt-1">LTV 增長</div>
                            </div>
                        </div>
                        <a
                            href="#team"
                            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-display font-bold rounded-xl overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:shadow-[0_0_60px_rgba(16,185,129,0.45)] transition-shadow whitespace-nowrap"
                        >
                            <span className="relative z-10 inline-flex items-center gap-2">
                                免費諮詢用戶忠誠方案
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

import { Link } from 'react-router-dom';

export default function BicomeCloudFX() {
    const coreFeatures = [
        { icon: "🎮", name: "遊戲化", color: "from-purple-500 to-violet-600" },
        { icon: "🎯", name: "任務", color: "from-pink-500 to-rose-600" },
        { icon: "🎁", name: "獎勵", color: "from-amber-500 to-orange-600" },
        { icon: "🏅", name: "勳章", color: "from-emerald-500 to-teal-600" },
        { icon: "🏆", name: "排行榜", color: "from-blue-500 to-cyan-600" },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a1a2e] text-white overflow-hidden relative">
            {/* 背景光暈 */}
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* 標題區 - 居中 */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-[1.1] mb-6 tracking-tighter">
                        讓用戶<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">玩上癮</span>的忠誠計劃
                    </h2>
                    <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-medium">
                        透過遊戲化機制，將枯燥的會員制度變成令人著迷的升級體驗，<br className="hidden md:block" />
                        深度綁定品牌與用戶的情感聯繫。
                    </p>
                </div>

                {/* 五大核心功能 + 展示卡片 */}
                <div className="grid lg:grid-cols-5 gap-4 mb-10">
                    {coreFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-xl mb-2 shadow-lg`}>
                                {feature.icon}
                            </div>
                            <div className="text-sm font-bold">{feature.name}</div>
                        </div>
                    ))}
                </div>

                {/* 三欄展示 */}
                <div className="grid lg:grid-cols-3 gap-5">
                    {/* 等級進度 */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl shadow-lg">💎</div>
                            <div className="flex-1">
                                <div className="text-xs text-white/50">目前等級</div>
                                <div className="text-lg font-bold">VIP 會員</div>
                            </div>
                            <div className="text-right">
                                <div className="text-lg font-bold text-purple-400">3,580</div>
                                <div className="text-xs text-white/50">累積點數</div>
                            </div>
                        </div>
                        <div className="h-2.5 bg-white/10 rounded-full overflow-hidden mb-3">
                            <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 rounded-full" />
                        </div>
                        <div className="flex justify-between items-center">
                            {['🌱', '⭐', '💎', '👑', '🔥'].map((icon, i) => (
                                <div key={i} className={`w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm ${i > 2 ? 'opacity-40' : ''}`}>
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 今日任務 */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-bold flex items-center gap-2">
                                <span className="text-pink-400">🎯</span> 今日任務
                            </div>
                            <span className="text-xs text-white/40">2/3 完成</span>
                        </div>
                        <div className="space-y-2.5">
                            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                <span className="text-emerald-400">✓</span>
                                <span className="text-sm flex-1">每日簽到</span>
                                <span className="text-xs text-emerald-400">+50 點</span>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                <span className="text-emerald-400">✓</span>
                                <span className="text-sm flex-1">分享貼文</span>
                                <span className="text-xs text-emerald-400">+100 點</span>
                            </div>
                            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/10">
                                <span className="text-white/30">○</span>
                                <span className="text-sm flex-1 text-white/60">完成首購</span>
                                <span className="text-xs text-amber-400">+500 點</span>
                            </div>
                        </div>
                    </div>

                    {/* 排行榜 */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                        <div className="text-sm font-bold mb-4 flex items-center gap-2">
                            <span className="text-blue-400">🏆</span> 本月排行榜
                        </div>
                        <div className="space-y-2">
                            {[
                                { n: "王小明", p: "12,580", r: "👑", bg: "bg-amber-500/10 border-amber-500/20" },
                                { n: "林美玲", p: "11,230", r: "🥈", bg: "" },
                                { n: "陳大偉", p: "10,890", r: "🥉", bg: "" },
                            ].map((u, i) => (
                                <div key={i} className={`flex items-center gap-3 p-2.5 rounded-lg ${u.bg || 'bg-white/[0.02]'} ${u.bg ? 'border ' + u.bg.split(' ')[1] : ''}`}>
                                    <span className="text-lg">{u.r}</span>
                                    <span className="text-sm flex-1 font-medium">{u.n}</span>
                                    <span className="text-xs text-white/50">{u.p} 點</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-white/10">
                            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20">
                                <span className="text-lg">😊</span>
                                <span className="text-sm flex-1 font-medium">我的排名</span>
                                <span className="text-sm font-bold text-purple-400">#28</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA + 數據 */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
                    <div className="text-center">
                        <div className="flex gap-8 mb-2">
                            <div className="text-center">
                                <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">+156%</div>
                                <div className="text-xs text-white/40">用戶活躍度</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent">+89%</div>
                                <div className="text-xs text-white/40">回購率提升</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-extrabold bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">3.2x</div>
                                <div className="text-xs text-white/40">LTV 增長</div>
                            </div>
                        </div>

                    </div>
                    <Link
                        to="/contact"
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(79,70,229,0.4)] transition-all text-center"
                    >
                        免費諮詢用戶忠誠方案
                    </Link>
                </div>
            </div>
        </section>
    );
}

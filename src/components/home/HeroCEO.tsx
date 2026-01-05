export default function HeroCEO() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-[#0a1f1a] via-[#020617] to-[#0a0f1a]">
            {/* 背景光暈效果 */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* 主光暈 - Bicome 綠 */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/20 rounded-full blur-[150px] animate-glow-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/15 rounded-full blur-[180px] animate-glow-pulse" style={{ animationDelay: '2s' }} />

                {/* 網格背景 */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* 噪點紋理 */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-soft-light" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* 左側內容 */}
                    <div className="space-y-10">
                        {/* 標籤 */}
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-sm">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                                <span className="text-sm font-medium text-emerald-400 tracking-wide">台灣領先的品牌用戶營運專家</span>
                            </div>
                            <div className="hidden md:flex items-center gap-2 text-xs text-white/40">
                                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded">數據驅動</span>
                                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded">AI 賦能</span>
                                <span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded">遊戲化營運</span>
                            </div>
                        </div>

                        {/* 主標題 */}
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-[1.05] tracking-tighter">
                                <span className="block text-white/40 text-xl md:text-2xl lg:text-3xl font-bold mb-4 tracking-normal">數據驅動的私域營運方法論</span>
                                <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                                    品牌KOC
                                </span>
                                <br />
                                <span className="text-white">CLTV的增長引擎</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-xl">
                                圍繞 <span className="text-emerald-400 font-semibold">#社群私域營運</span> 與
                                <span className="text-emerald-400 font-semibold"> #社群私域數據</span>，
                                協助品牌執行用戶關係構建，並孵化品牌 <span className="text-white font-bold">KOC</span>。
                            </p>
                        </div>

                        {/* CTA 按鈕 */}
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="group relative px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl overflow-hidden shadow-2xl shadow-emerald-900/20 transition-all duration-300 hover:shadow-emerald-500/40 hover:-translate-y-1"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    免費諮詢
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            </Link>
                        </div>

                        {/* 數據統計 */}
                        <div className="pt-8 border-t border-white/10">
                            <div className="grid grid-cols-3 gap-8">
                                <div className="space-y-1">
                                    <div className="text-3xl md:text-4xl font-display font-extrabold text-white">
                                        300<span className="text-emerald-400">+</span>
                                    </div>
                                    <div className="text-sm text-white/40">品牌客戶</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-3xl md:text-4xl font-display font-extrabold text-white">
                                        50<span className="text-amber-400">M</span>
                                    </div>
                                    <div className="text-sm text-white/40">用戶觸及</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-3xl md:text-4xl font-display font-extrabold text-white">
                                        90<span className="text-emerald-400">%</span>
                                    </div>
                                    <div className="text-sm text-white/40">客戶滿意度</div>
                                </div>
                            </div>
                            <div className="mt-4 text-[10px] text-white/25">*根據 Bicome 2025 年度數據統計</div>
                        </div>
                    </div>

                    {/* 右側視覺 */}
                    <div className="relative hidden lg:block">
                        <div className="relative">
                            {/* 主圖容器 - 玻璃擬態 */}
                            <div className="relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-sm p-2 shadow-[0_0_60px_rgba(16,185,129,0.15)]">
                                <img
                                    src="/images/hero_professional.png"
                                    alt="Bicome 專業團隊協作"
                                    className="w-full h-auto object-cover rounded-xl"
                                />
                                {/* 邊緣光暈 */}
                                <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
                            </div>

                            {/* 浮動卡片 - 成長數據 */}
                            <div className="absolute -left-6 bottom-16 bg-[#0a1f1a]/90 backdrop-blur-xl rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.2)] p-4 border border-emerald-500/20">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-display font-extrabold text-emerald-400">+340%</div>
                                        <div className="text-xs text-white/50">平均用戶成長率</div>
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
                                        <div className="text-lg font-bold text-white">LINE 社群</div>
                                        <div className="text-xs text-white/50">私域營運專家</div>
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

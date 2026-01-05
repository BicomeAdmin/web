export default function HeroWebFX() {
    return (
        <section className="relative pt-40 pb-32 bg-white overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#1e73be 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-7xl font-black text-webfx-navy leading-tight tracking-tight">
                                您值得信賴的<br />
                                <span className="text-webfx-blue underline decoration-webfx-teal/30 underline-offset-8">績效成長夥伴</span>
                            </h1>
                            <p className="text-xl text-webfx-navy/60 max-w-xl font-medium leading-relaxed">
                                使用 Bicome 的數據平台，協助品牌透過私域營運、SEO 與遊戲化機制，實現平均提高 <span className="text-webfx-blue font-bold">20%+</span> 的淨利潤成長。
                            </p>
                        </div>

                        {/* Conversion Tool Box */}
                        <div className="bg-webfx-gray p-8 rounded-xl border border-black/5 shadow-inner">
                            <div className="text-sm font-black text-webfx-navy mb-4 uppercase tracking-widest">輸入您的品牌官網，立刻獲取競爭力分析報表：</div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="text"
                                    placeholder="https://example.com"
                                    className="flex-1 px-6 py-4 rounded-md border border-black/10 focus:ring-2 focus:ring-webfx-blue outline-none font-medium"
                                />
                                <button className="bg-webfx-blue text-white px-8 py-4 rounded-md font-black hover:scale-105 transition-all shadow-lg">
                                    立刻分析
                                </button>
                            </div>
                            <div className="mt-4 flex items-center space-x-4 opacity-40 text-[10px] font-bold uppercase tracking-tighter">
                                <span>✔ 100% 免費</span>
                                <span>✔ 數據實時同步</span>
                                <span>✔ 私密性保障</span>
                            </div>
                        </div>

                        {/* Quick Metrics Bar */}
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-black/5">
                            <div>
                                <div className="text-3xl font-black text-webfx-navy">102K+</div>
                                <div className="text-[10px] font-bold text-webfx-navy/40 uppercase tracking-widest">成功案例</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-webfx-blue">96%</div>
                                <div className="text-[10px] font-bold text-webfx-navy/40 uppercase tracking-widest">客戶續約率</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-webfx-teal">$10B+</div>
                                <div className="text-[10px] font-bold text-webfx-navy/40 uppercase tracking-widest">累計產值</div>
                            </div>
                        </div>
                    </div>

                    {/* Image / Visualization Area */}
                    <div className="relative order-first lg:order-last">
                        <div className="absolute -inset-4 bg-webfx-blue/5 rounded-full blur-3xl opacity-50"></div>
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                            alt="Data Marketing Analytics"
                            className="relative z-10 rounded-2xl shadow-2xl border border-black/5 rotate-1 hover:rotate-0 transition-transform duration-700"
                        />
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl border border-black/5 z-20 animate-bounce">
                            <div className="text-xs font-black text-webfx-teal mb-1 tracking-widest uppercase">Real-time Growth</div>
                            <div className="text-3xl font-black text-webfx-navy">+18.5%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

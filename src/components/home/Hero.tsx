

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
            {/* Background Decorative Elements with Generated Imagery */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000" // Fallback premium image
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
                <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                                <span className="text-xs font-black text-white/60 tracking-[0.2em] uppercase">Taiwan's Leading Social CRM</span>
                            </div>

                            <h1 className="text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                                數據驅動的品牌<br />
                                <span className="text-accent underline decoration-highlight decoration-4 underline-offset-8">Social CRM</span>
                                <span className="text-white/40 block mt-4 text-4xl lg:text-5xl font-medium tracking-normal">用戶營運專家</span>
                            </h1>

                            <p className="text-xl text-white/50 max-w-xl font-medium leading-relaxed">
                                圍繞 <span className="text-white font-bold">#社群私域流量</span> 與 <span className="text-white font-bold">#客戶關係管理</span>，<br />
                                協助品牌執行用戶關係構建，並孵化品牌 KOC。
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="bg-highlight text-white px-10 py-5 rounded-full text-lg font-black hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(225,0,126,0.4)]">
                                立即預約免費策略諮詢
                            </button>
                            <button className="bg-white/5 border border-white/20 text-white px-10 py-5 rounded-full text-lg font-black hover:bg-white hover:text-black transition-all duration-300">
                                了解完整方法論
                            </button>
                        </div>
                    </div>

                    {/* KPI Dashboard & Growth Curve - Gamification Inspired */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-accent/5 rounded-[50px] blur-3xl opacity-50"></div>
                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] hover:border-accent/50 transition-colors group">
                                <div className="text-5xl font-black text-white mb-2 group-hover:text-accent transition-colors">+75%</div>
                                <div className="text-white/40 font-bold text-sm tracking-widest uppercase">用戶留存率提升</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] hover:border-highlight/50 transition-colors group">
                                <div className="text-5xl font-black text-white mb-2 group-hover:text-highlight transition-colors">3.2x</div>
                                <div className="text-white/40 font-bold text-sm tracking-widest uppercase">生命週期價值 (LTV)</div>
                            </div>

                            {/* SVG Growth Curve Visualization */}
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] col-span-2 relative overflow-hidden group">
                                <div className="flex justify-between items-end mb-8 relative z-10">
                                    <div>
                                        <div className="text-5xl font-black text-white mb-2">90%</div>
                                        <div className="text-white/40 font-bold text-sm tracking-widest uppercase">客戶滿意與品牌共鳴</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-accent text-xs font-black tracking-widest uppercase mb-1">Growth Path</div>
                                        <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                                            <div className="w-3/4 h-full bg-accent animate-[shimmer_2s_infinite]"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Geometric Growth Curve Illustration */}
                                <div className="absolute bottom-0 left-0 right-0 h-24 opacity-30">
                                    <svg viewBox="0 0 400 100" className="w-full h-full preserve-3d">
                                        <path
                                            d="M0,80 Q50,80 100,60 T200,40 T300,10 T400,0"
                                            fill="none"
                                            stroke="url(#gradient-hero)"
                                            strokeWidth="4"
                                            className="animate-[dash_3s_ease-in-out_infinite]"
                                            strokeDasharray="400"
                                            strokeDashoffset="400"
                                        />
                                        <defs>
                                            <linearGradient id="gradient-hero" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#22C55E" />
                                                <stop offset="100%" stopColor="#E1007E" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

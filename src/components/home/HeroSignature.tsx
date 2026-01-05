export default function HeroSignature() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-signature-indigo font-sans">
            {/* Advanced Intelligent Aurora Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-signature-aurora/10 rounded-full blur-[200px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-signature-insight/5 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '3s' }}></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="space-y-10">
                            <div className="inline-flex items-center space-x-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-2xl">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-signature-insight animate-ping"></span>
                                <span className="text-[9px] font-black text-white/40 tracking-[0.4em] uppercase">Private Growth Authority</span>
                            </div>

                            <h1 className="text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tighter">
                                <span className="font-serif italic font-normal text-signature-insight block mb-4">Empowering</span>
                                品牌的<br />
                                <span className="bg-gradient-to-r from-signature-aurora via-white to-signature-insight bg-clip-text text-transparent">無限主權</span>
                            </h1>

                            <p className="text-xl text-white/30 max-w-xl font-medium leading-relaxed border-l-[1px] border-signature-insight/20 pl-10">
                                打破傳統流量紅利的束縛。Bicome 透過 <span className="text-white font-bold font-serif italic text-2xl">#數據星雲</span> 的深度洞察，為品牌建構一個自我進化的私域資產。
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-10 items-center">
                            <button className="group relative bg-white text-signature-indigo px-12 py-6 rounded-none text-sm font-black tracking-widest uppercase hover:bg-signature-aurora hover:text-white transition-all duration-700 shadow-2xl">
                                <span className="relative z-10">與首席顧問對話</span>
                                <div className="absolute inset-0 bg-signature-insight scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
                            </button>
                            <div className="flex flex-col">
                                <span className="text-4xl font-serif italic text-white/80">156%</span>
                                <span className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">Avg. Revenue Growth</span>
                            </div>
                        </div>
                    </div>

                    {/* 3D Point Cloud Nebula Visualization */}
                    <div className="relative">
                        <div className="relative w-full aspect-square max-w-[600px] mx-auto group">
                            {/* Outer Rings */}
                            <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_30s_linear_infinite]"></div>
                            <div className="absolute inset-20 rounded-full border border-signature-aurora/10 animate-[spin_20s_linear_reverse_infinite]"></div>

                            {/* Inner Data Nebula */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-3/4 h-3/4 bg-signature-indigo/40 rounded-full backdrop-blur-3xl border border-white/10 flex items-center justify-center p-12 overflow-hidden shadow-[0_0_100px_rgba(16,185,129,0.05)]">
                                    <div className="text-center z-10 space-y-4">
                                        <div className="font-serif italic text-signature-insight text-xl">Private Data Mesh</div>
                                        <div className="text-6xl font-black text-white tracking-tighter">智匯</div>
                                        <div className="h-[1px] w-20 bg-white/20 mx-auto"></div>
                                        <div className="text-[8px] font-black text-white/40 tracking-[0.5em] uppercase">Intelligent Growth Core</div>
                                    </div>
                                    {/* Animated Particles (SVG Simulation) */}
                                    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-30 animate-pulse">
                                        <circle cx="50" cy="50" r="1" fill="#10b981" />
                                        <circle cx="150" cy="120" r="1.5" fill="#f59e0b" />
                                        <circle cx="80" cy="160" r="0.8" fill="#fff" />
                                        <circle cx="120" cy="40" r="1.2" fill="#10b981" />
                                    </svg>
                                </div>
                            </div>

                            {/* Floating Metadata Cards - Styled for Authority */}
                            <div className="absolute top-[10%] right-[-5%] p-8 bg-signature-indigo/80 backdrop-blur-2xl border border-white/10 rounded-none shadow-2xl animate-bounce" style={{ animationDuration: '6s' }}>
                                <div className="text-[9px] font-black text-signature-insight mb-2 tracking-[0.3em] uppercase">Algorithm Power</div>
                                <div className="text-3xl font-serif italic text-white">99.9%</div>
                                <div className="mt-2 h-1 w-12 bg-signature-aurora"></div>
                            </div>
                            <div className="absolute bottom-[20%] left-[-5%] p-8 bg-signature-indigo/80 backdrop-blur-2xl border border-white/10 rounded-none shadow-2xl animate-bounce" style={{ animationDuration: '8s', animationDelay: '1s' }}>
                                <div className="text-[9px] font-black text-signature-aurora mb-2 tracking-[0.3em] uppercase">User LTV Depth</div>
                                <div className="text-3xl font-black text-white">4.5x</div>
                                <div className="mt-2 h-1 w-12 bg-signature-insight"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

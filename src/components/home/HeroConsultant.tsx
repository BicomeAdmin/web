export default function HeroConsultant() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 bg-consultant-silk overflow-hidden font-serif">
            {/* Minimalist Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#121212 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
                <div className="max-w-4xl space-y-16">
                    <div className="space-y-10">
                        <div className="flex items-center space-x-4">
                            <div className="h-[1px] w-24 bg-consultant-gold"></div>
                            <span className="text-xs font-black tracking-[0.5em] text-consultant-gold uppercase font-sans">Sovereign Growth Partner</span>
                        </div>

                        <h1 className="text-7xl lg:text-9xl font-medium text-consultant-onyx leading-[0.9] tracking-tighter">
                            超越顧問，<br />
                            <span className="italic">成為您的商業主權</span>
                        </h1>

                        <p className="text-2xl text-consultant-onyx/60 max-w-2xl font-sans leading-relaxed">
                            我們不提供平庸的模板。Bicome 透過深度的數據洞察與策略博弈，協助品牌在多變的市場中建立絕對的私域主權。
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                        <button className="bg-consultant-onyx text-consultant-silk px-12 py-6 rounded-none text-sm font-black uppercase tracking-widest hover:bg-consultant-emerald transition-all duration-500 font-sans shadow-2xl">
                            啟動高階策略對話
                        </button>
                        <div className="h-12 w-[1px] bg-consultant-onyx/10 hidden sm:block"></div>
                        <div className="font-sans">
                            <div className="text-[10px] font-black text-consultant-onyx/30 uppercase tracking-widest mb-1">Current Portfolios</div>
                            <div className="text-sm font-bold text-consultant-onyx">管理超過三千億台幣的私域資產</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Visual Anchor */}
            <div className="absolute right-[-10%] bottom-[-10%] w-[60%] aspect-square bg-consultant-gold/5 rounded-full blur-[200px]"></div>
        </section>
    );
}

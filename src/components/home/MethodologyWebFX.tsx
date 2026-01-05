export default function MethodologyWebFX() {
    const methods = [
        {
            title: "精細化運營體系",
            subtitle: "Precision Operations",
            desc: "通過標籤系統與用戶分層，為每一位目標用戶提供個性化的觸達策略。",
            points: ["用戶畫像建模", "標籤自動化", "私域觸點優化"]
        },
        {
            title: "遊戲化激勵機制",
            subtitle: "Gamification Engine",
            desc: "將商業目標轉化為用戶遊戲任務，極大化提升活躍度與裂變效率。",
            points: ["積分任務系統", "等級排行榮譽", "獎勵商城兌換"]
        },
        {
            title: "口袋私域營銷學",
            subtitle: "Pocket Private Growth",
            desc: "Bicome 獨有的多通路（LINE/Web/App）無縫整合技術，確保增長無死角。",
            points: ["全通路通路打通", "社群孵化模型", "低成本流量池"]
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <div className="h-1 w-20 bg-webfx-blue mb-8"></div>
                        <h2 className="text-4xl font-black text-webfx-navy leading-tight mb-6">
                            我們如何定義<br />
                            <span className="text-webfx-blue font-serif italic">增長的方法論</span>
                        </h2>
                        <p className="text-webfx-navy/60 font-medium leading-relaxed mb-10">
                            不同於一般的廣告投放，我們深耕用戶關係。透過三位一體的策略模型，確保您的品牌在流量洪流中建立穩固的私域堡壘。
                        </p>
                        <div className="p-8 bg-webfx-gray rounded-xl border border-black/5">
                            <div className="text-sm font-black text-webfx-navy mb-2">Strategy Verification</div>
                            <div className="text-xs text-webfx-navy/40 mb-4 font-bold uppercase tracking-widest">已驗證的執行框架</div>
                            <div className="w-full bg-black/5 h-1 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-webfx-blue animate-[shimmer_2s_infinite]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3 space-y-6">
                        {methods.map((m, idx) => (
                            <div key={idx} className="group flex flex-col md:flex-row gap-8 p-10 bg-white border border-black/5 hover:border-webfx-blue/20 hover:shadow-2xl transition-all duration-300 rounded-2xl relative overflow-hidden">
                                <div className="md:w-1/3">
                                    <div className="text-5xl font-black text-black/5 mb-4 group-hover:text-webfx-blue/10 transition-colors">0{idx + 1}</div>
                                    <h3 className="text-2xl font-black text-webfx-navy mb-2">{m.title}</h3>
                                    <div className="text-[10px] font-bold text-webfx-blue uppercase tracking-[0.2em]">{m.subtitle}</div>
                                </div>
                                <div className="md:w-2/3 space-y-6">
                                    <p className="text-webfx-navy/60 font-medium leading-relaxed">
                                        {m.desc}
                                    </p>
                                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                                        {m.points.map(p => (
                                            <li key={p} className="flex items-center text-xs font-bold text-webfx-navy/80">
                                                <i className="ri-checkbox-circle-fill text-webfx-teal mr-2"></i>
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Subtle interaction background */}
                                <div className="absolute top-0 right-0 w-1 h-full bg-webfx-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

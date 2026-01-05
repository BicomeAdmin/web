export default function SuccessChronicle() {
    const chapters = [
        {
            id: "01",
            title: "數據主權的覺醒",
            client: "丹尼船長 Captain Danny",
            tag: "#核心成長夥伴",
            context: "在休閒食品的紅海中，丹尼船長面臨通路權力過大導致的利潤稀釋。我們介入後目標明確：奪回與用戶直接對話的主權。",
            strategy: "建立「船長點金」遊戲化任務系統，將單次購買轉化為具備「身分認同」的成長旅程。導入 LTV 追蹤矩陣，精準預測回購週期。",
            result: "回購率提昇 140%，私域貢獻度突破 40%。",
            metrics: ["+140% Retention", "40% Private Revenue"]
        },
        {
            id: "02",
            title: "全通路轉化史詩",
            client: "ERSS Fashion",
            tag: "#全通路數位賦能",
            context: "傳統零售的數據孤島，讓 ERSS 難以識別用戶的跨通路足跡。我們協助其實現了線上線下的權益無縫對接。",
            strategy: "導入 BicomeCloudFX 標籤引擎，自動辨識線下高產值用戶並在線上給予專屬獎勵。利用 AI 推薦引擎優化庫存週轉。",
            result: "ROAS 提升 2.2 倍，線下導店率成長 88%。",
            metrics: ["2.2x ROAS Boost", "88% O2O Uplift"]
        }
    ];

    return (
        <section className="py-32 bg-signature-indigo relative overflow-hidden font-sans">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-signature-aurora/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="max-w-3xl mb-32 space-y-8">
                    <div className="flex items-center space-x-4">
                        <div className="h-[2px] w-12 bg-signature-aurora"></div>
                        <span className="text-[10px] font-black tracking-[0.5em] text-signature-aurora uppercase">Success Chronicle</span>
                    </div>
                    <h2 className="text-6xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                        與智者同行，<br />
                        <span className="font-serif italic font-normal text-signature-insight">見證</span>非凡成長
                    </h2>
                </div>

                <div className="space-y-40">
                    {chapters.map((c, idx) => (
                        <div key={idx} className="grid lg:grid-cols-2 gap-24 items-center group">
                            <div className={`space-y-12 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="space-y-6">
                                    <div className="flex items-baseline space-x-6">
                                        <span className="text-8xl font-serif italic text-white/5">{c.id}</span>
                                        <div>
                                            <div className="text-xs font-black text-signature-insight tracking-widest uppercase mb-2">{c.tag}</div>
                                            <h3 className="text-4xl font-black text-white">{c.title}</h3>
                                        </div>
                                    </div>
                                    <div className="text-2xl font-serif italic text-white/60 pl-4 border-l-2 border-signature-aurora/20">
                                        {c.client}
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">The Context</div>
                                        <p className="text-lg text-white/40 leading-relaxed font-medium">{c.context}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Strategic Move</div>
                                        <p className="text-lg text-white/80 leading-relaxed font-bold">{c.strategy}</p>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-white/10 flex flex-wrap gap-12">
                                    {c.metrics.map((m, mIdx) => (
                                        <div key={mIdx}>
                                            <div className="text-4xl font-serif italic text-signature-aurora">{m.split(' ')[0]}</div>
                                            <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-2">{m.split(' ').slice(1).join(' ')}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Visual for Case Study */}
                            <div className={`relative aspect-[4/5] bg-white/5 border border-white/10 backdrop-blur-3xl overflow-hidden group-hover:border-signature-aurora/30 transition-all duration-700 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-signature-aurora/5 via-transparent to-signature-insight/5"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <div className="w-full space-y-8 animate-pulse">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="h-4 bg-white/5 rounded-full w-full"></div>
                                        ))}
                                        <div className="h-40 bg-white/5 rounded-none w-full border border-white/5 flex items-center justify-center">
                                            <span className="text-[10px] font-black text-white/10 tracking-[1em] uppercase">Growth Pattern Analysed</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-12 left-12 right-12 p-8 bg-signature-indigo/90 border border-white/10">
                                    <div className="text-sm font-bold text-white mb-2 italic">"{c.result}"</div>
                                    <div className="text-[9px] font-black text-signature-insight uppercase tracking-widest">Verified by Bicome AI</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function SuccessNarrative() {
    const stories = [
        {
            chapter: "I",
            client: "丹尼船長",
            mission: "重塑零食界的品牌忠誠",
            achievement: "+260% 營收規模擴張",
            narrative: "在競爭異常激烈的食品市場，我們協助丹尼船長避開價格戰，轉而通過遊戲化私域機制，建立起一個具備高度情感黏著的『船長俱樂部』。"
        },
        {
            chapter: "II",
            client: "ERSS 時尚",
            mission: "打通線上線下的數據疆域",
            achievement: "+88% 轉化率提昇",
            narrative: "零售的未來在於體驗的一致。我們為 ERSS 建構了跨通路的會員權益系統，讓每一筆交易不僅是結束，更是長期關係的開始。"
        }
    ];

    return (
        <section className="py-32 bg-consultant-onyx text-consultant-silk font-serif overflow-hidden relative">
            {/* Signature Texture */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000')] bg-fixed grayscale"></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="text-center mb-32">
                    <div className="text-xs font-black tracking-[0.5em] text-consultant-gold uppercase mb-8 font-sans">Success Chronicles</div>
                    <h2 className="text-6xl md:text-7xl font-medium leading-tight">
                        與智者同行，<br />
                        <span className="italic">見證非凡成長</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-32">
                    {stories.map((s, idx) => (
                        <div key={idx} className="space-y-12 group">
                            <div className="flex items-baseline space-x-6">
                                <span className="text-8xl font-serif italic text-consultant-gold/20 group-hover:text-consultant-gold/40 transition-colors">
                                    {s.chapter}
                                </span>
                                <div className="space-y-2">
                                    <div className="text-xs font-black text-consultant-gold tracking-widest font-sans uppercase uppercase">{s.client}</div>
                                    <h3 className="text-3xl font-medium">{s.mission}</h3>
                                </div>
                            </div>

                            <p className="text-xl text-consultant-silk/50 leading-relaxed font-sans">
                                {s.narrative}
                            </p>

                            <div className="pt-8 border-t border-white/10 flex justify-between items-end">
                                <div>
                                    <div className="text-4xl font-medium text-consultant-emerald">{s.achievement}</div>
                                    <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mt-2 font-sans">Verified Result</div>
                                </div>
                                <button className="text-xs font-black text-consultant-gold border-b border-consultant-gold pb-1 hover:text-white hover:border-white transition-all font-sans uppercase tracking-widest">
                                    View Detailed Study
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function StrategicRoadmap() {
    const steps = [
        { title: "深度診斷", subtitle: "Diagnostic Insight", desc: "挖掘現有數據中的隱藏成本與流失機會。" },
        { title: "主權重建", subtitle: "Sovereign Build", desc: "構建品牌專屬的私域社群與權益體系。" },
        { title: "數據賦能", subtitle: "Data Empowerment", desc: "導入 CloudFX 系統，實現標籤化自動運營。" },
        { title: "永續增長", subtitle: "Endless Growth", desc: "建立自我循環的 KOC 孵化與回購引擎。" }
    ];

    return (
        <section className="py-32 bg-consultant-silk border-y border-consultant-onyx/5">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-8">
                        <h2 className="text-5xl font-serif font-medium text-consultant-onyx leading-tight">
                            從診斷到增長，<br />
                            <span className="italic text-consultant-emerald">共創成功的必經之路</span>
                        </h2>
                        <p className="text-lg text-consultant-onyx/60 font-sans leading-relaxed">
                            我們拒絕速成方案。每一場成功的品牌博弈都源於對細節的極致追求與系統化的執行路徑。
                        </p>
                        <div className="pt-8">
                            <div className="text-6xl font-serif text-consultant-gold/20 italic">"Strategy is the art of sacrifice."</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {steps.map((s, idx) => (
                            <div key={idx} className="group flex items-center justify-between p-8 bg-white border border-consultant-onyx/5 hover:border-consultant-gold/30 transition-all duration-500">
                                <div className="flex items-center space-x-8">
                                    <div className="text-3xl font-serif italic text-consultant-gold/30 group-hover:text-consultant-gold transition-colors">0{idx + 1}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-consultant-onyx font-sans uppercase tracking-tight">{s.title}</h3>
                                        <div className="text-[10px] font-black text-consultant-onyx/30 uppercase tracking-widest">{s.subtitle}</div>
                                    </div>
                                </div>
                                <div className="w-1/2 text-sm text-consultant-onyx/40 font-sans group-hover:text-consultant-onyx/60 transition-colors">
                                    {s.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

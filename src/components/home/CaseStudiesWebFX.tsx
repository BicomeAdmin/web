const cases = [
    {
        name: "丹尼船長 Captain Danny",
        sector: "新零售 & 食品",
        strategy: "遊戲化私域體系建構",
        metric: "+260% 營收成長",
        desc: "透過 BicomeCloudFX 平台，重新定義用戶回購路徑，建立品牌專屬的高黏著度口袋社群。",
        tags: ["SEO", "Gamification", "LTV Growth"]
    },
    {
        name: "ERSS 時尚品牌",
        sector: "服飾零售",
        strategy: "全通路數據整合",
        metric: "+88% 客單價提升",
        desc: "打通實體店面與數位私域數據，實現精準標籤投放，極大化會員終身價值。",
        tags: ["Data Analytics", "Social CRM"]
    },
    {
        name: "35 線上賞屋",
        sector: "地產 & 生活",
        strategy: "高客單價潛客漏斗",
        metric: "3.2x 線索轉化率",
        desc: "構建信任驅動的私域交流閉環，為高總價產品提供精準的引流與輔助成交方案。",
        tags: ["Lead Gen", "Trust Building"]
    }
];

export default function CaseStudiesWebFX() {
    return (
        <section className="py-32 bg-webfx-gray/20">
            <div className="max-w-7xl mx-auto px-8 text-center mb-24">
                <h2 className="text-sm font-black text-webfx-blue tracking-[0.3em] uppercase mb-8">Performance Case Studies</h2>
                <p className="text-5xl font-black text-webfx-navy tracking-tight mb-8">數據驗證的<br />真實增長成果</p>
                <div className="h-1 w-24 bg-webfx-navy mx-auto"></div>
            </div>

            <div className="max-w-7xl mx-auto px-8">
                <div className="space-y-12">
                    {cases.map((c, idx) => (
                        <div key={idx} className="bg-white rounded-3xl border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row overflow-hidden group">
                            <div className="lg:w-2/3 p-12 space-y-8">
                                <div className="flex flex-wrap gap-6 items-center">
                                    <span className="px-4 py-1 bg-webfx-navy text-white text-[10px] font-black tracking-widest uppercase rounded">CASE {idx + 1}</span>
                                    <span className="text-sm font-bold text-webfx-navy/40 uppercase tracking-widest">{c.sector}</span>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-webfx-navy group-hover:text-webfx-blue transition-colors">{c.name}</h3>
                                    <p className="text-webfx-navy/60 font-medium leading-relaxed max-w-2xl">{c.desc}</p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {c.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-black text-webfx-navy/30 border border-black/10 px-3 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/3 bg-webfx-navy p-12 flex flex-col justify-center items-center text-center space-y-4 group-hover:bg-webfx-blue transition-colors duration-500">
                                <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">實現指標</div>
                                <div className="text-4xl xl:text-5xl font-black text-webfx-teal">{c.metric}</div>
                                <div className="text-xs font-bold text-white/60 leading-relaxed">{c.strategy}</div>
                                <button className="mt-8 text-[10px] font-black text-white hover:text-webfx-teal flex items-center transition-colors">
                                    查看完整數據報告 <i className="ri-arrow-right-line ml-2"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

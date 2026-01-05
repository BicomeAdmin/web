const industries = [
    { name: "新零售 & 電商", stat: "+156% 復購率", url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" },
    { name: "房產 & 高單價零售", stat: "3.2x LTV 成長", url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600" },
    { name: "教育 & 課程平台", stat: "95% 用戶滿意", url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" },
    { name: "品牌文化 & 生活", stat: "3000+ 活躍 KOC", url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" },
];

export default function IndustrySolutions() {
    return (
        <section className="py-32 bg-webfx-gray/30">
            <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/3 space-y-8">
                    <h2 className="text-4xl font-black text-webfx-navy leading-tight">
                        跨產業的<br />
                        <span className="text-webfx-blue">專業增長實力</span>
                    </h2>
                    <p className="text-webfx-navy/60 font-medium leading-relaxed">
                        我們針對不同產業的特徵，量身設計獨有的私域運營模型，確保每一位客戶都能獲得業界領先的增長成果。
                    </p>
                    <button className="text-sm font-black text-webfx-blue group flex items-center">
                        查看所有產業解決方案 <span className="w-8 h-[2px] bg-webfx-blue ml-4 group-hover:w-12 transition-all"></span>
                    </button>
                </div>

                <div className="lg:w-2/3 grid grid-cols-2 gap-4">
                    {industries.map((ind, idx) => (
                        <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-black/5">
                            <img src={ind.url} alt={ind.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-webfx-navy/90 via-webfx-navy/20 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="text-white font-black text-xl mb-1">{ind.name}</div>
                                <div className="text-webfx-teal text-[10px] font-black uppercase tracking-widest">{ind.stat}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

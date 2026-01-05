export default function ExpertInsight() {
    return (
        <section className="py-32 bg-white relative overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex items-center space-x-4">
                            <div className="h-[1px] w-12 bg-signature-indigo"></div>
                            <span className="text-xs font-black tracking-[0.5em] text-signature-indigo uppercase">Expert Insight</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-signature-indigo leading-tight tracking-tighter">
                            超越技術，<br />
                            <span className="font-serif italic font-normal text-signature-insight">洞察</span>商業之本
                        </h2>
                        <p className="text-lg text-signature-indigo/50 font-medium leading-relaxed">
                            我們不只為您提供工具，更為您提供贏得市場的「勝率」。專業顧問團隊深度介入，協助您從數據碎片中重構品牌的長期護城河。
                        </p>

                        <div className="pt-10 grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-4xl font-serif italic text-signature-indigo mb-2">360°</div>
                                <div className="text-[10px] font-black text-signature-indigo/30 uppercase tracking-widest">全通路視角</div>
                            </div>
                            <div>
                                <div className="text-4xl font-serif italic text-signature-insight mb-2">90D</div>
                                <div className="text-[10px] font-black text-signature-indigo/30 uppercase tracking-widest">最短獲益週期</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1 border-r border-black/5 h-full hidden lg:block"></div>

                    <div className="lg:col-span-6 space-y-12">
                        {[
                            { title: "策略性數據博弈", desc: "不再被動採樣。我們協助品牌主動設計數據採集點，確保每一筆數據都能為未來的轉化決策提供支撐。", color: "border-signature-aurora" },
                            { title: "心理學激勵模組", desc: "將轉化路徑隱藏在有趣的遊戲任務背後。透過邊際報酬效應，讓用戶與品牌建立超越交易的深層連結。", color: "border-signature-insight" },
                            { title: "長效客戶成功陪伴", desc: "我們不只是外包商，更是您的 CTO/CMO 合夥人。從策略制定到落地優化，全程守護您的增長指標。", color: "border-signature-indigo" }
                        ].map((m, idx) => (
                            <div key={idx} className={`p-10 bg-signature-indigo/5 border-l-4 ${m.color} relative group hover:bg-white hover:shadow-2xl transition-all duration-500`}>
                                <div className="text-xs font-black text-signature-indigo/20 mb-4 font-serif italic">Expertise 0{idx + 1}</div>
                                <h3 className="text-2xl font-black text-signature-indigo mb-4">{m.title}</h3>
                                <p className="text-sm text-signature-indigo/60 font-medium leading-relaxed">
                                    {m.desc}
                                </p>
                                <div className="absolute top-1/2 right-8 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <i className="ri-arrow-right-line text-2xl text-signature-insight"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

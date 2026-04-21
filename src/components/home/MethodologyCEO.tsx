import { useInView } from '../../hooks/useInView';

export default function MethodologyCEO() {
    const grid = useInView<HTMLDivElement>();
    const cta = useInView<HTMLDivElement>();

    const methodologies = [
        {
            number: "01",
            title: "精細化營運",
            subtitle: "Refined Operations",
            description: "精細化營運的本質就是以用戶為中心，與用戶達到深度情感連結的同時也要隨時洞察用戶需求，並將這些需求整合進品牌營運用戶的活動、內容、與相關的執行動作，目標是培育用戶關係並讓用戶擁有最好的體驗，最終完成有效提升用戶的生命周期價值（LTV），歷久而彌新。",
            features: ["用戶分層分析", "深度情感連結", "LTV 提升"],
            gradient: "from-emerald-500 to-teal-500",
            glowColor: "16, 185, 129"
        },
        {
            number: "02",
            title: "遊戲化營運",
            subtitle: "Gamified Operations",
            description: "遊戲化營運也是以用戶為中心，讓用戶本身感到愉悅，重點在享受每一個過程。概念是將大目標拆成好幾個小目標，結合即時的反饋機制，讓用戶不自覺地完成品牌期待達成的階段性目標，整個過程潛移默化卻可以讓用戶樂此不疲，目標是讓用戶享受其中進而提升社群的參與感，最終完成品牌共創。",
            features: ["目標拆解設計", "即時反饋機制", "品牌共創"],
            gradient: "from-amber-500 to-orange-500",
            glowColor: "245, 158, 11"
        },
        {
            number: "03",
            title: "多渠道營運",
            subtitle: "口袋私域學",
            description: "付費專屬的社群就像一個人身上有不同口袋，每個口袋的目的不同。我們公司把它取作「口袋私域學」，本質上就是協助品牌搭建多元且目標明確的私域社群矩陣，並將其社群內的用戶進行分析，針對細分用戶需求，訂定與執行群內營運活動。Bicome 除了協助 LINE 私域社群，也有服務 Discord、IG 廣播專區等多渠道的載體營運。",
            features: ["LINE 私域社群", "Discord 社群", "IG 廣播專區"],
            gradient: "from-blue-500 to-indigo-500",
            glowColor: "59, 130, 246"
        }
    ];

    return (
        <section id="methodology" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* 標題區 */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6 tracking-tighter">
                        Bicome 私域用戶營運的方法論
                    </h2>
                </div>

                {/* 方法論卡片 */}
                <div ref={grid.ref} data-reveal={grid.visible ? 'in' : 'out'} className="reveal-parent grid md:grid-cols-3 gap-8">
                    {methodologies.map((method) => (
                        <div
                            key={method.number}
                            className={`group relative bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-500 hover:-translate-y-1 hover:border-transparent ${
                                method.glowColor === '16, 185, 129'
                                    ? 'hover:shadow-[0_25px_80px_rgba(16,185,129,0.25)]'
                                    : method.glowColor === '245, 158, 11'
                                        ? 'hover:shadow-[0_25px_80px_rgba(245,158,11,0.25)]'
                                        : 'hover:shadow-[0_25px_80px_rgba(59,130,246,0.25)]'
                            }`}
                        >
                            {/* 編號 */}
                            <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <span className="text-xl font-display font-extrabold text-white">{method.number}</span>
                            </div>

                            {/* 內容 */}
                            <div className="pt-4">
                                <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-2">
                                    {method.title}
                                </h3>
                                <p className="text-sm text-gray-400 mb-4">{method.subtitle}</p>

                                <p className="text-gray-600 leading-relaxed mb-6 text-sm line-clamp-4">
                                    {method.description}
                                </p>

                                {/* 功能標籤 */}
                                <div className="flex flex-wrap gap-2">
                                    {method.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full border border-gray-100 group-hover:border-gray-200 transition-colors"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 流程示意 */}
                <div ref={cta.ref} className={`mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white transition-all duration-700 ${cta.visible ? 'reveal-in' : 'reveal-init'}`}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-display font-bold text-lg">完整導入流程</div>
                                <div className="text-sm text-white/60">平均 4-8 週完成系統建置</div>
                            </div>
                        </div>

                        <div className="hidden md:block w-24 h-px bg-gradient-to-r from-white/20 via-emerald-500/50 to-white/20" />

                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center">
                                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-display font-bold text-lg">持續優化服務</div>
                                <div className="text-sm text-white/60">月度數據報告與策略調整</div>
                            </div>
                        </div>

                        <div className="hidden md:block w-24 h-px bg-gradient-to-r from-white/20 via-blue-500/50 to-white/20" />

                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-display font-bold text-lg">成效可量化</div>
                                <div className="text-sm text-white/60">透明的 KPI 追蹤機制</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

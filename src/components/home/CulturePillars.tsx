import { useInView } from '../../hooks/useInView';

export default function CulturePillars() {
    const grid = useInView<HTMLDivElement>();

    const values = [
        {
            icon: "ri-team-line",
            title: "團隊合作",
            subtitle: "Teamwork",
            description: "我們不只是「分工完成任務」，而是「共同創造成果」。每個專案都是一場多角色合作的旅程，營運策略、內容設計、數據分析都需並肩前進。協作，是我們最大的競爭力。",
            gradient: "from-emerald-500 to-teal-500"
        },
        {
            icon: "ri-book-open-line",
            title: "持續學習",
            subtitle: "Continuous Learning",
            description: "變動快速的私域世界，我們以「好奇心」為核心動能，定期共學、分享標竿案例，也會將每次嘗試中學到的經驗沉澱為可複用的知識模組。我們不追求完美解法，而追求不斷前進的學習曲線。",
            gradient: "from-blue-500 to-indigo-500"
        },
        {
            icon: "ri-refresh-line",
            title: "復盤優化",
            subtitle: "Review & Optimize",
            description: "我們重視每一次營運後的回顧與迭代。從成效分析、互動細節到話術微調，復盤不是檢討，而是讓每次失誤都變成下一次成功的養分。因為我們知道，真正的營運力，來自持續優化的能力。",
            gradient: "from-amber-500 to-orange-500"
        }
    ];

    return (
        <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* 左側 - 夥伴介紹 */}
                    <div>


                        {/* 夥伴關係 */}
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-8 tracking-tighter flex items-center gap-4">
                                <span className="inline-flex w-12 h-12 md:w-14 md:h-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20">
                                    <i className="ri-heart-line text-2xl md:text-3xl" aria-hidden="true"></i>
                                </span>
                                我們是夥伴關係
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Bicome 的成長，來自一群在不同領域擁有專業背景、卻對「用戶價值經營」有共同信念的夥伴。我們來自品牌、設計、教育、營運等不同路徑，但在一次次的共創中，看見了團隊彼此的互補與信任，也共構出我們獨特的營運語言與節奏。
                            </p>
                            <div className="relative p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border-l-4 border-emerald-500">
                                <p className="text-lg text-gray-800 font-medium leading-relaxed">
                                    我們相信，好的夥伴關係不是分工合作，而是共同思考、一同前進的學習關係。
                                </p>
                            </div>
                        </div>

                        {/* 企業文化 */}
                        <div>
                            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <i className="ri-focus-3-line text-2xl text-emerald-600" aria-hidden="true"></i>
                                我們的企業文化圍繞著三大核心
                            </h3>
                            <p className="text-gray-600 mb-6">
                                在 Bicome，每一次營運實踐，都是一場跨團隊共學的練功。
                            </p>
                        </div>

                        {/* 公司數據 */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="text-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl font-display font-extrabold text-emerald-600 mb-1">5+</div>
                                <div className="text-sm text-gray-500">年深耕經驗</div>
                            </div>
                            <div className="text-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl font-display font-extrabold text-emerald-600 mb-1">20+</div>
                                <div className="text-sm text-gray-500">專業團隊成員</div>
                            </div>
                            <div className="text-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl font-display font-extrabold text-emerald-600 mb-1">300+</div>
                                <div className="text-sm text-gray-500">服務品牌數</div>
                            </div>
                        </div>
                    </div>

                    {/* 右側 - 核心價值卡片 */}
                    <div ref={grid.ref} data-reveal={grid.visible ? 'in' : 'out'} className="reveal-parent space-y-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-500 hover:border-transparent hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]"
                            >
                                {/* 漸層條 */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${value.gradient} rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <div className="flex items-start gap-5">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                                        <i className={`${value.icon} text-2xl text-white`} aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-gray-900 mb-1">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 mb-3">{value.subtitle}</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

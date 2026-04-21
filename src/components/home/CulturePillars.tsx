import { useInView } from '../../hooks/useInView';

export default function CulturePillars() {
    const values_ = useInView<HTMLDivElement>();
    const stats_ = useInView<HTMLDivElement>();

    const values = [
        {
            icon: 'ri-team-line',
            title: '團隊合作',
            subtitle: 'Teamwork',
            description: '分工不是終點，共同創造才是。策略、內容、數據並肩前進。',
            gradient: 'from-emerald-500 to-teal-500',
        },
        {
            icon: 'ri-book-open-line',
            title: '持續學習',
            subtitle: 'Continuous Learning',
            description: '好奇心是動能。每次嘗試都沉澱為可重用的知識模組。',
            gradient: 'from-emerald-600 to-emerald-800',
        },
        {
            icon: 'ri-refresh-line',
            title: '復盤優化',
            subtitle: 'Review & Optimize',
            description: '復盤不是檢討，是把失誤變成下一次成功的養分。',
            gradient: 'from-amber-500 to-amber-600',
        },
    ];

    const stats = [
        { value: '5+', label: '年深耕經驗' },
        { value: '20+', label: '專業團隊成員' },
        { value: '300+', label: '服務品牌數' },
    ];

    return (
        <section id="about" className="py-24 md:py-28 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* 標題區 — 集中居中，拉開節奏 */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full mb-5 border border-emerald-200/60 uppercase tracking-[0.3em]">
                        <i className="ri-heart-line" aria-hidden="true"></i>
                        Our Culture
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6 tracking-tighter">
                        我們是<span className="text-emerald-600">夥伴關係</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Bicome 的成長，來自一群對「用戶價值經營」有共同信念的夥伴。我們相信
                        <span className="text-gray-900 font-semibold">好的夥伴關係不是分工合作，而是共同思考、一同前進的學習關係</span>。
                    </p>
                </div>

                {/* 公司數據 - 水平排列 */}
                <div
                    ref={stats_.ref}
                    data-reveal={stats_.visible ? 'in' : 'out'}
                    className="reveal-parent grid grid-cols-3 gap-3 md:gap-5 max-w-2xl mx-auto mb-16"
                >
                    {stats.map((s) => (
                        <div key={s.label} className="text-center p-5 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
                            <div className="text-3xl md:text-4xl font-display font-extrabold text-emerald-600 mb-1 tabular-nums">{s.value}</div>
                            <div className="text-xs md:text-sm text-gray-500">{s.label}</div>
                        </div>
                    ))}
                </div>

                {/* 核心價值 - 三欄網格 */}
                <div
                    ref={values_.ref}
                    data-reveal={values_.visible ? 'in' : 'out'}
                    className="reveal-parent grid md:grid-cols-3 gap-5"
                >
                    {values.map((value) => (
                        <article
                            key={value.title}
                            className="group relative bg-white rounded-2xl p-6 md:p-7 border border-gray-100 transition-all duration-500 hover:border-transparent hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] hover:-translate-y-1"
                        >
                            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${value.gradient} rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                            <div className={`w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300`}>
                                <i className={`${value.icon} text-xl text-white`} aria-hidden="true"></i>
                            </div>
                            <h3 className="text-lg font-display font-bold text-gray-900 mb-1">{value.title}</h3>
                            <p className="text-xs text-gray-400 mb-3 tracking-wider uppercase">{value.subtitle}</p>
                            <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

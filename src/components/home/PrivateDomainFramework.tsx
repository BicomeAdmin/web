export default function PrivateDomainFramework() {
    // 三階段數據
    const stages = [
        {
            num: "01",
            title: "品牌助理",
            subtitle: "Brand Assistant",
            mode: "一對多 (One-to-Many)",
            icon: "ri-megaphone-line",
            color: "from-blue-500 to-cyan-500",
            desc: "單向輸出的資訊發布者",
            content: "提供新品資訊、發布專屬優惠折扣",
            trait: "用戶主要為獲取品牌獨家資訊而留在群內"
        },
        {
            num: "02",
            title: "話題專家",
            subtitle: "Topic Expert",
            mode: "多對多 (Many-to-Many)",
            icon: "ri-chat-smile-3-line",
            color: "from-purple-500 to-pink-500",
            desc: "引導討論與互動的專家",
            content: "場景相關知識、資訊分享、線下活動、話題策展",
            trait: "延伸至使用場景與相關興趣話題，創造雙向互動"
        },
        {
            num: "03",
            title: "品牌共創",
            subtitle: "Brand Co-creation",
            mode: "品牌對 KOC",
            icon: "ri-sparkling-2-line",
            color: "from-amber-500 to-orange-500",
            desc: "與關鍵用戶 (KOC) 共同成長",
            content: "產品與內容共創、稀缺體驗或獨家服務",
            trait: "孵化品牌大使，主動維護並協助推廣品牌"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* === 第一部分：品牌私域化三階段 === */}
                <div className="mb-28">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full mb-5 border border-emerald-200/60 uppercase tracking-[0.3em]">
                            <i className="ri-flow-chart" aria-hidden="true"></i>
                            Maturity Model
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6 tracking-tighter">
                            品牌私域化<span className="text-emerald-600">三階段</span>
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            品牌在私域經營中會經歷的成熟度變化，從單向發布到雙向互動，最終達成品牌共創
                        </p>
                    </div>

                    {/* 階段卡片 - 橫向時間軸 */}
                    <div className="relative">
                        {/* 連接線 */}
                        <div className="hidden lg:block absolute top-24 left-[16%] right-[16%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full" />

                        <div className="grid lg:grid-cols-3 gap-8">
                            {stages.map((stage, index) => (
                                <div key={index} className="relative">
                                    {/* 階段編號圓 */}
                                    <div className={`w-12 h-12 mx-auto mb-6 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10`}>
                                        {stage.num}
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                        <div className="text-center mb-4">
                                            <div className={`inline-flex w-12 h-12 mb-3 rounded-xl bg-gradient-to-br ${stage.color} items-center justify-center text-white shadow-md`}>
                                                <i className={`${stage.icon} text-2xl`} aria-hidden="true"></i>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">{stage.title}</h3>
                                            <p className="text-sm text-gray-400">{stage.subtitle}</p>
                                        </div>

                                        <div className={`inline-block w-full px-3 py-1.5 bg-gradient-to-r ${stage.color} bg-opacity-10 rounded-full text-center text-sm font-medium text-gray-700 mb-4`} style={{ background: `linear-gradient(to right, rgba(59,130,246,0.1), rgba(168,85,247,0.1))` }}>
                                            {stage.mode}
                                        </div>

                                        <div className="space-y-3 text-sm text-gray-600">
                                            <div className="flex gap-2">
                                                <span className="text-blue-500">定位</span>
                                                <span>{stage.desc}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-purple-500">內容</span>
                                                <span>{stage.content}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-amber-500">特徵</span>
                                                <span>{stage.trait}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* === 第二部分：私域運營四步驟 - WebFX 風格環形圖 === */}
                <div className="mb-28">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full mb-5 border border-emerald-200/60 uppercase tracking-[0.3em]">
                            <i className="ri-refresh-line" aria-hidden="true"></i>
                            Growth Flywheel
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6 tracking-tighter">
                            社群營運<span className="text-emerald-600">四步驟</span>
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            循環式的增長飛輪，不是線性流程，而是持續循環的迴圈
                        </p>
                    </div>

                    {/* 四象限 grid + 循環箭頭（取代原 SVG 飛輪） */}
                    <div className="relative max-w-5xl mx-auto">
                        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                            {[
                                {
                                    num: '01',
                                    zh: '拉新',
                                    en: 'Acquisition',
                                    icon: 'ri-user-add-line',
                                    desc: '把用戶從公域引入私域環境',
                                    tags: ['優質內容吸引', '品牌故事共鳴', '獨家福利觸發'],
                                    color: 'emerald',
                                },
                                {
                                    num: '02',
                                    zh: '留存',
                                    en: 'Retention',
                                    icon: 'ri-repeat-line',
                                    desc: '建立有價值的互動，讓用戶持續關注',
                                    tags: ['社群常態活動', '專屬權益設計', '個性化溝通'],
                                    color: 'teal',
                                },
                                {
                                    num: '04',
                                    zh: '裂變',
                                    en: 'Fission',
                                    icon: 'ri-share-forward-line',
                                    desc: '透過 KOC 推薦讓社群自然增長',
                                    tags: ['母子群搭建', '裂變活動設計', '品牌倡導計畫'],
                                    color: 'amber',
                                },
                                {
                                    num: '03',
                                    zh: '活躍',
                                    en: 'Activation',
                                    icon: 'ri-fire-line',
                                    desc: '激發用戶主動討論、成為自發傳播者',
                                    tags: ['多對多互動', '內容共創', 'KOC 激勵'],
                                    color: 'orange',
                                },
                            ].map((s, i) => {
                                const colorMap: Record<string, { bg: string; text: string; ring: string; tagBg: string; tagText: string }> = {
                                    emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', ring: 'ring-emerald-200', tagBg: 'bg-emerald-50', tagText: 'text-emerald-700' },
                                    teal: { bg: 'bg-teal-500', text: 'text-teal-600', ring: 'ring-teal-200', tagBg: 'bg-teal-50', tagText: 'text-teal-700' },
                                    amber: { bg: 'bg-amber-500', text: 'text-amber-600', ring: 'ring-amber-200', tagBg: 'bg-amber-50', tagText: 'text-amber-700' },
                                    orange: { bg: 'bg-orange-500', text: 'text-orange-600', ring: 'ring-orange-200', tagBg: 'bg-orange-50', tagText: 'text-orange-700' },
                                };
                                const c = colorMap[s.color];
                                return (
                                    <article
                                        key={s.zh}
                                        className={`group relative bg-white rounded-2xl p-6 md:p-7 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:ring-4 hover:${c.ring} hover:-translate-y-1 ${i === 2 ? 'sm:order-4' : i === 3 ? 'sm:order-3' : ''}`}
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center shadow-md`}>
                                                <i className={`${s.icon} text-xl text-white`} aria-hidden="true"></i>
                                            </div>
                                            <span className={`text-4xl font-display font-black ${c.text}/15`} aria-hidden="true">{s.num}</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-1">
                                            {s.zh}
                                            <span className="text-xs font-normal text-gray-400 ml-2 tracking-wide uppercase">{s.en}</span>
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {s.tags.map((tag) => (
                                                <span key={tag} className={`px-2 py-1 ${c.tagBg} ${c.tagText} text-xs rounded-md font-medium`}>{tag}</span>
                                            ))}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {/* 中心飛輪 badge（mobile 隱藏、桌機絕對定位在四卡中心） */}
                        <div className="hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <div className="relative">
                                <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-xl animate-glow-pulse" />
                                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border-4 border-emerald-400/30 flex flex-col items-center justify-center shadow-2xl">
                                    <i className="ri-refresh-line text-2xl text-emerald-600 animate-[spin_12s_linear_infinite]" aria-hidden="true"></i>
                                    <div className="text-[9px] font-bold text-emerald-700 mt-0.5 tracking-widest">飛輪</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                {/* CTA */}
                <div className="text-center mt-20">
                    <a
                        href="#team"
                        className="inline-block px-12 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:bg-black transition-all text-center"
                    >
                        了解更多私域策略
                    </a>
                </div>
            </div >
        </section >
    );
}

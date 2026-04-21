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

                        <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-6 tracking-tighter">
                            品牌私域化<span className="text-blue-600">三階段</span>
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
                        <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-6 tracking-tighter">
                            社群營運<span className="text-emerald-600">四步驟</span>
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            循環式的增長飛輪，不是線性流程，而是持續循環的迴圈
                        </p>
                    </div>

                    {/* WebFX 風格的環形飛輪圖 */}
                    <div className="relative max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-[280px_1fr_280px] gap-8 items-center">
                            {/* 左側說明 */}
                            <div className="space-y-8 order-2 lg:order-1">
                                {/* 拉新 */}
                                <div className="group">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                                        <h3 className="text-lg font-bold text-gray-900">拉新 <span className="text-xs font-normal text-gray-400 ml-1">Acquisition</span></h3>
                                    </div>
                                    <p className="text-sm text-gray-600 pl-6 leading-relaxed mb-3">透過多元化的引流手段，將用戶從公域引入私域環境</p>
                                    <div className="flex flex-wrap gap-2 pl-6">
                                        <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded">優質內容吸引</span>
                                        <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded">品牌故事共鳴</span>
                                        <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded">獨家福利觸發</span>
                                    </div>
                                </div>

                                {/* 裂變 */}
                                <div className="group">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                                        <h3 className="text-lg font-bold text-gray-900">裂變 <span className="text-xs font-normal text-gray-400 ml-1">Fission</span></h3>
                                    </div>
                                    <p className="text-sm text-gray-600 pl-6 leading-relaxed mb-3">建立KOC推薦機制，實現社群的自然增長和擴展</p>
                                    <div className="flex flex-wrap gap-2 pl-6">
                                        <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded">母子群搭建</span>
                                        <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded">裂變活動設計</span>
                                        <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded">品牌倡導計畫</span>
                                    </div>
                                </div>
                            </div>

                            {/* 中心 - SVG 環形圖 */}
                            <div className="flex justify-center order-1 lg:order-2">
                                <div className="relative w-72 h-72 md:w-80 md:h-80">
                                    {/* 旋轉的外環動畫 */}
                                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                                        <svg viewBox="0 0 200 200" className="w-full h-full">
                                            <circle cx="100" cy="100" r="92" fill="none" stroke="url(#outerRingGradient)" strokeWidth="2" strokeDasharray="8 4" opacity="0.3" />
                                        </svg>
                                    </div>

                                    {/* 主圖 - 四個扇形區塊 */}
                                    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl relative z-10">
                                        {/* 漸層定義 - 移到前面 */}
                                        <defs>
                                            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="100%" stopColor="#1d4ed8" />
                                            </linearGradient>
                                            <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#14b8a6" />
                                                <stop offset="100%" stopColor="#0d9488" />
                                            </linearGradient>
                                            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#22c55e" />
                                                <stop offset="100%" stopColor="#15803d" />
                                            </linearGradient>
                                            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#a855f7" />
                                                <stop offset="100%" stopColor="#7c3aed" />
                                            </linearGradient>
                                            <linearGradient id="outerRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="50%" stopColor="#14b8a6" />
                                                <stop offset="100%" stopColor="#a855f7" />
                                            </linearGradient>
                                        </defs>

                                        {/* 背景圓 */}
                                        <circle cx="100" cy="100" r="85" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />

                                        {/* 四個扇形區塊 - 每個 90 度 */}
                                        {/* 拉新 - 藍色 (右上 0-90度) */}
                                        <path d="M 100 100 L 100 20 A 80 80 0 0 1 180 100 Z" fill="url(#blueGradient)" className="hover:opacity-80 transition-all duration-300 cursor-pointer" />
                                        {/* 留存 - 青綠色 (右下 90-180度) */}
                                        <path d="M 100 100 L 180 100 A 80 80 0 0 1 100 180 Z" fill="url(#tealGradient)" className="hover:opacity-80 transition-all duration-300 cursor-pointer" />
                                        {/* 活躍 - 綠色 (左下 180-270度) */}
                                        <path d="M 100 100 L 100 180 A 80 80 0 0 1 20 100 Z" fill="url(#greenGradient)" className="hover:opacity-80 transition-all duration-300 cursor-pointer" />
                                        {/* 裂變 - 紫色 (左上 270-360度) */}
                                        <path d="M 100 100 L 20 100 A 80 80 0 0 1 100 20 Z" fill="url(#purpleGradient)" className="hover:opacity-80 transition-all duration-300 cursor-pointer" />

                                        {/* 扇形標籤 */}
                                        <text x="130" y="60" fill="white" fontSize="10" fontWeight="bold">拉新</text>
                                        <text x="140" y="115" fill="white" fontSize="10" fontWeight="bold">留存</text>
                                        <text x="55" y="145" fill="white" fontSize="10" fontWeight="bold">活躍</text>
                                        <text x="50" y="75" fill="white" fontSize="10" fontWeight="bold">裂變</text>

                                        {/* 中心白圓 */}
                                        <circle cx="100" cy="100" r="40" fill="white" stroke="#e2e8f0" strokeWidth="2" />

                                        {/* 箭頭指示器 - 脈動動畫 */}
                                        <g className="animate-pulse">
                                            <polygon points="100,15 105,25 95,25" fill="#3b82f6" />
                                            <polygon points="185,100 175,105 175,95" fill="#14b8a6" />
                                            <polygon points="100,185 95,175 105,175" fill="#22c55e" />
                                            <polygon points="15,100 25,95 25,105" fill="#a855f7" />
                                        </g>
                                    </svg>

                                    {/* 中心內容 - 帶有脈動動畫 */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                                            <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                                                <svg className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '3s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-sm font-bold text-gray-900 mt-2">私域飛輪</div>
                                        <div className="text-[10px] text-emerald-600 font-medium">持續循環增長</div>
                                    </div>
                                </div>
                            </div>

                            {/* 右側說明 */}
                            <div className="space-y-8 order-3">
                                {/* 留存 */}
                                <div className="group">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 rounded-full bg-teal-500" />
                                        <h3 className="text-lg font-bold text-gray-900">留存 <span className="text-xs font-normal text-gray-400 ml-1">Retention</span></h3>
                                    </div>
                                    <p className="text-sm text-gray-600 pl-6 leading-relaxed mb-3">建立有價值的互動機制，確保用戶持續關注並參與品牌活動</p>
                                    <div className="flex flex-wrap gap-2 pl-6">
                                        <span className="px-2 py-1 bg-teal-50 text-teal-600 text-xs rounded">社群常態活動</span>
                                        <span className="px-2 py-1 bg-teal-50 text-teal-600 text-xs rounded">專屬權益設計</span>
                                        <span className="px-2 py-1 bg-teal-50 text-teal-600 text-xs rounded">個性化溝通</span>
                                    </div>
                                </div>

                                {/* 活躍 */}
                                <div className="group">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <h3 className="text-lg font-bold text-gray-900">活躍 <span className="text-xs font-normal text-gray-400 ml-1">Activation</span></h3>
                                    </div>
                                    <p className="text-sm text-gray-600 pl-6 leading-relaxed mb-3">激發用戶主動參與討論和分享，成為品牌的自發傳播者</p>
                                    <div className="flex flex-wrap gap-2 pl-6">
                                        <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded">多對多互動機制</span>
                                        <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded">內容共創計畫</span>
                                        <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded">KOC激勵系統</span>
                                    </div>
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

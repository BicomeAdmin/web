import { useState } from 'react';
import { useInView } from '../../hooks/useInView';

export default function IndustryMatrix() {
    const [activeCategory, setActiveCategory] = useState('精選');
    const grid = useInView<HTMLDivElement>();

    const categories = [
        { id: '精選', label: '精選案例', icon: 'ri-star-smile-line' },
        { id: '食', label: '餐飲美食', icon: 'ri-restaurant-2-line' },
        { id: '衣', label: '時尚服飾', icon: 'ri-t-shirt-line' },
        { id: '住', label: '居家房產', icon: 'ri-home-4-line' },
        { id: '育', label: '教育培訓', icon: 'ri-book-open-line' },
        { id: '樂', label: '休閒娛樂', icon: 'ri-gamepad-line' },
        { id: '生', label: '生活風格', icon: 'ri-leaf-line' },
    ];

    const cases = [
        // 精選案例 (同時歸類於各自產業)
        {
            name: "悠活原力",
            subtitle: "悠活～健康底家啦！",
            memberCount: 859,
            tags: "#悠活原力 #保健 #營養",
            icon: "🌿",
            bgColor: "bg-[#d78b4b]",
            categories: ["食"],
            link: "https://line.me/ti/g2/9ykCo-wnrVd1Ybb1jv5okCWI81wXongsW_hjdQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/yoho_power.jpg"
        },
        {
            name: "35全球置產大富翁",
            subtitle: "專業地產投資交流",
            memberCount: 5942,
            tags: "#地產 #房屋 #海外置產 #投資",
            icon: "🏠",
            bgColor: "bg-[#059669]",
            categories: ["精選", "住"],
            link: "https://line.me/ti/g2/4Ap0JeLfNg-xFbJviwLJ2Qvh-NFXjix58XuAaQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/35_estate.jpg"
        },
        {
            name: "運動趣",
            subtitle: "跑者充電站",
            memberCount: 1032,
            tags: "#慢跑 #休息 #交流",
            icon: "🏃",
            categories: ["精選", "樂"],
            bgColor: "bg-[#7c3aed]",
            link: "https://line.me/ti/g2/aWgkU9OMGvCDJy6pTCejNRzgaPB6yosiMXKkew?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/sport_fun.jpg"
        },
        // 餐飲
        {
            name: "米米花私藏秘密基地",
            subtitle: "最好吃的米米花",
            memberCount: 716,
            tags: "#米粉 #米米花",
            icon: "⚓",
            bgColor: "bg-[#2563eb]",
            categories: ["食"],
            link: "https://line.me/ti/g2/v08k6Mz2NkqUMv-zPpESj_bLEVcVsp5Ps4TQ7A?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/rice_popcorn.jpg"
        },
        {
            name: "何家香香鍋然心動",
            subtitle: "火鍋愛好者聚集地",
            memberCount: 725,
            tags: "#火鍋店 #金曲",
            icon: "🍲",
            bgColor: "bg-[#ea580c]",
            categories: ["食"],
            link: "https://line.me/ti/g2/ZpF9KxPajgkAh0Xdyo6dz4x2gPfoU6F_yqNbEw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/hochia_hotpot.jpg"
        },
        {
            name: "日日好食 SHOP.COM 互助會",
            subtitle: "專屬折扣與新品試吃",
            memberCount: 200,
            tags: "#日日好食 #專屬折扣碼 #揪團",
            icon: "🍱",
            bgColor: "bg-[#d97706]",
            categories: ["食"],
            link: "https://line.me/ti/g2/QKw2tmGe7srns-gvtgQBBxTyY8Xl_-l9_9nUxA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/daily_food.jpg"
        },
        // 服飾
        {
            name: "ERSS生活穿搭誌",
            subtitle: "時尚穿搭俱樂部",
            memberCount: 189,
            tags: "#穿搭",
            icon: "👗",
            bgColor: "bg-[#db2777]",
            categories: ["衣"],
            link: "https://line.me/ti/g2/RGB4a3QaOyxfw9MyFDmkctuCNPABkeVcelUaXA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/erss.jpg"
        },
        {
            name: "myBRA女子會聊",
            subtitle: "女性內著專屬社群",
            memberCount: 566,
            tags: "#內衣 #女子",
            icon: "💕",
            bgColor: "bg-[#f472b6]",
            categories: ["衣"],
            link: "https://line.me/ti/g2/RPw4LHv4tvJActMEMl9JY6lZiGesjyDAGKz2zg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/mybra.jpg"
        },
        // 房產
        {
            name: "大漢家居好感圈🏡",
            subtitle: "居家靈感與職人生活",
            memberCount: 356,
            tags: "#大漢家居好感圈 #居家靈感 #綠色生活 #職人",
            icon: "🛋️",
            bgColor: "bg-[#14b8a6]",
            categories: ["住"],
            link: "https://line.me/ti/g2/1bnll4VblZPUeM0C2XlOyTJL793yDjXhlSInIA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/tahan_casa.jpg"
        },
        // 教育
        {
            name: "自信小大人表達學校✨",
            subtitle: "兒童表達力自信養成",
            memberCount: 582,
            tags: "#小大人 #林依柔 #兒童表達力",
            icon: "📚",
            bgColor: "bg-[#d97706]",
            categories: ["育"],
            link: "https://line.me/ti/g2/Tuv4rfEZuucJVKqy5WV17lsw-GQX00DMWMi-rQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/kid_adult.jpg"
        },
        {
            name: "娜她媽的數學教室陪伴群",
            subtitle: "升學不焦慮",
            memberCount: 523,
            tags: "#教育 #國中數學 #高中數學",
            icon: "🔢",
            bgColor: "bg-[#f59e0b]",
            categories: ["精選", "育"],
            link: "https://line.me/ti/g2/Q9R-Hmz3iMW0pt6kFMnGD37VESDH7VEe32zhoA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/nanama_math.jpg"
        },
        // 休閒
        {
            name: "PJ耳邊風",
            subtitle: "讓人輕鬆的小天地",
            memberCount: 410,
            tags: "#讓人輕鬆的小天地",
            icon: "🐕",
            bgColor: "bg-[#8b5cf6]",
            categories: ["樂"],
            link: "https://line.me/ti/g2/-ltSyUOezqcMitfzDYMCLLViFQKvhpKfHBk1ag?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/pj_joy.jpg"
        },
        {
            name: "💫米特創作星球💫",
            subtitle: "親子遊戲互動",
            memberCount: 740,
            tags: "#育兒公式 #爸媽 #遊戲",
            icon: "🎮",
            bgColor: "bg-[#6366f1]",
            categories: ["樂"],
            link: "https://line.me/ti/g2/jWmM-OL4iDGdPCBErZXejSgu5oSlMnOgSZbhyw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/mit_planet.jpg"
        },
        // 生活
        {
            name: "(ENLIV) 絕美日常圈",
            subtitle: "隱形眼鏡美學",
            memberCount: 205,
            tags: "#隱形眼鏡 #美妝",
            icon: "👁️",
            bgColor: "bg-[#ec4899]",
            categories: ["生"],
            link: "https://line.me/ti/g2/1pRJ_x1VnS5Dj23B8_w5AeOFODqdaLPT08tRmA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/enliv.jpg"
        },
        {
            name: "髮速黑｜養髮陪伴所",
            subtitle: "純淨是我們對您的承諾",
            memberCount: 898,
            tags: "#髮速黑 #養髮 #護髮",
            icon: "💆",
            bgColor: "bg-[#1f2937]",
            categories: ["生"],
            link: "https://line.me/ti/g2/1_19inbWun3AgPbJXj5tACfiCyfkj7J-frRgcA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            image: "/images/cases/pure_home.jpg"
        },
    ];

    const filteredCases = cases.filter(c => c.categories.includes(activeCategory));

    return (
        <section id="cases" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* 標題區 */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full mb-5 border border-emerald-200/60 uppercase tracking-[0.3em]">
                        <i className="ri-community-line" aria-hidden="true"></i>
                        Success Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6 tracking-tighter">
                        真實社群的成功故事
                    </h2>
                </div>

                {/* 統一 Tab 切換 — active 下方加小色條 */}
                <div className="flex flex-wrap justify-center gap-2.5 mb-10">
                    {categories.map((cat) => {
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                aria-pressed={isActive}
                                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                                    isActive
                                        ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                <i className={`${cat.icon} text-lg ${isActive ? 'text-emerald-300' : ''}`} aria-hidden="true"></i>
                                <span>{cat.label}</span>
                                {isActive && (
                                    <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-8 h-[3px] rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* 案例卡片網格 */}
                <div ref={grid.ref} data-reveal={grid.visible ? 'in' : 'out'} className="reveal-parent grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCases.map((caseItem: any, index) => (
                        <div
                            key={index}
                            className={`group relative ${caseItem.image ? 'bg-black' : caseItem.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer`}
                            style={{ aspectRatio: '4/5' }}
                        >
                            {/* 圖片或背景遮罩 */}
                            {caseItem.image ? (
                                <>
                                    <img
                                        src={caseItem.image}
                                        alt={caseItem.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* 極輕微濾鏡確保文字可見度 */}
                                    <div className="absolute inset-0 bg-black/20" />
                                </>
                            ) : (
                                <div className="absolute inset-0 bg-black/10" />
                            )}

                            {/* QR Code Icon (右上角) */}
                            <div className="absolute top-6 right-6 z-20 opacity-90 drop-shadow-md">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H9V9H3V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 3H21V9H15V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 15H9V21H3V15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 15H17V17H15V15Z" fill="white" />
                                    <path d="M19 15H21V17H19V15Z" fill="white" />
                                    <path d="M15 19H17V21H15V19Z" fill="white" />
                                    <path d="M19 19H21V21H19V19Z" fill="white" />
                                </svg>
                            </div>

                            <div className="relative h-full flex flex-col items-center justify-center px-8 py-10 text-center text-white z-10">
                                {/* 標題區 */}
                                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 drop-shadow-lg leading-tight">
                                    {caseItem.name}
                                </h3>

                                {/* 描述與數據 */}
                                <p className="text-base font-medium text-white/95 mb-3 drop-shadow">{caseItem.subtitle}</p>
                                <p className="text-sm text-white/90 mb-2 drop-shadow-sm font-light">成員 {caseItem.memberCount.toLocaleString()}</p>
                                <p className="text-xs text-white/80 mb-8 opacity-80">{caseItem.tags}</p>

                                {/* LINE 開啟按鈕 */}
                                {caseItem.link ? (
                                    <a
                                        href={caseItem.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white/50 rounded-full text-white font-bold text-sm flex items-center gap-2 hover:bg-[#06C755] hover:border-[#06C755] hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                                    >
                                        <span>以LINE開啟</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                ) : (
                                    <button className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white/50 rounded-full text-white font-bold text-sm flex items-center gap-2 hover:bg-[#06C755] hover:border-[#06C755] transition-all duration-300">
                                        <span>以LINE開啟</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 底部 CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-500 mb-4">想為您的品牌建立這樣的社群嗎？</p>
                    <a
                        href="#team"
                        className="group relative inline-block px-8 py-4 bg-gray-900 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                    >
                        <span className="relative z-10">免費諮詢專屬方案</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                    </a>
                </div>
            </div>
        </section >
    );
}

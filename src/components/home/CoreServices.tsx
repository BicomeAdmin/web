import { Link } from 'react-router-dom';

export default function CoreServices() {
    const services = [
        {
            id: 'ops',
            category: "Private Domain Operations",
            title: "全方位的私域增長夥伴",
            description: "從 0 到 1 打造品牌專屬的社群生態系，透過精細化營運與陪跑服務，建立深度情感連結。",
            items: [
                { title: "私域代營運", desc: "專業團隊全權接管，確保社群長效活性。" },
                { title: "私域陪跑服務", desc: "顧問式深度輔導，建立內部核心能力。" }
            ],
            // Forest Green Theme
            theme: "emerald",
            bgCard: "bg-white",
            headerBg: "bg-emerald-900",
            headerText: "text-white",
            accentText: "text-emerald-800",
            iconBg: "bg-emerald-50",
            icon: (
                <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 'data',
            category: "Data & Tech Intelligence",
            title: "數據驅動的決策引擎",
            description: "將用戶行為轉換為可視化的增長路徑，透過遊戲化忠誠系統與多維度報告，精準洞察營運價值。",
            items: [
                { title: "私域數據報告", desc: "月度深度分析報告，讓決策有跡可循。" },
                { title: "用戶忠誠系統", desc: "遊戲化機制設計，打造品牌護城河。" }
            ],
            // Royal Navy Theme
            theme: "blue",
            bgCard: "bg-white",
            headerBg: "bg-[#0b1c3e]", // Royal Navy Blue
            headerText: "text-white",
            accentText: "text-[#0b1c3e]",
            iconBg: "bg-blue-50",
            icon: (
                <svg className="w-6 h-6 text-[#0b1c3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        }
    ];

    return (
        <section id="services" className="relative py-32 bg-gray-50 overflow-hidden">

            {/* 視覺過渡：頂部深色自然銜接 */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#020617] to-gray-50 pointer-events-none opacity-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* 標題系統 - 現代菁英風 */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[1px] w-12 bg-gray-400"></span>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Our Expertise</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 tracking-tighter leading-[1.1]">
                            結合<span className="text-emerald-800">人性營運</span>與<br />
                            <span className="text-[#0b1c3e]">數據賦能</span>的增長系統
                        </h2>
                    </div>
                    <div className="max-w-md pb-2">
                        <p className="text-lg text-gray-500 leading-relaxed font-medium">
                            我們不只提供工具，更提供讓品牌持續獲利的完整解決方案。
                            從策略到執行，全方位優化您的私域體質。
                        </p>
                    </div>
                </div>

                {/* 雙核心板塊 - 雜誌級排版 */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`group relative flex flex-col bg-white rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-gray-200/50 border border-gray-100`}
                        >
                            {/* 頂部色塊 Header */}
                            <div className={`${service.headerBg} p-8 md:p-10 relative overflow-hidden`}>
                                {/* 裝飾紋理 */}
                                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                                <div className={`absolute -right-12 -bottom-24 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl`} />

                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full inline-block mb-6 border border-white/20">
                                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">{service.category}</span>
                                    </div>
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 text-white">
                                        {index === 0 ? '01' : '02'}
                                    </div>
                                </div>
                                <h3 className="relative z-10 text-3xl font-display font-bold text-white tracking-tight mt-2">
                                    {service.title}
                                </h3>
                            </div>

                            {/* 內容區域 */}
                            <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                                <div>
                                    <p className="text-gray-500 leading-relaxed text-lg mb-10 font-medium">
                                        {service.description}
                                    </p>

                                    {/* 子項目清單 */}
                                    <div className="space-y-6 mb-12">
                                        {service.items.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-4 group/item">
                                                <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-lg ${service.iconBg} flex items-center justify-center transition-colors group-hover/item:bg-gray-100`}>
                                                    {service.icon}
                                                </div>
                                                <div>
                                                    <h4 className={`font-bold text-base mb-1 ${service.accentText}`}>{item.title}</h4>
                                                    <p className="text-sm text-gray-400 leading-relaxed">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 底部按鈕 */}
                                <div className="pt-6 border-t border-gray-100">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider group/link text-gray-900 transition-colors hover:text-gray-600"
                                    >
                                        <span className="border-b-2 border-transparent group-hover/link:border-gray-900 transition-all">
                                            探索解決方案
                                        </span>
                                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

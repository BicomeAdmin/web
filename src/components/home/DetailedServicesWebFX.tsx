const services = [
    { title: "SEO 搜尋優化", icon: "ri-search-line", color: "text-webfx-blue", desc: "引導高品質流量，精準命中具備消費意願的潛在客戶。" },
    { title: "Social CRM 運營", icon: "ri-user-heart-line", color: "text-webfx-teal", desc: "構建深度的私域連結，將一次性訪客轉化為終身品牌追隨者。" },
    { title: "遊戲化獲客機制", icon: "ri-gamepad-line", color: "text-webfx-purple", desc: "利用心理學引擎，讓用戶在有趣的互動中自動完成裂變與轉化。" },
    { title: "數據驅動內容營銷", icon: "ri-file-list-3-line", color: "text-orange-500", desc: "不僅是創意，更是計算後的內容策略，極大化點擊與停留。" },
    { title: "全通路轉化率優化", icon: "ri-bar-chart-box-line", color: "text-webfx-blue", desc: "分析每一個流失細節，優化漏斗，讓同樣的流量產出更多訂單。" },
    { title: "電商電商私域設計", icon: "ri-shopping-cart-2-line", color: "text-red-500", desc: "專為零售設計的自動化復購路徑，有效降低 CAC 獲客成本。" },
    { title: "企業數據中台建置", icon: "ri-database-2-line", color: "text-webfx-teal", desc: "整合碎片化數據，為決策提供唯一、可視化的真實依據。" },
    { title: "AI 自動化客服", icon: "ri-robot-line", color: "text-indigo-500", desc: "24/7 的智能響應，結合人性化溫度，提升客服效率與滿意度。" },
    { title: "品牌數位轉型諮詢", icon: "ri-lightbulb-line", color: "text-yellow-600", desc: "從戰略角度規劃數位藍圖，確保每一步投資都有清晰的 ROI。" },
];

export default function DetailedServicesWebFX() {
    return (
        <section className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-8 text-center mb-24">
                <h2 className="text-sm font-black text-webfx-blue tracking-[0.3em] uppercase mb-8">Full-Service Digital Solutions</h2>
                <p className="text-5xl font-black text-webfx-navy tracking-tight mb-8">全方位的增長引擎<br />驅動您的商業版圖</p>
                <p className="text-lg text-webfx-navy/40 max-w-2xl mx-auto font-medium leading-relaxed">
                    我們不只是提供單一服務，而是為您構建一個完整的、可持續產出利潤的數位生態系統。
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((s, idx) => (
                        <div key={idx} className="group p-8 rounded-2xl border border-black/5 hover:border-webfx-blue/20 hover:shadow-xl transition-all duration-300">
                            <div className={`${s.color} text-4xl mb-6 group-hover:scale-110 transition-transform`}>
                                <i className={s.icon}></i>
                            </div>
                            <h3 className="text-xl font-black text-webfx-navy mb-4">{s.title}</h3>
                            <p className="text-sm text-webfx-navy/60 leading-relaxed">
                                {s.desc}
                            </p>
                            <div className="mt-8 flex items-center text-[10px] font-black text-webfx-blue uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                了解相關解決方案 <i className="ri-arrow-right-line ml-2"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

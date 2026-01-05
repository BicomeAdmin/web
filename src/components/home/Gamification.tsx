

const mechanics = [
    {
        title: '任務體系 (Missions)',
        icon: 'ri-flag-2-line',
        desc: '將品牌目標拆解為有趣的每日/限時任務，引導用戶自然完成互動與購買。',
        badge: 'Engagement'
    },
    {
        title: '等級制度 (Levels)',
        icon: 'ri-medal-2-line',
        desc: '建立明確的成長階層，透過身份認同感鎖定高價值用戶，降低流失率。',
        badge: 'Retention'
    },
    {
        title: '勳章榮譽 (Badges)',
        icon: 'ri-vip-crown-2-line',
        desc: '記錄用戶在社群中的關鍵貢獻，打造榮譽牆，激發用戶主動傳播行為。',
        badge: 'Advocacy'
    },
    {
        title: '積分商城 (Rewards)',
        icon: 'ri-exchange-box-line',
        desc: '將用戶的互動價值轉化為可感知的權益，建立持續循環的私域動力引擎。',
        badge: 'Conversion'
    }
];

export default function Gamification() {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Decorative background logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
                GAMIFY
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="max-w-3xl mb-24">
                    <h2 className="text-sm font-black text-highlight tracking-[0.3em] uppercase mb-8">Gamification Thinking</h2>
                    <p className="text-6xl font-black text-white tracking-tighter mb-8 italic">讓每一次運營，<br />都像是一場欲罷不能的遊戲</p>
                    <p className="text-xl text-white/50 font-medium leading-relaxed">
                        我們拒絕死板的促銷，我們相信「欲罷不能」的參與感。透過將心理學機制注入私域社群，讓用戶在享受樂趣的過程中，潛移默化地與品牌達成共創。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mechanics.map((m, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[50px] group hover:border-highlight/50 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-highlight/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <i className={`${m.icon} text-3xl text-highlight`}></i>
                            </div>
                            <div className="space-y-4">
                                <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">{m.badge}</span>
                                <h3 className="text-2xl font-black text-white">{m.title}</h3>
                                <p className="text-white/40 text-sm font-medium leading-relaxed">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-accent opacity-90 rounded-[40px] flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-2/3">
                        <p className="text-black text-3xl font-black tracking-tighter">這不僅是設計，這是對人性動力的極致運用。</p>
                    </div>
                    <button className="bg-black text-white px-10 py-5 rounded-full text-lg font-black hover:scale-105 transition-all shadow-xl">
                        立即解鎖您的私域藍圖
                    </button>
                </div>
            </div>
        </section>
    );
}

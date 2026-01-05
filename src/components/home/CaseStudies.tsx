import { useState } from 'react';

const categories = ['全部', '食', '衣', '住', '育', '樂', '其他'];

const cases = [
    {
        id: 1, category: '食', name: '丹尼船長', desc: '米米花私域運營', metric: '+156%', metricLabel: '復購率提升',
        hashtags: ['#精細化營運', '#社群裂變', '#電商私域'],
        members: '12.4K',
        milestones: ['Day 30 會員破萬', 'Day 90 建立 KOC 矩陣']
    },
    {
        id: 2, category: '食', name: '何家香香', desc: '社群互動轉化', metric: '2.5x', metricLabel: '月均營收增長',
        hashtags: ['#遊戲化營運', '#老客回購', '#內容營銷'],
        members: '4.8K',
        milestones: ['Day 15 啟動遊戲化任務', 'Day 60 營收翻倍']
    },
    {
        id: 3, category: '食', name: '日日好食', desc: '精準用戶畫像', metric: '95%', metricLabel: '用戶滿意度',
        hashtags: ['#用戶體驗', '#數據洞察'],
        members: '3.2K'
    },
    {
        id: 4, category: '衣', name: 'ERSS', desc: '會員分級體系', metric: '+88%', metricLabel: '客單價提升',
        hashtags: ['#會員經營', '#多渠道營運'],
        members: '8.1K',
        milestones: ['建立 VVIP 專屬口袋社群']
    },
    { id: 5, category: '衣', name: 'mybra', desc: '情感連結營運用', metric: '40%', metricLabel: '留存率增強', hashtags: ['#私域情感連結', '#品牌共創'], members: '15.2K' },
    {
        id: 6, category: '住', name: '35線上賞屋', desc: '高效潛客獲取', metric: '3000+', metricLabel: '活躍社群成員',
        hashtags: ['#房產私域', '#信任構建'],
        members: '3,000+',
        milestones: ['打造零廣告私域引擎']
    },
];

export default function CaseStudies() {
    const [activeCategory, setActiveCategory] = useState('全部');

    const filteredCases = activeCategory === '全部'
        ? cases
        : cases.filter(c => c.category === activeCategory);

    return (
        <section id="cases" className="py-32 bg-black relative overflow-hidden">
            {/* Background Texture for Depth */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80&w=2000"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10 text-center mb-24">
                <h2 className="text-sm font-black text-accent tracking-[0.3em] uppercase mb-8">Case Study Showcase</h2>
                <p className="text-6xl font-black text-white tracking-tighter mb-12">像遊戲般有趣的<br />私域營運成果</p>

                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full text-sm font-black transition-all duration-300 ${activeCategory === cat ? 'bg-accent text-black' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredCases.map((c) => (
                        <div key={c.id} className="group relative">
                            {/* LINE OpenChat Label Decoration */}
                            <div className="text-center mb-4 opacity-40 text-[10px] font-black tracking-widest text-white uppercase group-hover:opacity-100 transition-opacity">
                                LINE OPENCHAT
                            </div>

                            {/* The Card - Refactored for Intuitive UX */}
                            <div className="relative bg-gradient-to-b from-white/10 to-transparent backdrop-blur-3xl rounded-[40px] border border-white/20 overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-accent/20">

                                <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-t from-black via-transparent to-black/40"></div>

                                <div className="relative p-10 flex flex-col items-center text-center space-y-8">

                                    {/* Profile Image Style Area */}
                                    <div className="relative">
                                        <div className="w-28 h-28 rounded-full border-2 border-white/20 p-1 bg-black/40 overflow-hidden">
                                            <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/40 via-transparent to-highlight/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                                <span className="text-3xl font-black text-white opacity-20">BICOME</span>
                                            </div>
                                        </div>
                                        {/* Symbolic QR Code Element */}
                                        <div className="absolute -top-2 -right-4 w-10 h-10 bg-white p-1 rounded-lg shadow-xl -rotate-6 group-hover:rotate-0 transition-transform">
                                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=Bicome" alt="QR" className="w-full h-full opacity-80" />
                                        </div>
                                    </div>

                                    {/* Brand Info */}
                                    <div className="space-y-4 w-full">
                                        <h3 className="text-3xl font-black text-white leading-tight">{c.name}</h3>
                                        <div className="text-white/40 text-[10px] font-black tracking-widest uppercase">成員 {c.members}</div>
                                        <p className="text-white/60 text-sm font-medium italic">「{c.desc}」</p>
                                    </div>

                                    {/* Hashtags Segment */}
                                    <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                                        {c.hashtags?.map(tag => (
                                            <span key={tag} className="text-[12px] font-bold text-accent">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Button - LINE Themed */}
                                    <button className="w-full py-4 px-8 bg-white/5 hover:bg-accent hover:text-black border border-white/10 rounded-full text-sm font-black transition-all flex items-center justify-center space-x-2 group/btn">
                                        <span>以 LINE 開啟</span>
                                        <i className="ri-arrow-right-s-line text-lg group-hover/btn:translate-x-1 transition-transform"></i>
                                    </button>

                                    {/* Metric Integration */}
                                    <div className="pt-8 border-t border-white/5 w-full">
                                        <div className="text-4xl font-black text-accent">{c.metric}</div>
                                        <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em] mt-1">{c.metricLabel}</div>
                                    </div>
                                </div>

                                {/* Milestone Badge */}
                                {c.milestones && (
                                    <div className="absolute top-6 left-6">
                                        <div className="bg-highlight text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                                            Growth Path
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

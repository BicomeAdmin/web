import React from 'react';

const cultures = [
    {
        title: '🤝 團隊合作',
        desc: '我們不只是「分工完成任務」，而是「共同創造成果」。每個專案都是一場多角色合作的旅程，策略、內容、數據並肩前進。'
    },
    {
        title: '📚 持續學習',
        desc: '以「好奇心」為核心，定期共學、分享案例。我們不追求完美解法，而追求不斷前進的學習曲線與可復用的知識模組。'
    },
    {
        title: '🔁 復盤優化',
        desc: '重視每一次營運後的回顧與迭代。復盤不是檢討，而是讓下次失誤變成成功的養分。真正的營運力，來自持續優化的能力。'
    }
];

export default function TeamCulture() {
    return (
        <section id="about" className="py-32 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-sm font-black text-accent tracking-[0.3em] uppercase mb-8">Partnership</h2>
                            <p className="text-6xl font-black text-white tracking-tighter mb-8 italic">🌱 我們是夥伴關係</p>
                            <div className="space-y-6 text-xl text-white/60 leading-relaxed font-medium">
                                <p>
                                    Bicome 的成長，來自一群在不同領域擁有專業背景、卻對「用戶價值經營」有共同信念的夥伴。
                                </p>
                                <p>
                                    我們來自品牌、設計、教育、營運等不同路徑，但在一次次的共創中，看見了團隊彼此的互補與信任，也共構出我們獨特的營運語言與節奏。
                                </p>
                                <p className="text-white font-bold">
                                    我們相信，好的夥伴關係不是分工合作，而是共同思考、一同前進的學習關係。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] bg-secondary rounded-[60px] overflow-hidden border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                                alt="Team Collaboration"
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-accent p-12 rounded-[40px] hidden lg:block">
                            <p className="text-black text-4xl font-black tracking-tighter leading-none">THE<br />PEOPLE<br />OF BICOME</p>
                        </div>
                    </div>
                </div>

                <div className="pt-32 border-t border-white/10">
                    <div className="mb-20">
                        <h2 className="text-sm font-black text-highlight tracking-[0.3em] uppercase mb-8">Our Culture</h2>
                        <p className="text-5xl font-black text-white tracking-tighter">我們的企業文化圍繞著三大核心</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {cultures.map((c, idx) => (
                            <div key={idx} className="space-y-6 p-10 bg-[#0A0A0A] rounded-[40px] border border-white/5 hover:border-white/20 transition-all duration-300">
                                <h3 className="text-2xl font-black text-white">{c.title}</h3>
                                <p className="text-white/50 leading-relaxed font-medium">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

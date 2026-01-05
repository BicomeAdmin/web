import React from 'react';

const methods = [
    {
        id: '01',
        title: '精細化營運',
        subtitle: '培育用戶關係並讓用戶擁有最好的體驗',
        description: '精細化營運的本質就是以用戶為中心，與用戶達到深度情感連結的同時也要隨時洞察用戶需求，並將這些需求整合進品牌營運用戶的活動、內容、與相關執行動作，目標是完成有效提升用戶的生命周期價值（LTV），歷久而彌新。',
        tag: '以用戶為中心',
        color: 'text-accent',
        borderColor: 'border-accent/30'
    },
    {
        id: '02',
        title: '遊戲化營運',
        subtitle: '讓用戶本身感到愉悅，重點在享受每一個過程',
        description: '概念是將大目標拆成好幾個小目標，結合即時的反饋機制，讓用戶不自覺地完成品牌期待達成的階段性目標，整個過程潛移默化卻可以讓用戶樂此不疲，目標是讓用戶享受其中進而提升社群的參與感，最終完成品牌共創。',
        tag: '即時反饋機制',
        color: 'text-highlight',
        borderColor: 'border-highlight/30'
    }
];

export default function Methodology() {
    return (
        <section id="services" className="py-32 bg-black relative">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col lg:flex-row gap-20 items-end mb-32">
                    <div className="lg:w-1/2">
                        <h2 className="text-6xl font-black text-white tracking-tighter leading-none mb-8">
                            BICOME<br />
                            <span className="text-accent">私域用戶營運</span><br />
                            的方法論
                        </h2>
                    </div>
                    <div className="lg:w-1/2 border-l border-white/10 pl-12 pb-2">
                        <p className="text-xl text-white/40 font-medium">
                            好的夥伴關係不是分工合作，而是共同思考、一同前進的學習關係。我們來自不同專業背景，共構出獨特的營運語言與節奏。
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    {methods.map((method) => (
                        <div key={method.id} className={`bg-[#0A0A0A] border ${method.borderColor} p-12 rounded-[50px] relative overflow-hidden group hover:bg-[#111] transition-all duration-500`}>
                            <div className={`text-8xl font-black absolute -top-4 -right-4 opacity-5 ${method.color}`}>{method.id}</div>
                            <div className="relative z-10 space-y-8">
                                <div className={`inline-block px-4 py-1 rounded-full border ${method.borderColor} text-[10px] font-black tracking-widest uppercase ${method.color}`}>
                                    {method.tag}
                                </div>
                                <h3 className="text-4xl font-black text-white">{method.title}</h3>
                                <p className="text-lg text-white font-bold">{method.subtitle}</p>
                                <p className="text-white/50 leading-relaxed font-medium">
                                    {method.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pocket Private Domain - The Highlight Feature */}
                <div className="bg-gradient-to-br from-accent/20 to-highlight/10 border border-white/10 p-16 rounded-[60px] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-16 opacity-10 text-[120px] font-black text-white tracking-tighter group-hover:scale-105 transition-transform duration-700">03</div>
                    <div className="max-w-3xl relative z-10 space-y-8">
                        <div className="inline-block px-4 py-1 rounded-full border border-white/20 text-[10px] font-black tracking-widest uppercase text-white">
                            口袋私域學
                        </div>
                        <h3 className="text-5xl font-black text-white">多渠道營運</h3>
                        <p className="text-xl text-white font-bold">協助品牌搭建多元且目標明確的私域社群矩陣</p>
                        <p className="text-white/60 text-lg leading-relaxed font-medium">
                            就像一個人身上有不同口袋，每個口袋的目的不同。我們針對細分用戶需求，訂定與執行群內營運活動。除了協助 <span className="text-white font-bold">Line</span> 私域社群，也有服務 <span className="text-accent font-bold">Discord</span>、<span className="text-highlight font-bold">IG 廣播專區</span>等多渠道的載體營運。
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            {['LINE OA', 'LINE 社群', 'Discord', 'IG 廣播專區', 'Facebook'].map((channel) => (
                                <span key={channel} className="px-6 py-2 bg-black/50 backdrop-blur-md rounded-full text-xs font-black text-white/70 border border-white/10">
                                    {channel}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

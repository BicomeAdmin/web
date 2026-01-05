import React from 'react';

const videos = [
    { id: 1, title: '私域操盤 - 案例分享', author: '翁保羅', url: 'https://www.tiktok.com/@paul_bicome' },
    { id: 2, title: '如何提升用戶 LTV', author: '翁保羅', url: 'https://www.tiktok.com/@paul_bicome' },
    { id: 3, title: '口袋私域學秘笈', author: '翁保羅', url: 'https://www.tiktok.com/@paul_bicome' },
];

export default function ShortVideos() {
    return (
        <section className="py-32 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-24">
                    <h2 className="text-sm font-black text-highlight tracking-[0.3em] uppercase mb-8">Viral Content</h2>
                    <p className="text-6xl font-black text-white tracking-tighter mb-4">掌握流量密碼</p>
                    <p className="text-white/40 text-xl font-medium">看我們如何透過短影音賦能品牌私域</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {videos.map((v) => (
                        <div key={v.id} className="group cursor-pointer">
                            <div className="relative aspect-[9/16] bg-secondary rounded-[40px] overflow-hidden border border-white/10 group-hover:border-highlight/50 transition-all duration-500 shadow-2xl">
                                {/* Mock TikTok Interface */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-highlight p-[2px]">
                                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                                <span className="text-[10px] font-black">B</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-black text-white">@{v.author}</p>
                                            <p className="text-[10px] text-white/60">Bicome 私域操盤手</p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-black text-white leading-tight">{v.title}</p>
                                    <div className="flex items-center space-x-4 pt-2">
                                        <div className="flex items-center space-x-1">
                                            <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                            </div>
                                            <span className="text-[10px] font-bold text-white/70">128.5K</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Overlay Play Icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-20 h-20 bg-highlight/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

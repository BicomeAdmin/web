const teamMembers = [
    {
        name: "Paul",
        title: "CEO",
        role: "創辦人暨執行長",
        description: "深耕用戶營運領域超過 10 年，曾協助超過 200 個品牌打造私域生態系。專精於品牌策略規劃與商業模式創新。",
        email: "paul@bicome.cc",
        lineId: "0988726087",
        phone: "0988-726-087",
    },
    {
        name: "Jocelyn",
        title: "CEO 特助",
        role: "執行長特別助理",
        description: "負責企業級客戶專案統籌與跨部門協調，確保每個專案都能順利推進並達成目標。",
        email: "jocelyn@bicome.cc",
        lineId: "achiu1119",
        phone: "0937-525-107",
    },
    {
        name: "Judy",
        title: "私域業務總監",
        role: "Business Development Director",
        description: "專注於品牌私域策略諮詢，擅長分析 brand 痛點並提供客製化解決方案。已成功協助 50+ 品牌建立私域營運體系。",
        email: "judy@bicome.cc",
        lineId: "judyyyyyy",
        phone: "0988-983-660",
    },
];

export default function TeamSection() {
    return (
        <section id="team" className="relative py-24 md:py-32 bg-gradient-to-b from-[#020617] via-[#0a1f1a] to-[#020617] text-white overflow-hidden">
            {/* 柔光 */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* 標題 */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-[11px] font-bold rounded-full mb-6 border border-emerald-500/20 uppercase tracking-[0.3em]">
                        Meet the Team
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6">
                        準備好開始您的
                        <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                            私域成長之旅
                        </span>
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                        我們的專業團隊隨時準備為您提供諮詢服務，一起打造屬於您品牌的用戶營運策略。
                    </p>
                </div>

                {/* 團隊卡片 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-16">
                    {teamMembers.map((member) => (
                        <article
                            key={member.name}
                            className="group relative rounded-2xl p-8 bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-500 flex flex-col"
                        >
                            {/* Hover 柔光 */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative flex-grow">
                                <div className="flex items-baseline justify-between mb-4">
                                    <h3 className="text-2xl font-display font-black tracking-tight text-white">{member.name}</h3>
                                    <span className="text-[10px] font-bold text-emerald-400/80 uppercase tracking-[0.2em]">{member.role}</span>
                                </div>
                                <p className="text-sm font-semibold text-emerald-400 mb-4">{member.title}</p>
                                <p className="text-[15px] text-white/60 leading-relaxed mb-8">
                                    {member.description}
                                </p>
                            </div>

                            <div className="relative space-y-3 pt-6 border-t border-white/10">
                                <a
                                    href={`mailto:${member.email}`}
                                    className="flex items-center gap-3 text-sm text-white/50 hover:text-emerald-400 transition-colors"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="font-medium truncate">{member.email}</span>
                                </a>
                                <div className="flex items-center gap-3 text-sm text-white/50">
                                    <svg className="w-4 h-4 flex-shrink-0 text-[#06C755]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.04 2 11c0 4.41 3.63 8.62 8.74 8.62.35 0 .71-.02 1.06-.05.3.68.72 1.33 1.26 1.89.17.17.41.26.65.26.12 0 .24-.02.36-.07.36-.15.58-.5.58-.89v-1.6c4.37-.82 7.35-4.27 7.35-8.16C22 6.04 17.52 2 12 2z" />
                                    </svg>
                                    <span className="font-medium">LINE: {member.lineId}</span>
                                </div>
                                <a
                                    href={`tel:${member.phone.replace(/-/g, '')}`}
                                    className="flex items-center gap-3 text-sm text-white/50 hover:text-emerald-400 transition-colors"
                                >
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="font-medium">{member.phone}</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* LINE 官方帳號 CTA */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-8 md:p-12 text-center">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

                    <div className="relative">
                        <h3 className="text-2xl md:text-3xl font-display font-black text-white mb-4 tracking-tight">
                            需要更即時的諮詢？
                        </h3>
                        <p className="text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
                            加入 Bicome LINE 官方帳號，將有專人為您安排初步的品牌私域診斷服務。
                        </p>
                        <a
                            href="https://line.me/R/ti/p/@586srkkv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-emerald-600 font-display font-black rounded-xl hover:bg-emerald-50 transition-all hover:scale-[1.02] shadow-xl"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                            </svg>
                            加入 LINE 官方帳號
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

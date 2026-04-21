import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { label: "關於我們", href: "#about" },
            { label: "成功案例", href: "#cases" },
            { label: "加入我們", href: "https://www.104.com.tw/company/1a2x6bm5gb?jobsource=tab_job_to_cs" },
        ],
        resources: [
            { label: "私域流量 (專書)", href: "https://www.books.com.tw/products/0011028729?srsltid=AfmBOopd4JlZ0XGQD6WuqnxqTTB-q0JbTNQsXKgmZ9mu1EPXCKnYFhnH" },
            { label: "用戶忠誠系統", href: "#loyalty" },
        ],
    };

    const socialLinks = [
        {
            name: "LINE",
            href: "https://line.me/ti/g2/kvmqLQ35fXGFTqn4PtrWxFXvcka5klKmsJBUeA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
            icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.04 2 11c0 4.41 3.63 8.62 8.74 8.62.35 0 .71-.02 1.06-.05.3.68.72 1.33 1.26 1.89.17.17.41.26.65.26.12 0 .24-.02.36-.07.36-.15.58-.5.58-.89v-1.6c4.37-.82 7.35-4.27 7.35-8.16C22 6.04 17.52 2 12 2z" />
                </svg>
            )
        },
        {
            name: "TikTok",
            href: "https://www.tiktok.com/@paul_bicome",
            icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
            )
        },
    ];

    return (
        <footer className="bg-gradient-to-b from-[#020617] to-[#020617] text-white">
            {/* 主要內容 */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
                    {/* 左側：品牌資訊 */}
                    <div className="max-w-sm">
                        <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-[0_4px_20px_rgba(16,185,129,0.3)] overflow-hidden">
                                <img src={`${import.meta.env.BASE_URL}icon.png`} alt="Bicome Logo" className="w-6 h-6 object-contain brightness-0 invert" />
                            </div>
                            <span className="text-2xl font-display font-bold tracking-tight">Bicome</span>
                        </Link>
                        <p className="text-[15px] text-white/50 leading-relaxed mb-8">
                            Bicome 是一間專注於品牌用戶營運的顧問公司，協助台灣品牌建立社群私域流量與忠實用戶社群。
                        </p>
                        {/* 社群連結 */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/40 hover:bg-emerald-500/20 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-300"
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 右側：連結群組 */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-16">
                        {/* 公司資訊 */}
                        <div>
                            <h4 className="font-display font-bold text-sm text-white/90 mb-6 uppercase tracking-widest">公司資訊</h4>
                            <ul className="space-y-4">
                                {footerLinks.company.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith('http') ? "_blank" : undefined}
                                            rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                            className="text-[14px] text-white/40 hover:text-emerald-400 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 學習資源 */}
                        <div>
                            <h4 className="font-display font-bold text-sm text-white/90 mb-6 uppercase tracking-widest">Bicome資源</h4>
                            <ul className="space-y-4">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith('http') ? "_blank" : undefined}
                                            rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                            className="text-[14px] text-white/40 hover:text-emerald-400 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 快速聯繫 */}
                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="font-display font-bold text-sm text-white/90 mb-6 uppercase tracking-widest">預約諮詢</h4>
                            <a href="#team" className="inline-block px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-bold hover:bg-emerald-500 hover:text-white transition-all duration-300">
                                免費初步診斷
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 底部版權 */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/25">
                        <p>© {currentYear} Bicome. 保留所有權利。</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

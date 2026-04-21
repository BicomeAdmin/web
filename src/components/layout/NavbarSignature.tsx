import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function NavbarSignature() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: "核心服務", href: "#services" },
        { label: "成功案例", href: "#cases" },
        { label: "方法論", href: "#methodology" },
        { label: "團隊", href: "#team" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-ink/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform overflow-hidden">
                            <img src={`${import.meta.env.BASE_URL}icon.png`} alt="Bicome Logo" className="w-6 h-6 object-contain brightness-0 invert" />
                        </div>
                        <span className="text-xl font-display font-black text-white tracking-tighter">Bicome</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-white/60 hover:text-emerald-400 font-medium transition-colors duration-300"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="px-4 py-2 bg-amber-500 text-white text-sm font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                            用戶忠誠系統
                        </button>
                        <a
                            href="#team"
                            className="px-4 py-2 bg-emerald-500 text-white text-sm font-bold rounded-lg hover:bg-emerald-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                        >
                            免費諮詢
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-white/10">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-white/60 hover:text-emerald-400 font-medium py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="flex flex-col gap-2 mt-4">
                                <button className="w-full px-4 py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-400 transition-colors">
                                    用戶忠誠系統
                                </button>
                                <a
                                    href="#team"
                                    className="w-full px-4 py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-400 transition-colors text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    免費諮詢
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

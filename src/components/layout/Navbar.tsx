import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <img
                            src="https://static.readdy.ai/image/b2dbfa5c4fa9886922c19710ac4fc101/50bc65c791a21dcf044a54e5b294b29c.png"
                            alt="Bicome Logo"
                            className="w-10 h-10 object-contain"
                        />
                        <div className="text-2xl font-black text-white tracking-tighter">
                            BICOME
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-10">
                        <a href="#services" className="text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-widest">服務項目</a>
                        <a href="#cases" className="text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-widest">成功案例</a>
                        <a href="#about" className="text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-widest">關於我們</a>
                        <div className="flex items-center space-x-4">
                            <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-black hover:bg-accent transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                免費諮詢
                            </button>
                            <button className="bg-highlight text-white px-6 py-2.5 rounded-full text-sm font-black hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(225,0,126,0.3)]">
                                用戶忠誠系統
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

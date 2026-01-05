export default function NavbarWebFX() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm font-sans">
            {/* Top Utility Bar - Revenue Tracking */}
            <div className="bg-webfx-navy text-white text-[10px] md:text-xs py-2 px-8 flex justify-between items-center font-bold tracking-tight">
                <div className="flex items-center space-x-6 overflow-hidden max-w-2xl">
                    <span className="whitespace-nowrap flex items-center">
                        <span className="w-2 h-2 bg-webfx-teal rounded-full mr-2 animate-pulse"></span>
                        Bicome 為客戶創造總收益: <span className="text-webfx-teal ml-1">$10,214,842,501+</span>
                    </span>
                    <span className="hidden md:inline whitespace-nowrap opacity-60">
                        引流潛客數: 7,847,192+
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="hover:text-webfx-blue transition-colors">聯絡我們</a>
                    <span className="opacity-20">|</span>
                    <a href="#" className="hover:text-webfx-blue transition-colors">會員登入</a>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-12">
                    <div className="text-2xl font-black text-webfx-navy tracking-tighter">
                        BICOME<span className="text-webfx-blue">.</span>
                    </div>

                    <div className="hidden lg:flex items-center space-x-8 text-sm font-bold text-webfx-navy/80">
                        <a href="#" className="hover:text-webfx-blue transition-colors border-b-2 border-transparent hover:border-webfx-blue py-1">服務項目</a>
                        <a href="#" className="hover:text-webfx-blue transition-colors border-b-2 border-transparent hover:border-webfx-blue py-1">SEO 與轉化</a>
                        <a href="#" className="hover:text-webfx-blue transition-colors border-b-2 border-transparent hover:border-webfx-blue py-1">數據工具</a>
                        <a href="#" className="hover:text-webfx-blue transition-colors border-b-2 border-transparent hover:border-webfx-blue py-1">成功案例</a>
                        <a href="#" className="hover:text-webfx-blue transition-colors border-b-2 border-transparent hover:border-webfx-blue py-1">知識庫</a>
                    </div>
                </div>

                <div className="flex items-center space-x-6">
                    <div className="hidden xl:block text-right">
                        <div className="text-[10px] font-bold text-webfx-navy/40 uppercase tracking-widest">立即諮詢</div>
                        <div className="text-lg font-black text-webfx-navy">0800-XXX-XXX</div>
                    </div>
                    <button className="bg-webfx-blue text-white px-6 py-3 rounded-md text-sm font-black hover:bg-webfx-navy transition-all shadow-md">
                        取得免費成長方案
                    </button>
                </div>
            </div>
        </nav>
    );
}

import { useEffect, useState } from 'react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="回到頂部"
            className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gray-900 text-white shadow-2xl shadow-gray-900/30 border border-white/10 flex items-center justify-center hover:bg-emerald-600 hover:shadow-emerald-500/40 transition-all ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
        >
            <i className="ri-arrow-up-line text-xl" aria-hidden="true"></i>
        </button>
    );
}

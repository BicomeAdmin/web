import HeroConsultant from '../../components/home/HeroConsultant';
import StrategicRoadmap from '../../components/home/StrategicRoadmap';
import SuccessNarrative from '../../components/home/SuccessNarrative';
import BicomeCloudFX from '../../components/home/BicomeCloudFX';
import DetailedServicesWebFX from '../../components/home/DetailedServicesWebFX';
import Gamification from '../../components/home/Gamification';
import Footer from '../../components/layout/Footer';

export default function ConsultantPage() {
    return (
        <div className="min-h-screen bg-consultant-silk font-sans selection:bg-consultant-gold selection:text-white relative">
            {/* Elegant Global Scroll Overlay */}
            <div className="fixed top-0 left-0 w-full h-[6px] bg-consultant-gold/30 z-[60]">
                <div className="h-full bg-consultant-gold w-1/4"></div>
            </div>

            {/* Global Authority Navigation (Simple, Static to keep focus) */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-10 flex justify-between items-center pointer-events-none">
                <div className="text-3xl font-serif font-black tracking-tighter text-consultant-onyx pointer-events-auto cursor-pointer">
                    BICOME<span className="text-consultant-gold">.</span>
                </div>
                <div className="flex items-center space-x-8 pointer-events-auto">
                    <button className="text-[10px] font-black tracking-[.4em] text-consultant-onyx/40 uppercase hover:text-consultant-gold transition-colors">Partner Access</button>
                    <button className="bg-consultant-onyx text-consultant-silk px-8 py-4 text-[10px] font-black tracking-[.4em] uppercase hover:bg-consultant-gold transition-all">Consult with Us</button>
                </div>
            </nav>

            <main>
                <HeroConsultant />

                {/* The Strategy Layer */}
                <StrategicRoadmap />

                {/* The Success Narrative (Dark Anchor) */}
                <SuccessNarrative />

                {/* Authority Technology (CloudFX) */}
                <div className="bg-white">
                    <BicomeCloudFX />
                </div>

                {/* Gamification Core - Shown as a mechanism of success */}
                <div className="bg-consultant-silk py-24 border-y border-black/5">
                    <div className="max-w-7xl mx-auto px-8 mb-16">
                        <div className="text-[10px] font-black tracking-[0.5em] text-consultant-gold uppercase mb-6">Internal Propulsion</div>
                        <h2 className="text-4xl font-serif font-medium text-consultant-onyx">深植品牌基因的遊戲化動力</h2>
                    </div>
                    <Gamification />
                </div>

                {/* Delivery Layer (Detailed Services) */}
                <DetailedServicesWebFX />
            </main>

            <Footer />
        </div>
    );
}

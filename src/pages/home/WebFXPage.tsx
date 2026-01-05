import NavbarWebFX from '../../components/layout/NavbarWebFX';
import HeroWebFX from '../../components/home/HeroWebFX';
import BicomeCloudFX from '../../components/home/BicomeCloudFX';
import DetailedServicesWebFX from '../../components/home/DetailedServicesWebFX';
import IndustrySolutions from '../../components/home/IndustrySolutions';
import MethodologyWebFX from '../../components/home/MethodologyWebFX';
import CaseStudiesWebFX from '../../components/home/CaseStudiesWebFX';
import Footer from '../../components/layout/Footer';

export default function WebFXPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-webfx-blue selection:text-white relative">
            {/* Global Professional Grid Background for consistency */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(#1e73be 1px, transparent 1px), linear-gradient(90deg, #1e73be 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
            </div>

            <NavbarWebFX />

            <main className="relative z-10">
                <HeroWebFX />

                {/* Seamless Transitions using subtle shading */}
                <div className="relative">
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-webfx-gray/30 pointer-events-none"></div>
                    <IndustrySolutions />
                </div>

                <DetailedServicesWebFX />

                {/* Stronger visual anchor section (Dark/Navy) */}
                <BicomeCloudFX />

                {/* Methodology with cohesive white-label look */}
                <div className="relative">
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-webfx-navy to-white pointer-events-none opacity-10"></div>
                    <MethodologyWebFX />
                </div>

                {/* Performance Cases with reporting style */}
                <CaseStudiesWebFX />
            </main>

            <Footer />
        </div>
    );
}

import NavbarSignature from '../../components/layout/NavbarSignature';
import HeroCEO from '../../components/home/HeroCEO';
import CoreServices from '../../components/home/CoreServices';
import IndustryMatrix from '../../components/home/IndustryMatrix';
import MethodologyCEO from '../../components/home/MethodologyCEO';
import PrivateDomainFramework from '../../components/home/PrivateDomainFramework';
import SuccessVideos from '../../components/home/SuccessVideos';
import CulturePillars from '../../components/home/CulturePillars';
import BicomeCloudFX from '../../components/home/BicomeCloudFX';
import Footer from '../../components/layout/Footer';

export default function SignaturePage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-emerald-500 selection:text-white relative">
            {/* Global Authority Navigation */}
            <NavbarSignature />

            <main>
                {/* 1. CEO Signature Hero - The Anchor (深色) */}
                <HeroCEO />

                {/* 2. Core services - Business Foundations */}
                <CoreServices />

                {/* 3. Industry Matrix - The Credibility (亮色) */}
                <IndustryMatrix />

                {/* 3. methodology - The Intelligence (漸層灰) */}
                <MethodologyCEO />

                {/* 4. Private Domain Framework - 三階段/四步驟/九宮格 */}
                <PrivateDomainFramework />

                {/* 4. Short Video influence - The Traffic (亮色) */}
                <SuccessVideos />

                {/* 5. Team & Culture - The Soul (漸層灰) */}
                <CulturePillars />

                {/* 6. Technological Authority (深色) */}
                <BicomeCloudFX />
            </main>

            <Footer />
        </div>
    );
}

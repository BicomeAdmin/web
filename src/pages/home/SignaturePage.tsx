import NavbarSignature from '../../components/layout/NavbarSignature';
import HeroCEO from '../../components/home/HeroCEO';
import CoreServices from '../../components/home/CoreServices';
import IndustryMatrix from '../../components/home/IndustryMatrix';
import MethodologyCEO from '../../components/home/MethodologyCEO';
import PrivateDomainFramework from '../../components/home/PrivateDomainFramework';
import SuccessVideos from '../../components/home/SuccessVideos';
import CulturePillars from '../../components/home/CulturePillars';
import BicomeCloudFX from '../../components/home/BicomeCloudFX';
import AIHighlights from '../../components/home/AIHighlights';
import TeamSection from '../../components/home/TeamSection';
import Footer from '../../components/layout/Footer';
import BackToTop from '../../components/layout/BackToTop';

export default function SignaturePage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-emerald-500 selection:text-white relative">
            {/* Global Authority Navigation */}
            <NavbarSignature />

            <main>
                {/* 1. Hero - Anchor (深色) */}
                <HeroCEO />

                {/* 2. Core Services - 商業基礎 */}
                <CoreServices />

                {/* 3. Industry Matrix - 社群信任證明（亮色） */}
                <IndustryMatrix />

                {/* 4. BicomeCloudFX - 技術與產品力（深色，節奏錨點） */}
                <BicomeCloudFX />

                {/* 4.5 AI Highlights - AI 具體能做到什麼（深→亮過渡） */}
                <AIHighlights />

                {/* 5. Methodology - 方法論（亮色） */}
                <MethodologyCEO />

                {/* 6. Private Domain Framework - 三階段/四步驟（亮色） */}
                <PrivateDomainFramework />

                {/* 7. Success Videos - 操盤影片（亮色） */}
                <SuccessVideos />

                {/* 8. Culture Pillars - 企業文化（亮色） */}
                <CulturePillars />

                {/* 9. Team - 聯絡 CTA（深色） */}
                <TeamSection />
            </main>

            <Footer />
            <BackToTop />
        </div>
    );
}

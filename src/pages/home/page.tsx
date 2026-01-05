import Navbar from '../../components/layout/Navbar';
import Hero from '../../components/home/Hero';
import Gamification from '../../components/home/Gamification';
import Methodology from '../../components/home/Methodology';
import CaseStudies from '../../components/home/CaseStudies';
import ShortVideos from '../../components/home/ShortVideos';
import TeamCulture from '../../components/home/TeamCulture';
import Footer from '../../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Gamification />
        <Methodology />
        <CaseStudies />
        <ShortVideos />
        <TeamCulture />
      </main>
      <Footer />
    </div>
  );
}
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MarqueeBanner } from "./components/MarqueeBanner";
import { AboutSection } from "./components/AboutSection";
import { StatsCounter } from "./components/StatsCounter";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#0A0A0A]" style={{ overflowX: "clip" }}>
      <Navbar />

      {/* Stacking scroll - each section layers over the previous with
          ascending z-index and solid backgrounds for the overlay effect. */}
      <div className="relative z-[1]">
        <HeroSection />
      </div>
      <div className="relative z-[2] shadow-[0_-8px_30px_rgba(0,0,0,0.25)]">
        <MarqueeBanner />
      </div>
      <div className="relative z-[3] shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        <AboutSection />
      </div>
      <div className="relative z-[4] shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <StatsCounter />
      </div>
      <div className="relative z-[5] shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        <ServicesSection />
      </div>
      <div className="relative z-[6] shadow-[0_-8px_30px_rgba(0,0,0,0.25)]">
        <WhyChooseUs />
      </div>
      <div className="relative z-[7] shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <Footer />
      </div>
    </div>
  );
}
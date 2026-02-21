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

      {/* Stacking scroll - each section is sticky so it pins in place
          while the next section scrolls over it. Ascending z-index
          ensures each subsequent section layers on top. */}
      <div className="relative z-[1] sticky top-0">
        <HeroSection />
      </div>
      <div className="relative z-[2] sticky top-0 shadow-[0_-8px_30px_rgba(0,0,0,0.25)]">
        <MarqueeBanner />
      </div>
      <div className="relative z-[3] sticky top-0 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        <AboutSection />
      </div>
      <div className="relative z-[4] sticky top-0 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <StatsCounter />
      </div>
      <div className="relative z-[5] sticky top-0 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        <ServicesSection />
      </div>
      <div className="relative z-[6] sticky top-0 shadow-[0_-8px_30px_rgba(0,0,0,0.25)]">
        <WhyChooseUs />
      </div>
      <div className="relative z-[7] shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <Footer />
      </div>
    </div>
  );
}
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MarqueeBanner } from "./components/MarqueeBanner";
import { AboutSection } from "./components/AboutSection";
import { StatsCounter } from "./components/StatsCounter";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Footer } from "./components/Footer";
import { StickySection } from "./components/StickySection";

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#0A0A0A]" style={{ overflowX: "clip" }}>
      <Navbar />

      {/* Stacking scroll — each section is sticky and gets enough scroll
          room so its full content is visible before the next one covers it.
          The Footer is the last section and doesn't need sticky. */}
      <StickySection zIndex={1}>
        <HeroSection />
      </StickySection>
      <StickySection zIndex={2} className="shadow-[0_-8px_30px_rgba(0,0,0,0.25)]">
        <MarqueeBanner />
      </StickySection>
      <StickySection zIndex={3} className="shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        <AboutSection />
      </StickySection>
      <StickySection zIndex={4} className="shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <StatsCounter />
      </StickySection>
      <StickySection zIndex={5} className="shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        <ServicesSection />
      </StickySection>
      <StickySection zIndex={6} className="shadow-[0_-8px_30px_rgba(0,0,0,0.25)]">
        <WhyChooseUs />
      </StickySection>
      <div className="relative z-[7] shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <Footer />
      </div>
    </div>
  );
}
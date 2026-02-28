import { HeroSection } from "../components/HeroSection";
import { MarqueeBanner } from "../components/MarqueeBanner";
import { AboutSection } from "../components/AboutSection";
import { StatsCounter } from "../components/StatsCounter";
import { ServicesSection } from "../components/ServicesSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { IndustriesOverview } from "../components/IndustriesOverview";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { CTABanner } from "../components/CTABanner";
import { StickySection } from "../components/StickySection";
import { useSEO } from "../hooks/useSEO";

export function Home() {
    useSEO(
        "Elvera Solutions | Elevating Brands in the Digital Era",
        "Elvera Solutions is a premier UAE-based digital agency specializing in software engineering, digital marketing, media production, and AI automation."
    );

    return (
        <>
            {/* Stacking scroll — each section is sticky and gets enough scroll
          room so its full content is visible before the next one covers it. */}
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
            <StickySection zIndex={7} className="shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
                <IndustriesOverview />
            </StickySection>
            <StickySection zIndex={8} className="shadow-[0_-8px_30px_rgba(0,0,0,0.25)]">
                <TestimonialsSection />
            </StickySection>
            <StickySection zIndex={9} className="shadow-[0_-8px_30px_rgba(0,0,0,0.3)]">
                <CTABanner />
            </StickySection>
        </>
    );
}

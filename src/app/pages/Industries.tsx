import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ShoppingBag, HeartPulse, Building2, Rocket, Wallet } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CTABanner } from "../components/CTABanner";
import { useSEO } from "../hooks/useSEO";

function IndustriesHero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-[#0A0A0A] overflow-hidden">
            <div className="absolute inset-0">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400"
                    alt="Corporate global business"
                    className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#9B59B6]/[0.08] rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center pt-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-[#F1C40F] text-sm font-medium tracking-widest mb-6">
                        OUR INDUSTRIES
                    </span>
                    <h1
                        className="font-['Playfair_Display'] text-white mb-6"
                        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 500, lineHeight: 1.15 }}
                    >
                        Expertise That <span className="italic text-[#9B59B6]">Spans Sectors</span>
                    </h1>
                    <p
                        className="font-['Inter'] text-white/60 max-w-2xl mx-auto"
                        style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: 300, lineHeight: 1.6 }}
                    >
                        We don’t just understand digital; we understand your business.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function IndustryDetails() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const industries = [
        {
            icon: ShoppingBag,
            title: "E-commerce & Retail",
            desc: "Scaling online stores with high-converting funnels, seamless UX, and targeted retention strategies.",
            img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
            icon: HeartPulse,
            title: "Healthcare & Wellness",
            desc: "Building trust-driven digital experiences, from telemedicine apps to clinic marketing campaigns.",
            img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
            icon: Building2,
            title: "Real Estate & Construction",
            desc: "Showcasing properties through immersive 3D web experiences, cinematic video, and lead-gen funnels.",
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
            icon: Rocket,
            title: "Tech Startups",
            desc: "Fast-tracking growth with scalable MVPs, aggressive user acquisition, and investor-ready pitch materials.",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
        {
            icon: Wallet,
            title: "Finance & Fintech",
            desc: "Creating secure, intuitive interfaces that demystify complex financial products and drive user adoption.",
            img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        },
    ];

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-white relative">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #0A0A0A 1px, transparent 0)", backgroundSize: "48px 48px" }} />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group bg-[#FAFAFA] rounded-[2rem] overflow-hidden border border-black/5 hover:border-[#9B59B6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#9B59B6]/5"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <ImageWithFallback
                                    src={ind.img}
                                    alt={ind.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                                    <ind.icon size={24} className="text-[#9B59B6]" />
                                </div>
                            </div>

                            <div className="p-8 pt-4">
                                <h3 className="font-['Playfair_Display'] text-2xl text-[#0A0A0A] mb-4">{ind.title}</h3>
                                <p className="font-['Inter'] text-black/60 leading-relaxed font-light">
                                    {ind.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Industries() {
    useSEO(
        "Industries | Elvera Solutions",
        "We deliver tailored digital solutions for key sectors including E-commerce, Healthcare, Real Estate, Tech Startups, and Fintech."
    );

    return (
        <main className="min-h-screen bg-white selection:bg-[#9B59B6]/30 selection:text-[#0A0A0A]">
            <IndustriesHero />
            <IndustryDetails />
            <CTABanner />
        </main>
    );
}

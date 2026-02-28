import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CTABanner } from "../components/CTABanner";
import { useSEO } from "../hooks/useSEO";

function PortfolioHero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-[#0A0A0A] overflow-hidden">
            <div className="absolute inset-0">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400"
                    alt="Data and analytics overlay"
                    className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9B59B6]/[0.08] rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center pt-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-[#F1C40F] text-sm font-medium tracking-widest mb-6">
                        OUR WORK
                    </span>
                    <h1
                        className="font-['Playfair_Display'] text-white mb-6"
                        style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 500, lineHeight: 1.1 }}
                    >
                        Proof of <span className="italic text-[#9B59B6]">Performance</span>
                    </h1>
                    <p
                        className="font-['Inter'] text-white/60 max-w-2xl mx-auto"
                        style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: 300, lineHeight: 1.6 }}
                    >
                        Explore how we’ve helped brands achieve digital dominance.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function CaseStudies() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Tech", "E-commerce", "Government", "Real Estate"];

    const projects = [
        {
            title: "E-Commerce Transformation",
            industry: "Retail / E-commerce",
            category: "E-commerce",
            result: "150% Increase in Online Sales",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        },
        {
            title: "Corporate Rebranding",
            industry: "Real Estate",
            category: "Real Estate",
            result: "Award-Winning Corporate Identity",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        },
        {
            title: "Government Portal Redesign",
            industry: "Public Sector",
            category: "Government",
            result: "Streamlined Citizen Services",
            image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        },
        {
            title: "Launch Campaign",
            industry: "Tech Startup",
            category: "Tech",
            result: "10k+ waitlist signups in 48 hours",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        },
    ];

    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-[#FAFAFA] relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2.5 rounded-full font-['Inter'] text-sm font-medium transition-all duration-300 ${filter === cat
                                ? "bg-[#0A0A0A] text-white shadow-lg"
                                : "bg-white text-black/60 border border-black/10 hover:border-[#9B59B6]/50 hover:text-[#9B59B6]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div layout className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-xl shadow-black/[0.03]">
                                    <ImageWithFallback
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                                    />
                                    <div className="absolute inset-0 bg-[#0A0A0A]/20 group-hover:bg-[#0A0A0A]/40 transition-colors duration-500" />
                                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <ArrowUpRight size={20} className="text-[#0A0A0A]" />
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full font-['Inter'] text-sm font-semibold text-[#9B59B6] mb-3">
                                            {project.industry}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="font-['Playfair_Display'] text-3xl text-[#0A0A0A] mb-3 group-hover:text-[#9B59B6] transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-3">
                                    <div className="w-[2px] h-6 bg-[#F1C40F]" />
                                    <p className="font-['Inter'] text-black/60 font-medium">
                                        Result: <span className="text-black/90 font-semibold">{project.result}</span>
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

export function Portfolio() {
    useSEO(
        "Our Work | Elvera Solutions",
        "View our recent success stories. See how Elvera Solutions has driven 150%+ growth, executed award-winning rebrands, and launched scalable tech platforms."
    );

    return (
        <main className="min-h-screen bg-white selection:bg-[#9B59B6]/30 selection:text-[#0A0A0A]">
            <PortfolioHero />
            <CaseStudies />
            <CTABanner />
        </main>
    );
}

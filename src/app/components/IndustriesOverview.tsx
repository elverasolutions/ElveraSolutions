import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { ArrowRight, ShoppingBag, Landmark, HeartPulse, Building2, Rocket, Wallet } from "lucide-react";
import { useLiteAnimations } from "./useMediaQuery";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const industries = [
    { icon: ShoppingBag, name: "E-commerce & Retail" },
    { icon: Landmark, name: "Government & Public Sector" },
    { icon: HeartPulse, name: "Healthcare & Wellness" },
    { icon: Building2, name: "Real Estate & Construction" },
    { icon: Rocket, name: "Tech Startups" },
    { icon: Wallet, name: "Finance & Fintech" },
];

export function IndustriesOverview() {
    const lite = useLiteAnimations();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], lite ? [0, 0] : [60, -60]);

    const dur = lite ? 0.4 : 0.8;
    const dl = (v: number) => (lite ? v * 0.25 : v);

    return (
        <section
            id="industries-overview"
            ref={sectionRef}
            className="relative py-20 lg:py-36 overflow-hidden bg-white"
        >
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Text & Grid */}
                    <motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6 }}
                            className="mb-4 flex items-center gap-4"
                        >
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : {}}
                                transition={{ duration: dur, delay: dl(0.2) }}
                                className="w-12 h-[1px] bg-[#9B59B6] origin-left"
                            />
                            <span
                                className="font-['Inter'] text-[#9B59B6] tracking-[0.25em]"
                                style={{ fontSize: "0.7rem", fontWeight: 500 }}
                            >
                                INDUSTRIES
                            </span>
                        </motion.div>

                        <div className="mb-10 overflow-hidden">
                            <motion.h2
                                initial={{ y: "100%" }}
                                animate={isInView ? { y: 0 } : {}}
                                transition={{
                                    duration: lite ? 0.5 : 1,
                                    delay: dl(0.1),
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="font-['Playfair_Display'] text-[#0A0A0A]"
                                style={{
                                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                                    fontWeight: 500,
                                    lineHeight: 1.15,
                                }}
                            >
                                Empowering{" "}
                                <span className="italic text-[#F1C40F]">Key Sectors</span>
                            </motion.h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {industries.map((ind, i) => (
                                <motion.div
                                    key={ind.name}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: dur, delay: dl(0.3 + i * 0.05) }}
                                    className="flex items-center gap-3 p-4 rounded-xl border border-[#0A0A0A]/5 hover:bg-[#F4ECF7]/40 hover:border-[#9B59B6]/20 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#9B59B6]/10 flex items-center justify-center shrink-0">
                                        <ind.icon size={18} className="text-[#9B59B6]" />
                                    </div>
                                    <span className="font-['Inter'] text-[#0A0A0A] font-medium text-sm">
                                        {ind.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: dur, delay: dl(0.7) }}
                        >
                            <Link
                                to="/industries"
                                onClick={() => window.scrollTo(0, 0)}
                                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white overflow-hidden cursor-pointer"
                            >
                                <span
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #9B59B6, #7D3C98, #9B59B6, #AF7AC5, #9B59B6)",
                                        backgroundSize: "400% 400%",
                                        animation: "gradientShift 4s ease infinite",
                                    }}
                                />
                                <span
                                    className="relative z-10 font-['Inter']"
                                    style={{ fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.05em" }}
                                >
                                    See All Industries
                                </span>
                                <ArrowRight
                                    size={16}
                                    className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300"
                                />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right - Image */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: lite ? 0.5 : 1.2, delay: dl(0.2) }}
                            style={lite ? undefined : { y: imageY }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                                alt="Industries overview tech"
                                className="w-full h-[400px] lg:h-[550px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#9B59B6]/40 via-transparent to-transparent mix-blend-multiply" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLiteAnimations } from "./useMediaQuery";

const testimonials = [
    {
        quote: "Elvera didn’t just build us a website; they transformed our entire digital presence. Our engagement has tripled.",
        author: "Tech Startup Founder",
    },
    {
        quote: "Professional, fast, and incredibly creative. Highly recommend the team at Elvera.",
        author: "E-commerce Director",
    },
    {
        quote: "They understand exactly what a modern brand needs to thrive online.",
        author: "Real Estate Developer",
    },
];

export function TestimonialsSection() {
    const lite = useLiteAnimations();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    const [active, setActive] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isInView]);

    const next = () => setActive((prev) => (prev + 1) % testimonials.length);
    const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    const dur = lite ? 0.4 : 0.8;
    const dl = (v: number) => (lite ? v * 0.25 : v);

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="relative py-20 lg:py-36 bg-[#0A0A0A] overflow-hidden"
        >
            {/* Background Orbs */}
            {!lite && (
                <>
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#9B59B6]/[0.02] rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F1C40F]/[0.015] rounded-full blur-[80px]" />
                </>
            )}

            <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center gap-4 mb-4"
                >
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: dur, delay: dl(0.2) }}
                        className="w-8 h-[1px] bg-[#F1C40F]/50 origin-right"
                    />
                    <span
                        className="font-['Inter'] text-[#F1C40F] tracking-[0.25em]"
                        style={{ fontSize: "0.7rem", fontWeight: 500 }}
                    >
                        TESTIMONIALS
                    </span>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: dur, delay: dl(0.2) }}
                        className="w-8 h-[1px] bg-[#F1C40F]/50 origin-left"
                    />
                </motion.div>

                <div className="overflow-hidden mb-12 lg:mb-20">
                    <motion.h2
                        initial={{ y: "110%" }}
                        animate={isInView ? { y: 0 } : {}}
                        transition={{
                            duration: lite ? 0.5 : 1,
                            delay: dl(0.15),
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="font-['Playfair_Display'] text-white"
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3.2rem)",
                            fontWeight: 500,
                            lineHeight: 1.15,
                        }}
                    >
                        Client <span className="italic text-[#9B59B6]">Success Stories</span>
                    </motion.h2>
                </div>

                <div className="relative max-w-3xl mx-auto pb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: dur, delay: dl(0.3) }}
                        className="mx-auto w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10"
                    >
                        <Quote size={20} className="text-[#9B59B6]" />
                    </motion.div>

                    <div className="min-h-[160px] flex items-center justify-center relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full"
                            >
                                <p
                                    className="font-['Playfair_Display'] text-white/90 mb-8"
                                    style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", lineHeight: 1.6 }}
                                >
                                    "{testimonials[active].quote}"
                                </p>
                                <p className="font-['Inter'] text-[#F1C40F] tracking-wide" style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                                    — {testimonials[active].author}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-6 mt-10">
                        <button
                            onClick={prev}
                            className="w-10 h-10 rounded-full border border-white/10 flex flex-col items-center justify-center text-white/50 hover:text-white hover:border-[#9B59B6] transition-all duration-300"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${active === i ? "w-8 bg-[#9B59B6]" : "w-2 bg-white/20 hover:bg-white/40"}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#9B59B6] transition-all duration-300"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

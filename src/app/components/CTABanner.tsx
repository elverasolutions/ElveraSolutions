import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { EnquiryModal } from "./EnquiryModal";

export function CTABanner() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-40px" });
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 lg:py-32 bg-[#9B59B6] overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#9B59B6] to-[#7D3C98]" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.05] rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F1C40F]/[0.1] rounded-full blur-[60px]" />

            <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="font-['Playfair_Display'] text-white mb-6"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1.1 }}
                >
                    Let’s Build Something <span className="italic text-[#F1C40F]">Extraordinary</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-['Inter'] text-white/80 mb-10 max-w-2xl mx-auto"
                    style={{ fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.6 }}
                >
                    Join the brands that trust Elvera Solutions to scale their digital presence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <button
                        onClick={() => setModalOpen(true)}
                        className="group font-['Inter'] relative flex items-center gap-3 px-10 py-5 rounded-full bg-[#150A1E] text-white overflow-hidden cursor-pointer"
                        style={{ fontSize: "0.95rem", fontWeight: 500, letterSpacing: "0.05em" }}
                    >
                        <span className="absolute inset-0 w-full h-full bg-[#0A0A0A] group-hover:bg-[#F1C40F] transition-colors duration-500" />
                        <span className="relative z-10 group-hover:text-[#0A0A0A] transition-colors duration-300">Start Your Project</span>
                        <ArrowRight size={18} className="relative z-10 group-hover:text-[#0A0A0A] group-hover:translate-x-1.5 transition-all duration-300" />
                    </button>
                </motion.div>
            </div>

            <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
}

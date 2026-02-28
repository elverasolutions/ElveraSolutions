import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { ShieldCheck, Target, Compass, Award, Building2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CTABanner } from "../components/CTABanner";
import { useSEO } from "../hooks/useSEO";

function AboutHero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-[#0A0A0A] overflow-hidden">
            <div className="absolute inset-0">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400"
                    alt="Modern office architecture"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#9B59B6]/[0.05] rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-[#F1C40F] text-sm font-medium tracking-widest mb-6">
                        EST. IN THE UAE
                    </span>
                    <h1
                        className="font-['Playfair_Display'] text-white mb-6"
                        style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 500, lineHeight: 1.1 }}
                    >
                        The Elvera <span className="italic text-[#9B59B6]">Story</span>
                    </h1>
                    <p
                        className="font-['Inter'] text-white/60 max-w-2xl mx-auto"
                        style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: 300 }}
                    >
                        Founded in the UAE. Built for the World.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function AboutStory() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center"
                >
                    <div className="md:col-span-5 relative">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                                alt="Elvera Team Collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#9B59B6]/40 via-transparent to-transparent mix-blend-multiply" />
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-[1px] bg-[#9B59B6]" />
                            <span className="font-['Inter'] text-[#9B59B6] tracking-[0.25em] text-sm font-medium">
                                OUR ORIGINS
                            </span>
                        </div>
                        <h2 className="font-['Playfair_Display'] text-[#0A0A0A] text-4xl lg:text-5xl mb-8 leading-tight">
                            One Unified <br /><span className="italic text-[#F1C40F]">Digital Force</span>
                        </h2>
                        <p className="font-['Inter'] text-[#0A0A0A]/70 text-lg leading-relaxed mb-6 font-light">
                            Elvera Solutions was born from a simple thesis: businesses shouldn't have to hire three different agencies to build a brand, develop a platform, and run a campaign.
                        </p>
                        <p className="font-['Inter'] text-[#0A0A0A]/60 text-base leading-relaxed mb-6 font-light">
                            We brought together top-tier engineers, creative directors, and growth strategists under one roof in Sharjah Media City. Today, we deliver integrated digital excellence to clients ranging from ambitious startups to established enterprises.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function MissionVision() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const values = [
        { title: "Excellence Without Compromise", desc: "We deliver best-in-class quality across all touchpoints.", icon: Award },
        { title: "Data-Driven Creativity", desc: "Where artistic vision meets strategic analytics.", icon: Target },
        { title: "Transparent Partnerships", desc: "Honest communication and unwavering alignment with your goals.", icon: ShieldCheck },
    ];

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-[#FAFAFA] relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-10 lg:p-14 rounded-[2rem] border border-black/5 shadow-xl shadow-black/[0.02]"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-[#9B59B6]/10 flex items-center justify-center mb-8">
                            <Target size={28} className="text-[#9B59B6]" />
                        </div>
                        <h3 className="font-['Playfair_Display'] text-3xl mb-4">Our Mission</h3>
                        <p className="font-['Inter'] text-black/60 text-lg leading-relaxed font-light">
                            To architect digital solutions that drive measurable growth and elevate brand perception.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#0A0A0A] p-10 lg:p-14 rounded-[2rem] shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F1C40F]/10 rounded-full blur-[60px]" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-[#F1C40F]/10 flex items-center justify-center mb-8">
                                <Compass size={28} className="text-[#F1C40F]" />
                            </div>
                            <h3 className="font-['Playfair_Display'] text-white text-3xl mb-4">Our Vision</h3>
                            <p className="font-['Inter'] text-white/70 text-lg leading-relaxed font-light">
                                To be the MENA region’s premier partner for end-to-end digital transformation.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center font-['Inter'] text-[#9B59B6] tracking-[0.2em] text-sm font-semibold mb-12"
                    >
                        OUR CORE VALUES
                    </motion.h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                                className="text-center"
                            >
                                <div className="mx-auto w-16 h-16 rounded-full bg-white border border-black/5 flex items-center justify-center mb-6 shadow-sm">
                                    <v.icon size={24} className="text-[#0A0A0A]" />
                                </div>
                                <h4 className="font-['Inter'] text-xl font-medium mb-3">{v.title}</h4>
                                <p className="font-['Inter'] text-black/50 font-light">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TrustModule() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FAFAFA] border border-[#0A0A0A]/5 mb-8 shadow-inner">
                        <Building2 size={32} className="text-[#9B59B6]" />
                    </div>
                    <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl mb-6">
                        UAE Licensed & <span className="italic text-[#9B59B6]">Globally Ready</span>
                    </h2>
                    <p className="font-['Inter'] text-lg text-black/60 font-light leading-relaxed mb-10">
                        Proudly licensed in the Sharjah Media City Free Zone. We operate with world-class standards, providing a secure and trusted partnership for local and international clients across all our services.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="px-6 py-2 rounded-full border border-black/10 text-sm font-medium text-black/70">Sharjah Media City</span>
                        <span className="px-6 py-2 rounded-full border border-black/10 text-sm font-medium text-black/70">Licensed Agency</span>
                        <span className="px-6 py-2 rounded-full border border-black/10 text-sm font-medium text-black/70">Global Reach</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function AboutTeam() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const team = [
        { name: "Executive Team", role: "Leadership", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" },
        { name: "Creative Directors", role: "Design & Media", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" },
        { name: "Lead Engineers", role: "Technology", img: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" },
        { name: "Growth Strategists", role: "Marketing", img: "https://images.unsplash.com/photo-1550859491-1ea544eb4bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" },
    ];

    return (
        <section ref={ref} className="py-24 bg-[#FAFAFA] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        <div className="w-8 h-[1px] bg-[#9B59B6]" />
                        <span className="font-['Inter'] text-[#9B59B6] tracking-[0.25em] text-sm font-medium">LEADERSHIP</span>
                        <div className="w-8 h-[1px] bg-[#9B59B6]" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-['Playfair_Display'] text-[#0A0A0A] text-4xl lg:text-5xl"
                    >
                        The Minds Behind the Magic
                    </motion.h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] mb-6 rounded-2xl overflow-hidden pointer-events-none">
                                <ImageWithFallback src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <h3 className="font-['Inter'] text-xl font-semibold text-[#0A0A0A] mb-1">{member.name}</h3>
                            <p className="font-['Inter'] text-[#9B59B6] font-medium text-sm tracking-wide">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function About() {
    useSEO(
        "About Us | Elvera Solutions",
        "Discover the Elvera story. We are a Sharjah Media City licensed digital powerhouse integrating technology, marketing, and creative production."
    );

    return (
        <main className="min-h-screen bg-white selection:bg-[#9B59B6]/30 selection:text-[#0A0A0A]">
            <AboutHero />
            <AboutStory />
            <MissionVision />
            <TrustModule />
            <AboutTeam />
            <CTABanner />
        </main>
    );
}


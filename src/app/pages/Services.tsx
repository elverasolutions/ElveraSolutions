import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Terminal, AppWindow, LineChart, MessageCircle, Camera, Cpu } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CTABanner } from "../components/CTABanner";
import { useSEO } from "../hooks/useSEO";

function ServicesHero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 bg-[#0A0A0A] overflow-hidden">
            <div className="absolute inset-0">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400"
                    alt="Digital network connections"
                    className="w-full h-full object-cover opacity-30 mix-blend-color-dodge"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]" />
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#9B59B6]/[0.05] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F1C40F]/[0.05] rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center pt-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-[#9B59B6] text-sm font-medium tracking-widest mb-6">
                        OUR CAPABILITIES
                    </span>
                    <h1
                        className="font-['Playfair_Display'] text-white mb-6"
                        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 500, lineHeight: 1.15 }}
                    >
                        End-to-End <span className="italic text-[#F1C40F]">Digital Solutions</span>
                    </h1>
                    <p
                        className="font-['Inter'] text-white/60 max-w-3xl mx-auto"
                        style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: 300, lineHeight: 1.6 }}
                    >
                        From foundational architecture to exponential growth, we provide everything your brand needs to succeed.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function CapabilitiesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const services = [
        {
            icon: Terminal,
            title: "Software Engineering",
            items: ["Custom Web Applications", "SaaS Development", "Enterprise Software Solutions"],
            color: "from-[#9B59B6] to-[#7D3C98]",
        },
        {
            icon: AppWindow,
            title: "Web & App Development",
            items: ["High-Performance Corporate Websites", "E-commerce Platforms", "React Native / iOS & Android Apps"],
            color: "from-[#F1C40F] to-[#D4AC0D]",
        },
        {
            icon: LineChart,
            title: "Digital Marketing & SEO",
            items: ["Search Engine Optimization", "Paid Media (PPC, Meta, TikTok)", "Data-Driven Conversion Strategies"],
            color: "from-[#E74C3C] to-[#C0392B]",
        },
        {
            icon: MessageCircle,
            title: "Social Media Management",
            items: ["Content Strategy & Creation", "Community Growth", "Influencer Partnerships"],
            color: "from-[#3498DB] to-[#2980B9]",
        },
        {
            icon: Camera,
            title: "Media Production",
            items: ["Cinematic Video Production", "Professional Photography", "High-End Graphic Design"],
            color: "from-[#1ABC9C] to-[#16A085]",
        },
        {
            icon: Cpu,
            title: "Automation & AI Solutions",
            items: ["Customer Service Chatbots", "Workflow Automation", "CRM Integration"],
            color: "from-[#34495E] to-[#2C3E50]",
        },
    ];

    return (
        <section ref={ref} className="py-24 lg:py-36 bg-[#FAFAFA] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-black/[0.03] border border-black/5 group hover:shadow-2xl hover:shadow-[#9B59B6]/10 transition-all duration-500"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                                <service.icon size={26} className="relative z-10 text-[#0A0A0A]" />
                            </div>

                            <h3 className="font-['Playfair_Display'] text-[#0A0A0A] text-2xl mb-6">{service.title}</h3>

                            <ul className="space-y-4">
                                {service.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9B59B6]/50 shrink-0" />
                                        <span className="font-['Inter'] text-black/60 font-medium text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Services() {
    useSEO(
        "Our Services | Elvera Solutions",
        "Explore Elvera Solutions' end-to-end digital services, including custom web development, SEO, social media management, cinematic video production, and AI."
    );

    return (
        <main className="min-h-screen bg-white selection:bg-[#9B59B6]/30 selection:text-[#0A0A0A]">
            <ServicesHero />
            <CapabilitiesSection />
            <CTABanner />
        </main>
    );
}

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Mail, Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useSEO } from "../hooks/useSEO";

function ContactHero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-[#0A0A0A] overflow-hidden">
            <div className="absolute inset-0">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400"
                    alt="Workspace showing a laptop and coffee"
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
                        GET IN TOUCH
                    </span>
                    <h1
                        className="font-['Playfair_Display'] text-white mb-6"
                        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 500, lineHeight: 1.15 }}
                    >
                        Let’s Make It <span className="italic text-[#9B59B6]">Happen</span>
                    </h1>
                    <p
                        className="font-['Inter'] text-white/60 max-w-2xl mx-auto"
                        style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: 300, lineHeight: 1.6 }}
                    >
                        Whether you’re a startup looking for lift-off or an enterprise seeking transformation, our team is ready.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [formState, setFormState] = useState("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        setTimeout(() => setFormState("success"), 1500);
    };

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-[#FAFAFA] relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="lg:pr-8"
                    >
                        <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl text-[#0A0A0A] mb-8">
                            Reach Out to <span className="italic text-[#9B59B6]">Elvera</span>
                        </h2>
                        <p className="font-['Inter'] text-black/60 text-lg leading-relaxed mb-12 font-light">
                            Ready to elevate your digital presence? Send us a message, and we'll get back to you to discuss how we can help achieve your goals.
                        </p>

                        <div className="space-y-8 mb-16">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#9B59B6]/10 flex items-center justify-center shrink-0">
                                    <MapPin size={22} className="text-[#9B59B6]" />
                                </div>
                                <div>
                                    <h4 className="font-['Inter'] text-black/90 font-semibold mb-1">Office</h4>
                                    <p className="font-['Inter'] text-black/60">Sharjah Media City (Shams), UAE</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#9B59B6]/10 flex items-center justify-center shrink-0">
                                    <Mail size={22} className="text-[#9B59B6]" />
                                </div>
                                <div>
                                    <h4 className="font-['Inter'] text-black/90 font-semibold mb-1">Email</h4>
                                    <a href="mailto:hello@elverasolutions.com" className="font-['Inter'] text-black/60 hover:text-[#9B59B6] hover:underline transition-colors">
                                        hello@elverasolutions.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-['Inter'] text-black/90 font-semibold mb-4">Connect With Us</h4>
                            <div className="flex gap-4">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-black/50 hover:text-[#9B59B6] hover:border-[#9B59B6]/30 hover:shadow-lg transition-all duration-300">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-black/50 hover:text-[#9B59B6] hover:border-[#9B59B6]/30 hover:shadow-lg transition-all duration-300">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-black/50 hover:text-[#9B59B6] hover:border-[#9B59B6]/30 hover:shadow-lg transition-all duration-300">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-2xl shadow-black/[0.04] border border-black/5">
                            {formState === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <h3 className="font-['Playfair_Display'] text-3xl mb-4 text-[#0A0A0A]">Message Sent!</h3>
                                    <p className="text-black/60 font-['Inter']">Thank you for reaching out. We'll be in touch with you shortly.</p>
                                    <button
                                        onClick={() => setFormState("idle")}
                                        className="mt-8 px-6 py-2 rounded-full border border-black/10 hover:border-[#9B59B6] font-['Inter'] text-sm"
                                    >
                                        Send Another Inquiry
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block font-['Inter'] text-sm font-medium text-black/70 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full bg-[#FAFAFA] border border-black/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#9B59B6]/50 focus:border-[#9B59B6] transition-all font-['Inter'] text-black/90"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block font-['Inter'] text-sm font-medium text-black/70 mb-2">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full bg-[#FAFAFA] border border-black/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#9B59B6]/50 focus:border-[#9B59B6] transition-all font-['Inter'] text-black/90"
                                                placeholder="you@company.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block font-['Inter'] text-sm font-medium text-black/70 mb-2">Company Name</label>
                                            <input
                                                type="text"
                                                id="company"
                                                className="w-full bg-[#FAFAFA] border border-black/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#9B59B6]/50 focus:border-[#9B59B6] transition-all font-['Inter'] text-black/90"
                                                placeholder="Your company"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block font-['Inter'] text-sm font-medium text-black/70 mb-2">Service Required</label>
                                        <select
                                            id="service"
                                            required
                                            className="w-full bg-[#FAFAFA] border border-black/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#9B59B6]/50 focus:border-[#9B59B6] transition-all font-['Inter'] text-black/90 appearance-none"
                                        >
                                            <option value="" disabled selected>Select a primary service</option>
                                            <option value="software">Software Engineering</option>
                                            <option value="web-app">Web & App Development</option>
                                            <option value="marketing">Digital Marketing & SEO</option>
                                            <option value="media">Media Production</option>
                                            <option value="automation">Automation & AI Solutions</option>
                                            <option value="other">Other / Not Sure</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="details" className="block font-['Inter'] text-sm font-medium text-black/70 mb-2">Project Details</label>
                                        <textarea
                                            id="details"
                                            required
                                            rows={4}
                                            className="w-full bg-[#FAFAFA] border border-black/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#9B59B6]/50 focus:border-[#9B59B6] transition-all font-['Inter'] text-black/90 resize-none"
                                            placeholder="Tell us a bit about your project and goals..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={formState === "submitting"}
                                        className="w-full group font-['Inter'] relative flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-[#0A0A0A] text-white overflow-hidden cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                        style={{ fontSize: "0.95rem", fontWeight: 500, letterSpacing: "0.05em" }}
                                    >
                                        <span className="absolute inset-0 w-full h-full bg-[#9B59B6] group-hover:bg-[#8E44AD] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <span className="relative z-10 transition-colors duration-300">
                                            {formState === "submitting" ? "Sending..." : "Send Inquiry"}
                                        </span>
                                        {formState !== "submitting" && (
                                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1.5 transition-all duration-300" />
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export function Contact() {
    useSEO(
        "Contact Us | Elvera Solutions",
        "Ready to elevate your digital presence? Contact the Elvera Solutions team in the UAE. We’re ready to build, grow, and transform your brand."
    );

    return (
        <main className="min-h-screen bg-white selection:bg-[#9B59B6]/30 selection:text-[#0A0A0A]">
            <ContactHero />
            <ContactSection />
        </main>
    );
}

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { MapPin, Mail, Phone, Linkedin, Instagram, ArrowRight, MessageCircle, ChevronDown, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useSEO } from "../hooks/useSEO";

const helpOptions = [
    "Software Development",
    "Digital Marketing",
    "Social Media Management",
    "Web Design & Development",
    "Photography & Videography",
    "AI & Automation",
    "Branding Services",
    "Marketing & Advertisement",
    "Other"
];

const budgetOptions = [
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
    "Not sure yet",
];

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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [budget, setBudget] = useState("");
    const [helpType, setHelpType] = useState("");
    const [details, setDetails] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);
    const [formState, setFormState] = useState("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        setTimeout(() => setFormState("success"), 1500);
    };

    const inputBase = "w-full bg-[#150A1E]/60 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-[#9B59B6]/30 focus:border-[#9B59B6]/60 transition-all font-['Inter'] text-white placeholder-white/25 hover:border-white/20";

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
                                    <a href="mailto:contact@elverasolutions.com" className="font-['Inter'] text-black/60 hover:text-[#9B59B6] hover:underline transition-colors">
                                        contact@elverasolutions.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#9B59B6]/10 flex items-center justify-center shrink-0">
                                    <Phone size={22} className="text-[#9B59B6]" />
                                </div>
                                <div>
                                    <h4 className="font-['Inter'] text-black/90 font-semibold mb-1">Phone</h4>
                                    <a href="tel:+971507751293" className="font-['Inter'] text-black/60 hover:text-[#9B59B6] hover:underline transition-colors">
                                        +971 50 775 1293
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-['Inter'] text-black/90 font-semibold mb-4">Connect With Us</h4>
                            <div className="flex gap-4">
                                <a href="https://wa.me/971507751293" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-black/50 hover:text-[#25D366] hover:border-[#25D366]/30 hover:shadow-lg transition-all duration-300">
                                    <MessageCircle size={20} />
                                </a>
                                <a href="https://www.instagram.com/elverasolutionsllc/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-black/50 hover:text-[#E1306C] hover:border-[#E1306C]/30 hover:shadow-lg transition-all duration-300">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://www.linkedin.com/company/111757888/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-black/50 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:shadow-lg transition-all duration-300">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://x.com/Elvera_Solution" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-black/50 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30 hover:shadow-lg transition-all duration-300">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
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
                        <div
                            className="p-8 lg:p-12 rounded-[2rem] shadow-2xl relative"
                            style={{ background: "linear-gradient(160deg, #1a0e28 0%, #0f0817 40%, #0A0A0A 100%)" }}
                        >
                            {/* Decorative glows (clipped to prevent page scroll overflow but not form dropdown overflow) */}
                            <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                                <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#9B59B6]/15 rounded-full blur-[80px]" />
                                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#F1C40F]/8 rounded-full blur-[70px]" />
                            </div>

                            <div className="relative z-10">
                                {formState === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-[#9B59B6]/15 flex items-center justify-center mx-auto mb-6">
                                            <svg className="w-10 h-10 text-[#F1C40F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <h3 className="font-['Playfair_Display'] text-3xl mb-4 text-white">Message Sent!</h3>
                                        <p className="text-white/60 font-['Inter']">Thank you for reaching out. We'll be in touch with you shortly.</p>
                                        <button
                                            onClick={() => setFormState("idle")}
                                            className="mt-8 px-6 py-2 rounded-full border border-white/10 text-white/80 hover:border-[#9B59B6] hover:text-[#9B59B6] hover:bg-[#9B59B6]/10 font-['Inter'] text-sm transition-colors duration-300"
                                        >
                                            Send Another Inquiry
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className={inputBase}
                                                style={{ fontSize: "0.9rem", fontWeight: 300 }}
                                                placeholder="Your Name *"
                                            />
                                            <input
                                                type="text"
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                                className={inputBase}
                                                style={{ fontSize: "0.9rem", fontWeight: 300 }}
                                                placeholder="Company Name"
                                            />
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className={inputBase}
                                                style={{ fontSize: "0.9rem", fontWeight: 300 }}
                                                placeholder="Email Address *"
                                            />
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className={inputBase}
                                                style={{ fontSize: "0.9rem", fontWeight: 300 }}
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setBudgetDropdownOpen((p) => !p);
                                                        setDropdownOpen(false);
                                                    }}
                                                    className={`${inputBase} flex items-center justify-between text-left cursor-pointer h-full`}
                                                    style={{ fontSize: "0.9rem", fontWeight: 300 }}
                                                >
                                                    <span className={budget ? "text-white" : "text-white/25"}>
                                                        {budget || "Budget Range"}
                                                    </span>
                                                    <ChevronDown size={18} className={`text-white/30 transition-transform duration-300 ${budgetDropdownOpen ? "rotate-180" : ""}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {budgetDropdownOpen && (
                                                        <motion.ul
                                                            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                                                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                                                            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="absolute left-0 right-0 top-full mt-2 bg-[#1a0e28] border border-white/10 rounded-xl overflow-hidden z-20 origin-top"
                                                            style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(155,89,182,0.1)" }}
                                                        >
                                                            {budgetOptions.map((option) => (
                                                                <li key={option}>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => { setBudget(option); setBudgetDropdownOpen(false); }}
                                                                        className={`w-full text-left px-5 py-3.5 font-['Inter'] transition-all duration-200 cursor-pointer ${budget === option ? "bg-[#9B59B6]/20 text-[#F1C40F]" : "text-white/60 hover:bg-white/5 hover:text-white"}`}
                                                                        style={{ fontSize: "0.9rem", fontWeight: 300 }}
                                                                    >
                                                                        {option}
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setDropdownOpen((p) => !p);
                                                        setBudgetDropdownOpen(false);
                                                    }}
                                                    className={`${inputBase} flex items-center justify-between text-left cursor-pointer h-full`}
                                                    style={{ fontSize: "0.9rem", fontWeight: 300 }}
                                                >
                                                    <span className={helpType ? "text-white" : "text-white/25"}>
                                                        {helpType || "How can we help you? *"}
                                                    </span>
                                                    <ChevronDown size={18} className={`text-white/30 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {dropdownOpen && (
                                                        <motion.ul
                                                            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                                                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                                                            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="absolute left-0 right-0 top-full mt-2 bg-[#1a0e28] border border-white/10 rounded-xl overflow-hidden z-20 origin-top"
                                                            style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(155,89,182,0.1)" }}
                                                        >
                                                            {helpOptions.map((option) => (
                                                                <li key={option}>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => { setHelpType(option); setDropdownOpen(false); }}
                                                                        className={`w-full text-left px-5 py-3.5 font-['Inter'] transition-all duration-200 cursor-pointer ${helpType === option ? "bg-[#9B59B6]/20 text-[#F1C40F]" : "text-white/60 hover:bg-white/5 hover:text-white"}`}
                                                                        style={{ fontSize: "0.9rem", fontWeight: 300 }}
                                                                    >
                                                                        {option}
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                        <div>
                                            <textarea
                                                required
                                                rows={4}
                                                value={details}
                                                onChange={(e) => setDetails(e.target.value)}
                                                className={`${inputBase} resize-none`}
                                                style={{ fontSize: "0.9rem", fontWeight: 300 }}
                                                placeholder="Tell us a bit about your project and goals..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={!name || !email || !helpType || !details || formState === "submitting"}
                                            className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full text-white overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity duration-300 mt-2"
                                        >
                                            <span
                                                className="absolute inset-0 rounded-full"
                                                style={{
                                                    background: "linear-gradient(135deg, #9B59B6, #7D3C98, #9B59B6, #AF7AC5, #9B59B6)",
                                                    backgroundSize: "400% 400%",
                                                    animation: "gradientShift 4s ease infinite",
                                                }}
                                            />
                                            <span className="absolute inset-0 rounded-full overflow-hidden">
                                                <span
                                                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                                    style={{ background: "linear-gradient(90deg, transparent, rgba(241,196,15,0.25), transparent)" }}
                                                />
                                            </span>
                                            <span className="relative z-10 font-['Inter']" style={{ fontSize: "0.95rem", fontWeight: 500, letterSpacing: "0.05em" }}>
                                                {formState === "submitting" ? "SENDING..." : "SUBMIT ENQUIRY"}
                                            </span>
                                            {formState !== "submitting" && (
                                                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
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

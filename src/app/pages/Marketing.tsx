import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TrendingUp, Target, BarChart3, MessageSquare, Users, Zap, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CTABanner } from "../components/CTABanner";
import { useSEO } from "../hooks/useSEO";

function MarketingHero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 bg-[#0A0A0A] overflow-hidden">
            <div className="absolute inset-0">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1460925895917-adf4e5f1db74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400"
                    alt="Digital advertising and marketing analytics"
                    className="w-full h-full object-cover opacity-20 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9B59B6]/[0.08] rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F1C40F]/[0.05] rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center pt-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-[#9B59B6] text-sm font-medium tracking-widest mb-6">
                        ADVERTISING & MARKETING
                    </span>
                    <h1
                        className="font-['Playfair_Display'] text-white mb-6"
                        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 500, lineHeight: 1.15 }}
                    >
                        Digital Advertising & <span className="italic text-[#F1C40F]">Marketing</span> That Drives ROI
                    </h1>
                    <p
                        className="font-['Inter'] text-white/60 max-w-3xl mx-auto"
                        style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: 300, lineHeight: 1.6 }}
                    >
                        From Google Ads to social media campaigns, we deliver data-driven advertising and marketing strategies that convert. Expert campaign management for startups and enterprises across the UAE.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function AdvertisingServices() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const services = [
        {
            icon: Target,
            title: "Google Ads & PPC Management",
            description: "From keyword research to bid optimization, we maximize your Google Ads ROI. Expert management of search campaigns, shopping ads, and performance max strategies.",
            points: ["Keyword strategy & research", "Campaign setup & optimization", "Landing page conversion focus", "Real-time bid management", "Monthly ROI reporting"],
            color: "from-[#9B59B6] to-[#7D3C98]",
        },
        {
            icon: Users,
            title: "Facebook & Instagram Advertising",
            description: "Leverage Meta's powerful targeting capabilities. We design conversion-focused campaigns that reach your ideal customers with compelling creative and messaging.",
            points: ["Audience segmentation & targeting", "Conversion campaign setup", "Video & carousel ad creation", "Retargeting strategies", "Lookalike audience expansion"],
            color: "from-[#3498DB] to-[#2980B9]",
        },
        {
            icon: BarChart3,
            title: "Performance Marketing & Conversion Optimization",
            description: "Drive measurable results with performance-based marketing. We focus on conversions, leads, and revenue growth with continuous A/B testing and optimization.",
            points: ["Funnel analysis & optimization", "A/B testing frameworks", "Conversion rate optimization", "Lead generation campaigns", "Cost per acquisition reduction"],
            color: "from-[#E74C3C] to-[#C0392B]",
        },
        {
            icon: MessageSquare,
            title: "Content Marketing & SEO",
            description: "Build authority and organic visibility. We create SEO-optimized content that ranks and converts, supporting your advertising efforts with long-term organic growth.",
            points: ["Blog content strategy", "Keyword-optimized articles", "Video content marketing", "Email marketing campaigns", "Content calendar management"],
            color: "from-[#1ABC9C] to-[#16A085]",
        },
        {
            icon: Zap,
            title: "Email Marketing & Automation",
            description: "Stay connected with your audience. Automated email sequences, newsletters, and promotional campaigns that nurture leads and drive repeat business.",
            points: ["Email sequence design", "Automation workflows", "Segmentation strategies", "Newsletter management", "Drip campaign optimization"],
            color: "from-[#F39C12] to-[#D68910]",
        },
        {
            icon: TrendingUp,
            title: "Strategic Campaign Planning",
            description: "Custom advertising and marketing strategy tailored to your business goals. Market analysis, competitor research, and full roadmap development.",
            points: ["Advertising strategy development", "Competitive analysis", "Market research", "Goal setting & KPIs", "Monthly performance reviews"],
            color: "from-[#27AE60] to-[#1E8449]",
        },
    ];

    return (
        <section ref={ref} className="py-24 lg:py-36 bg-[#FAFAFA] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-['Playfair_Display'] text-[#0A0A0A] text-4xl lg:text-5xl mb-6">
                        Our Advertising & Marketing Services
                    </h2>
                    <p className="font-['Inter'] text-black/60 text-lg max-w-2xl mx-auto">
                        Comprehensive advertising and marketing solutions designed to increase visibility, drive conversions, and grow your business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-black/[0.03] border border-black/5 group hover:shadow-2xl hover:shadow-[#9B59B6]/10 transition-all duration-500"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                                <service.icon size={26} className="relative z-10 text-[#0A0A0A]" />
                            </div>

                            <h3 className="font-['Playfair_Display'] text-[#0A0A0A] text-2xl mb-4">{service.title}</h3>
                            <p className="font-['Inter'] text-black/60 text-base leading-relaxed mb-6">{service.description}</p>

                            <ul className="space-y-3">
                                {service.points.map((point, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9B59B6]/50 shrink-0" />
                                        <span className="font-['Inter'] text-black/60 font-medium text-sm leading-relaxed">{point}</span>
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

function CaseStudies() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const cases = [
        {
            industry: "E-commerce & Retail",
            challenge: "Low product visibility and online sales",
            solution: "Google Shopping ads + Facebook conversion ads + Remarketing",
            results: {
                title: "250% ROAS",
                details: "Return on ad spend increase",
                metrics: ["500+ new customers/month", "45% CPC reduction", "3x product page traffic"]
            }
        },
        {
            industry: "Tech Startup",
            challenge: "Not reaching early adopters and growth",
            solution: "LinkedIn B2B ads + Google search ads + Content marketing",
            results: {
                title: "320+ Quality Leads",
                details: "Per month from paid campaigns",
                metrics: ["$45 cost per lead", "12% conversion to trial", "8x organic traffic growth"]
            }
        },
        {
            industry: "Healthcare & Wellness",
            challenge: "Building trust and patient acquisition",
            solution: "Facebook local ads + Google Local Services + Email nurturing",
            results: {
                title: "180 New Patients",
                details: "First 90 days of campaign",
                metrics: ["$120 cost per patient", "85% from social ads", "High customer lifetime value"]
            }
        },
    ];

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-['Playfair_Display'] text-[#0A0A0A] text-4xl lg:text-5xl mb-6">
                        Advertising Results That <span className="italic text-[#9B59B6]">Matter</span>
                    </h2>
                    <p className="font-['Inter'] text-black/60 text-lg max-w-2xl mx-auto">
                        Real marketing and advertising campaigns delivering measurable ROI for our clients
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {cases.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-[#FAFAFA] rounded-[2rem] p-8 lg:p-10 border border-black/5 hover:border-[#9B59B6]/30 transition-all duration-300"
                        >
                            <div className="mb-6">
                                <span className="inline-block px-4 py-2 rounded-full bg-[#9B59B6]/10 text-[#9B59B6] font-['Inter'] text-sm font-semibold">
                                    {c.industry}
                                </span>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-['Inter'] text-[#0A0A0A] font-bold mb-2">Challenge</h4>
                                <p className="font-['Inter'] text-black/60 text-sm">{c.challenge}</p>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-['Inter'] text-[#0A0A0A] font-bold mb-2">Our Solution</h4>
                                <p className="font-['Inter'] text-black/60 text-sm">{c.solution}</p>
                            </div>

                            <div className="p-6 bg-gradient-to-br from-[#9B59B6]/10 to-[#F1C40F]/10 rounded-2xl">
                                <div className="text-3xl font-bold text-[#9B59B6] mb-2">{c.results.title}</div>
                                <p className="font-['Inter'] text-black/60 text-sm mb-4">{c.results.details}</p>
                                <div className="space-y-2">
                                    {c.results.metrics.map((m, j) => (
                                        <div key={j} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#9B59B6]" />
                                            <span className="font-['Inter'] text-black/70 text-sm">{m}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "What's included in digital advertising and marketing services?",
            a: "Our comprehensive advertising and marketing services include campaign strategy, creative development, ad setup across multiple platforms (Google, Facebook, TikTok, LinkedIn), daily monitoring and optimization, A/B testing, and detailed performance reporting. We handle everything from keyword research to conversion tracking."
        },
        {
            q: "How much does advertising and marketing cost?",
            a: "Advertising costs vary based on your industry, goals, and budget. We offer flexible packages starting at AED 5,000/month and can scale to enterprise budgets. Most clients see positive ROI within 30-90 days. We provide transparent pricing and detailed budget breakdowns for each channel."
        },
        {
            q: "What advertising ROI can we expect?",
            a: "ROI depends on your industry, product, and current performance. On average, our advertising clients see 2-5x return on ad spend (ROAS) within the first 90 days. E-commerce typically sees 150-300% ROAS, while service businesses see 200-500% ROAS. We provide monthly performance reports with detailed metrics."
        },
        {
            q: "How long before we see advertising results?",
            a: "Initial results (impressions, clicks, leads) appear within 1-2 weeks. Significant advertising impact typically shows in 30-45 days as we optimize campaigns. Full optimization and peak performance usually occur at 90-120 days. We provide weekly check-ins and monthly strategy adjustments."
        },
        {
            q: "Which advertising channels should we focus on?",
            a: "We recommend a multi-channel approach: Google Ads for high-intent searchers, Facebook/Instagram for awareness and conversion, TikTok for younger audiences, and LinkedIn for B2B. The right advertising mix depends on your target audience and business goals. We conduct a free audit to recommend the best channels for your business."
        },
        {
            q: "Do you manage ongoing advertising campaigns?",
            a: "Yes, absolutely. We provide ongoing advertising and marketing management, not just one-time setup. Our team continuously monitors performance, optimizes bids and creatives, manages budgets, and adjusts strategies based on data. Most clients work with us on monthly retainers for continuous growth."
        },
        {
            q: "How do you track advertising performance and ROI?",
            a: "We implement comprehensive tracking using Google Analytics 4, conversion pixels, and platform-native tracking. We monitor cost per acquisition (CPA), return on ad spend (ROAS), conversion rates, and revenue generated. Monthly reports include detailed metrics, insights, and recommendations for optimization."
        },
        {
            q: "Can you handle advertising for my specific industry?",
            a: "Yes. We've successfully managed advertising campaigns for e-commerce, healthcare, real estate, tech startups, fintech, and many other industries. Each industry has unique advertising strategies, compliance requirements, and audience targeting approaches—we have expertise across all major sectors."
        },
    ];

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-[#FAFAFA] relative">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-['Playfair_Display'] text-[#0A0A0A] text-4xl lg:text-5xl mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="font-['Inter'] text-black/60 text-lg">
                        Everything you need to know about advertising and marketing with Elvera Solutions
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="bg-white rounded-2xl border border-black/5 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-6 lg:px-8 py-5 lg:py-6 flex items-center justify-between hover:bg-[#FAFAFA] transition-colors duration-200"
                            >
                                <h3 className="font-['Inter'] text-[#0A0A0A] font-semibold text-base lg:text-lg text-left">
                                    {faq.q}
                                </h3>
                                <ChevronDown
                                    size={20}
                                    className={`text-[#9B59B6] shrink-0 transition-transform duration-300 ${
                                        openIndex === i ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {openIndex === i && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="border-t border-black/5 bg-white px-6 lg:px-8 py-5 lg:py-6"
                                >
                                    <p className="font-['Inter'] text-black/70 text-base lg:text-lg leading-relaxed font-light">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Marketing() {
    useSEO(
        "Digital Advertising & Marketing Services | Elvera Solutions",
        "Expert digital advertising and marketing services in UAE. Google Ads, Facebook advertising, performance marketing, and ROI-driven campaigns for businesses of all sizes."
    );

    return (
        <main className="min-h-screen bg-white selection:bg-[#9B59B6]/30 selection:text-[#0A0A0A]">
            <MarketingHero />
            <AdvertisingServices />
            <CaseStudies />
            <FAQSection />
            <CTABanner />
        </main>
    );
}

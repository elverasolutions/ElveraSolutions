import { useRef } from "react";
import { Link } from "react-router";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import { Sparkles, TrendingUp, Globe, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLiteAnimations } from "./useMediaQuery";

const pillars = [
  {
    icon: Globe,
    title: "Software & Web",
    description: "Custom digital infrastructure and robust web platforms built for scale.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Social",
    description:
      "Data-driven strategic campaigns and management that grow your presence.",
  },
  {
    icon: Sparkles,
    title: "Photo & Video",
    description:
      "High-impact visual content that tells your brand story vividly.",
  },
];

export function AboutSection() {
  const lite = useLiteAnimations();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], lite ? [0, 0] : [80, -80]);
  const decorY = useTransform(scrollYProgress, [0, 1], lite ? [0, 0] : [40, -60]);
  const textBlockY = useTransform(scrollYProgress, [0, 1], lite ? [0, 0] : [30, -30]);

  const dur = lite ? 0.4 : 0.8;
  const dl = (v: number) => (lite ? v * 0.25 : v);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-36 overflow-hidden bg-white"
      style={{ position: "relative" }}
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-[#9B59B6]/[0.02] rounded-full blur-[60px] lg:blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] bg-[#F4ECF7] rounded-full blur-[50px] lg:blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
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
            WHO WE ARE
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <motion.div style={lite ? undefined : { y: textBlockY }}>
            <div className="mb-8 overflow-hidden">
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
                A Digital{" "}
                <span className="italic text-[#F1C40F]">Powerhouse</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur, delay: dl(0.3) }}
              className="font-['Inter'] text-[#0A0A0A]/60 mb-6"
              style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.9 }}
            >
              Elvera Solutions is a UAE-based digital agency licensed in Sharjah Media City Free Zone. We partner with startups, SMEs, large enterprises, and e-commerce businesses to deliver end-to-end digital solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur, delay: dl(0.45) }}
              className="font-['Inter'] text-[#0A0A0A]/50 mb-10"
              style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.9 }}
            >
              From software development and web design to digital marketing, social media management, and professional photography & videography. We don't just deliver services. <span className="text-[#0A0A0A]" style={{ fontWeight: 500 }}>We deliver results.</span>
            </motion.p>

            {/* Pillars */}
            <div className="space-y-5 mb-10">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: lite ? 0.4 : 0.7,
                    delay: dl(0.5 + i * 0.12),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={lite ? undefined : { x: 8, transition: { duration: 0.3 } }}
                  className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-[#F4ECF7]/60 transition-colors duration-300 cursor-default"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F4ECF7] flex items-center justify-center group-hover:bg-[#9B59B6] transition-colors duration-300">
                    <pillar.icon
                      size={18}
                      className="text-[#9B59B6] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <h4
                      className="font-['Inter'] text-[#0A0A0A] mb-1"
                      style={{ fontSize: "0.9rem", fontWeight: 600 }}
                    >
                      {pillar.title}
                    </h4>
                    <p
                      className="font-['Inter'] text-[#0A0A0A]/50"
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 300,
                        lineHeight: 1.6,
                      }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur, delay: dl(0.8) }}
            >
              <Link
                to="/about"
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
                  Discover Our Story
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
              className="relative rounded-3xl overflow-hidden"
            >
              <ImageWithFallback
                src="/images/about.png"
                alt="Elvera Solutions Team"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9B59B6]/20 via-transparent to-transparent" />
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: lite ? 0.4 : 0.8,
                delay: dl(0.9),
              }}
              className="absolute -bottom-6 -left-3 lg:-left-6 bg-white rounded-2xl p-5 lg:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] cursor-default"
            >
              <div
                className="font-['Playfair_Display'] text-[#9B59B6]"
                style={{ fontSize: "2rem", fontWeight: 600, lineHeight: 1 }}
              >
                100%
              </div>
              <div
                className="font-['Inter'] text-[#0A0A0A]/50 mt-1"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                }}
              >
                Integrated Approach
              </div>
            </motion.div>

            {/* Desktop decorative corners */}
            {!lite && (
              <>
                <motion.div
                  style={{ y: decorY }}
                  className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#9B59B6]/20 rounded-tr-3xl hidden lg:block"
                />
                <motion.div
                  style={{ y: decorY }}
                  className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#F1C40F]/15 rounded-br-2xl hidden lg:block"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "motion/react";
import { Layers, Cpu, Target, Star } from "lucide-react";
import { useLiteAnimations } from "./useMediaQuery";
import { ImageWithFallback } from "./figma/ImageWithFallback";

function AnimatedCounter({
  target,
  suffix = "",
  inView,
  delay = 0,
  lite = false,
}: {
  target: number;
  suffix?: string;
  inView: boolean;
  delay?: number;
  lite?: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, {
      duration: lite ? 1.5 : 2.5,
      delay: lite ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, target, delay, count, lite]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(String(v)));
    return unsub;
  }, [rounded]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

const factors = [
  {
    icon: Target,
    title: "Tailored Strategies",
    description: "We don’t do one-size-fits-all. Every solution is built around your specific goals.",
    numericStat: 100,
    statSuffix: "%",
    statLabel: "Custom Fit",
  },
  {
    icon: Layers,
    title: "Cross-Disciplinary Expertise",
    description: "From code to creative, our team brings diverse skills under one roof.",
    numericStat: 360,
    statSuffix: "\u00B0",
    statLabel: "Full-Service",
  },
  {
    icon: Star,
    title: "Proven Track Record",
    description: "We’ve partnered with top brands and government entities across the UAE.",
    numericStat: 50,
    statSuffix: "+",
    statLabel: "Projects Delivered",
  },
  {
    icon: Cpu,
    title: "Future-Ready Tech",
    description: "We leverage AI and modern frameworks to ensure your business stays ahead.",
    numericStat: 24,
    statSuffix: "/7",
    statLabel: "Innovation",
  },
];

const showcaseImages = [
  {
    src: "https://images.unsplash.com/photo-1758448755778-90ebf4d0f1e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHN0cmF0ZWd5JTIwYnJhaW5zdG9ybWluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzE3MDA1NzZ8MA&ixlib=rb-4.1.0&q=100&w=2400&utm_source=figma&utm_medium=referral",
    alt: "Creative team brainstorming",
    caption: "Creative Strategy",
  },
  {
    src: "https://images.unsplash.com/photo-1764068866740-506ba4cf64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjB2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxNzAwNTc2fDA&ixlib=rb-4.1.0&q=100&w=2400&utm_source=figma&utm_medium=referral",
    alt: "Professional video production",
    caption: "Media Production",
  },
  {
    src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400",
    alt: "Creative design workspace with color palettes",
    caption: "Brand Identity",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwbW9kZXJufGVufDF8fHx8MTc3MTcwMDU3N3ww&ixlib=rb-4.1.0&q=100&w=2400&utm_source=figma&utm_medium=referral",
    alt: "Digital marketing strategy",
    caption: "360 Marketing",
  },
];

function ShowcaseCarousel({ inView, lite }: { inView: boolean; lite: boolean }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % showcaseImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: lite ? 0.4 : 0.8, delay: lite ? 0.1 : 0.6 }}
      className="mt-14 lg:mt-20"
    >
      <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl aspect-[2.2/1]">
        {showcaseImages.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={false}
            animate={{
              opacity: active === i ? 1 : 0,
              scale: active === i ? 1 : 1.05,
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
              <span
                className="font-['Inter'] text-white/60 tracking-[0.2em]"
                style={{ fontSize: "0.65rem", fontWeight: 400 }}
              >
                {String(i + 1).padStart(2, "0")} / {String(showcaseImages.length).padStart(2, "0")}
              </span>
              <p
                className="font-['Playfair_Display'] text-white mt-1"
                style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 500 }}
              >
                {img.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {showcaseImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${active === i
              ? "w-8 bg-[#F1C40F]"
              : "w-2 bg-white/15 hover:bg-white/30"
              }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function WhyChooseUs() {
  const lite = useLiteAnimations();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgGlow1X = useTransform(scrollYProgress, [0, 1], lite ? [0, 0] : [-60, 60]);

  const dur = lite ? 0.4 : 0.8;
  const dl = (v: number) => (lite ? v * 0.2 : v);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative py-20 lg:py-36 overflow-hidden bg-[#0A0A0A]"
      style={{ position: "relative" }}
    >
      {!lite && (
        <style>{`
          @keyframes gradientRotate {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      )}

      {/* Background blobs - desktop only */}
      {!lite && (
        <>
          <motion.div
            className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#9B59B6]/[0.03] rounded-full blur-[150px]"
            style={{ x: bgGlow1X }}
          />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#F1C40F]/[0.015] rounded-full blur-[120px]" />
        </>
      )}

      {/* Dot grid - desktop */}
      <div
        className="absolute inset-0 opacity-[0.02] hidden md:block"
        style={{
          backgroundImage:
            "radial-gradient(rgba(155,89,182,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
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
              className="w-8 h-[1px] bg-[#9B59B6]/50 origin-right"
            />
            <span
              className="font-['Inter'] text-[#9B59B6] tracking-[0.25em]"
              style={{ fontSize: "0.7rem", fontWeight: 500 }}
            >
              WHY CHOOSE US
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: dur, delay: dl(0.2) }}
              className="w-8 h-[1px] bg-[#9B59B6]/50 origin-left"
            />
          </motion.div>

          <div className="overflow-hidden mb-6">
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
              The Elvera{" "}
              <span className="italic text-[#F1C40F]">Factor</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: dur, delay: dl(0.3) }}
            className="font-['Inter'] text-white/40"
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}
          >
            Setting the new standard for digital excellence.
          </motion.p>
        </div>

        {/* Factor Cards */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-8">
          {factors.map((factor, i) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: dur,
                delay: dl(0.4 + i * 0.12),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <motion.div
                whileHover={lite ? undefined : { y: -6, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                className="relative h-full p-7 lg:p-10 rounded-3xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-500"
              >
                {/* Desktop: animated gradient border on hover */}
                {!lite && (
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      padding: "1px",
                      background:
                        "linear-gradient(135deg, #9B59B633, transparent, #F1C40F22, transparent, #9B59B633)",
                      backgroundSize: "300% 300%",
                      animation: "gradientRotate 4s ease infinite",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                )}

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#9B59B6]/0 to-[#9B59B6]/0 group-hover:from-[#9B59B6]/[0.06] group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="relative">
                  {/* Animated counter stat */}
                  <div className="mb-6 lg:mb-8">
                    <span
                      className="font-['Playfair_Display'] text-[#F1C40F]/20 group-hover:text-[#F1C40F]/50 transition-colors duration-500"
                      style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 600, lineHeight: 1 }}
                    >
                      <AnimatedCounter
                        target={factor.numericStat}
                        suffix={factor.statSuffix}
                        inView={isInView}
                        delay={0.5 + i * 0.2}
                        lite={lite}
                      />
                    </span>
                    <span
                      className="block font-['Inter'] text-white/20 mt-1"
                      style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.15em" }}
                    >
                      {factor.statLabel}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#9B59B6]/10 flex items-center justify-center mb-6 group-hover:bg-[#9B59B6]/20 transition-colors duration-300">
                    <factor.icon size={20} className="text-[#9B59B6]" />
                  </div>

                  <h3
                    className="font-['Inter'] text-white mb-3"
                    style={{ fontSize: "1.15rem", fontWeight: 600 }}
                  >
                    {factor.title}
                  </h3>

                  <p
                    className="font-['Inter'] text-white/40 group-hover:text-white/60 transition-colors duration-500"
                    style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.8 }}
                  >
                    {factor.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: dl(0.8), ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 lg:mt-20 h-[1px] bg-gradient-to-r from-transparent via-[#9B59B6]/20 to-transparent"
        />

        {/* Showcase Carousel */}
        <ShowcaseCarousel inView={isInView} lite={lite} />
      </div>
    </section>
  );
}
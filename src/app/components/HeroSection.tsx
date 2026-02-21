import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { useLiteAnimations } from "./useMediaQuery";
import { EnquiryModal } from "./EnquiryModal";

function AnimatedGradientButton({
  children,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "outline";
}) {
  if (variant === "outline") {
    return (
      <button
        onClick={onClick}
        className="group font-['Inter'] relative flex items-center gap-3 px-8 py-4 rounded-full text-white/80 hover:text-white transition-all duration-300 overflow-hidden cursor-pointer"
        style={{ fontSize: "0.85rem", fontWeight: 400, letterSpacing: "0.05em" }}
      >
        <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-[#F1C40F]/50 transition-all duration-500" />
        <span className="relative z-10 flex items-center gap-3">{children}</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="group font-['Inter'] relative flex items-center gap-3 px-8 py-4 rounded-full text-white overflow-hidden cursor-pointer"
      style={{ fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.05em" }}
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
      {/* Shimmer sweep - only on hover */}
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(241,196,15,0.25), transparent)",
          }}
        />
      </span>
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Headline                                                          */
/* ------------------------------------------------------------------ */
const rotatingWords = ["Velocity", "Impact", "Elegance", "Legacy"];

function AnimatedHeadline({ lite }: { lite: boolean }) {
  const line1Words = ["Where", "Vision"];
  const line2Words = ["Meets"];

  const [wordIndex, setWordIndex] = useState(0);
  const [initialDone, setInitialDone] = useState(false);

  const baseDuration = lite ? 0.5 : 1;
  const baseDelay = lite ? 0 : 0.6;
  const stagger = lite ? 0.05 : 0.12;

  // Start cycling after initial entrance animation completes
  const entranceEnd =
    baseDelay + (line1Words.length + line2Words.length + 1) * stagger + baseDuration;

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setInitialDone(true);
    }, entranceEnd * 1000 + 1500); // extra 1.5s pause after entrance
    return () => clearTimeout(startTimer);
  }, [entranceEnd]);

  useEffect(() => {
    if (!initialDone) return;
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [initialDone]);

  return (
    <div
      className="font-['Playfair_Display'] text-white mb-6"
      style={{
        fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
        fontWeight: 500,
        lineHeight: 1.1,
      }}
    >
      <div>
        <div className="flex items-center justify-center gap-[0.3em] flex-wrap">
          {line1Words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: baseDuration,
                delay: baseDelay + i * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center gap-[0.3em] flex-wrap">
          {line2Words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: baseDuration,
                delay: baseDelay + (line1Words.length + i) * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}

          {/* Rotating accent word - fixed-width grid prevents layout shift */}
          <span className="inline-grid align-bottom overflow-hidden">
            {/* Invisible sizers: all words in same cell → container = widest word */}
            {rotatingWords.map((w) => (
              <span
                key={w}
                aria-hidden
                className="col-start-1 row-start-1 italic invisible select-none"
              >
                {w}
              </span>
            ))}
            {/* Visible animated word - counter slide transition */}
            <span className="col-start-1 row-start-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    duration: initialDone ? 0.45 : baseDuration,
                    delay:
                      initialDone
                        ? 0
                        : baseDelay + (line1Words.length + line2Words.length) * stagger,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block italic text-[#F1C40F]"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                              */
/* ------------------------------------------------------------------ */
export function HeroSection() {
  const lite = useLiteAnimations();
  const sectionRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, lite ? 0 : 200]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, lite ? 0 : 100]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    [1, lite ? 1 : 0]
  );

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const d = (desktop: number) => (lite ? Math.min(desktop * 0.15, 0.2) : desktop);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
      style={{ position: "relative" }}
    >
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* ── Background ── */}
      <motion.div
        className="absolute inset-0 bg-[#0A0A0A]"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#150A1E] to-[#0A0A0A]" />

        {/* Gradient orbs - amethyst tones */}
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] bg-[#9B59B6]/[0.05] rounded-full blur-[80px] lg:blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-[#F1C40F]/[0.03] rounded-full blur-[60px] lg:blur-[120px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] hidden md:block"
          style={{
            backgroundImage:
              "linear-gradient(rgba(155,89,182,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(155,89,182,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* ── Desktop-only decorative elements ── */}
      {!lite && (
        <>
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[18%] right-[12%] w-24 h-24 border border-[#9B59B6]/15 rounded-full hidden lg:block"
          />
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[25%] left-[8%] w-36 h-36 border border-[#F1C40F]/10 rounded-full hidden lg:block"
          />
          {/* Twinkle particles */}
          {[
            { top: "20%", left: "15%", animDelay: "0s", dur: "3s" },
            { top: "70%", right: "20%", animDelay: "1s", dur: "4s" },
            { top: "40%", left: "75%", animDelay: "0.5s", dur: "3.5s" },
            { top: "15%", right: "35%", animDelay: "1.5s", dur: "3.2s" },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#F1C40F]/40 rounded-full hidden lg:block"
              style={{
                top: p.top,
                left: (p as Record<string, string>).left,
                right: (p as Record<string, string>).right,
                animation: `twinkle ${p.dur} ${p.animDelay} ease-in-out infinite`,
              }}
            />
          ))}
          <style>{`
            @keyframes twinkle {
              0%, 100% { opacity: 0.2; transform: scale(1); }
              50% { opacity: 0.8; transform: scale(1.5); }
            }
          `}</style>
          {/* Decorative lines */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-12 top-[20%] w-[1px] h-32 bg-gradient-to-b from-transparent via-[#9B59B6]/15 to-transparent origin-top hidden lg:block"
          />
        </>
      )}

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center"
        style={lite ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: lite ? 0.4 : 1, delay: d(0.2) }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 font-['Inter'] text-[#C39BD3] border border-[#9B59B6]/20 px-5 py-2 rounded-full bg-[#9B59B6]/5"
            style={{
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
            }}
          >
            <span className="w-1.5 h-1.5 bg-[#F1C40F] rounded-full animate-pulse" />
            CREATIVE ENGINE FOR MODERN BRANDS
          </span>
        </motion.div>

        {/* Animated Headline */}
        <AnimatedHeadline lite={lite} />

        {/* Sub-headline / Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: lite ? 0.4 : 0.8, delay: d(1.2) }}
          className="font-['Inter'] text-white/65 max-w-2xl mx-auto mb-14"
          style={{
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          Elevate Your Brand in this Era. AI-enabled strategies and content.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: lite ? 0.4 : 0.8, delay: d(1.5) }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AnimatedGradientButton onClick={() => setModalOpen(true)}>
            ENQUIRE NOW
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1.5 transition-transform duration-300"
            />
          </AnimatedGradientButton>

          <AnimatedGradientButton
            variant="outline"
            onClick={() => scrollTo("#services")}
          >
            <Play size={14} className="text-[#F1C40F]" />
            View Our Work
          </AnimatedGradientButton>
        </motion.div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: d(2) }}
          className="mt-16 sm:mt-20 flex items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "3+", label: "Core Services" },
            { value: "360\u00B0", label: "Full Scope" },
            { value: "24/7", label: "Dedicated Team" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: d(2.2) + i * (lite ? 0.05 : 0.15) }}
              className="text-center"
            >
              <div
                className="font-['Playfair_Display'] text-[#F1C40F]"
                style={{ fontSize: "1.3rem", fontWeight: 500 }}
              >
                {stat.value}
              </div>
              <div
                className="font-['Inter'] text-white/40 mt-1"
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: d(2.5) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10 hidden sm:flex"
      >
        <span
          className="font-['Inter'] text-white/30"
          style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[2px] h-2 bg-[#9B59B6]/60 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Enquiry Modal */}
      <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
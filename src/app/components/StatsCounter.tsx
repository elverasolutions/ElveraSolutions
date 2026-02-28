import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useLiteAnimations } from "./useMediaQuery";

function Counter({
  target,
  suffix = "",
  duration = 2,
  delay = 0,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [isInView, target, duration, delay, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(String(v)));
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across marketing, media & web",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Retained & referred clients",
  },
  {
    value: 50,
    suffix: "+",
    label: "Brands Served",
    description: "From startups to enterprises",
  },
  {
    value: 12,
    suffix: "+",
    label: "Industry Awards",
    description: "Recognition for excellence",
  },
];

export function StatsCounter() {
  const lite = useLiteAnimations();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const dur = lite ? 0.4 : 0.8;
  const dl = (v: number) => (lite ? v * 0.2 : v);

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-28 overflow-hidden bg-white">
      {/* Top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#9B59B6]/20 to-transparent"
      />

      {/* Background accent - desktop only */}
      {!lite && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9B59B6]/[0.015] rounded-full blur-[100px]" />
      )}

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: dur,
                delay: dl(i * 0.1),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative text-center group"
            >
              {/* Vertical divider - desktop only */}
              {i > 0 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: dur, delay: dl(0.3 + i * 0.1) }}
                  className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-[#9B59B6]/10 to-transparent hidden lg:block"
                />
              )}

              {/* Counter */}
              <div
                className="font-['Playfair_Display'] text-[#0A0A0A] mb-2 transition-colors duration-300 group-hover:text-[#9B59B6]"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={lite ? 1.5 : 2.5}
                  delay={lite ? 0 : i * 0.15}
                />
              </div>

              <div
                className="font-['Inter'] text-[#0A0A0A] mb-1"
                style={{ fontSize: "0.85rem", fontWeight: 600 }}
              >
                {stat.label}
              </div>

              <div
                className="font-['Inter'] text-[#0A0A0A]/40"
                style={{ fontSize: "0.75rem", fontWeight: 300, lineHeight: 1.5 }}
              >
                {stat.description}
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: dl(0.5 + i * 0.1) }}
                className="mt-4 mx-auto w-8 h-[2px] bg-[#F1C40F]/30 group-hover:bg-[#F1C40F]/70 group-hover:w-12 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#9B59B6]/20 to-transparent"
      />
    </section>
  );
}
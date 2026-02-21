import { motion } from "motion/react";

const row1 = [
  "Marketing",
  "Photography",
  "Videography",
  "Public Relations",
  "Web Portals",
  "Advertising",
  "Media Production",
  "Consulting",
  "Digital Strategy",
  "Branding",
];

const row2 = [
  "Film Processing",
  "Ad Campaigns",
  "Content Creation",
  "Outdoor Ads",
  "Blogging",
  "Media Management",
  "Imaging",
  "Web Design",
  "Direct Marketing",
  "Cinematography",
];

export function MarqueeBanner() {
  return (
    <div className="relative py-6 lg:py-8 bg-[#0A0A0A] overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

      {/* Row 1 - left scroll */}
      <div className="mb-3 lg:mb-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-6 lg:gap-8 whitespace-nowrap"
        >
          {[...row1, ...row1].map((item, i) => (
            <div key={`r1-${i}`} className="flex items-center gap-6 lg:gap-8">
              <span
                className="font-['Inter'] text-white/30 tracking-[0.15em]"
                style={{ fontSize: "0.7rem", fontWeight: 400 }}
              >
                {item.toUpperCase()}
              </span>
              <span className="w-1.5 h-1.5 bg-[#9B59B6]/50 rounded-full flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 - right scroll */}
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-6 lg:gap-8 whitespace-nowrap"
      >
        {[...row2, ...row2].map((item, i) => (
          <div key={`r2-${i}`} className="flex items-center gap-6 lg:gap-8">
            <span
              className="font-['Inter'] text-white/20 tracking-[0.15em]"
              style={{ fontSize: "0.65rem", fontWeight: 300 }}
            >
              {item.toUpperCase()}
            </span>
            <span className="w-1 h-1 bg-[#F1C40F]/30 rounded-full flex-shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
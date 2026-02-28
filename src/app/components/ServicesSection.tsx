import { useRef } from "react";
import { Link } from "react-router";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import {
  Code,
  Layout,
  Megaphone,
  Share2,
  Camera,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLiteAnimations } from "./useMediaQuery";

const services = [
  {
    id: "software",
    number: "01",
    icon: Code,
    title: "Software Engineering",
    subtitle: "Custom software, web platforms, and mobile apps built for performance and scale.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "web-app",
    number: "02",
    icon: Layout,
    title: "Web & App Development",
    subtitle: "Stunning, high-converting websites and applications tailored to your business needs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "marketing",
    number: "03",
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    subtitle: "Data-driven campaigns that increase visibility, traffic, and conversions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "social",
    number: "04",
    icon: Share2,
    title: "Social Media Management",
    subtitle: "Engaging content and community management across all major social platforms.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "media",
    number: "05",
    icon: Camera,
    title: "Media Production",
    subtitle: "High-end photography and videography that captures your brand's essence.",
    image: "https://images.unsplash.com/photo-1579621970258-2083bc7fb240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "ai",
    number: "06",
    icon: Cpu,
    title: "Automation & AI Solutions",
    subtitle: "Streamlining operations and integrating smart technology for future-ready businesses.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  }
];

function ServiceCard({
  service,
  index,
  lite,
}: {
  service: (typeof services)[0];
  index: number;
  lite: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], lite ? [0, 0] : [20, -10]);

  const dur = lite ? 0.4 : 0.8;
  const dl = lite ? index * 0.05 : index * 0.1;

  return (
    <motion.div
      ref={ref}
      style={lite ? { position: "relative" as const } : { position: "relative" as const, y: cardY }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: dur, delay: dl, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full"
    >
      <motion.div
        whileHover={lite ? undefined : { y: -8, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
        className="relative bg-white rounded-3xl overflow-hidden border border-[#0A0A0A]/5 hover:border-[#9B59B6]/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(155,89,182,0.08)] h-full flex flex-col"
      >
        {/* Image Section */}
        <div className="relative h-56 lg:h-64 overflow-hidden shrink-0">
          <ImageWithFallback
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-transparent" />

          {/* Number badge */}
          <div className="absolute top-5 left-5">
            <span
              className="font-['Playfair_Display'] text-white/80 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20"
              style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em" }}
            >
              {service.number}
            </span>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-5 left-5 right-5 lg:bottom-6 lg:left-6 lg:right-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#9B59B6] flex items-center justify-center shrink-0">
                <service.icon size={20} className="text-white" />
              </div>
              <h3
                className="font-['Playfair_Display'] text-white"
                style={{ fontSize: "clamp(1.15rem, 2vw, 1.35rem)", fontWeight: 500, lineHeight: 1.2 }}
              >
                {service.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Description body */}
        <div className="p-5 flex-1 flex flex-col justify-center">
          <p
            className="font-['Inter'] text-[#0A0A0A]/70"
            style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.6 }}
          >
            {service.subtitle}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ServicesSection() {
  const lite = useLiteAnimations();
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgBlobX = useTransform(scrollYProgress, [0, 1], lite ? [0, 0] : [-100, 100]);

  const dur = lite ? 0.4 : 0.8;
  const dl = (v: number) => (lite ? v * 0.2 : v);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 lg:py-36 bg-[#FAFAFA] overflow-hidden"
      style={{ position: "relative" }}
    >
      {!lite && (
        <>
          <motion.div
            className="absolute top-20 left-0 w-[300px] h-[300px] bg-[#9B59B6]/[0.02] rounded-full blur-[80px]"
            style={{ x: bgBlobX }}
          />
          <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-[#F4ECF7]/60 rounded-full blur-[100px]" />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-2xl mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={headerInView ? { scaleX: 1 } : {}}
              transition={{ duration: dur, delay: dl(0.2) }}
              className="w-12 h-[1px] bg-[#9B59B6] origin-left"
            />
            <span
              className="font-['Inter'] text-[#9B59B6] tracking-[0.25em]"
              style={{ fontSize: "0.7rem", fontWeight: 500 }}
            >
              OUR SERVICES
            </span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: "100%" }}
              animate={headerInView ? { y: 0 } : {}}
              transition={{
                duration: lite ? 0.5 : 1,
                delay: dl(0.15),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-['Playfair_Display'] text-[#0A0A0A]"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 500,
                lineHeight: 1.15,
              }}
            >
              End-to-End{" "}
              <span className="italic text-[#F1C40F]">Digital Solutions</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: dur, delay: dl(0.3) }}
            className="font-['Inter'] text-[#0A0A0A]/50"
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}
          >
            We provide a comprehensive suite of services under one roof, bridging the gap between your technology and your story. No more managing multiple agencies.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} lite={lite} />
          ))}
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: dur, delay: dl(0.6) }}
          className="mt-12 lg:mt-16 flex justify-center"
        >
          <Link
            to="/services"
            onClick={() => window.scrollTo(0, 0)}
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
            <span className="relative z-10 flex items-center gap-2">View All Services</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
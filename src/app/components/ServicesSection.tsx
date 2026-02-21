import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import {
  Megaphone,
  Camera,
  Globe,
  ArrowUpRight,
  BarChart3,
  Mail,
  Newspaper,
  Lightbulb,
  MapPin,
  Video,
  Aperture,
  FolderOpen,
  LayoutGrid,
  FileText,
  PenTool,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLiteAnimations } from "./useMediaQuery";

const services = [
  {
    id: "marketing",
    number: "01",
    icon: Megaphone,
    title: "Strategic Marketing & PR",
    subtitle: "Precision-engineered growth to put your brand center stage.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    items: [
      { icon: BarChart3, label: "Full-Scale Ad Campaigns", desc: "Concept-to-consumer strategy across all channels." },
      { icon: Mail, label: "Digital & Direct Marketing", desc: "High-conversion tactics to reach your specific audience." },
      { icon: Newspaper, label: "Public Relations", desc: "Managing your narrative and building industry authority." },
      { icon: Lightbulb, label: "Marketing Consulting", desc: "Data-backed insights to optimize your business trajectory." },
      { icon: MapPin, label: "Outdoor Advertising", desc: "Dominating the physical landscape with bold visibility." },
    ],
  },
  {
    id: "media",
    number: "02",
    icon: Camera,
    title: "Media & Visual Production",
    subtitle: "High-fidelity storytelling captured through the lens.",
    image:
      "https://images.unsplash.com/photo-1768464037451-374c8c005699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaW5lbWF0b2dyYXBoeSUyMGNhbWVyYSUyMGZpbG0lMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc3MTY3ODg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    items: [
      { icon: Video, label: "Commercial & Consumer Media", desc: "Professional photography and videography tailored for brands and individuals." },
      { icon: Aperture, label: "Specialized Imaging", desc: "Advanced visual techniques and film processing for unique aesthetic needs." },
      { icon: FolderOpen, label: "Media Management", desc: "Professional handling and curation of your brand's visual assets." },
    ],
  },
  {
    id: "web",
    number: "03",
    icon: Globe,
    title: "Web Portals & Content Ecosystems",
    subtitle: "The digital architecture your brand deserves.",
    image:
      "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBkaWdpdGFsJTIwaW50ZXJmYWNlJTIwZGFya3xlbnwxfHx8fDE3NzE2Nzg4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    items: [
      { icon: LayoutGrid, label: "Web Portal Operation", desc: "End-to-end management of complex digital hubs." },
      { icon: FileText, label: "Media & Blogging Sites", desc: "Creating destination platforms for news, lifestyle, and niche communities." },
      { icon: PenTool, label: "Content Services", desc: "Professional blogging and editorial management to keep your audience engaged." },
    ],
  },
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
  const cardY = useTransform(scrollYProgress, [0, 1], lite ? [0, 0] : [40, -20]);

  const dur = lite ? 0.4 : 0.8;
  const dl = lite ? index * 0.08 : index * 0.2;

  return (
    <motion.div
      ref={ref}
      style={lite ? { position: "relative" as const } : { position: "relative" as const, y: cardY }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: dur, delay: dl, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <motion.div
        whileHover={lite ? undefined : { y: -8, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
        className="relative bg-white rounded-3xl overflow-hidden border border-[#0A0A0A]/5 hover:border-[#9B59B6]/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(155,89,182,0.08)]"
      >
        {/* Image Section */}
        <div className="relative h-56 lg:h-64 overflow-hidden">
          <ImageWithFallback
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-[#0A0A0A]/20 to-transparent" />

          {/* Number badge */}
          <div className="absolute top-5 left-5">
            <span
              className="font-['Playfair_Display'] text-white/60 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
              style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.1em" }}
            >
              {service.number}
            </span>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-5 left-5 right-5 lg:bottom-6 lg:left-6 lg:right-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-[#9B59B6]/20 backdrop-blur-sm flex items-center justify-center">
                <service.icon size={16} className="text-white" />
              </div>
              <h3
                className="font-['Playfair_Display'] text-white"
                style={{ fontSize: "clamp(1.15rem, 2vw, 1.5rem)", fontWeight: 500 }}
              >
                {service.title}
              </h3>
            </div>
            <p
              className="font-['Inter'] text-white/60"
              style={{ fontSize: "0.85rem", fontWeight: 300 }}
            >
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Items */}
        <div className="p-5 lg:p-8">
          <div className="space-y-3 lg:space-y-4">
            {service.items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: lite ? 0.3 : 0.5,
                  delay: lite ? dl + i * 0.03 : dl + 0.3 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group/item flex items-start gap-3 p-2.5 lg:p-3 rounded-xl hover:bg-[#F4ECF7]/60 transition-all duration-300 cursor-default"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#F4ECF7] flex items-center justify-center group-hover/item:bg-[#9B59B6]/10 transition-colors duration-300">
                  <item.icon size={14} className="text-[#9B59B6]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4
                      className="font-['Inter'] text-[#0A0A0A]"
                      style={{ fontSize: "0.85rem", fontWeight: 600 }}
                    >
                      {item.label}
                    </h4>
                    <ArrowUpRight
                      size={12}
                      className="text-[#F1C40F] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 hidden sm:block"
                    />
                  </div>
                  <p
                    className="font-['Inter'] text-[#0A0A0A]/45 mt-0.5"
                    style={{ fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.5 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
        <div ref={headerRef} className="max-w-2xl mb-12 lg:mb-20">
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
              The Three{" "}
              <span className="italic text-[#F1C40F]">Pillars</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: dur, delay: dl(0.3) }}
            className="font-['Inter'] text-[#0A0A0A]/50"
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}
          >
            By integrating Media Production, Strategic Marketing, and Digital
            Infrastructure, we provide a seamless loop of growth for businesses,
            creators, and innovators.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} lite={lite} />
          ))}
        </div>
      </div>
    </section>
  );
}
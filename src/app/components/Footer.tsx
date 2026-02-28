import { useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import {
  Mail,
  Phone,
  ArrowRight,
  Instagram,
  Linkedin,
  Heart,
  MessageCircle,
} from "lucide-react";
import { useLiteAnimations } from "./useMediaQuery";
import { EnquiryModal } from "./EnquiryModal";
import { PrivacyPolicyModal } from "./PrivacyPolicyModal";

export function Footer() {
  const lite = useLiteAnimations();
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true, margin: "-30px" });
  const [modalOpen, setModalOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const dur = lite ? 0.4 : 0.8;
  const dl = (v: number) => (lite ? v * 0.2 : v);

  return (
    <>
      {/* Gradient CTA keyframes */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* CTA Section */}
      <section
        id="contact"
        ref={ctaRef}
        className="relative py-20 lg:py-40 overflow-hidden bg-white"
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[700px] h-[400px] lg:h-[700px] bg-[#9B59B6]/[0.03] rounded-full blur-[80px] lg:blur-[180px]" />

        {/* Orbiting rings - desktop only */}
        {!lite && (
          <>
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={ctaInView ? { opacity: 0.06, rotate: 360 } : {}}
              transition={{
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                opacity: { duration: 1, delay: 0.5 },
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#9B59B6] rounded-full hidden lg:block"
            />
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={ctaInView ? { opacity: 0.03, rotate: -360 } : {}}
              transition={{
                rotate: { duration: 45, repeat: Infinity, ease: "linear" },
                opacity: { duration: 1, delay: 0.7 },
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-[#F1C40F] rounded-full hidden lg:block"
            />
          </>
        )}

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={ctaInView ? { scaleX: 1 } : {}}
              transition={{ duration: dur, delay: dl(0.2) }}
              className="w-8 h-[1px] bg-[#9B59B6]/50 origin-right"
            />
            <span
              className="font-['Inter'] text-[#9B59B6] tracking-[0.25em]"
              style={{ fontSize: "0.7rem", fontWeight: 500 }}
            >
              LET'S CONNECT
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={ctaInView ? { scaleX: 1 } : {}}
              transition={{ duration: dur, delay: dl(0.2) }}
              className="w-8 h-[1px] bg-[#9B59B6]/50 origin-left"
            />
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden mb-2">
            <motion.div
              initial={{ y: "110%" }}
              animate={ctaInView ? { y: 0 } : {}}
              transition={{
                duration: lite ? 0.5 : 1,
                delay: dl(0.15),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h2
                className="font-['Playfair_Display'] text-[#0A0A0A]"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 500,
                  lineHeight: 1.15,
                }}
              >
                Ready to{" "}
                <span className="italic text-[#F1C40F]">Elevate</span>
              </h2>
            </motion.div>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ y: "110%" }}
              animate={ctaInView ? { y: 0 } : {}}
              transition={{
                duration: lite ? 0.5 : 1,
                delay: dl(0.25),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h2
                className="font-['Playfair_Display'] text-[#0A0A0A]"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 500,
                  lineHeight: 1.15,
                }}
              >
                Your Brand?
              </h2>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: dur, delay: dl(0.4) }}
            className="font-['Inter'] text-[#0A0A0A]/50 max-w-xl mx-auto mb-10 lg:mb-12"
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}
          >
            Let's turn your vision into reality. Get in touch with our team today.
          </motion.p>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: dur, delay: dl(0.5) }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 lg:mb-12"
          >
            <a
              href="mailto:contact@elverasolutions.com"
              className="group flex items-center gap-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-[#F4ECF7] hover:bg-[#9B59B6] transition-colors duration-300 w-full sm:w-auto justify-center"
            >
              <Mail
                size={18}
                className="text-[#9B59B6] group-hover:text-white transition-colors duration-300"
              />
              <span
                className="font-['Inter'] text-[#0A0A0A] group-hover:text-white transition-colors duration-300 truncate"
                style={{ fontSize: "0.8rem", fontWeight: 400 }}
              >
                contact@elverasolutions.com
              </span>
            </a>
            <a
              href="tel:+971507751293"
              className="group flex items-center gap-3 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-[#F4ECF7] hover:bg-[#9B59B6] transition-colors duration-300 w-full sm:w-auto justify-center"
            >
              <Phone
                size={18}
                className="text-[#9B59B6] group-hover:text-white transition-colors duration-300"
              />
              <span
                className="font-['Inter'] text-[#0A0A0A] group-hover:text-white transition-colors duration-300"
                style={{ fontSize: "0.85rem", fontWeight: 400 }}
              >
                +971 507 751 293
              </span>
            </a>
          </motion.div>

          {/* Animated Gradient CTA Button - opens enquiry modal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: dur, delay: dl(0.6) }}
          >
            <button
              onClick={() => setModalOpen(true)}
              className="group relative inline-flex items-center gap-3 px-10 sm:px-12 py-4 sm:py-5 rounded-full text-white overflow-hidden cursor-pointer"
            >
              {/* Gradient background */}
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #9B59B6, #7D3C98, #9B59B6, #AF7AC5, #9B59B6)",
                  backgroundSize: "400% 400%",
                  animation: "gradientShift 4s ease infinite",
                }}
              />
              {/* Shimmer */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(241,196,15,0.25), transparent)",
                  }}
                />
              </span>

              <span
                className="relative z-10 font-['Inter']"
                style={{ fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.08em" }}
              >
                START YOUR PROJECT
              </span>
              <ArrowRight
                size={18}
                className="relative z-10 group-hover:translate-x-2 transition-transform duration-300"
              />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="relative bg-[#0A0A0A] pt-14 lg:pt-20 pb-8 overflow-hidden">
        {/* Gradient top border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={footerInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #9B59B644, #F1C40F66, #9B59B644, transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-14 lg:mb-16">
            {/* Column 1: Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur }}
            >
              <h4
                className="font-['Inter'] text-white mb-6 pb-1 border-b border-white/10 inline-block"
                style={{ fontSize: "0.95rem", fontWeight: 500 }}
              >
                Elvera Solutions LLC
              </h4>
              <p className="font-['Inter'] text-white/60 mb-4" style={{ fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.6 }}>
                Elevating Brands in the Digital Era
                <br />
                UAE Licensed | Globally Trusted
                <br />
                License No: 2644692.01
              </p>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur, delay: dl(0.08) }}
            >
              <h4
                className="font-['Inter'] text-white mb-6 pb-1 border-b border-white/10 inline-block"
                style={{ fontSize: "0.95rem", fontWeight: 500 }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Industries", href: "/industries" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={scrollToTop}
                      className="font-['Inter'] text-white/40 hover:text-[#F1C40F] transition-colors duration-300"
                      style={{ fontSize: "0.85rem", fontWeight: 300 }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur, delay: dl(0.16) }}
            >
              <h4
                className="font-['Inter'] text-white mb-6 pb-1 border-b border-white/10 inline-block"
                style={{ fontSize: "0.95rem", fontWeight: 500 }}
              >
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Software Development",
                  "Digital Marketing",
                  "Social Media Management",
                  "Web Design & Development",
                  "Photography & Videography",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to="/services"
                      onClick={scrollToTop}
                      className="font-['Inter'] text-white/40 hover:text-[#F1C40F] transition-colors duration-300"
                      style={{ fontSize: "0.85rem", fontWeight: 300 }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: dur, delay: dl(0.24) }}
            >
              <h4
                className="font-['Inter'] text-white mb-6 pb-1 border-b border-white/10 inline-block"
                style={{ fontSize: "0.95rem", fontWeight: 500 }}
              >
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <span
                    className="flex items-start gap-2.5 font-['Inter'] text-white/60"
                    style={{ fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.6 }}
                  >
                    Sharjah Media City Free Zone, UAE
                  </span>
                </li>
                <li>
                  <a
                    href="mailto:contact@elverasolutions.com"
                    className="flex items-center gap-2.5 font-['Inter'] text-white/40 hover:text-[#F1C40F] transition-colors duration-300"
                    style={{ fontSize: "0.85rem", fontWeight: 300 }}
                  >
                    <Mail size={14} className="flex-shrink-0" />
                    contact@elverasolutions.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+971507751293"
                    className="flex items-center gap-2.5 font-['Inter'] text-white/40 hover:text-[#F1C40F] transition-colors duration-300"
                    style={{ fontSize: "0.85rem", fontWeight: 300 }}
                  >
                    <Phone size={14} className="flex-shrink-0" />
                    +971 50 775 1293
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.elverasolutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 font-['Inter'] text-white/40 hover:text-[#F1C40F] transition-colors duration-300"
                    style={{ fontSize: "0.85rem", fontWeight: 300 }}
                  >
                    www.elverasolutions.com
                  </a>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-6">
                <motion.a
                  href="https://wa.me/971507751293"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={footerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: dl(0.3) }}
                  className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-300"
                >
                  <MessageCircle size={16} className="text-white/50" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/elverasolutionsllc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={footerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: dl(0.36) }}
                  className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 transition-all duration-300"
                >
                  <Instagram size={16} className="text-white/50" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/111757888/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={footerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: dl(0.42) }}
                  className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all duration-300"
                >
                  <Linkedin size={16} className="text-white/50" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={footerInView ? { opacity: 1 } : {}}
            transition={{ duration: dur, delay: dl(0.3) }}
            className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p
              className="font-['Inter'] text-white/25 flex items-center gap-1"
              style={{ fontSize: "0.75rem", fontWeight: 300 }}
            >
              &copy; 2025 Elvera Solutions LLC. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="font-['Inter'] text-white/25 hover:text-[#F1C40F] transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
                style={{ fontSize: "0.75rem", fontWeight: 300 }}
              >
                Privacy Policy
              </button>
              <span
                className="font-['Inter'] text-white/25 cursor-default hover:text-[#F1C40F] transition-colors duration-300"
                style={{ fontSize: "0.75rem", fontWeight: 300 }}
              >
                Terms of Service
              </span>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Enquiry Modal */}
      <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
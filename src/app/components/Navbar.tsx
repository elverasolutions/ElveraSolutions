import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, CalendarDays } from "lucide-react";

const GOOGLE_CAL_URL = "https://calendar.app.google/Poua2ktxjMeBeCJx8";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // If not on the homepage, we might want the navbar to always look scrolled 
  // depending on the hero section of that page. Assuming dark heroes for now.
  const isScrolledStyle = scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolledStyle
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(155,89,182,0.08)]"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-2"
          >
            <span
              className={`font-['Playfair_Display'] tracking-[0.2em] transition-colors duration-500 ${isScrolledStyle ? "text-[#0A0A0A]" : "text-white"
                }`}
              style={{ fontSize: "1.5rem", fontWeight: 600 }}
            >
              ELVERA
            </span>
            <span
              className={`hidden sm:inline-block font-['Inter'] tracking-[0.15em] transition-colors duration-500 ${isScrolledStyle ? "text-[#9B59B6]" : "text-[#C39BD3]"
                }`}
              style={{ fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.25em" }}
            >
              SOLUTIONS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-['Inter'] relative group transition-colors duration-300 ${isScrolledStyle
                  ? "text-[#0A0A0A]/70 hover:text-[#9B59B6]"
                  : "text-white/80 hover:text-white"
                  } ${location.pathname === link.href ? (isScrolledStyle ? 'text-[#9B59B6]' : 'text-white') : ''}`}
                style={{ fontSize: "0.8rem", fontWeight: 400, letterSpacing: "0.1em" }}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#F1C40F] transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
            <a
              href={GOOGLE_CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-['Inter'] px-6 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer ${isScrolledStyle
                ? "bg-[#0A0A0A] text-white hover:bg-[#9B59B6]"
                : "bg-white/10 text-white border border-white/30 hover:bg-white hover:text-[#0A0A0A]"
                }`}
              style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.1em" }}
            >
              <CalendarDays size={14} />
              Book a Free Strategy Call
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden transition-colors duration-300 ${isScrolledStyle ? "text-[#0A0A0A]" : "text-white"
              }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => {
              const MotionLink = motion.create ? motion.create(Link) : (motion as any)(Link);
              return (
                <MotionLink
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-['Playfair_Display'] hover:text-[#F1C40F] transition-colors duration-300 ${location.pathname === link.href ? 'text-[#F1C40F]' : 'text-white/90'}`}
                  style={{ fontSize: "1.75rem", fontWeight: 400 }}
                >
                  {link.label}
                </MotionLink>
              );
            })}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href={GOOGLE_CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 font-['Inter'] px-8 py-3 rounded-full bg-[#9B59B6] text-white flex items-center gap-2 cursor-pointer"
              style={{ fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.1em" }}
            >
              <CalendarDays size={16} />
              Book a Free Strategy Call
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
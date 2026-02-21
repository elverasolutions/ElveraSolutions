import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, ChevronDown, CheckCircle, AlertCircle, Loader2, CalendarDays } from "lucide-react";

/*  ───────────────────────────────────────────────────────────────────
    HOW TO ACTIVATE EMAIL DELIVERY
    ───────────────────────────────────────────────────────────────────
    1. Go to  https://web3forms.com
    2. Enter  contact@elverasolutions.com  and click "Create Access Key"
    3. Check inbox → copy the access key from the email you receive
    4. Paste it below, replacing the placeholder string
    ─────────────────────────────────────────────────────────────────── */
const WEB3FORMS_ACCESS_KEY = "24424e09-3f93-45f5-b97e-36ec6b6fd046"; // ← Replace with your real key

const helpOptions = [
  "Branding Services",
  "Social Media Management",
  "Marketing & Advertisement",
  "Media Services",
  "Full service",
  "IT & Integration",
  "Other",
];

const budgetOptions = [
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
  "Not sure yet",
];

const GOOGLE_CAL_URL = "https://calendar.app.google/Poua2ktxjMeBeCJx8";

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
}

export function EnquiryModal({ open, onClose }: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [helpType, setHelpType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Reset form when modal closes
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setName("");
        setEmail("");
        setPhone("");
        setBudget("");
        setHelpType("");
        setDropdownOpen(false);
        setBudgetDropdownOpen(false);
        setSubmitted(false);
        setSending(false);
        setError("");
      }, 400);
      return () => clearTimeout(t);
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Enquiry from ${name}`,
          from_name: "ELVERA Solutions Website",
          name,
          email,
          phone: phone || "Not provided",
          budget: budget || "Not provided",
          service: helpType,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  const inputBase =
    "w-full bg-[#150A1E]/60 border border-white/10 rounded-xl px-4 py-3.5 font-['Inter'] text-white placeholder-white/25 outline-none transition-all duration-300 focus:border-[#9B59B6]/60 focus:ring-1 focus:ring-[#9B59B6]/30 hover:border-white/20";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10"
            style={{
              background:
                "linear-gradient(160deg, #1a0e28 0%, #0f0817 40%, #0A0A0A 100%)",
            }}
          >
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#9B59B6]/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#F1C40F]/8 rounded-full blur-[70px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#9B59B6]/50 hover:bg-[#9B59B6]/10 transition-all duration-300 cursor-pointer"
            >
              <X size={16} className="text-white/50" />
            </button>

            <div className="relative p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-6 h-[1px] bg-[#9B59B6]/50" />
                        <span
                          className="font-['Inter'] text-[#9B59B6] tracking-[0.25em]"
                          style={{ fontSize: "0.65rem", fontWeight: 500 }}
                        >
                          GET IN TOUCH
                        </span>
                      </div>
                      <h3
                        className="font-['Playfair_Display'] text-white mb-2"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          fontWeight: 500,
                          lineHeight: 1.2,
                        }}
                      >
                        Let's Start{" "}
                        <span className="italic text-[#F1C40F]">Something</span>
                      </h3>
                      <h3
                        className="font-['Playfair_Display'] text-white"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          fontWeight: 500,
                          lineHeight: 1.2,
                        }}
                      >
                        Great Together.
                      </h3>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <input
                          type="text"
                          placeholder="Your Name *"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={inputBase}
                          style={{ fontSize: "0.85rem", fontWeight: 300 }}
                        />
                      </motion.div>

                      {/* Email */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        <input
                          type="email"
                          placeholder="Email Address *"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={inputBase}
                          style={{ fontSize: "0.85rem", fontWeight: 300 }}
                        />
                      </motion.div>

                      {/* Phone */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={inputBase}
                          style={{ fontSize: "0.85rem", fontWeight: 300 }}
                        />
                      </motion.div>

                      {/* Budget - dropdown */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 }}
                        className="relative"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setBudgetDropdownOpen((p) => !p);
                            setDropdownOpen(false);
                          }}
                          className={`${inputBase} flex items-center justify-between text-left cursor-pointer`}
                          style={{ fontSize: "0.85rem", fontWeight: 300 }}
                        >
                          <span
                            className={
                              budget ? "text-white" : "text-white/25"
                            }
                          >
                            {budget || "Budget Range"}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`text-white/30 transition-transform duration-300 ${
                              budgetDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {budgetDropdownOpen && (
                            <motion.ul
                              initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                              animate={{ opacity: 1, y: 0, scaleY: 1 }}
                              exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 right-0 top-full mt-2 bg-[#1a0e28] border border-white/10 rounded-xl overflow-hidden z-20 origin-top"
                              style={{
                                boxShadow:
                                  "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(155,89,182,0.1)",
                              }}
                            >
                              {budgetOptions.map((option) => (
                                <li key={option}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setBudget(option);
                                      setBudgetDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-3 font-['Inter'] transition-all duration-200 cursor-pointer ${
                                      budget === option
                                        ? "bg-[#9B59B6]/20 text-[#F1C40F]"
                                        : "text-white/60 hover:bg-white/5 hover:text-white"
                                    }`}
                                    style={{
                                      fontSize: "0.85rem",
                                      fontWeight: 300,
                                    }}
                                  >
                                    {option}
                                  </button>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* How can we help you - custom dropdown */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setDropdownOpen((p) => !p);
                            setBudgetDropdownOpen(false);
                          }}
                          className={`${inputBase} flex items-center justify-between text-left cursor-pointer`}
                          style={{ fontSize: "0.85rem", fontWeight: 300 }}
                        >
                          <span
                            className={
                              helpType ? "text-white" : "text-white/25"
                            }
                          >
                            {helpType || "How can we help you? *"}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`text-white/30 transition-transform duration-300 ${
                              dropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {dropdownOpen && (
                            <motion.ul
                              initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                              animate={{ opacity: 1, y: 0, scaleY: 1 }}
                              exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 right-0 top-full mt-2 bg-[#1a0e28] border border-white/10 rounded-xl overflow-hidden z-20 origin-top"
                              style={{
                                boxShadow:
                                  "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(155,89,182,0.1)",
                              }}
                            >
                              {helpOptions.map((option) => (
                                <li key={option}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setHelpType(option);
                                      setDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-3 font-['Inter'] transition-all duration-200 cursor-pointer ${
                                      helpType === option
                                        ? "bg-[#9B59B6]/20 text-[#F1C40F]"
                                        : "text-white/60 hover:bg-white/5 hover:text-white"
                                    }`}
                                    style={{
                                      fontSize: "0.85rem",
                                      fontWeight: 300,
                                    }}
                                  >
                                    {option}
                                  </button>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* Submit */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="pt-2"
                      >
                        {/* Error message */}
                        {error && (
                          <div className="flex items-center gap-2 mb-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20">
                            <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                            <span
                              className="font-['Inter'] text-red-300"
                              style={{ fontSize: "0.8rem", fontWeight: 400 }}
                            >
                              {error}
                            </span>
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={!name || !email || !helpType || sending}
                          className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity duration-300"
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
                          {sending ? (
                            <Loader2
                              size={18}
                              className="relative z-10 animate-spin"
                            />
                          ) : (
                            <>
                              <span
                                className="relative z-10 font-['Inter']"
                                style={{
                                  fontSize: "0.9rem",
                                  fontWeight: 500,
                                  letterSpacing: "0.08em",
                                }}
                              >
                                SUBMIT ENQUIRY
                              </span>
                              <Send
                                size={16}
                                className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                              />
                            </>
                          )}
                        </button>

                        {/* Divider with "or" */}
                        <div className="flex items-center gap-3 my-4">
                          <div className="flex-1 h-[1px] bg-white/10" />
                          <span
                            className="font-['Inter'] text-white/25"
                            style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.1em" }}
                          >
                            OR
                          </span>
                          <div className="flex-1 h-[1px] bg-white/10" />
                        </div>

                        {/* Google Calendar CTA */}
                        <a
                          href={GOOGLE_CAL_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group w-full inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full border border-[#F1C40F]/30 text-[#F1C40F] hover:bg-[#F1C40F]/10 hover:border-[#F1C40F]/50 transition-all duration-300"
                        >
                          <CalendarDays size={16} className="group-hover:scale-110 transition-transform duration-300" />
                          <span
                            className="font-['Inter']"
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: 500,
                              letterSpacing: "0.08em",
                            }}
                          >
                            BOOK A FREE STRATEGY CALL
                          </span>
                        </a>
                      </motion.div>
                    </form>
                  </motion.div>
                ) : (
                  /* Success State */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.15,
                      }}
                      className="w-16 h-16 rounded-full bg-[#9B59B6]/15 flex items-center justify-center mb-6"
                    >
                      <CheckCircle size={32} className="text-[#F1C40F]" />
                    </motion.div>
                    <h3
                      className="font-['Playfair_Display'] text-white mb-3"
                      style={{
                        fontSize: "1.6rem",
                        fontWeight: 500,
                        lineHeight: 1.2,
                      }}
                    >
                      Thank <span className="italic text-[#F1C40F]">You!</span>
                    </h3>
                    <p
                      className="font-['Inter'] text-white/40 max-w-xs mb-8"
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 300,
                        lineHeight: 1.7,
                      }}
                    >
                      We've received your enquiry. The Elvera team will be in
                      touch within 24 hours.
                    </p>
                    <button
                      onClick={onClose}
                      className="font-['Inter'] text-[#9B59B6] hover:text-[#F1C40F] transition-colors duration-300 cursor-pointer"
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        letterSpacing: "0.05em",
                      }}
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
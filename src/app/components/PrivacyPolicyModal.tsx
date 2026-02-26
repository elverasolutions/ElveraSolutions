import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface PrivacyPolicyModalProps {
    open: boolean;
    onClose: () => void;
}

export function PrivacyPolicyModal({ open, onClose }: PrivacyPolicyModalProps) {
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

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) onClose();
                    }}
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-4xl max-h-[85vh] sm:max-h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                    >
                        {/* Decorative glows */}
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#9B59B6]/10 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#F1C40F]/10 rounded-full blur-[100px] pointer-events-none" />

                        {/* Header / Sticky Top */}
                        <div className="relative flex-none px-6 py-5 sm:px-10 sm:py-6 border-b border-white/10 flex items-center justify-between bg-[#0A0A0A]/90 backdrop-blur-md z-10">
                            <div>
                                <h2
                                    className="font-['Playfair_Display'] text-white"
                                    style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 500, lineHeight: 1.2 }}
                                >
                                    Privacy <span className="italic text-[#F1C40F]">Policy</span>
                                </h2>
                                <p
                                    className="font-['Inter'] text-white/40 mt-1"
                                    style={{ fontSize: "0.85rem", fontWeight: 300 }}
                                >
                                    Effective Date: February 2026
                                </p>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-[#9B59B6]/50 hover:bg-[#9B59B6]/10 transition-all duration-300 cursor-pointer text-white/50 hover:text-white"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="relative flex-1 overflow-y-auto px-6 py-8 sm:px-10 sm:py-10 custom-scrollbar">
                            <div
                                className="prose prose-invert prose-p:text-white/60 prose-h3:text-white prose-h3:font-['Inter'] prose-h3:font-semibold prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-li:text-white/60 max-w-none font-['Inter']"
                                style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.8 }}
                            >
                                <p>
                                    This Privacy Policy forms an integral part of the General Terms and
                                    Conditions (GTC) of Elvera Solutions LLC. It explains how Elvera Solutions
                                    LLC (“Elvera Solutions”, “we”, “us”, or “our”) collects, processes, stores,
                                    and protects personal data in accordance with the United Arab Emirates
                                    Personal Data Protection Law (UAE PDPL).
                                </p>

                                <h3>1. Scope of Application</h3>
                                <p>
                                    This Privacy Policy applies to all personal data processed by Elvera
                                    Solutions in connection with:
                                </p>
                                <ul className="list-disc pl-5 space-y-1 mb-4">
                                    <li>Website usage</li>
                                    <li>Inquiries and communications</li>
                                    <li>Client onboarding and service delivery</li>
                                    <li>Marketing and business operations</li>
                                </ul>
                                <p>
                                    This policy applies regardless of the data subject’s location, unless
                                    mandatory provisions of UAE law require otherwise.
                                </p>

                                <h3>2. Responsible Entity</h3>
                                <p>
                                    <strong>Elvera Solutions LLC</strong><br />
                                    United Arab Emirates<br />
                                    Contact for privacy-related matters:<br />
                                    📧 <a href="mailto:contact@elverasolutions.com" className="text-[#9B59B6] hover:text-[#F1C40F] transition-colors">contact@elverasolutions.com</a>
                                </p>

                                <h3>3. Personal Data Processed</h3>
                                <p>Elvera Solutions may process the following categories of personal data:</p>
                                <ul className="list-disc pl-5 space-y-1 mb-4">
                                    <li>First and last name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Company name</li>
                                    <li>Job title</li>
                                    <li>Billing address</li>
                                    <li>IP address</li>
                                    <li>Website usage and analytics data</li>
                                </ul>
                                <p>
                                    Payment-related data is not stored by Elvera Solutions.
                                </p>

                                <h3>4. Purpose of Data Processing</h3>
                                <p>
                                    Personal data is processed exclusively for legitimate business purposes,
                                    including:
                                </p>
                                <ul className="list-disc pl-5 space-y-1 mb-4">
                                    <li>Responding to inquiries and communication requests</li>
                                    <li>Providing and managing contracted services</li>
                                    <li>Client communication and project coordination</li>
                                    <li>Administrative and invoicing purposes</li>
                                    <li>Marketing communications (subject to explicit consent)</li>
                                    <li>Website analytics and performance monitoring</li>
                                    <li>Compliance with applicable UAE legal obligations</li>
                                </ul>

                                <h3>5. Legal Basis</h3>
                                <p>
                                    Processing of personal data is based on one or more of the following
                                    legal grounds under UAE PDPL:
                                </p>
                                <ul className="list-disc pl-5 space-y-1 mb-4">
                                    <li>Explicit consent of the data subject</li>
                                    <li>Performance of contractual or pre-contractual obligations</li>
                                    <li>Compliance with legal or regulatory requirements</li>
                                    <li>Legitimate business interests, where lawful and proportionate</li>
                                </ul>

                                <h3>6. Marketing Communications</h3>
                                <p>
                                    Marketing and promotional communications are sent only after explicit
                                    opt-in consent has been obtained. Data subjects may withdraw their
                                    consent at any time by contacting:
                                    <br />
                                    📧 <a href="mailto:contact@elverasolutions.com" className="text-[#9B59B6] hover:text-[#F1C40F] transition-colors">contact@elverasolutions.com</a>
                                </p>

                                <h3>7. Cookies and Website Analytics</h3>
                                <p>
                                    Elvera Solutions may use analytics and performance monitoring
                                    technologies to improve website functionality and user experience. At
                                    present, no cookie consent banner is implemented.
                                </p>

                                <h3>8. Data Sharing and Disclosure</h3>
                                <p>
                                    Personal data is not sold, rented, or commercially disclosed. Data may
                                    be processed internally through CRM or project management tools solely
                                    for operational purposes. Data is disclosed to third parties only where
                                    required to fulfill contractual obligations or comply with UAE law.
                                </p>

                                <h3>9. Data Storage and Location</h3>
                                <p>
                                    Personal data is stored and processed within the United Arab Emirates
                                    (UAE). No intentional cross-border data transfers are carried out.
                                </p>

                                <h3>10. Data Retention</h3>
                                <p>
                                    Personal data is retained only for the duration necessary to fulfill
                                    the purpose of processing, unless longer retention is required by
                                    applicable UAE law.
                                </p>

                                <h3>11. Rights of Data Subjects</h3>
                                <p>
                                    In accordance with UAE PDPL, data subjects have the right to:
                                </p>
                                <ul className="list-disc pl-5 space-y-1 mb-4">
                                    <li>Request deletion of personal data</li>
                                    <li>Object to or restrict data processing</li>
                                    <li>Withdraw consent at any time</li>
                                    <li>Request access to personal data in a portable format</li>
                                </ul>
                                <p>
                                    Requests must be submitted in writing to:<br />
                                    📧 <a href="mailto:contact@elverasolutions.com" className="text-[#9B59B6] hover:text-[#F1C40F] transition-colors">contact@elverasolutions.com</a>
                                </p>

                                <h3>12. Data Security</h3>
                                <p>
                                    Elvera Solutions applies appropriate technical and organizational
                                    measures to safeguard personal data, including:
                                </p>
                                <ul className="list-disc pl-5 space-y-1 mb-4">
                                    <li>SSL / HTTPS encryption</li>
                                    <li>Restricted access to authorized personnel only</li>
                                    <li>Secure authentication and password practices</li>
                                </ul>
                                <p>
                                    Despite these measures, absolute data security cannot be guaranteed.
                                </p>

                                <h3>13. Amendments</h3>
                                <p>
                                    Elvera Solutions reserves the right to amend this Privacy Policy at
                                    any time. Amendments become effective upon publication on the website
                                    and apply prospectively.
                                </p>

                                <h3>14. Contact</h3>
                                <p>
                                    For any questions relating to this Privacy Policy or personal data
                                    processing:<br />
                                    📧 <a href="mailto:contact@elverasolutions.com" className="text-[#9B59B6] hover:text-[#F1C40F] transition-colors">contact@elverasolutions.com</a><br />
                                    Elvera Solutions LLC<br />
                                    United Arab Emirates
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

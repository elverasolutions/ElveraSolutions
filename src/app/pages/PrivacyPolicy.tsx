import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useSEO } from "../hooks/useSEO";

function FadeBlock({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
        >
            {children}
        </motion.div>
    );
}

function PrivacyPolicyHeader() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-[#0A0A0A] overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#9B59B6]/[0.1] rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#F1C40F]/[0.1] rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1
                        className="font-['Playfair_Display'] text-white mb-6"
                        style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 500, lineHeight: 1.1 }}
                    >
                        Privacy <span className="italic text-[#F1C40F]">Policy</span>
                    </h1>
                    <p
                        className="font-['Inter'] text-white/60 max-w-2xl mx-auto"
                        style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: 300 }}
                    >
                        Effective Date: February 2026
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function PrivacyPolicyContent() {
    return (
        <section className="py-20 lg:py-32 bg-white relative">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div
                    className="font-['Inter'] text-[#0A0A0A]/80 space-y-8 [&_h3]:text-[#0A0A0A] [&_h3]:font-semibold [&_h3]:text-2xl [&_h3]:mb-4 [&_p]:mb-4 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2 [&_a]:text-[#9B59B6] hover:[&_a]:text-[#F1C40F] transition-colors"
                    style={{ fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.8 }}
                >
                    <FadeBlock>
                        <p>
                            This Privacy Policy forms an integral part of the General Terms and
                            Conditions (GTC) of Elvera Solutions LLC. It explains how Elvera Solutions
                            LLC (“Elvera Solutions”, “we”, “us”, or “our”) collects, processes, stores,
                            and protects personal data in accordance with the United Arab Emirates
                            Personal Data Protection Law (UAE PDPL).
                        </p>
                    </FadeBlock>

                    <FadeBlock>
                        <h3>1. Scope of Application</h3>
                        <p>
                            This Privacy Policy applies to all personal data processed by Elvera
                            Solutions in connection with:
                        </p>
                        <ul>
                            <li>Website usage</li>
                            <li>Inquiries and communications</li>
                            <li>Client onboarding and service delivery</li>
                            <li>Marketing and business operations</li>
                        </ul>
                        <p>
                            This policy applies regardless of the data subject’s location, unless
                            mandatory provisions of UAE law require otherwise.
                        </p>
                    </FadeBlock>

                    <FadeBlock>
                        <h3>2. Responsible Entity</h3>
                        <p>
                            <strong>Elvera Solutions LLC</strong><br />
                            United Arab Emirates<br />
                            Contact for privacy-related matters:<br />
                            📧 <a href="mailto:contact@elverasolutions.com" className="transition-colors">contact@elverasolutions.com</a>
                        </p>
                    </FadeBlock>

                    <FadeBlock>
                        <h3>3. Personal Data Processed</h3>
                        <p>Elvera Solutions may process the following categories of personal data:</p>
                        <ul>
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
                    </FadeBlock>

                    <FadeBlock>
                        <h3>4. Purpose of Data Processing</h3>
                        <p>
                            Personal data is processed exclusively for legitimate business purposes,
                            including:
                        </p>
                        <ul>
                            <li>Responding to inquiries and communication requests</li>
                            <li>Providing and managing contracted services</li>
                            <li>Client communication and project coordination</li>
                            <li>Administrative and invoicing purposes</li>
                            <li>Marketing communications (subject to explicit consent)</li>
                            <li>Website analytics and performance monitoring</li>
                            <li>Compliance with applicable UAE legal obligations</li>
                        </ul>
                    </FadeBlock>

                    <FadeBlock>
                        <h3>5. Legal Basis</h3>
                        <p>
                            Processing of personal data is based on one or more of the following
                            legal grounds under UAE PDPL:
                        </p>
                        <ul>
                            <li>Explicit consent of the data subject</li>
                            <li>Performance of contractual or pre-contractual obligations</li>
                            <li>Compliance with legal or regulatory requirements</li>
                            <li>Legitimate business interests, where lawful and proportionate</li>
                        </ul>
                    </FadeBlock>

                    <FadeBlock>
                        <h3>6. Marketing Communications</h3>
                        <p>
                            Marketing and promotional communications are sent only after explicit
                            opt-in consent has been obtained. Data subjects may withdraw their
                            consent at any time by contacting:
                            <br />
                            📧 <a href="mailto:contact@elverasolutions.com" className="transition-colors">contact@elverasolutions.com</a>
                        </p>
                    </FadeBlock>

                    <FadeBlock>
                        <h3>7. Cookies and Website Analytics</h3>
                        <p>
                            Elvera Solutions may use analytics and performance monitoring
                            technologies to improve website functionality and user experience. At
                            present, no cookie consent banner is implemented.
                        </p>
                    </FadeBlock>

                    <FadeBlock>
                        <h3>8. Data Sharing and Disclosure</h3>
                        <p>
                            Personal data is not sold, rented, or commercially disclosed. Data may
                            be processed internally through CRM or project management tools solely
                            for operational purposes. Data is disclosed to third parties only where
                            required to fulfill contractual obligations or comply with UAE law.
                        </p>
                    </FadeBlock>

                    <FadeBlock>
                        <h3>9. Data Storage and Location</h3>
                        <p>
                            Personal data is stored and processed within the United Arab Emirates
                            (UAE). No intentional cross-border data transfers are carried out.
                        </p>
                    </FadeBlock>

                    <FadeBlock>
                        <h3>10. Data Retention</h3>
                        <p>
                            Personal data is retained only for the duration necessary to fulfill
                            the purpose of processing, unless longer retention is required by
                            applicable UAE law.
                        </p>
                    </FadeBlock>

                    <FadeBlock>
                        <h3>11. Rights of Data Subjects</h3>
                        <p>
                            In accordance with UAE PDPL, data subjects have the right to:
                        </p>
                        <ul>
                            <li>Request deletion of personal data</li>
                            <li>Object to or restrict data processing</li>
                            <li>Withdraw consent at any time</li>
                            <li>Request access to personal data in a portable format</li>
                        </ul>
                        <p>
                            Requests must be submitted in writing to:<br />
                            📧 <a href="mailto:contact@elverasolutions.com" className="transition-colors">contact@elverasolutions.com</a>
                        </p>
                    </FadeBlock>

                    <FadeBlock>
                        <h3>12. Data Security</h3>
                        <p>
                            Elvera Solutions applies appropriate technical and organizational
                            measures to safeguard personal data, including:
                        </p>
                        <ul>
                            <li>SSL / HTTPS encryption</li>
                            <li>Restricted access to authorized personnel only</li>
                            <li>Secure authentication and password practices</li>
                        </ul>
                        <p>
                            Despite these measures, absolute data security cannot be guaranteed.
                        </p>
                    </FadeBlock>

                    <FadeBlock>
                        <h3>13. Amendments</h3>
                        <p>
                            Elvera Solutions reserves the right to amend this Privacy Policy at
                            any time. Amendments become effective upon publication on the website
                            and apply prospectively.
                        </p>
                    </FadeBlock>

                    <FadeBlock>
                        <h3>14. Contact</h3>
                        <p>
                            For any questions relating to this Privacy Policy or personal data
                            processing:<br />
                            📧 <a href="mailto:contact@elverasolutions.com" className="transition-colors">contact@elverasolutions.com</a><br />
                            Elvera Solutions LLC<br />
                            United Arab Emirates
                        </p>
                    </FadeBlock>
                </div>
            </div>
        </section>
    );
}

export function PrivacyPolicy() {
    useSEO(
        "Privacy Policy | Elvera Solutions",
        "Read our Privacy Policy to understand how we collect, process, manage, and protect your personal data in accordance with the United Arab Emirates data laws."
    );

    return (
        <main className="min-h-screen bg-white selection:bg-[#9B59B6]/30 selection:text-[#0A0A0A]">
            <PrivacyPolicyHeader />
            <PrivacyPolicyContent />
        </main>
    );
}

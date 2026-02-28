import { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface TermsOfServiceModalProps {
    open: boolean;
    onClose: () => void;
}

function FadeBlock({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}

export function TermsOfServiceModal({ open, onClose }: TermsOfServiceModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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

    if (!mounted) return null;

    return createPortal(
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
                                    Terms & <span className="italic text-[#F1C40F]">Conditions</span>
                                </h2>
                                <p
                                    className="font-['Inter'] text-white/40 mt-1"
                                    style={{ fontSize: "0.85rem", fontWeight: 300 }}
                                >
                                    Effective Date: March 2026
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
                                className="font-['Inter'] text-white/80 space-y-8 [&_h3]:text-white [&_h3]:font-semibold [&_h3]:text-xl [&_h3]:mb-4 [&_p]:mb-4 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2 [&_a]:text-[#9B59B6] hover:[&_a]:text-[#F1C40F] transition-colors"
                                style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.8 }}
                            >
                                <FadeBlock>
                                    <h3>IMPORTANT NOTICE</h3>
                                    <p>
                                        Please read these Terms and Conditions carefully before using our website or engaging our services. By accessing our website (www.elverasolutions.com) or entering into a service agreement with Elvera Solutions LLC, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions in their entirety.
                                    </p>
                                    <p>
                                        If you do not agree with any part of these Terms and Conditions, you must immediately discontinue use of our website and services.
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>1. About Us</h3>
                                    <p>
                                        Elvera Solutions LLC (hereinafter referred to as 'Elvera Solutions', 'we', 'us', or 'our') is a Limited Liability Company registered and licensed under Sharjah Media City Free Zone (Shams), Government of Sharjah, United Arab Emirates.
                                        <br /><br />
                                        Company Name: Elvera Solutions LLC
                                        <br />License No: 2644692.01
                                        <br />Registered Address: Sharjah Media City Free Zone, Sharjah, UAE
                                        <br />Contact Email: <a href="mailto:contact@elverasolutions.com">contact@elverasolutions.com</a>
                                        <br />Website: <a href="https://www.elverasolutions.com" target="_blank" rel="noopener noreferrer">www.elverasolutions.com</a>
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>2. Scope and Acceptance</h3>
                                    <p>These Terms and Conditions govern:</p>
                                    <ul>
                                        <li>Your access to and use of our website (www.elverasolutions.com)</li>
                                        <li>Any services you engage Elvera Solutions to provide, including but not limited to Software Development, Digital Marketing and Advertising, Social Media Management, Web Design and Development, Photography and Videography, and Cyber Security</li>
                                        <li>Any agreements, proposals, invoices, or contracts entered into between you and Elvera Solutions</li>
                                    </ul>
                                    <p>
                                        By using our website or engaging our services, you represent and warrant that you are at least 18 years of age, have the legal authority to enter into binding agreements, and accept these Terms and Conditions fully.
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>3. Services</h3>
                                    <p>
                                        <strong>3.1 General</strong><br />
                                        Elvera Solutions provides professional digital services to businesses and individuals worldwide. The specific scope, deliverables, timelines, and fees for each engagement will be outlined in a separate Service Agreement, Proposal, or Statement of Work agreed upon between Elvera Solutions and the Client.
                                    </p>
                                    <p>
                                        <strong>3.2 Software Development</strong><br />
                                        All software developed by Elvera Solutions will be delivered in accordance with agreed specifications. The Client is responsible for providing accurate and complete project requirements. Elvera Solutions shall not be liable for delays or deficiencies arising from incomplete, inaccurate, or late-provided requirements from the Client.
                                    </p>
                                    <p>
                                        <strong>3.3 Digital Marketing and Advertising</strong><br />
                                        Elvera Solutions will execute marketing and advertising campaigns based on agreed strategies and budgets. The Client acknowledges that results from marketing campaigns are not guaranteed and may vary based on market conditions, platform algorithms, competition, and other factors beyond our control.
                                    </p>
                                    <p>
                                        <strong>3.4 Social Media Management</strong><br />
                                        The Client agrees to grant Elvera Solutions necessary access to their social media accounts for the purpose of delivering agreed services. The Client remains fully responsible for any content approved and published on their behalf. Elvera Solutions will not post content without prior Client approval unless explicitly authorised in writing.
                                    </p>
                                    <p>
                                        <strong>3.5 Web Design and Development</strong><br />
                                        Websites developed by Elvera Solutions will be delivered based on agreed designs and specifications. The Client is responsible for providing all necessary content including text, images, logos, and brand assets in a timely manner. Delays in content provision may affect project timelines.
                                    </p>
                                    <p>
                                        <strong>3.6 Photography and Videography</strong><br />
                                        All photography and videography services will be conducted professionally. Final edited deliverables will be provided within agreed timelines. Raw, unedited files will not be shared unless separately agreed in writing. The Client grants Elvera Solutions the right to use project visuals in our portfolio unless a confidentiality clause is agreed upon.
                                    </p>
                                    <p>
                                        <strong>3.7 Cyber Security</strong><br />
                                        Elvera Solutions will provide cyber security architecture design and advisory services as agreed. The Client acknowledges that no cyber security solution can guarantee complete protection against all threats. Elvera Solutions shall not be held liable for security breaches that occur outside the scope of services provided.
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>4. Client Responsibilities</h3>
                                    <p>The Client agrees to:</p>
                                    <ul>
                                        <li>Provide accurate, complete, and timely information required for service delivery</li>
                                        <li>Designate an authorised representative to liaise with Elvera Solutions throughout the project</li>
                                        <li>Review and provide feedback or approvals within agreed timeframes</li>
                                        <li>Ensure all content, materials, and assets provided to Elvera Solutions are owned by the Client or that the Client has the legal right to use them</li>
                                        <li>Make payments in accordance with agreed payment terms</li>
                                        <li>Not use Elvera Solutions services for any unlawful, unethical, or prohibited purpose</li>
                                    </ul>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>5. Fees and Payment</h3>
                                    <p>
                                        <strong>5.1 Fees</strong><br />
                                        All fees for services will be outlined in the relevant Proposal, Invoice, or Service Agreement. Elvera Solutions reserves the right to revise its fees at any time, with notice provided to existing Clients before such changes take effect on their engagements.
                                    </p>
                                    <p>
                                        <strong>5.2 Payment Terms</strong><br />
                                        Unless otherwise agreed in writing, the following payment terms apply:
                                    </p>
                                    <ul>
                                        <li>A deposit of [50%] of the total project fee is due upon commencement of the project</li>
                                        <li>The remaining balance is due upon project completion and before final delivery</li>
                                        <li>Monthly retainer services are invoiced in advance and are due within [14] days of invoice date</li>
                                    </ul>
                                    <p>
                                        <strong>5.3 Late Payment</strong><br />
                                        Elvera Solutions reserves the right to suspend or withhold services in the event of late or non-payment. Late payments may attract an administrative fee or interest as permitted under applicable law.
                                    </p>
                                    <p>
                                        <strong>5.4 Refunds</strong><br />
                                        Fees paid for work already commenced or delivered are non-refundable unless otherwise agreed in writing. Disputes regarding deliverables must be raised within [7] days of delivery.
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>6. Intellectual Property</h3>
                                    <p>
                                        <strong>6.1 Elvera Solutions IP</strong><br />
                                        All methodologies, frameworks, tools, templates, and pre-existing intellectual property used by Elvera Solutions in delivering services remain the sole property of Elvera Solutions.
                                    </p>
                                    <p>
                                        <strong>6.2 Client IP</strong><br />
                                        All intellectual property rights in deliverables created specifically for the Client will transfer to the Client upon receipt of full and final payment. Until full payment is received, all deliverables remain the property of Elvera Solutions.
                                    </p>
                                    <p>
                                        <strong>6.3 Third-Party Assets</strong><br />
                                        Any third-party assets, software, plugins, or licenses used in a project will be clearly identified. The Client is responsible for obtaining and maintaining any third-party licenses required for their own use after project delivery.
                                    </p>
                                    <p>
                                        <strong>6.4 Portfolio Rights</strong><br />
                                        Elvera Solutions reserves the right to feature work completed for Clients in our portfolio, website, social media, and marketing materials unless a specific confidentiality agreement has been signed. The Client will be credited appropriately unless they request otherwise.
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>7. Confidentiality</h3>
                                    <p>
                                        Both parties agree to treat all non-public information shared during the course of the engagement as confidential. Neither party shall disclose such information to any third party without the prior written consent of the other party, except where required by law.
                                        This confidentiality obligation shall survive the termination of any service agreement between the parties.
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>8. Data Protection and Privacy</h3>
                                    <p>
                                        Elvera Solutions is committed to protecting the privacy and personal data of our clients and website visitors. By using our website or services, you consent to the collection and use of your data as outlined in our Privacy Policy, available on our website.
                                    </p>
                                    <p>
                                        We will not sell, rent, or share your personal data with third parties without your consent, except where required by law or necessary to deliver agreed services.
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>9. Website Use</h3>
                                    <p>
                                        <strong>9.1 Permitted Use</strong><br />
                                        You may use our website for lawful purposes only. You agree not to:
                                    </p>
                                    <ul>
                                        <li>Use our website in any way that violates applicable laws or regulations</li>
                                        <li>Attempt to gain unauthorised access to any part of our website or systems</li>
                                        <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
                                        <li>Reproduce, duplicate, copy, or resell any part of our website without our express written permission</li>
                                    </ul>
                                    <p>
                                        <strong>9.2 Website Availability</strong><br />
                                        Elvera Solutions does not guarantee that our website will be available at all times. We reserve the right to suspend, withdraw, or modify our website without notice.
                                    </p>
                                    <p>
                                        <strong>9.3 Third-Party Links</strong><br />
                                        Our website may contain links to third-party websites. These links are provided for your convenience only. Elvera Solutions has no control over the content of those websites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>10. Limitation of Liability</h3>
                                    <p>To the fullest extent permitted by applicable law, Elvera Solutions shall not be liable for:</p>
                                    <ul>
                                        <li>Any indirect, incidental, special, or consequential loss or damage</li>
                                        <li>Loss of revenue, profits, business, data, or goodwill</li>
                                        <li>Any loss or damage arising from third-party platforms, tools, or services used in delivering our services</li>
                                        <li>Any delay or failure to perform our obligations due to circumstances beyond our reasonable control</li>
                                    </ul>
                                    <p>
                                        Our total aggregate liability to any Client in connection with any engagement shall not exceed the total fees paid by that Client to Elvera Solutions in the three (3) months preceding the claim.
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>11. Indemnification</h3>
                                    <p>The Client agrees to indemnify, defend, and hold harmless Elvera Solutions, its managers, employees, and contractors from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with:</p>
                                    <ul>
                                        <li>The Client's use of our services or website</li>
                                        <li>Any breach of these Terms and Conditions by the Client</li>
                                        <li>Any content or materials provided by the Client that infringe the rights of any third party</li>
                                    </ul>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>12. Termination</h3>
                                    <p>
                                        <strong>12.1 Termination by Client</strong><br />
                                        The Client may terminate a service engagement by providing written notice to Elvera Solutions. The Client shall remain liable for all fees for work completed up to the date of termination. Deposits and payments made for work already commenced are non-refundable.
                                    </p>
                                    <p>
                                        <strong>12.2 Termination by Elvera Solutions</strong><br />
                                        Elvera Solutions reserves the right to terminate or suspend services immediately and without liability if:
                                    </p>
                                    <ul>
                                        <li>The Client breaches any of these Terms and Conditions</li>
                                        <li>The Client fails to make payment by the due date</li>
                                        <li>The Client acts in a manner that is unlawful, abusive, or harmful to Elvera Solutions or its team</li>
                                    </ul>
                                    <p>
                                        <strong>12.3 Effect of Termination</strong><br />
                                        Upon termination, all outstanding fees become immediately due and payable. Elvera Solutions will retain ownership of all deliverables until full payment is received.
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>13. Force Majeure</h3>
                                    <p>
                                        Elvera Solutions shall not be held liable for any failure or delay in performing its obligations where such failure or delay results from circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, pandemics, government actions, power outages, internet failures, or third-party platform outages.
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>14. Amendments</h3>
                                    <p>
                                        Elvera Solutions reserves the right to update or amend these Terms and Conditions at any time. The updated version will be published on our website with a revised effective date. Your continued use of our website or services following any amendments constitutes your acceptance of the updated Terms and Conditions.
                                    </p>
                                    <p>We encourage you to review these Terms and Conditions periodically.</p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>15. Governing Law and Dispute Resolution</h3>
                                    <p>
                                        These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Arab Emirates, as applicable to Sharjah Media City Free Zone entities. The specific governing law and jurisdiction shall be finalised in consultation with Elvera Solutions' legal counsel.
                                    </p>
                                    <p>
                                        In the event of any dispute arising out of or in connection with these Terms and Conditions, the parties agree to first attempt to resolve the matter amicably through good-faith negotiation. If a resolution cannot be reached within 30 days, the dispute may be referred to the appropriate courts or arbitration body as determined by applicable law.
                                    </p>
                                    <p>
                                        <em>Note: Governing law and dispute resolution clauses to be finalised and confirmed by a qualified UAE legal professional before publication.</em>
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>16. Severability</h3>
                                    <p>
                                        If any provision of these Terms and Conditions is found to be unlawful, void, or unenforceable, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>17. Entire Agreement</h3>
                                    <p>
                                        These Terms and Conditions, together with any applicable Service Agreement, Proposal, or Statement of Work, constitute the entire agreement between you and Elvera Solutions with respect to the subject matter herein and supersede all prior communications, representations, or agreements.
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <h3>18. Contact Us</h3>
                                    <p>
                                        If you have any questions, concerns, or complaints regarding these Terms and Conditions, please contact us at:
                                        <br /><br />
                                        Elvera Solutions LLC<br />
                                        Sharjah Media City Free Zone, Sharjah, UAE<br />
                                        Email: <a href="mailto:contact@elverasolutions.com">contact@elverasolutions.com</a><br />
                                        Website: <a href="https://www.elverasolutions.com" target="_blank" rel="noopener noreferrer">www.elverasolutions.com</a>
                                    </p>
                                </FadeBlock>

                                <FadeBlock>
                                    <div className="pt-4 mt-8 border-t border-white/10 opacity-60">
                                        <p className="text-sm">End of Terms and Conditions</p>
                                        <p className="text-sm">Elvera Solutions LLC | License No: 2644692.01 | Sharjah Media City Free Zone, UAE</p>
                                        <p className="text-xs italic mt-2">
                                            Disclaimer: This document has been prepared as a general business Terms and Conditions template for Elvera Solutions LLC. It is strongly recommended that this document be reviewed and approved by a qualified UAE legal professional before it is published or used in any client-facing capacity.
                                        </p>
                                    </div>
                                </FadeBlock>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}

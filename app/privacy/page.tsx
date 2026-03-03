"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage(): React.JSX.Element {
    const lastUpdated = "March 3, 2026";

    const sections = [
        {
            title: "1. Information We Collect",
            content: (
                <div className="space-y-4">
                    <p>Kwiqbill is designed to operate primarily offline, keeping your sensitive business data stored locally on your device.</p>
                    <div className="space-y-2">
                        <p className="font-bold underline">1.1 Locally Stored Data</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Business Profile (Name, Address, Tax details (GST/VAT)).</li>
                            <li>Customer & Vendor Data (Contacts, Addresses, Emails).</li>
                            <li>Financial Data (Invoices, Estimates, Orders, Products, Expenses).</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold underline">1.2 Account & Subscription Data</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>User details (Name, Email, Password).</li>
                            <li>Subscription status, license keys, and device linking information.</li>
                            <li>Payment history (excluding raw card details).</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold underline">1.3 Third-Party Integrations</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Google Drive Backups (Automated backups, authorized by you).</li>
                            <li>Media Storage (Logos or product images uploaded to secure cloud storage).</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "2. How We Use Your Information",
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>To Provide Services: Invoicing, billing, inventory, and expense management.</li>
                    <li>To Manage Subscriptions: Verifying license status and enforcing policies.</li>
                    <li>To Enable Backups: Synchronizing your database to Google Drive (if authorized).</li>
                    <li>To Improve the App: Analyzing anonymized usage data or error logs to fix bugs.</li>
                    <li>To Communicate: Sending updates, notices, and providing support.</li>
                </ul>
            ),
        },
        {
            title: "3. Data Sharing & Disclosure",
            content: (
                <div className="space-y-3">
                    <p>We do not sell your personal or business data to third parties. Disclosure occurs only in limited circumstances:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Service Providers: Trusted partners assisting in app operation (cloud hosting, storage, email).</li>
                        <li>Legal Compliance: If required by law, subpoena, or to protect rights and safety.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "4. Data Security",
            content: "We implement reasonable technical and organizational security measures, including encryption (bcrypt for passwords, JWT for authentication) and secure communication protocols (HTTPS/SSL) for transmitted data. Remember that no method of transmission is 100% secure.",
        },
        {
            title: "5. Offline Capabilities",
            content: "Kwiqbill is designed to function offline using securely cached authentication tokens (JWT). It is your responsibility to secure the physical device to prevent unauthorized local access.",
        },
        {
            title: "6. Your Choices & Rights",
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Google Drive Access: You can revoke access at any time via your Google Account settings.</li>
                    <li>Local Data: You retain full control over data stored locally on your device.</li>
                    <li>Account Deletion: Contact us to request deletion of your account and subscription data.</li>
                </ul>
            ),
        },
        {
            title: "7. Policy Updates",
            content: "We may update this Privacy Policy from time to time. We will notify you of material changes by updating the 'Last Updated' date and potentially via in-app notifications.",
        },
        {
            title: "8. Contact Us",
            content: (
                <div className="space-y-2">
                    <p className="font-bold">Kwiqbill Support</p>
                    <p>Email: knock@zippydigitalsolutions.in</p>
                    <p>Website: zippydigitalsolutions.in</p>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-[#e0e5ec] text-slate-800 selection:bg-sky-500/20 font-oswald overflow-x-hidden pt-32 pb-24 px-6 md:px-12 lg:px-24">

            {/* HEADER SECTION */}
            <div className="max-w-4xl mx-auto mb-20 space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-4"
                >
                    <div className="h-1 w-12 bg-sky-500" />
                    <span className="font-mono text-xs text-sky-500 font-black tracking-[0.4em] uppercase">Privacy_Protocol</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter text-slate-800 uppercase leading-none"
                >
                    PRIVACY <span className="text-sky-500">POLICY</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-500 font-bold uppercase tracking-widest text-sm"
                >
                    LAST UPDATED: {lastUpdated}
                </motion.p>
            </div>

            {/* CONTENT GRID */}
            <div className="max-w-4xl mx-auto space-y-12">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-10 bg-[#e0e5ec] rounded-[2.5rem] md:rounded-[3rem] shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] border-t border-l border-white/40 space-y-6"
                >
                    <p className="text-lg md:text-2xl text-slate-600 font-bold leading-relaxed italic">
                        &quot;Welcome to Kwiqbill. We are committed to protecting your privacy and explaining how your information is collected, used, and safeguarded when you use our software.&quot;
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className={`p-8 bg-[#e0e5ec] rounded-[2.5rem] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] border-t border-l border-white/40 space-y-4 ${i === 0 || i === 7 ? "md:col-span-2" : ""
                                }`}
                        >
                            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">{item.title}</h3>
                            <div className="text-slate-500 font-bold leading-relaxed text-sm">
                                {item.content}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CONTACT SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 md:mt-24 p-8 md:p-12 bg-slate-950 rounded-[3rem] md:rounded-[4rem] text-center space-y-8 shadow-2xl"
                >
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">QUESTIONS ON PRIVACY?</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link href="/contact" className="w-full md:w-auto px-12 py-6 bg-sky-500 text-white font-black text-xl tracking-widest uppercase hover:bg-sky-400 transition-all rounded-2xl md:rounded-3xl">
                            TALK TO US
                        </Link>
                        <div className="text-slate-400 font-mono text-[10px] md:text-xs tracking-widest uppercase">
                            SECURE EMAIL: knock@zippydigitalsolutions.in
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

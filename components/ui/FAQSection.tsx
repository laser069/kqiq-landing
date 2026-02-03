"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "How can I start working with your team?",
        a: "You can initiate a consultation by completing the contact form above. Our client relations team typically responds to new inquiries within one to two business days."
    },
    {
        q: "How do you handle data privacy and security?",
        a: "We adhere to industry-standard data protection protocols. All client information and project details are handled with strict confidentiality and stored in secure, audited environments."
    },
    {
        q: "Are your services available for international clients?",
        a: "Yes, we partner with organizations globally. Our workflows are designed to accommodate various time zones and regional regulatory requirements."
    },
    {
        q: "Where can I review past project case studies?",
        a: "A selection of our recent work is available in our Portfolio section. For more specific industry examples, please request a credentials deck through our contact form."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-white py-32 px-6 md:px-12 relative border-t-2 border-slate-100">

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

                {/* Left: Professional Information Sidebar */}
                <div className="lg:w-1/3">
                    <div className="sticky top-32 space-y-8">
                        <div className="flex gap-4">
                            <div className="w-2 h-2 bg-sky-500 rounded-full" />
                            <div className="w-2 h-2 bg-slate-200 rounded-full" />
                        </div>
                        <h2 className="font-oswald text-5xl text-slate-900 uppercase leading-[1.1] tracking-tighter">
                            COMMON <br />
                            QUESTIONS.
                        </h2>
                        <div className="space-y-4 pt-12">
                            <p className="font-mono text-[11px] text-slate-500 font-bold tracking-widest leading-loose uppercase">
                                SECTION: GENERAL INQUIRIES <br />
                                UPDATED: Q1 2026 <br />
                                STATUS: VERIFIED
                            </p>
                        </div>
                        <div className="w-full h-[1px] bg-slate-200" />
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">
                            Find answers to frequently asked questions regarding our engagement process, security standards, and global operations.
                        </p>
                    </div>
                </div>

                {/* Right: Clean Accordion */}
                <div className="flex-1">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-slate-100 group cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="py-10 px-4 flex items-center justify-between group-hover:bg-slate-50/50 transition-colors">
                                <div className="flex items-center gap-8">
                                    <span className="font-mono text-[10px] text-slate-400 font-bold">0{index + 1}</span>
                                    <h3 className="font-oswald text-2xl md:text-3xl text-slate-900 tracking-tight transition-transform group-hover:translate-x-2">
                                        {faq.q}
                                    </h3>
                                </div>
                                <div className={`w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-sky-500 border-sky-500 rotate-45 shadow-lg shadow-sky-500/20' : 'bg-white'}`}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={openIndex === index ? 'text-white' : 'text-slate-400'}>
                                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </div>
                            </div>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pl-20 pr-4 pb-10">
                                            <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-2xl">
                                                {faq.a}
                                            </p>
                                            <div className="mt-6">
                                                <span className="font-mono text-[9px] text-sky-600 font-bold tracking-widest uppercase bg-sky-50 px-3 py-1 rounded">Official Policy</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
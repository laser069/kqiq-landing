"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "HOW DO I OPEN A BILLING CHANNEL?",
        a: "Direct transmissions can be initiated using the secure Ledger Hub form above. Standard reconciliation time for new client units is 24-48 solar hours."
    },
    {
        q: "WHAT TYPE OF FISCAL DATA IS ARCHIVED?",
        a: "We record all significant transaction events, ledger traces, and orbital billing maneuvers conducted within our jurisdiction."
    },
    {
        q: "CAN OUTSIDE UNITS JOIN THE LEDGER?",
        a: "Collaboration protocols are currently open for verified units in the financial and development sector."
    },
    {
        q: "WHERE CAN I VIEW THE TRANSACTION HISTORY?",
        a: "Most records are published in the 'FISCAL_TRACES' section, while classified data remains restricted to level-3 personnel."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-white py-32 px-6 md:px-12 relative border-t-2 border-slate-200">

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

                {/* Left: Metadata Sidebar */}
                <div className="lg:w-1/3">
                    <div className="sticky top-32 space-y-8">
                        <div className="flex gap-4">
                            <div className="w-2 h-2 bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.3)]" />
                            <div className="w-2 h-2 bg-slate-200" />
                        </div>
                        <h2 className="font-oswald text-5xl text-slate-900 uppercase leading-[1.1] tracking-tighter">
                            DATASET <br />
                            REFERENCE.
                        </h2>
                        <div className="space-y-4 pt-12">
                            <p className="font-mono text-[11px] text-slate-600 font-bold tracking-widest leading-loose uppercase">
                                QUERY_ID: FA-0032 <br />
                                ENCODING: UTF-8 <br />
                                RELEVANCE: 99.8%
                            </p>
                        </div>
                        <div className="w-full h-[2px] bg-slate-200" />
                        <p className="text-slate-700 text-sm font-semibold leading-relaxed">
                            Refer to the following protocol documentation for information regarding link establishment and mission parameters.
                        </p>
                    </div>
                </div>

                {/* Right: Technical Accordion */}
                <div className="flex-1">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b-2 border-slate-100 group cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="py-12 px-4 flex items-center justify-between group-hover:bg-slate-50 transition-colors">
                                <div className="flex items-center gap-12">
                                    <span className="font-mono text-[10px] text-slate-400 font-bold">0{index + 1}/_</span>
                                    <h3 className="font-oswald text-2xl md:text-4xl text-slate-900 tracking-tight transition-transform group-hover:translate-x-3">
                                        {faq.q}
                                    </h3>
                                </div>
                                <div className={`w-12 h-12 border-2 border-slate-300 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-sky-500 border-sky-500 rotate-45 shadow-lg shadow-sky-500/30' : ''}`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={openIndex === index ? 'text-white' : 'text-slate-500'}>
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
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pl-24 pr-4 pb-12">
                                            <p className="text-slate-700 font-medium text-xl leading-relaxed max-w-2xl font-sans">
                                                {faq.a}
                                            </p>
                                            <div className="mt-8 flex gap-4">
                                                <span className="font-mono text-[10px] text-sky-600 font-bold tracking-[0.4em] uppercase shadow-sm bg-sky-50 px-3 py-1 rounded">[ DECIDED_BY_SYSTEM ]</span>
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

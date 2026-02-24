"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SignalAnalysis() {
    const tickerItems = [
        "LEDGER_PROTOCOL_v3.221",
        "FISCAL_SYNC_STABLE",
        "NO_GATEWAY_INTERFERENCE",
        "SYNC_STRENGTH_99.9%",
        "ENCRYPTION_AES_256",
        "FISCAL_LAYER_7_SECURE",
        "REF_ID: LEDGER_88291"
    ];

    return (
        <div className="bg-white py-12 sm:py-16 border-y-2 border-slate-200 relative overflow-hidden">

            {/* Central Ticker */}
            <div className="flex overflow-hidden whitespace-nowrap mb-16">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex gap-20 pr-20 items-center"
                >
                    {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                        <div key={i} className="flex items-center gap-6">
                            <div className="w-2 h-2 bg-sky-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                            <span className="font-mono text-[10px] text-slate-600 tracking-[0.5em] font-bold uppercase">{item}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Internal Data Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {[
                    { label: "FISCAL_RECORDS", val: "140,291" },
                    { label: "RECONCILIATION", val: "99.992%" },
                    { label: "ACTIVE_PAYMENTS", val: "248" },
                    { label: "FISCAL_LATENCY", val: "0.2ms" }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="border-l-[1px] md:border-l-2 border-slate-200 pl-4 md:pl-8"
                    >
                        <p className="font-mono text-[9px] text-slate-500 font-bold tracking-widest uppercase mb-2">{stat.label}</p>
                        <p className="font-oswald text-2xl text-slate-900 uppercase tracking-wide">{stat.val}</p>
                    </motion.div>
                ))}
            </div>

            {/* Decorative scanning line */}
            <motion.div
                animate={{ y: [0, 150, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-[1px] bg-sky-500/20 pointer-events-none"
            />
        </div>
    );
}

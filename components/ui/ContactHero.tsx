"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        const messages = [
            "FISCAL_SYNC_INITIALIZED",
            "AUTHENTICATING_LEDGER",
            "GATEWAY_STATUS_SECURE",
            "RECONCILING_DATA_V3",
            "TRANSACTION_READY"
        ];
        let i = 0;
        const interval = setInterval(() => {
            setLogs(prev => [...prev.slice(-3), `> ${messages[i]}`]);
            i = (i + 1) % messages.length;
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-[85vh] lg:h-[90vh] bg-white p-6 lg:p-12 flex items-center justify-center overflow-hidden">

            {/* Main Bento Grid - Simplified to 4 Panels */}
            <div className="w-full h-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 lg:gap-8">

                {/* Panel 1: Main Command (Giant Focal Point) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="md:col-span-4 lg:col-span-8 row-span-1 lg:row-span-2 bg-sky-500 rounded-[3rem] relative overflow-hidden flex flex-col items-start justify-center border-4 border-white/20 shadow-2xl shadow-sky-500/10 group min-h-[450px] lg:min-h-[auto] px-12 lg:px-20"
                >
                    <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[radial-gradient(circle_at_center,_#fff_2px,_transparent_2px)] bg-[length:60px_60px]" />
                    <h1 className="font-oswald text-7xl md:text-[10rem] lg:text-[12rem] leading-[0.85] text-white uppercase tracking-[-0.05em] z-10 select-none group-hover:scale-[1.01] transition-transform duration-1000 text-left">
                        START <br />
                        <span className="opacity-60 outline-text drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">SIGNAL</span>
                    </h1>
                    <div className="absolute bottom-12 left-12 flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-white relative">
                            <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75" />
                        </div>
                        <span className="font-mono text-[10px] text-white font-bold tracking-[0.5em] uppercase">FISCAL_GATEWAY // ONLINE</span>
                    </div>
                </motion.div>

                {/* Panel 2: Volume Growth (Top Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="md:col-span-2 lg:col-span-4 row-span-1 bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-slate-100/50"
                >
                    <div>
                        <p className="font-mono text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-4">Volume_Growth</p>
                        <p className="font-oswald text-6xl text-slate-900">+12.4%</p>
                    </div>
                    <div className="h-32 w-full flex items-end justify-between gap-1.5 mt-8">
                        {[30, 50, 40, 70, 50, 80, 60, 90].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: 0.8 + i * 0.05, duration: 1, ease: "easeOut" }}
                                className="flex-1 bg-sky-500/80 rounded-t-md"
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Panel 3: Stats Hub (Bottom Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="md:col-span-2 lg:col-span-4 row-span-1 bg-slate-900 border-2 border-slate-800 rounded-[2.5rem] p-10 relative overflow-hidden shadow-2xl"
                >
                    <p className="font-mono text-[10px] text-white/40 font-bold tracking-widest uppercase mb-8">System_Metadata</p>
                    <div className="space-y-10">
                        <div className="flex justify-between items-end border-b border-white/10 pb-4">
                            <span className="font-mono text-[9px] text-white/40 tracking-widest uppercase">Accuracy</span>
                            <span className="font-oswald text-4xl text-white">99.9%</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/10 pb-4">
                            <span className="font-mono text-[9px] text-white/40 tracking-widest uppercase">Uptime</span>
                            <span className="font-oswald text-4xl text-white">100%</span>
                        </div>
                    </div>
                    {/* Animated background detail */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-[80px] rounded-full" />
                </motion.div>

                {/* Panel 4: Transaction Log (Bottom Wide) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="md:col-span-4 lg:col-span-12 bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden shadow-xl shadow-slate-100/50"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="flex items-center gap-8">
                            <div className="p-4 bg-sky-500/10 rounded-2xl border border-sky-500/20">
                                <p className="font-mono text-[10px] text-sky-600 font-bold">LEDGER_READY</p>
                            </div>
                            <div className="font-mono text-[10px] text-slate-400 space-y-1">
                                {logs.map((log, i) => (
                                    <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{log}</motion.p>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-12 text-right">
                            <div>
                                <p className="font-oswald text-3xl text-slate-900 leading-none">248</p>
                                <p className="font-mono text-[8px] text-slate-400 font-bold tracking-widest uppercase mt-2">Active_Sessions</p>
                            </div>
                            <div className="w-[1px] h-10 bg-slate-200" />
                            <div>
                                <p className="font-oswald text-3xl text-slate-900 leading-none">0.2ms</p>
                                <p className="font-mono text-[8px] text-slate-400 font-bold tracking-widest uppercase mt-2">Processing_Speed</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>

            <style jsx>{`
                .outline-text {
                -webkit-text-stroke: 2.5px white;
                text-stroke: 2.5px white;
                color: transparent;
                }
            `}</style>
        </section>
    );
}

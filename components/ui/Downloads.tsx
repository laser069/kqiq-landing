"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Monitor, Download, ArrowRight } from "lucide-react";

export default function Downloads() {
    return (
        <section className="relative z-40 bg-[#e0e5ec] py-24 border-t-[1.5px] border-white/70">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-12">
                    {/* Header */}
                    <div className="space-y-4">
                        <h2 className="font-oswald font-black text-4xl sm:text-5xl md:text-7xl text-slate-900 uppercase leading-[0.9] tracking-tighter">
                            Ready to <br />
                            <span className="text-sky-500">Deploy?</span>
                        </h2>
                        <p className="text-slate-500 text-base md:text-xl font-bold italic leading-relaxed uppercase tracking-tight max-w-xl">
                            Get KWIQBILL for your primary devices. Full offline capability, automatic sync, and biometric security.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Mobile Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group relative bg-[#e0e5ec] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] border-t border-l border-white/60 flex flex-col justify-between"
                        >
                            <div className="space-y-6">
                                <div className="w-16 h-16 rounded-3xl bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] flex items-center justify-center text-sky-500 group-hover:text-sky-400 transition-colors">
                                    <Smartphone size={32} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-oswald font-black text-3xl md:text-4xl text-slate-800 uppercase italic">Mobile APK</h3>
                                    <p className="font-mono text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-widest">Android 8.0 or Higher</p>
                                </div>
                                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed border-l-2 border-sky-500/20 pl-4">
                                    Full-featured mobile billing with barcode scanning, instant thermal printer support, and local storage.
                                </p>
                            </div>

                            <div className="mt-12 flex items-center justify-between">
                                <a
                                    href="/downloads/kwiqbill_v1.0.apk"
                                    download
                                    className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-oswald font-black uppercase tracking-wider hover:bg-sky-600 transition-all shadow-xl shadow-slate-950/20 w-fit"
                                >
                                    <Download size={20} />
                                    Download APK
                                </a>
                            </div>
                        </motion.div>

                        {/* Desktop Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group relative bg-slate-900 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl shadow-sky-900/20 border border-white/5 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

                            <div className="space-y-6 relative z-10">
                                <div className="w-16 h-16 rounded-3xl bg-slate-800 border border-white/10 flex items-center justify-center text-sky-400">
                                    <Monitor size={32} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-oswald font-black text-3xl md:text-4xl text-white uppercase italic">Desktop Client</h3>
                                    <p className="font-mono text-[10px] md:text-xs text-sky-400 font-bold uppercase tracking-widest">Windows 10/11 x64</p>
                                </div>
                                <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed border-l-2 border-sky-500/40 pl-4">
                                    Powerful desktop infrastructure for high-velocity billing. Supports dual screens and multi-printer environments.
                                </p>
                            </div>

                            <div className="mt-12 flex items-center justify-between relative z-10">
                                <a
                                    href="/downloads/KWIQBILL_Setup.exe"
                                    download
                                    className="flex items-center gap-3 px-8 py-4 bg-sky-500 text-white rounded-2xl font-oswald font-black uppercase tracking-wider hover:bg-white hover:text-sky-500 transition-all shadow-xl shadow-sky-400/20 w-fit"
                                >
                                    <Download size={20} />
                                    Download EXE
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

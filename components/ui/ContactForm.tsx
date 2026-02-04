"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    return (
        <section id="contact-form" className="bg-[#e0e5ec] py-20 md:py-32 px-6 md:px-12 relative overflow-hidden border-t-[1.5px] border-white/70">

            {/* Background Structural Detail */}
            <div className="absolute top-0 right-0 w-[50vw] h-full bg-slate-400/5 -skew-x-12 translate-x-32 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Left side: Professional Identity & Security */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-6">
                            <span className="font-mono text-[10px] text-sky-500 font-bold tracking-[0.4em] uppercase block">Client Relations</span>
                            <h2 className="font-oswald text-6xl text-slate-900 uppercase leading-[0.9] tracking-tighter">
                                START A <br />
                                <span className="text-sky-500">PROJECT.</span>
                            </h2>
                        </div>

                        <div className="p-8 md:p-10 bg-[#e0e5ec] rounded-[2.5rem] md:rounded-[3rem] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] space-y-8 border-t border-l border-white/60">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center text-sky-500">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-mono text-[9px] text-slate-400 tracking-widest uppercase">Privacy Standard</p>
                                    <p className="font-oswald text-xl tracking-wide uppercase text-slate-800">Enterprise Grade</p>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-slate-300/20">
                                <div className="flex justify-between items-center text-[10px] font-mono">
                                    <span className="text-slate-400">Inquiry Status</span>
                                    <span className="text-emerald-500 font-bold uppercase tracking-wider">Awaiting Entry</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-mono">
                                    <span className="text-slate-400">Office Region</span>
                                    <span className="text-slate-800 uppercase tracking-wider">North America</span>
                                </div>
                                <div className="h-1.5 w-full bg-[#e0e5ec] rounded-full shadow-[inset_1px_1px_3px_#bebebe,inset_-1px_-1px_3px_#ffffff] overflow-hidden">
                                    <motion.div
                                        initial={{ width: "30%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="h-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="text-slate-500 text-sm font-bold leading-relaxed max-w-sm italic">
                            Connect with our specialized team to discuss your requirements. All submissions are processed through secure internal protocols.
                        </p>
                    </div>

                    {/* Right side: Neumorphic Form */}
                    <div className="lg:col-span-8 bg-[#e0e5ec] rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] md:shadow-[35px_35px_70px_#bebebe,-35px_-35px_70px_#ffffff] border-t border-l border-white/60">
                        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="font-mono text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Official Name</label>
                                    <input
                                        type="text"
                                        placeholder="First and Last Name"
                                        className="w-full bg-[#e0e5ec] rounded-2xl px-6 py-5 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] outline-none focus:text-sky-500 transition-all font-sans font-bold text-slate-700 placeholder:text-slate-400/50"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="font-mono text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Work Email</label>
                                    <input
                                        type="email"
                                        placeholder="email@company.com"
                                        className="w-full bg-[#e0e5ec] rounded-2xl px-6 py-5 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] outline-none focus:text-sky-500 transition-all font-sans font-bold text-slate-700 placeholder:text-slate-400/50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="font-mono text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Inquiry Details</label>
                                <textarea
                                    rows={5}
                                    placeholder="Please describe your requirements..."
                                    className="w-full bg-[#e0e5ec] rounded-3xl px-8 py-6 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] outline-none focus:text-sky-500 transition-all font-sans font-bold text-slate-700 placeholder:text-slate-400/50 resize-none"
                                />
                            </div>

                            <div className="pt-8">
                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-[#e0e5ec] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] active:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] text-slate-800 rounded-[1.5rem] md:rounded-[2rem] py-6 md:py-8 px-8 md:px-12 font-oswald text-xl md:text-2xl uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-between group transition-all"
                                >
                                    <span className="font-black">Submit Inquiry</span>
                                    <div className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </div>
                                </motion.button>
                            </div>

                            <div className="flex justify-center items-center gap-4 opacity-30">
                                <div className="h-[1px] w-8 bg-slate-400" />
                                <p className="font-mono text-[9px] text-slate-500 tracking-[0.4em] uppercase font-bold">
                                    Encrypted Protocol
                                </p>
                                <div className="h-[1px] w-8 bg-slate-400" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
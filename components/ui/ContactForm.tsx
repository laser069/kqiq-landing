"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    return (
        <section className="bg-white py-32 px-6 md:px-12 relative overflow-hidden border-t border-slate-100">

            {/* Background Structural Detail */}
            <div className="absolute top-0 right-0 w-[50vw] h-full bg-slate-50/20 -skew-x-12 translate-x-32 pointer-events-none" />

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

                        <div className="p-8 bg-slate-900 rounded-[2rem] text-white space-y-8 shadow-2xl">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-mono text-[9px] text-white/40 tracking-widest uppercase">Privacy Standard</p>
                                    <p className="font-oswald text-xl tracking-wide uppercase">Enterprise Grade</p>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-white/10">
                                <div className="flex justify-between items-center text-[10px] font-mono">
                                    <span className="text-white/40">Inquiry Status</span>
                                    <span className="text-emerald-400 font-bold uppercase tracking-wider">Awaiting Entry</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-mono">
                                    <span className="text-white/40">Office Region</span>
                                    <span className="text-white/80 uppercase tracking-wider">North America</span>
                                </div>
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: "30%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="h-full bg-sky-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                            Connect with our specialized team to discuss your requirements. All submissions are processed through our secure internal management system.
                        </p>
                    </div>

                    {/* Right side: Clean Professional Form */}
                    <div className="lg:col-span-8 bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-slate-200/40">
                        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest ml-1">Official Name</label>
                                    <input
                                        type="text"
                                        placeholder="First and Last Name"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-sky-500 focus:bg-white transition-all font-sans font-medium text-slate-900 placeholder:text-slate-300"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest ml-1">Work Email</label>
                                    <input
                                        type="email"
                                        placeholder="email@company.com"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-sky-500 focus:bg-white transition-all font-sans font-medium text-slate-900 placeholder:text-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest ml-1">Inquiry Details</label>
                                <textarea
                                    rows={5}
                                    placeholder="Please describe your project requirements or specific questions..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-6 py-5 outline-none focus:border-sky-500 focus:bg-white transition-all font-sans font-medium text-slate-900 placeholder:text-slate-300 resize-none"
                                />
                            </div>

                            <div className="pt-6">
                                <motion.button
                                    whileHover={{ scale: 1.01, x: 5 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="w-full bg-sky-500 text-white rounded-[1.5rem] py-6 px-12 font-oswald text-2xl uppercase tracking-widest flex items-center justify-between group shadow-xl shadow-sky-500/20"
                                >
                                    <span>Submit Inquiry</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-2 transition-transform">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </motion.button>
                            </div>

                            <div className="flex justify-center items-center gap-4 opacity-50">
                                <div className="h-[1px] w-8 bg-slate-300" />
                                <p className="font-mono text-[9px] text-slate-500 tracking-[0.3em] uppercase">
                                    Secure and Confidential
                                </p>
                                <div className="h-[1px] w-8 bg-slate-300" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
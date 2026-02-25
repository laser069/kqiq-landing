"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };
    return (
        <section id="contact-form" className="bg-[#e0e5ec] py-16 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden border-t-[1.5px] border-white/70">

            {/* Background Structural Detail */}
            <div className="absolute top-0 right-0 w-[50vw] h-full bg-slate-400/5 -skew-x-12 translate-x-32 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Left side: Professional Identity & Security */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-6">
                            <h2 className="font-oswald text-slate-900 uppercase leading-[0.9] tracking-tighter text-[clamp(2.5rem,12vw,5.5rem)] break-words">
                                START A <br />
                                <span className="text-sky-500">PROJECT.</span>
                            </h2>
                        </div>

                        <div className="p-8 md:p-10 bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl shadow-sky-900/20 space-y-8 border border-slate-800 relative overflow-hidden">
                            {/* Decorative glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl" />

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-mono text-[9px] text-slate-400 tracking-widest uppercase">Privacy Standard</p>
                                    <p className="font-oswald text-xl tracking-wide uppercase text-white">Enterprise Grade</p>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-slate-800 relative z-10">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-4 text-[10px] font-mono">
                                    <span className="text-slate-400 shrink-0">Inquiry Status</span>
                                    <span className="text-sky-400 font-bold uppercase tracking-wider truncate">Awaiting Entry</span>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-4 text-[10px] font-mono">
                                    <span className="text-slate-400 shrink-0">Office Region</span>
                                    <span className="text-slate-300 uppercase tracking-wider truncate">Global Remote</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                                    <motion.div
                                        initial={{ width: "30%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="h-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]"
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
                        <form className="space-y-12" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="font-mono text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Official Name</label>
                                    <input
                                        type="text"
                                        placeholder="First and Last Name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-[#e0e5ec] rounded-2xl px-5 py-4 sm:px-6 sm:py-5 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] sm:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] outline-none focus:text-sky-500 transition-all font-sans font-bold text-slate-700 placeholder:text-slate-400/50"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="font-mono text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Work Email</label>
                                    <input
                                        type="email"
                                        placeholder="email@company.com"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-[#e0e5ec] rounded-2xl px-5 py-4 sm:px-6 sm:py-5 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] sm:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] outline-none focus:text-sky-500 transition-all font-sans font-bold text-slate-700 placeholder:text-slate-400/50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="font-mono text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Inquiry Details</label>
                                <textarea
                                    rows={5}
                                    placeholder="Please describe your requirements..."
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-[#e0e5ec] rounded-2xl sm:rounded-3xl px-6 py-5 sm:px-8 sm:py-6 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] sm:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] outline-none focus:text-sky-500 transition-all font-sans font-bold text-slate-700 placeholder:text-slate-400/50 resize-none"
                                />
                            </div>

                            <div className="pt-8">
                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={status === "submitting"}
                                    className={`w-full bg-[#e0e5ec] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] active:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] text-slate-800 rounded-[1.5rem] md:rounded-[2rem] py-5 sm:py-6 md:py-8 px-6 sm:px-8 md:px-12 font-oswald text-lg sm:text-xl md:text-2xl uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-between group transition-all ${status === "submitting" ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    <span className="font-black">
                                        {status === "idle" && "Submit Inquiry"}
                                        {status === "submitting" && "Transmitting..."}
                                        {status === "success" && "Inquiry Sent"}
                                        {status === "error" && "Retry Submission"}
                                    </span>
                                    <div className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform">
                                        {status === "success" ? (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        ) : (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        )}
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
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import RazorpayPayment from "@/components/ui/RazorpayPayment";

const investmentMetrics = [
    { label: "Target Market", value: "$4.5T+", sub: "Retail Commerce" },
    { label: "Growth Velocity", value: "3.2x", sub: "Merchant Adoption" },
    { label: "Data Pipeline", value: "100M+", sub: "Events / Day" },
];

export default function FundingClient() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        fund: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: `INVESTOR: ${formData.name}`,
                    email: formData.email,
                    message: `Fund: ${formData.fund}\n\nMessage: ${formData.message}`
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", fund: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-[#e0e5ec] pt-24 pb-32 px-6 md:px-12 selection:bg-sky-500/20">
            <div className="max-w-7xl mx-auto">

                {/* --- HERO SECTION --- */}
                <section className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[2px] w-8 bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
                            <span className="font-mono text-[10px] md:text-xs font-black tracking-[0.4em] text-slate-400 uppercase">
                                Capital_Infrastructure // Series_A
                            </span>
                        </div>
                        <h1 className="font-oswald font-black text-3xl sm:text-7xl md:text-9xl text-slate-900 leading-[0.9] uppercase mb-10 tracking-tighter">
                            INVEST IN THE <br />
                            <span className="text-sky-500 drop-shadow-[4px_4px_8px_rgba(14,165,233,0.3)]">
                                FUTURE.
                            </span>
                        </h1>
                        <p className="text-slate-500 text-xl md:text-2xl font-bold leading-relaxed max-w-2xl italic pb-8 border-l-4 border-sky-500/20 pl-8">
                            KwiqBill is redefining the merchant OS for the next billion users. Join us as we scale the most efficient billing & revenue protocol globally.
                        </p>
                    </motion.div>
                </section>

                {/* --- METRICS GRID --- */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
                    {investmentMetrics.map((metric, idx) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-[#e0e5ec] rounded-[3rem] p-12 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-t border-l border-white/60 text-center group hover:bg-white/50 transition-colors"
                        >
                            <p className="font-mono text-[9px] text-slate-400 tracking-[0.4em] uppercase font-black mb-4">
                                {metric.label}
                            </p>
                            <h3 className="font-oswald text-6xl md:text-7xl text-slate-900 font-black mb-4 group-hover:text-sky-500 transition-colors">
                                {metric.value}
                            </h3>
                            <div className="h-[2px] w-12 bg-sky-500/30 mx-auto mb-4" />
                            <p className="font-oswald text-slate-500 text-lg uppercase font-bold tracking-widest">
                                {metric.sub}
                            </p>
                        </motion.div>
                    ))}
                </section>

                {/* --- INVESTMENT THESIS --- */}
                <section className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="font-mono text-sky-500 font-black text-[10px] tracking-[0.5em] uppercase">Core Thesis</span>
                            <h2 className="font-oswald text-5xl md:text-7xl text-slate-800 font-black uppercase leading-tight tracking-tighter">
                                Why We <span className="text-sky-500">Disrupt</span>
                            </h2>
                        </div>
                        <div className="space-y-8">
                            {[
                                { title: "Unit Efficiency", desc: "Our offline-first architecture reduces server load by 85% compared to cloud-only billing systems." },
                                { title: "High Retention", desc: "Native desktop and mobile apps create deep ecosystem lock-in with zero churn in enterprise retails." },
                                { title: "Data Moat", desc: "Processing over $40M GMV monthly gives us unparalleled localized market insights." }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-6"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex-shrink-0 flex items-center justify-center text-sky-500 font-bold font-mono text-xl">
                                        0{i+1}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-oswald text-2xl text-slate-800 uppercase font-black tracking-tight">{item.title}</h4>
                                        <p className="text-slate-500 font-bold italic text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-[#e0e5ec] rounded-[4rem] shadow-[inset_25px_25px_50px_#bebebe,inset_-25px_-25px_50px_#ffffff] border border-white/20 flex items-center justify-center p-12 overflow-hidden">
                             {/* Decorative visual element */}
                             <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500 via-transparent to-transparent" />
                             </div>
                             <div className="relative z-10 text-center space-y-4">
                                <div className="w-32 h-32 rounded-full bg-[#e0e5ec] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] flex items-center justify-center mx-auto mb-8">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-sky-500">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                    </svg>
                                </div>
                                <p className="font-mono text-xs text-slate-400 tracking-[0.3em] uppercase">Status: Operating</p>
                                <p className="font-oswald text-3xl text-slate-800 font-black uppercase tracking-widest">Growth_Mode</p>
                             </div>
                        </div>
                    </div>
                </section>

                {/* --- DIRECT SUPPORT SECTION --- */}
                <section className="mb-40">
                    <div className="text-center mb-16 space-y-4">
                        <span className="font-mono text-sky-500 font-black text-[10px] tracking-[0.5em] uppercase">Support Roadmap</span>
                        <h2 className="font-oswald text-5xl md:text-7xl text-slate-900 font-black uppercase tracking-tighter">
                            DIRECT <span className="text-sky-500">SUPPORT</span>
                        </h2>
                        <p className="text-slate-500 font-bold italic text-lg max-w-xl mx-auto">
                            Help us maintain the infrastructure and keep KwiqBill free for everyone.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {[
                            { amt: 500, label: "Community Supporter" },
                            { amt: 2500, label: "Growth Partner" },
                            { amt: 10000, label: "Visionary Backer" }
                        ].map((tier, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#e0e5ec] rounded-[3rem] p-10 shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] border-t border-l border-white/60 flex flex-col items-center gap-8"
                            >
                                <div className="text-center space-y-2">
                                    <h4 className="font-oswald text-2xl text-slate-800 font-black uppercase tracking-tight">{tier.label}</h4>
                                    <p className="font-mono text-[10px] text-slate-400 font-bold uppercase">Signal_Tier_0{idx + 1}</p>
                                </div>
                                <RazorpayPayment amount={tier.amt} label={tier.label} />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* --- INVESTOR FORM --- */}
                <section id="investor-form" className="bg-[#e0e5ec] rounded-[4rem] p-8 md:p-20 shadow-[35px_35px_70px_#bebebe,-35px_-35px_70px_#ffffff] border-t border-l border-white/60">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <span className="font-mono text-sky-500 font-black text-[10px] tracking-[0.5em] uppercase">Investor Inquiry</span>
                            <h2 className="font-oswald text-5xl md:text-8xl text-slate-900 font-black uppercase tracking-tighter">
                                REQUEST <span className="text-sky-500">ACCESS.</span>
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-800">
                                <div className="space-y-4">
                                    <label className="font-mono text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Principal Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-[#e0e5ec] rounded-2xl px-6 py-5 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] outline-none focus:text-sky-500 transition-all font-sans font-bold placeholder:text-slate-400/50"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="font-mono text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Institutional Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-[#e0e5ec] rounded-2xl px-6 py-5 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] outline-none focus:text-sky-500 transition-all font-sans font-bold placeholder:text-slate-400/50"
                                        placeholder="email@fund.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="font-mono text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Fund / Venture Firm</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.fund}
                                    onChange={(e) => setFormData({ ...formData, fund: e.target.value })}
                                    className="w-full bg-[#e0e5ec] rounded-2xl px-6 py-5 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] outline-none focus:text-sky-500 transition-all font-sans font-bold placeholder:text-slate-400/50"
                                    placeholder="Entity Name"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="font-mono text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Strategic Interest</label>
                                <textarea
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-[#e0e5ec] rounded-3xl px-8 py-6 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] outline-none focus:text-sky-500 transition-all font-sans font-bold placeholder:text-slate-400/50 resize-none"
                                    placeholder="Briefly describe your investment thesis..."
                                />
                            </div>

                            <div className="pt-8">
                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={status === "submitting"}
                                    className={`w-full bg-[#e0e5ec] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] active:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] text-slate-800 rounded-[2rem] py-8 px-12 font-oswald text-2xl md:text-3xl uppercase tracking-[0.3em] flex items-center justify-between group transition-all ${status === "submitting" ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    <span className="font-black">
                                        {status === "idle" && "Request Access"}
                                        {status === "submitting" && "Transmitting..."}
                                        {status === "success" && "Request Sent"}
                                        {status === "error" && "Error // Retry"}
                                    </span>
                                    <div className="w-16 h-16 rounded-full bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform">
                                        {status === "success" ? (
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        ) : (
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        )}
                                    </div>
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* --- FOOTER DECOR --- */}
                <div className="mt-32 text-center opacity-30">
                    <p className="font-mono text-[10px] tracking-[1em] text-slate-400 uppercase font-bold">
                        © 2026 KwiqBill Revenue Infrastructure // Confidential Protocol
                    </p>
                </div>
            </div>
        </main>
    );
}

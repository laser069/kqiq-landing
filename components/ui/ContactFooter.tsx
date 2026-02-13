"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactFooter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: "Quick Signal", email: email, message: "Interested in connecting via Quick Signal." }),
            });

            if (response.ok) {
                setStatus("success");
                setEmail("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };
    return (
        <section className="bg-white text-slate-900 pt-32 pb-12 px-6 md:px-12 border-t border-slate-100">
            <div className="max-w-7xl mx-auto">

                {/* Main Footer Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-slate-50 p-8 md:p-16 rounded-[40px_2px_40px_2px] border border-slate-200 relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:items-center shadow-2xl shadow-slate-200/50"
                >

                    <div className="flex-1">
                        <h2 className="font-oswald text-3xl md:text-8xl text-slate-900 uppercase leading-[0.85] mb-8 tracking-tight">
                            SEND A <span className="text-sky-500">SIGNAL</span> IF <br />
                            YOU WANT TO <br />
                            CONNECT
                        </h2>

                        {/* Input small CTA */}
                        <form onSubmit={handleSubmit} className="flex max-w-md bg-white border-2 border-slate-200 p-1 shadow-sm focus-within:border-sky-500 transition-all relative overflow-hidden group">
                            {/* Scanning focus line */}
                            <div className="absolute top-0 left-0 h-[2px] bg-sky-500 w-0 group-focus-within:w-full transition-all duration-700 ease-out z-20" />

                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={status === "success" ? "SIGNAL RECEIVED" : "UNIT ADDRESS (EMAIL)"}
                                className="flex-1 bg-transparent px-4 py-3 font-mono text-[10px] tracking-widest outline-none uppercase text-slate-800 placeholder:text-slate-400 font-bold"
                            />
                            <button 
                                type="submit"
                                disabled={status === "submitting"}
                                className={`bg-slate-950 px-6 py-3 font-oswald text-[10px] md:text-xs tracking-[0.2em] text-white uppercase hover:bg-sky-600 transition-colors z-10 ${status === "submitting" ? "opacity-50" : ""}`}
                            >
                                {status === "idle" && "TRANSMIT MESSAGE"}
                                {status === "submitting" && "TRANSMITTING..."}
                                {status === "success" && "SENT"}
                                {status === "error" && "RETRY"}
                            </button>
                        </form>
                    </div>

                    <div className="flex-1 lg:pl-12 space-y-8">
                        <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
                            Orbit Matter is an independent observatory lab devoted to quiet study and creative exploration. Every discovery is recorded, decoded and shared with those who wander through our outpost.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                            {[
                                "INSTAGRAM", "YOUTUBE SIGNALS", "TWITTER",
                                "LINKEDIN", "DISCORD HUB",
                                "DRIBBBLE", "BEHANCE ARCHIVE", "HOMEBASE"
                            ].map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="font-mono text-[9px] md:text-[10px] tracking-[0.1em] text-slate-400 hover:text-sky-600 transition-colors uppercase font-bold whitespace-nowrap"
                                >
                                    [ {link} ]
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Notch */}
                    <div className="absolute top-0 left-12 w-32 h-2 bg-sky-500" />
                    <div className="absolute right-0 bottom-0 w-8 h-8 flex items-center justify-center opacity-10">
                        <div className="w-[1px] h-full bg-slate-900" />
                    </div>
                </motion.div>

                <div className="mt-24 text-center">
                    <p className="font-mono text-[8px] tracking-[0.5em] text-slate-300 uppercase font-bold">
                        © 2026 ORBIT MATTER // SYSTEM PROTOCOL v.03.221
                    </p>
                </div>
            </div>
        </section>
    );
}

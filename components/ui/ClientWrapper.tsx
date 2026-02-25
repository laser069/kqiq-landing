"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Smartphone, Monitor, RefreshCw, ShieldCheck } from "lucide-react";
import BillingStats from "@/components/ui/BillingStats";

/* ------------------------------------------------------------------ */
/* Helper Card Component                                              */
/* ------------------------------------------------------------------ */

interface DataTraceCardProps {
    title: string;
    description: string;
}

export function DataTraceCard({ title, description }: DataTraceCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative bg-[#e0e5ec] p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] border-t border-l border-white/60 transition-all duration-300"
        >
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight uppercase">
                    {title}
                </h3>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-sky-500" />
                </div>
            </div>
            <p className="text-slate-500 text-base md:text-lg font-bold italic leading-relaxed">
                {description}
            </p>
            <div className="mt-8 h-[2px] w-full bg-slate-200 group-hover:bg-sky-500 transition-all duration-500" />
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/* Platform Cards Visualization                                       */
/* ------------------------------------------------------------------ */

export function PlatformCards() {
    const cards = [
        { title: "Mobile", icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />, desc: "Native Android apps with full offline capabilities." },
        { title: "Desktop", icon: <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />, desc: "Powerful Windows apps for robust management." },
        { title: "Sync", icon: <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />, desc: "Instant sync across all your devices, anywhere." },
        { title: "Security", icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />, desc: "AES-256 encryption protects every transaction." },
    ];

    return (
        <div className="grid grid-cols-2 gap-3 sm:gap-6 p-4 md:p-10 w-full max-w-2xl">
            {cards.map((card, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group/card relative bg-[#e0e5ec] p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] border border-white/40 flex flex-col items-center text-center gap-2 sm:gap-3 hover:shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] transition-all duration-300"
                >
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-slate-400 group-hover/card:text-sky-500 transition-colors duration-500">
                        {card.icon}
                    </div>
                    <h4 className="font-oswald font-black text-slate-800 uppercase text-xs sm:text-sm tracking-wider">{card.title}</h4>
                    <p className="text-[9px] sm:text-[11px] text-slate-500 font-bold leading-tight uppercase font-mono opacity-60 group-hover/card:opacity-90 transition-opacity line-clamp-2">{card.desc}</p>
                </motion.div>
            ))}
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Core Intelligence Card                                             */
/* ------------------------------------------------------------------ */

interface IntelligenceCardProps {
    title: string;
    code: string;
    desc: string;
}

export function IntelligenceCard({ title, code, desc }: IntelligenceCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="p-10 bg-[#e0e5ec] rounded-[2.5rem] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] border-t border-l border-white/40 group"
        >
            <h3 className="font-oswald font-black text-2xl md:text-3xl text-slate-800 uppercase mb-4">{title}</h3>
            <p className="text-slate-500 font-bold text-sm uppercase leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                {desc}
            </p>
            <div className="mt-8 h-[2px] w-12 bg-slate-200 group-hover:w-full group-hover:bg-sky-500 transition-all duration-500" />
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/* Animated Stats Section                                             */
/* ------------------------------------------------------------------ */

export function AnimatedStats() {
    return (
        <section className="bg-[#e0e5ec] rounded-[3rem] md:rounded-[4rem] p-6 md:p-12 shadow-[inset_15px_15px_30px_#bebebe,inset_-15px_-15px_30px_#ffffff] border-b border-r border-white/20">
            <BillingStats />
        </section>
    );
}

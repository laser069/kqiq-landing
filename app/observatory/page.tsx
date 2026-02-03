"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/ui/Hero";

/**
 * REFINED OBSERVATORY PAGE
 * High-end technical overview focusing on metrics and protocols.
 */
export default function ObservatoryPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#e0e5ec] text-slate-800 selection:bg-sky-500/20 font-oswald overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <Hero 
        titleLine1="CORE"
        titleLine2="OBSERVATORY"
        badgeText="SYSTEM_STATUS // OBSERVATORY_STATION // 2026"
        subtitleLine1="Zilling is a complete, free, and open-source billing solution built for those who cannot afford expensive commercial software."
        subtitleLine2="Designed to be simple, powerful, and offline-friendly — providing professional features without the lock-in."
      />

      {/* 2. SYSTEM METRICS GRID */}
      <section className="pt-12 pb-24 px-6 md:px-24 bg-[#e0e5ec] border-t-[1.5px] border-white/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { label: "Ledger_Control", val: "99.9% SYNC", desc: "Real-time automated balancing of all financial nodes." },
              { label: "Node_Velocity", val: "140+ PAIRS", desc: "Facilitating multi-currency reconciliation across borders." },
              { label: "Shield_Status", val: "ACTIVE", desc: "Instant VAT/GST calculation and compliance verification." },
            ].map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 bg-[#e0e5ec] rounded-[3rem] shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] border-t border-l border-white/40 space-y-6"
              >
                <span className="font-mono text-[10px] text-sky-500 font-bold tracking-widest uppercase">{metric.label}</span>
                <h3 className="text-5xl font-black text-slate-800 uppercase leading-none">{metric.val}</h3>
                <p className="text-slate-500 font-bold leading-relaxed">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SYSTEM PROTOCOLS */}
      <section className="pt-24 pb-8 px-6 md:px-24 bg-[#e0e5ec] relative z-20">
        <div className="max-w-7xl w-full mx-auto mb-12 border-b border-slate-300/30 pb-6">
           <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-800 uppercase leading-none">
              System <span className="text-sky-500 text-3xl md:text-5xl">Protocols</span>
           </h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Financial Ledger Engine", desc: "Multi-currency ledger management with automated tax bracket reconciliation.", tag: "CORE_ARCHITECTURE" },
              { title: "Hybrid Offline-Sync", desc: "Local-first storage architecture paired with seamless Google Drive synchronization.", tag: "DATA_MOBILITY" },
              { title: "Security Framework", desc: "AES-256 encrypted data transmission and secure-node verification protocols.", tag: "VERIFIED_SECURITY" },
              { title: "Cross-Platform Armor", desc: "Native support for Windows, macOS, and Mobile environments.", tag: "SYSTEM_ACCESS" }
            ].map((spec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-12 bg-[#e0e5ec] rounded-[4rem] shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] border-t border-l border-white/40 space-y-6"
              >
                <span className="font-mono text-[10px] text-sky-500 font-black tracking-widest uppercase">{spec.tag}</span>
                <h3 className="text-4xl font-black text-slate-800 uppercase tracking-tight leading-none">{spec.title}</h3>
                <p className="text-slate-500 font-bold leading-relaxed italic">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISION CTA */}
      <section className="pt-24 pb-32 flex flex-col items-center text-center px-6 border-t-[1.5px] border-white/70">
          <div className="space-y-12">
            <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter text-slate-800 uppercase leading-[0.8]">
              MONITOR_MISSION // <br /><span className="text-sky-500">ZILLING_NEXUS</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <Link href="/expedition" className="px-12 py-6 bg-[#e0e5ec] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] text-slate-800 font-black text-xl tracking-widest uppercase hover:text-sky-500 transition-all rounded-3xl">
                GO TO EXPEDITION
              </Link>
              <Link href="/contact" className="px-12 py-6 bg-slate-900 text-white font-black text-xl tracking-widest uppercase hover:bg-sky-600 transition-all rounded-3xl shadow-xl">
                CONTACT ARCHITECT
              </Link>
            </div>
          </div>
      </section>

    </div>
  );
}
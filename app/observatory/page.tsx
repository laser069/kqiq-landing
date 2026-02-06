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
        titleLine2="BILLING"
        badgeText="BILLING_OVERVIEW // KWIQBILL_DASHBOARD // 2026"
        subtitleLine1="KWIQBILL IS A COMPLETE, FREE, AND OPEN-SOURCE BILLING SOLUTION BUILT FOR BUSINESSES THAT DON’T WANT SUBSCRIPTIONS OR LOCK-INS."
        subtitleLine2="Designed to be simple, powerful, and offline-friendly — professional billing without subscriptions or lock-ins."
      />

      {/* 2. SYSTEM METRICS GRID */}
      <section className="pt-12 pb-24 px-6 md:px-24 bg-[#e0e5ec] border-t-[1.5px] border-white/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { label: "DATA_RELIABILITY", val: "99.9% DATA SYNC", desc: "Reliable syncing of invoices, expenses, and reports across devices." },
              { label: "ACTIVE_USERS", val: "140+ BUSINESSES", desc: "Trusted by growing businesses for daily billing operations." },
              { label: "TAX_ENGINE", val: "ACTIVE", desc: "Instant GST/VAT calculation with compliant invoice generation." },
            ].map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 bg-[#e0e5ec] rounded-[2.5rem] md:rounded-[3rem] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] border-t border-l border-white/40 space-y-6"
              >
                <span className="font-mono text-[10px] text-sky-500 font-bold tracking-widest uppercase">{metric.label}</span>
                <h3 className="text-4xl md:text-5xl font-black text-slate-800 uppercase leading-none">{metric.val}</h3>
                <p className="text-slate-500 font-bold leading-relaxed text-sm md:text-base">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SYSTEM PROTOCOLS */}
      <section className="pt-24 pb-8 px-6 md:px-24 bg-[#e0e5ec] relative z-20">
        <div className="max-w-7xl w-full mx-auto mb-12 border-b border-slate-300/30 pb-6">
           <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-slate-800 uppercase leading-none">
              Core <span className="text-sky-500 text-2xl sm:text-3xl md:text-5xl">Features</span>
           </h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { title: "Invoice & Billing Core", desc: "Fast, accurate billing with automatic tax calculation and clean invoice generation.", tag: "BILLING_ENGINE" },
              { title: "Hybrid Offline Sync", desc: "Create bills without internet. Sync automatically when you’re back online.", tag: "OFFLINE_FIRST" },
              { title: "Security Framework", desc: "Secure data storage with AES-256 encryption and controlled access across devices.", tag: "DATA_SECURITY" },
              { title: "Cross-Platform Support", desc: "Use KWIQBILL seamlessly on Web, Desktop, and Mobile devices.", tag: "MULTI_PLATFORM" }
            ].map((spec, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 bg-[#e0e5ec] rounded-[2.5rem] md:rounded-[4rem] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] border-t border-l border-white/40 space-y-6"
              >
                <span className="font-mono text-[9px] md:text-[10px] text-sky-500 font-black tracking-widest uppercase">{spec.tag}</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 uppercase tracking-tight leading-none">{spec.title}</h3>
                <p className="text-slate-500 font-bold leading-relaxed italic text-sm md:text-base">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISION CTA */}
      <section className="pt-24 pb-32 flex flex-col items-center text-center px-6 border-t-[1.5px] border-white/70">
          <div className="space-y-12">
            <h2 className="text-[clamp(3rem,15vw,10rem)] font-black tracking-tighter text-slate-800 uppercase leading-[0.85] md:leading-[0.8]">
              READY TO BILL  <br /><span className="text-sky-500">KWIQBILL</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center">
              <Link href="/expedition" className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-[#e0e5ec] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] text-slate-800 font-black text-lg md:text-xl tracking-widest uppercase hover:text-sky-500 transition-all rounded-3xl flex justify-center items-center">
                GET STARTED
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-slate-900 text-white font-black text-lg md:text-xl tracking-widest uppercase hover:bg-sky-600 transition-all rounded-3xl shadow-xl flex justify-center items-center">
                JOIN THE COMMUNITY
              </Link>
            </div>
          </div>
      </section>

    </div>
  );
}
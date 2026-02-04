"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// --- DATA: KWIQBILL EXPEDITION PHASES ---
interface Phase {
  id: number;
  title: string;
  desc: string;
  status: string;
  date: string;
  metric: string;
  color: string;
  label: string;
}

const phases: Phase[] = [
  {
    id: 1,
    title: "WEB PLATFORM",
    desc: "KwiqBill web application is live and ready. Secure, scalable, and accessible from anywhere with real-time billing features.",
    status: "LIVE",
    date: "AVAILABLE",
    metric: "CLOUD-READY",
    color: "bg-emerald-500",
    label: "DEPLOYMENT",
  },
  {
    id: 2,
    title: "DESKTOP & MOBILE APPS",
    desc: "Native applications for Windows, macOS, and Mobile with offline-first billing for uninterrupted business operations.",
    status: "ACTIVE",
    date: "DEPLOYED",
    metric: "CROSS-PLATFORM",
    color: "bg-sky-500",
    label: "DEPLOYMENT",
  },
  {
    id: 3,
    title: "DATA SYNC & BACKUP",
    desc: "Secure data synchronization with Google Drive and cloud backups, giving users full control over their billing data.",
    status: "IN PROGRESS",
    date: "IN PROGRESS",
    metric: "OPTIONAL CLOUD SYNC",
    color: "bg-indigo-500",
    label: "FEATURE",
  },
  {
    id: 4,
    title: "OPEN SOURCE CORE",
    desc: "Finalizing the Apache 2.0 open-source release. Fully customizable, self-hosted, and free for individuals and organizations.",
    status: "PLANNED",
    date: "Q4 2026",
    metric: "APACHE 2.0",
    color: "bg-amber-500",
    label: "LICENSE",
  },
];

export default function ExpeditionPage(): React.JSX.Element {
  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 selection:bg-sky-500/10 font-oswald">
      
      {/* 1. HERO SECTION - The Motivation */}
      <section className="relative h-screen w-full flex items-center px-12 md:px-24 overflow-hidden bg-[#e0e5ec]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/expedition_hero_map.png"
            alt="KWIQBILL Global Reach"
            fill
            className="object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0e5ec] via-[#e0e5ec]/60 to-transparent" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>


        <div className="relative z-10 max-w-4xl space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-oswald font-black text-slate-950 tracking-[-0.05em] leading-[0.8] uppercase select-none text-[clamp(4rem,10vw,12rem)] flex flex-col">
              <span className="block drop-shadow-[4px_6px_8px_rgba(0,0,0,0.05)]">KWIQBILL</span>
              <span className="block text-sky-500">MISSION</span>
            </h1>
          </motion.div>

          <div className="relative p-1 bg-[#e0e5ec] rounded-[2rem] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] max-w-2xl">
            <p className="p-8 text-slate-600 text-lg md:text-xl leading-relaxed tracking-tight font-medium italic">
              &quot;Breaking the barrier of expensive and restrictive billing software. KwiqBill is a free, open-source billing platform built for everyone.&quot;
            </p>
          </div>
        </div>

        {/* Tactical Coordinates Decor */}
        <div className="absolute bottom-12 right-12 md:right-24 text-right space-y-4 font-mono">
            <div className="space-y-1">
                <p className="text-[10px] text-slate-400 font-black tracking-widest uppercase italic">Project_Status</p>
                <p className="text-xl text-emerald-500 font-bold uppercase transition-all duration-300">OPEN SOURCE — STABLE</p>
            </div>
            <div className="space-y-1">
                <p className="text-[10px] text-slate-400 font-black tracking-widest uppercase italic">License</p>
                <p className="text-xl text-slate-800 font-bold">APACHE 2.0</p>
            </div>
        </div>
      </section>

      {/* 2. CORE FEATURES & MOTIVATION */}
      <section className="py-32 px-12 md:px-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto space-y-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
               <h2 className="text-6xl md:text-8xl font-oswald font-black tracking-tighter text-slate-800 uppercase leading-none">Why KWIQBILL?</h2>
               <div className="h-2 w-24 bg-sky-500" />
               <p className="text-xl text-slate-500 font-bold leading-relaxed">
                  Most billing software is expensive and restrictive. KwiqBill offers a powerful, multi-platform solution that anyone can use, customize, and deploy freely.
               </p>
               <ul className="space-y-4 font-mono text-sm text-slate-400 font-black tracking-widest uppercase">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-sky-500" /> Web, Desktop & Mobile
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-sky-500" /> Offline-First With Full Data Control
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-sky-500" /> 100% Free & Open Source
                  </li>
               </ul>
            </div>
            <div className="aspect-square bg-[#e0e5ec] rounded-[4rem] shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00afef_1px,transparent_1px)] [background-size:20px_20px]" />
                
                <div className="text-center space-y-6 relative z-10 mb-12">
                    <h3 className="text-5xl md:text-6xl font-oswald font-black text-slate-800 tracking-wider">CORE MISSION</h3>
                    <p className="text-slate-500 font-bold uppercase tracking-widest leading-none">
                        Accessible Professional Billing For Everyone
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 w-full relative z-10">
                  {[
                    { label: "ZERO FEES", val: "$0.00", desc: "Always free software." },
                    { label: "OPEN CORE", val: "OSS", desc: "Apache 2.0 License." },
                    { label: "PRIVATE", val: "100%", desc: "Full data ownership." },
                    { label: "GLOBAL", val: "V1.0", desc: "Multi-currency support." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-[#e0e5ec] rounded-3xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] space-y-2 border-t border-l border-white/20">
                      <span className="block font-mono text-[9px] text-sky-500 font-black tracking-widest uppercase">{item.label}</span>
                      <p className="text-3xl font-oswald font-black text-slate-800 leading-none">{item.val}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{item.desc}</p>
                    </div>
                  ))}
                </div>
            </div>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="space-y-2">
                  <h2 className="text-6xl md:text-8xl font-oswald font-black tracking-tighter text-slate-800">DEPLOYMENT PHASES</h2>
                  <p className="font-mono text-xs text-slate-400 tracking-[0.5em] uppercase font-bold">The KWIQBILL Product Roadmap.</p>
              </div>
              <div className="h-[2px] w-full md:w-1/3 bg-slate-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {phases.map((phase, i) => (
                <PhaseCard key={phase.id} phase={phase} index={i} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION - Final Sector Contact */}
      <section className="relative min-h-[70vh] bg-[#e0e5ec] flex flex-col items-center justify-center px-12 py-32 overflow-hidden border-t-[1.5px] border-white/70">
        <div className="absolute inset-0 opacity-5">
             <div className="w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_51px)]" />
        </div>

        <div className="relative z-10 text-center space-y-16">
          <div className="space-y-4">
             <h2 className="text-7xl md:text-9xl font-oswald font-black tracking-tighter text-slate-800 uppercase leading-none">SUPPORT THE VISION</h2>
             <p className="max-w-2xl mx-auto text-slate-500 font-mono text-xs tracking-[0.4em] uppercase font-bold italic">
               Join the community building free and open-source billing software. Help shape the future of KwiqBill.
             </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <Link href="/contact" className="px-16 py-8 bg-slate-900 text-white font-oswald font-black text-2xl tracking-[0.3em] uppercase hover:bg-sky-600 transition-all rounded-3xl shadow-2xl flex items-center gap-4 group">
               CONTRIBUTE NOW
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
               </svg>
            </Link>
          </div>
        </div>

        {/* Decorative branding */}
        <div className="absolute -bottom-10 -right-10 font-oswald text-[20rem] font-black text-slate-400/10 select-none tracking-tighter">
            KWIQBILL
        </div>
      </section>
    </div>
  );
}

function PhaseCard({ phase, index }: { phase: Phase; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="p-12 bg-[#e0e5ec] rounded-[3.5rem] shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] border-t border-l border-white/40 space-y-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500"
    >
      <div className="flex justify-between items-start relative z-10">
        <div className={`px-4 py-1 rounded-sm ${phase.color} text-white font-mono text-[9px] font-black tracking-widest uppercase`}>
          {phase.status}
        </div>
        <span className="font-mono text-xs text-slate-400 font-black">{phase.date}</span>
      </div>

      <div className="space-y-4 relative z-10">
        <h3 className="text-4xl md:text-5xl font-oswald font-black tracking-wide text-slate-800 leading-tight">{phase.title}</h3>
        <p className="text-slate-500 font-bold leading-relaxed italic">{phase.desc}</p>
      </div>

      <div className="pt-8 border-t border-slate-300/30 flex justify-between items-center relative z-10">
        <div className="space-y-1">
             <p className="font-mono text-[9px] text-slate-400 font-black tracking-widest uppercase">{phase.label}</p>
             <p className="text-xl font-oswald font-black text-sky-500 tracking-wider uppercase">{phase.metric}</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
             <div className="w-4 h-4 rounded-full bg-slate-300 group-hover:bg-sky-500 transition-colors duration-500" />
        </div>
      </div>

      {/* Backdrop Accent Decor */}
      <div className="absolute -right-12 -bottom-12 font-oswald text-[12rem] font-black text-slate-400/5 select-none pointer-events-none group-hover:text-sky-500/5 transition-colors">
        0{phase.id}
      </div>
    </motion.div>
  );
}

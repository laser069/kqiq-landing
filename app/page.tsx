"use client";

import React from "react";
import Hero from "@/components/ui/Hero";
import BillingStats from "@/components/ui/BillingStats";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useTransform } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Helper Card Component                                              */
/* ------------------------------------------------------------------ */

interface DataTraceCardProps {
  title: string;
  description: string;
}

function DataTraceCard({ title, description }: DataTraceCardProps) {
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
      <div className="mt-8 h-[2px] w-full bg-slate-300/20 group-hover:bg-sky-500/30 transition-colors" />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Advanced System Presence Visualization                           */
/* ------------------------------------------------------------------ */

function SystemPresence() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const parallaxX = useTransform(mouseX, [-200, 200], [-15, 15]);
  const parallaxY = useTransform(mouseY, [-200, 200], [-15, 15]);

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="relative w-full h-full flex items-center justify-center scale-90 md:scale-100 cursor-none group/pres"
    >
      {/* Hexagonal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden [mask-image:radial-gradient(circle,black,transparent_70%)]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%230ea5e9' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div 
        style={{ x: parallaxX, y: parallaxY }} 
        className="relative flex items-center justify-center w-full h-full"
      >
        {/* Background Pulse Rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.15, 0],
              scale: [0.8, 1.6, 2.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 1.6,
              ease: "easeOut",
            }}
            className="absolute w-80 h-80 rounded-full border border-sky-500/20"
          />
        ))}

        {/* Orbiting Satellites Layer */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-[280px] h-[280px]"
        >
          {[0, 120, 240].map((angle, i) => (
            <div 
              key={i}
              className="absolute w-full h-full"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_15px_#0ea5e9] border border-white/40" 
              />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[7px] font-black text-sky-500/40 uppercase">
                NODE_{i+1}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dynamic SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30">
          <defs>
            <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <motion.circle 
            cx="50%" cy="50%" r="90" 
            fill="none" stroke="url(#beamGrad)" strokeWidth="1" strokeDasharray="10 100"
            animate={{ strokeDashoffset: [0, -220] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Scanning Radial Line */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute w-[240px] h-[1px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent z-10"
        />

        {/* Central Core */}
        <div className="relative z-20 w-32 h-32 flex items-center justify-center">
           <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full"
           />
           
           <div className="relative w-24 h-24 rounded-full bg-slate-900 shadow-[0_0_60px_-15px_rgba(14,165,233,0.6)] flex items-center justify-center overflow-hidden border border-white/10 group-hover/pres:border-sky-500/30 transition-colors duration-500">
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                boxShadow: [
                  "0 0 20px rgba(14,165,233,0.2)",
                  "0 0 50px rgba(14,165,233,0.4)",
                  "0 0 20px rgba(14,165,233,0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-14 h-14 rounded-full bg-sky-500/5 flex items-center justify-center border border-sky-500/30"
            >
              <div className="w-3 h-3 rounded-full bg-sky-500 shadow-[0_0_20px_#0ea5e9]" />
            </motion.div>
            
            {/* Rapid Data Flow Simulation */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: "120%", x: `${10 + i * 16}%` }}
                  animate={{ y: "-120%" }}
                  transition={{
                    duration: 0.8 + (i * 0.15),
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "linear",
                  }}
                  className="absolute w-[1px] h-10 bg-sky-400"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Status Nodes */}
        {[
          { label: "SYNC_STATUS", pos: "top-0 left-0", icon: "●" },
          { label: "ENCR_ALGO", pos: "top-0 right-0", icon: "◆" },
          { label: "AUTH_READY", pos: "bottom-0 left-0", icon: "▲" },
          { label: "LIVE_STREAM", pos: "bottom-0 right-0", icon: "■" },
        ].map((node, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -8, 0],
              opacity: [0.4, 0.9, 0.4] 
            }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.6 }}
            className={`absolute ${node.pos} flex flex-col items-center gap-2 p-4 bg-slate-900/50 backdrop-blur-md rounded-xl border border-white/5 shadow-lg group-hover/pres:border-sky-500/20 transition-colors`}
          >
            <span className="text-sky-500 text-[8px] animate-pulse">{node.icon}</span>
            <span className="font-mono text-[7px] font-black text-slate-300 tracking-tighter uppercase whitespace-nowrap">
              {node.label}
            </span>
            <div className="w-8 h-[1px] bg-slate-100/10" />
            <span className="font-mono text-[6px] text-sky-500/60 uppercase">Active</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Text Indicator */}
      <div className="absolute -bottom-16 flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-l from-sky-500/50 to-transparent" />
          <span className="font-mono text-[10px] font-black text-slate-900 tracking-[0.5em] uppercase">
            Presence_V3.0
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-r from-sky-500/50 to-transparent" />
        </div>
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4].map((j) => (
            <motion.div
              key={j}
              animate={{ 
                opacity: [0.1, 1, 0.1],
                backgroundColor: ["#94a3b8", "#0ea5e9", "#94a3b8"]
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: j * 0.15 }}
              className="w-1.5 h-1.5 rounded-[1px] rotate-45"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Page Component                                                */
/* ------------------------------------------------------------------ */

export default function Page(): React.JSX.Element {
  const router = useRouter();

  const handleInitialize = (): void => router.push("/contact");
  const handleViewArchives = (): void => router.push("/observatory");

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#e0e5ec] text-slate-900 selection:bg-sky-500/20 font-oswald overflow-x-hidden">

      {/* ------------------------------------------------------------ */}
      {/* 1. HERO SECTION                                              */}
      {/* ------------------------------------------------------------ */}
      <div className="relative z-50">
        <Hero
          badgeText="SYSTEM STATUS: ONLINE // 2026"
          primaryCtaText="COMING SOON..."
          onPrimaryClick={handleInitialize}
          onSecondaryClick={handleViewArchives}
        />
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 2. PLATFORM ARCHITECTURE                                     */}
      {/* ------------------------------------------------------------ */}
      <section className="relative z-40 bg-[#e0e5ec] py-24 border-t-[1.5px] border-white/70 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-sky-500" />
                <span className="font-mono text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">Architecture // V2.0</span>
              </div>
              <h2 className="font-oswald font-black text-5xl md:text-7xl text-slate-900 uppercase leading-[0.9] tracking-tighter">
                Multi-Platform <br />
                <span className="text-sky-500">Stability</span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-bold italic leading-relaxed uppercase tracking-tight max-w-xl">
                Deploy KWIQBILL across your entire infrastructure. Whether on Mobile or Desktop, your data remains synchronized and secure.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-6 bg-[#e0e5ec] rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] border-t border-l border-white/40">
                  <span className="font-mono text-[10px] text-sky-500 font-black block mb-2">OS_MOBILE</span>
                  <span className="font-oswald font-black text-xl text-slate-800 uppercase">Android / iOS</span>
                </div>
                <div className="p-6 bg-[#e0e5ec] rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] border-t border-l border-white/40">
                  <span className="font-mono text-[10px] text-sky-500 font-black block mb-2">OS_DESKTOP</span>
                  <span className="font-oswald font-black text-xl text-slate-800 uppercase">Windows / Mac</span>
                </div>
              </div>
            </div>
            <div className="flex-1 relative group py-12">
              <div className="absolute -inset-4 bg-sky-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative p-2 bg-[#e0e5ec] rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-t border-l border-white/60 overflow-hidden aspect-[4/3] flex items-center justify-center">
                 <SystemPresence />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 3. CORE INTELLIGENCE GRID                                     */}
      {/* ------------------------------------------------------------ */}
      <section className="relative z-40 bg-[#e0e5ec] pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Offline-First", code: "LOC_SYNC", desc: "Continue billing even during network outages. Data syncs automatically when online." },
              { title: "GST Compliant", code: "TAX_RULES", desc: "Automatic CGST, SGST, and IGST calculations with HSN/SAC support for all invoices." },
              { title: "Live Analytics", code: "REAL_TIME", desc: "Track sales, expenses, and inventory status in real-time with beautiful dashboards." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-[#e0e5ec] rounded-[2.5rem] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] border-t border-l border-white/40 group"
              >
                <span className="font-mono text-[10px] text-sky-500 font-black tracking-widest block mb-4">PROTO_{item.code}</span>
                <h3 className="font-oswald font-black text-3xl text-slate-800 uppercase mb-4">{item.title}</h3>
                <p className="text-slate-500 font-bold text-sm uppercase leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
                <div className="mt-8 h-[2px] w-12 bg-slate-200 group-hover:w-full group-hover:bg-sky-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 4. STRATEGIC ADVANTAGES (TICKER)                              */}
      {/* ------------------------------------------------------------ */}
      <section className="relative z-40 bg-slate-900 py-12 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {[
                "SECURE_AES_256", "CLOUD_BACKUP_ENABLED", "BARCODE_READY", 
                "THERMAL_PRINT_SUPPORT", "A4_INVOICING", "INVENTORY_TRACKING",
                "EXPENSE_MANAGEMENT"
              ].map(tag => (
                <span key={tag} className="font-mono text-[11px] font-black text-sky-500/50 tracking-[0.3em] uppercase">
                  {tag} {" "} 
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 5. MAIN CONTENT                                              */}
      {/* ------------------------------------------------------------ */}
      <div id="features" className="relative z-50 bg-[#e0e5ec] border-t-[1.5px] border-white/70">
        <div className="container mx-auto px-6 pb-32">

          {/* Divider */}
          <div className="flex items-center gap-3 md:gap-6 mb-16 md:mb-24 pt-24 md:pt-32">
            <div className="h-[1px] md:h-[2px] flex-1 bg-slate-300/30" />
            <h2 className="text-[10px] md:text-[12px] font-black tracking-[0.3em] md:tracking-[0.5em] text-slate-400 uppercase whitespace-nowrap">
              Resource Allocation Metrics
            </h2>
            <div className="h-[1px] md:h-[2px] flex-1 bg-slate-300/30" />
          </div>

          {/* Stats */}
          <section className="bg-[#e0e5ec] rounded-[3rem] md:rounded-[4rem] p-6 md:p-12 shadow-[inset_15px_15px_30px_#bebebe,inset_-15px_-15px_30px_#ffffff] border-b border-r border-white/20">
            <BillingStats />
          </section>

          {/* Cards */}
          <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <DataTraceCard
              title="LIVE BILLING"
              description="142 active businesses generating bills seamlessly across web, desktop, and mobile — online and offline."
            />
            <DataTraceCard
              title="SYSTEM STATUS"
              description="Billing system running smoothly. All invoices, expenses, and reports are securely stored and synced."
            />
          </section>

        </div>
      </div>
    </div>
  );
}

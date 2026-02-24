import React, { Suspense } from "react";
import Hero from "@/components/ui/Hero";
import {
  DataTraceCard,
  PlatformCards,
  IntelligenceCard,
  AnimatedStats
} from "@/components/ui/ClientWrapper";
import Downloads from "@/components/ui/Downloads";

export const metadata = {
  title: "KWIQ BILLING | High-Velocity Revenue Infrastructure",
  description: "Next-generation billing system for global transactions.",
};

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#e0e5ec] text-slate-900 selection:bg-sky-500/20 font-oswald overflow-x-hidden">

      {/* ------------------------------------------------------------ */}
      {/* 1. HERO SECTION                                              */}
      {/* ------------------------------------------------------------ */}
      <div className="relative z-50">
        <Hero
          badgeText="SYSTEM STATUS: ONLINE // 2026"
        />
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 2. PLATFORM ARCHITECTURE                                     */}
      {/* ------------------------------------------------------------ */}
      <section className="relative z-40 bg-[#e0e5ec] py-12 md:py-24 border-t-[1.5px] border-white/70 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="font-oswald font-black text-4xl sm:text-5xl md:text-7xl text-slate-900 uppercase leading-[0.9] tracking-tighter">
                Multi-Platform <br />
                <span className="text-sky-500 text-3xl sm:text-5xl md:text-7xl">Stability</span>
              </h2>
              <p className="text-slate-500 text-base md:text-xl font-bold italic leading-relaxed uppercase tracking-tight max-w-xl">
                Deploy KWIQBILL across your entire infrastructure. Whether on Mobile or Desktop, your data remains synchronized and secure.
              </p>
              <div className="flex flex-col gap-4 pt-4 max-w-md">
                <div className="flex gap-4">
                  <div className="flex-1 p-5 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-between group overflow-hidden relative shadow-2xl shadow-emerald-900/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent transition-opacity" />
                    <span className="font-oswald font-black text-xl text-white uppercase relative z-10 tracking-wide">Android</span>
                    <div className="flex items-center gap-2 relative z-10">
                      <span className="font-mono text-[9px] text-sky-500 tracking-widest hidden sm:inline-block">AVAILABLE</span>
                      <div className="w-2.5 h-2.5 rounded-full bg-sky-500 shadow-[0_0_12px_#0ea5e9]" />
                    </div>
                  </div>

                  <div className="flex-1 p-5 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-between group overflow-hidden relative shadow-2xl shadow-sky-900/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent transition-opacity" />
                    <span className="font-oswald font-black text-xl text-white uppercase relative z-10 tracking-wide">Windows</span>
                    <div className="flex items-center gap-2 relative z-10">
                      <span className="font-mono text-[9px] text-sky-500 tracking-widest hidden sm:inline-block">AVAILABLE</span>
                      <div className="w-2.5 h-2.5 rounded-full bg-sky-500 shadow-[0_0_12px_#0ea5e9]" />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white/40 backdrop-blur-sm border border-slate-300/40 rounded-2xl flex items-center justify-start gap-4 shadow-sm border-l-4 border-l-amber-500">
                  <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b] animate-pulse" />
                  <div className="flex flex-col">
                    <span className="font-oswald text-sm md:text-base text-slate-800 font-bold uppercase tracking-wider leading-none mb-1">iOS & Mac OS</span>
                    <span className="font-mono text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] leading-none">Development in Progress</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative group py-12">
              <div className="absolute -inset-4 bg-sky-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative p-2 bg-[#e0e5ec] rounded-[2rem] md:rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-t border-l border-white/60 overflow-hidden min-h-[300px] flex items-center justify-center">
                <PlatformCards />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------------------------------ */}
      {/* 5. DOWNLOAD INFRASTRUCTURE                                   */}
      {/* ------------------------------------------------------------ */}
      <Downloads />

      {/* ------------------------------------------------------------ */}
      {/* 3. MAIN CONTENT                                              */}
      {/* ------------------------------------------------------------ */}
      <div id="features" className="relative z-50 bg-[#e0e5ec] border-t-[1.5px] border-white/70">
        <div className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-16">

          <Suspense fallback={<div className="h-64 bg-slate-100 animate-pulse rounded-[3rem]" />}>
            <AnimatedStats />
          </Suspense>

          <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <DataTraceCard
              title="LIVE BILLING"
              description="15 active businesses generating bills seamlessly across web, desktop, and mobile — online and offline."
            />
            <DataTraceCard
              title="SYSTEM STATUS"
              description="Billing system running smoothly. All invoices, expenses, and reports are securely stored and synced."
            />
          </section>

        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 4. CORE INTELLIGENCE GRID                                     */}
      {/* ------------------------------------------------------------ */}
      <section className="relative z-40 bg-[#e0e5ec] pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IntelligenceCard
              title="Offline-First"
              code="LOC_SYNC"
              desc="Continue billing even during network outages. Data syncs automatically when online."
            />
            <IntelligenceCard
              title="GST Compliant"
              code="TAX_RULES"
              desc="Automatic CGST, SGST, and IGST calculations with HSN/SAC support for all invoices."
            />
            <IntelligenceCard
              title="Live Analytics"
              code="REAL_TIME"
              desc="Track sales, expenses, and inventory status in real-time with beautiful dashboards."
            />
          </div>
        </div>
      </section>



    </div>
  );
}

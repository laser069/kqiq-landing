import React, { Suspense } from "react";
import Hero from "@/components/ui/Hero";
import {
  DataTraceCard,
  PlatformCards,
  IntelligenceCard,
  AnimatedStats
} from "@/components/ui/ClientWrapper";

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
      <section className="relative z-40 bg-[#e0e5ec] py-24 border-t-[1.5px] border-white/70 overflow-hidden">
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
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
                <div className="p-4 sm:p-6 bg-[#e0e5ec] rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] border-t border-l border-white/40">
                  <span className="font-oswald font-black text-lg md:text-xl text-slate-800 uppercase">Android</span>
                </div>
                <div className="p-4 sm:p-6 bg-[#e0e5ec] rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] border-t border-l border-white/40">
                  <span className="font-oswald font-black text-lg md:text-xl text-slate-800 uppercase">Windows</span>
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
      {/* 3. CORE INTELLIGENCE GRID                                     */}
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

      {/* ------------------------------------------------------------ */}
      {/* 4. STRATEGIC ADVANTAGES (TICKER)                              */}
      {/* ------------------------------------------------------------ */}
      <section className="relative z-40 py-12 overflow-hidden bg-[#e0e5ec]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/5 to-transparent" />
        <div className="relative border-y border-sky-500/10 bg-white/40 backdrop-blur-md py-8">
          <div className="flex w-fit animate-marquee whitespace-nowrap">
            <div className="flex gap-16 items-center px-8">
              {[
                "SECURE_AES_256", "CLOUD_BACKUP_ENABLED", "BARCODE_READY",
                "THERMAL_PRINT_SUPPORT", "A4_INVOICING", "INVENTORY_TRACKING",
                "EXPENSE_MANAGEMENT", "LIVE_API_READY", "MULTI_CURRENCY"
              ].map((tag, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
                  <span className="font-mono text-[10px] font-black text-slate-800 tracking-[0.4em] uppercase opacity-70 hover:opacity-100 hover:text-sky-500 transition-all cursor-default">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-16 items-center px-8" aria-hidden="true">
              {[
                "SECURE_AES_256", "CLOUD_BACKUP_ENABLED", "BARCODE_READY",
                "THERMAL_PRINT_SUPPORT", "A4_INVOICING", "INVENTORY_TRACKING",
                "EXPENSE_MANAGEMENT", "LIVE_API_READY", "MULTI_CURRENCY"
              ].map((tag, idx) => (
                <div key={tag + "-dup"} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
                  <span className="font-mono text-[10px] font-black text-slate-800 tracking-[0.4em] uppercase opacity-70 hover:opacity-100 hover:text-sky-500 transition-all cursor-default">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 5. MAIN CONTENT                                              */}
      {/* ------------------------------------------------------------ */}
      <div id="features" className="relative z-50 bg-[#e0e5ec] border-t-[1.5px] border-white/70">
        <div className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-32">

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
    </div>
  );
}

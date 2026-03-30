import React, { Suspense } from "react";
import Hero from "@/components/ui/Hero";
import {
  DataTraceCard,
  PlatformCards,
  IntelligenceCard,
  AnimatedStats
} from "@/components/ui/ClientWrapper";
import Downloads from "@/components/ui/Downloads";
import StructuredData from "@/components/seo/StructuredData";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#e0e5ec] text-slate-900 selection:bg-sky-500/20 font-oswald overflow-x-hidden">
      <StructuredData />

      {/* ------------------------------------------------------------ */}
      {/* 1. HERO SECTION                                              */}
      {/* ------------------------------------------------------------ */}
      {/* The Hero component should ideally have the H1. I'll check it or wrap the main branding here. */}
      <h1 className="sr-only">KWIQ BILLING - Best GST Billing Software in India for SMBs</h1>
      <div className="relative z-50">
        <Hero
          badgeText="SYSTEM STATUS: ONLINE // 2026"
        />
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 2. PLATFORM ARCHITECTURE                                     */}
      {/* ------------------------------------------------------------ */}
      <section className="relative z-40 bg-[#e0e5ec] py-12 md:py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="font-oswald font-black text-4xl sm:text-5xl md:text-7xl text-slate-900 uppercase leading-[0.9] tracking-tighter break-words">
                Why KWIQ BILLING is the <br />
                <span className="text-sky-500 text-3xl sm:text-5xl md:text-7xl">Best GST Solution</span>
              </h2>
              <p className="text-slate-500 text-base md:text-xl font-bold italic leading-relaxed uppercase tracking-tight max-w-xl break-words">
                The most reliable GST billing app for retail shops and wholesale traders. Access your revenue infrastructure from Android or Windows.
              </p>
              <div className="flex flex-col gap-4 pt-4 max-w-md w-full">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                  <div className="flex-1 p-4 sm:p-5 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-start gap-4 group overflow-hidden relative shadow-2xl shadow-emerald-900/20 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent transition-opacity" />
                    <div className="w-2.5 h-2.5 rounded-full bg-sky-500 shadow-[0_0_12px_#0ea5e9] relative z-10" />
                    <div className="flex flex-col relative z-10">
                      <span className="font-oswald font-black text-xl text-white uppercase tracking-wide leading-none mb-1">Android</span>
                      <span className="font-mono text-[9px] text-sky-500 tracking-widest uppercase leading-none mt-1">AVAILABLE</span>
                    </div>
                  </div>

                  <div className="flex-1 p-4 sm:p-5 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-start gap-4 group overflow-hidden relative shadow-2xl shadow-sky-900/20 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent transition-opacity" />
                    <div className="w-2.5 h-2.5 rounded-full bg-sky-500 shadow-[0_0_12px_#0ea5e9] relative z-10" />
                    <div className="flex flex-col relative z-10">
                      <span className="font-oswald font-black text-xl text-white uppercase tracking-wide leading-none mb-1">Windows</span>
                      <span className="font-mono text-[9px] text-sky-500 tracking-widest uppercase leading-none mt-1">AVAILABLE</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white/40 backdrop-blur-sm border border-slate-300/40 rounded-2xl flex items-center justify-start gap-4 shadow-sm border-l-4 border-l-amber-500 cursor-pointer">
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
      <div id="features" className="relative z-50 bg-[#e0e5ec]">
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
      <section className="relative z-40 bg-[#e0e5ec] pt-16 md:pt-24 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IntelligenceCard
              title="Offline-First"
              code="LOC_SYNC"
              desc="Continue billing even during network outages. Data syncs automatically when online."
            />
            <IntelligenceCard
              title="GST Billing App"
              code="TAX_RULES"
              desc="Comprehensive GST software with automated CGST, SGST, & IGST calculations for retail and wholesale."
            />
            <IntelligenceCard
              title="Live POS Analytics"
              code="REAL_TIME"
              desc="Real-time POS billing dashboards to track sales, inventory, and revenue growth in one place."
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 5. FAQ SECTION (SEO OPTIMIZED)                               */}
      {/* ------------------------------------------------------------ */}
      <section className="relative z-40 bg-[#e0e5ec] pb-24">
        <div className="container mx-auto px-4 sm:px-6 pt-24">
          <h2 className="font-oswald font-black text-4xl md:text-6xl text-slate-800 uppercase mb-12 text-center">
            GST Billing <span className="text-sky-500">FAQ</span>
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
            <div className="p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 shadow-lg">
              <h3 className="font-oswald font-bold text-xl md:text-2xl text-slate-900 uppercase mb-4">What is the best GST billing software for small businesses in India?</h3>
              <p className="text-slate-600 leading-relaxed font-bold">KWIQ BILLING is a top-rated choice for Indian SMBs, offering offline-first GST invoicing, inventory management, and secure Razorpay payments.</p>
            </div>
            <div className="p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 shadow-lg">
              <h3 className="font-oswald font-bold text-xl md:text-2xl text-slate-900 uppercase mb-4">Can I use KWIQ BILLING offline?</h3>
              <p className="text-slate-600 leading-relaxed font-bold">Yes, KWIQ BILLING features an offline-first architecture. You can generate professional GST invoices without internet connectivity, and the data will sync automatically once you are online.</p>
            </div>
            <div className="p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 shadow-lg">
              <h3 className="font-oswald font-bold text-xl md:text-2xl text-slate-900 uppercase mb-4">Does it support E-Invoicing and E-Way Bills?</h3>
              <p className="text-slate-600 leading-relaxed font-bold">Our 2026 infrastructure is designed to handle automated E-Invoicing and E-Way bill generation to keep your business 100% GST compliant.</p>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}

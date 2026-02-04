"use client";

import React from "react";
import Hero from "@/components/ui/Hero";
import BillingStats from "@/components/ui/BillingStats";
import TextOverlayScroll from "@/components/ui/TextOverlayScroll";
import GatewayScroll from "@/components/ui/GatewayScroll";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

/**
 * OPTIMIZED INDEX PAGE
 * Unified Premium Neumorphic Layout (#e0e5ec)
 */
export default function Page(): React.JSX.Element {
  const router = useRouter();
  const handleInitialize = (): void => router.push("/contact");
  const handleViewArchives = (): void => router.push("/observatory");

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#e0e5ec] text-slate-900 selection:bg-sky-500/20 font-oswald">
      
      {/* 1. HERO SECTION & 2. TEXT OVERLAY */}
      <div className="relative z-50">
        <Hero 
          badgeText="SYSTEM STATUS: ONLINE // 2026"
          primaryCtaText="COMING SOON..."
          onPrimaryClick={handleInitialize}
          onSecondaryClick={handleViewArchives}
        />
        <div className="relative bg-[#e0e5ec] border-t-[1.5px] border-white/70">
           <TextOverlayScroll />
        </div>
      </div>

      {/* 3. CINEMATIC DISPERSION GRID */}
      <GatewayScroll />

      {/* 4. MAIN CONTENT AREA */}
      <div className="relative z-50 bg-[#e0e5ec] border-t-[1.5px] border-white/70">
        <div className="container mx-auto px-6 pb-32">
          
          {/* Section Divider */}
          <div className="flex items-center gap-3 md:gap-6 mb-16 md:mb-24 pt-24 md:pt-32">
            <div className="h-[px] md:h-[2px] flex-1 bg-slate-300/30" />
            <h2 className="text-[10px] md:text-[12px] font-black tracking-[0.3em] md:tracking-[0.5em] text-slate-400 uppercase whitespace-nowrap">
              Resource Allocation Metrics
            </h2>
            <div className="h-[px] md:h-[2px] flex-1 bg-slate-300/30" />
          </div>

          {/* 5. STATS GRID */}
          <section className="bg-[#e0e5ec] rounded-[3rem] md:rounded-[4rem] p-6 md:p-12 shadow-[inset_15px_15px_30px_#bebebe,inset_-15px_-15px_30px_#ffffff] border-b border-r border-white/20">
            <BillingStats />
          </section>

          {/* 6. SECONDARY DATA MESH */}
          <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <DataTraceCard title="LIVE BILLING" description="142 active businesses generating bills seamlessly across web, desktop, and mobile — online and offline." />
            <DataTraceCard title="SYSTEM STATUS" description="Billing system running smoothly. All invoices, expenses, and reports are securely stored and synced." />
          </section>
        </div>
      </div>
    </div>
  );
}

// --- HELPER COMPONENT: NEUMORPHIC DATA CARD ---
function DataTraceCard({ title, description }: { title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="group relative bg-[#e0e5ec] p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] border-t border-l border-white/60 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight uppercase">{title}</h3>
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-sky-500" />
        </div>
      </div>
      <p className="text-slate-500 text-base md:text-lg font-bold italic leading-relaxed">{description}</p>
      <div className="mt-8 h-[2px] w-full bg-slate-300/20 group-hover:bg-sky-500/30 transition-colors" />
    </motion.div>
  );
}
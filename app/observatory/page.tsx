"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/ui/Hero";

// --- DATA: CORE CONTRIBUTORS ---
const CONTRIBUTORS = [
  {
    id: 1,
    title: "SHADOW ARCHITECT",
    image: "/app_dev_1.png",
    role: "Project Lead",
    tag: "MAINTAINER",
  },
  {
    id: 2,
    title: "PIXEL VANGUARD",
    image: "/app_dev_2.png",
    role: "UI/UX Designer",
    tag: "DESIGN",
  },
  {
    id: 3,
    title: "DATA SENTINEL",
    image: "/app_dev_3.png",
    role: "Backend Specialist",
    tag: "SECURITY",
  },
  {
    id: 4,
    title: "MESH OPERATOR",
    image: "/app_dev_4.png",
    role: "Mobile Developer",
    tag: "PLATFORMS",
  },
  {
    id: 5,
    title: "SIGNAL ANALYST",
    image: "/app_dev_5.png",
    role: "QA Specialist",
    tag: "COMMUNITY",
  },
];

export default function ObservatoryPage(): React.JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  // Simple horizontal scroll transformation (no curve)
  const xMovement = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div className="min-h-screen bg-[#e0e5ec] text-slate-800 selection:bg-sky-500/20 font-oswald overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <Hero 
        titleLine1="CORE"
        titleLine2="OBSERVATORY"
        badgeText="SYSTEM_STATUS // OBSERVATORY_STATION // 2026"
        primaryCtaText="GENERATE INVOICE"
        subtitleLine1="Zilling is a complete, free, and open-source billing solution built for those who cannot afford expensive commercial software."
        subtitleLine2="Designed to be simple, powerful, and offline-friendly — providing professional features without the lock-in."
      />

      {/* 2. SYSTEM METRICS GRID */}
      <section className="py-32 px-6 md:px-24 bg-[#e0e5ec] border-t-[1.5px] border-white/70">
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
                className="p-10 bg-[#e0e5ec] rounded-[3rem] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] border-t border-l border-white/40 space-y-6"
              >
                <span className="font-mono text-[10px] text-sky-500 font-bold tracking-widest uppercase">{metric.label}</span>
                <h3 className="text-5xl font-black text-slate-800 uppercase leading-none">{metric.val}</h3>
                <p className="text-slate-500 font-bold leading-relaxed">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTRIBUTOR ARCHIVE - Horizontal Scroll (Straight) */}
      <section ref={scrollContainerRef} className="relative h-[400vh] bg-[#e0e5ec]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          <div className="absolute top-12 md:top-24 left-12 md:left-24 right-12 md:right-24 z-20">
            <div className="flex justify-between items-end border-b border-slate-300/30 pb-6">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-800 uppercase leading-none">
                Crew <span className="text-sky-500 text-3xl md:text-5xl">Registry</span>
              </h2>
              <span className="font-mono text-sm text-slate-400 font-black tracking-[0.5em] uppercase">Archive_Routine</span>
            </div>
          </div>

          <motion.div style={{ x: xMovement }} className="flex gap-16 px-12 md:px-24">
            {CONTRIBUTORS.map((con, i) => (
              <div 
                key={con.id}
                className="relative shrink-0 w-[85vw] md:w-[600px] aspect-[1.4/1] bg-[#e0e5ec] rounded-[4rem] p-1 shadow-[25px_25px_50px_#bebebe,-25px_-25px_50px_#ffffff] overflow-hidden group"
              >
                <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden">
                  <Image 
                    src={con.image} 
                    alt={con.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#e0e5ec] via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="px-5 py-2 rounded-full bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">
                        <span className="font-mono text-[11px] text-slate-400 font-black tracking-widest">0{i + 1}</span>
                      </div>
                      <span className="font-mono text-[10px] text-sky-500 font-bold tracking-[0.3em] uppercase bg-white/40 px-3 py-1 rounded-sm shadow-sm">
                        {con.tag}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-slate-800 uppercase">
                        {con.title}
                      </h3>
                      <div className="flex justify-between items-end border-t border-slate-300/30 pt-4">
                        <p className="font-oswald text-xl text-sky-500 font-bold uppercase tracking-widest">
                          {con.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. VISION CTA */}
      <section className="py-32 flex flex-col items-center text-center px-6 border-t-[1.5px] border-white/70">
          <div className="space-y-12">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-800 uppercase leading-[0.8]">
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

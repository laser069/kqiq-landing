"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import Hero from "@/components/ui/Hero";
import BillingStats from "@/components/ui/BillingStats";
import TextOverlayScroll from "@/components/ui/TextOverlayScroll";

export default function Page(): React.JSX.Element {
  const handleInitialize = (): void => console.log("Initializing...");
  const handleViewArchives = (): void => console.log("Accessing archives...");

  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-slate-900">
      
      {/* UPPER COMPONENTS 
          We keep these at a neutral z-index so the Gateway can slide over them.
      */}
      <div className="relative z-10 bg-white">
        <Hero 
          badgeText="SYSTEM STATUS: ONLINE // 2026"
          primaryCtaText="GENERATE INVOICE"
          onPrimaryClick={handleInitialize}
          onSecondaryClick={handleViewArchives}
        />
        <TextOverlayScroll />
      </div>

      {/* THE GATEWAY SCROLL 
          Increased z-index to 30 ensures this section layers ABOVE the hero.
      */}
      <div className="relative z-30 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
        <GatewayScroll />
      </div>

      {/* LOWER CONTENT AREA 
          z-40 ensures this slides over the gateway once the scroll is done.
      */}
      <div className="relative z-40 bg-white -mt-[1px]">
        <div className="container mx-auto px-6 pb-24">
          <div className="flex items-center gap-4 mb-16 pt-32">
            <div className="h-[1px] flex-1 bg-slate-200" />
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase whitespace-nowrap">
              Resource Allocation Metrics
            </h2>
            <div className="h-[1px] flex-1 bg-slate-200" />
          </div>

          <BillingStats />

          <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DataTraceCard title="LATEST_TRACES" description="No encrypted traces found." />
            <DataTraceCard title="SYSTEM_LOGS" description="Gateway secure. All protocols nominal." />
          </section>
        </div>
      </div>
    </div>
  );
}

// --- UPDATED GATEWAY SCROLL (FORCED OVERLAY) ---
function GatewayScroll(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.75], ["-80px", "0px"]);
  const btnOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);

  const cards = [
    { id: 1, side: "left" }, { id: 2, side: "right" },
    { id: 3, side: "left" }, { id: 4, side: "right" },
    { id: 5, side: "left" }, { id: 6, side: "right" },
  ];

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-slate-950">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* TEXT REVEAL */}
        <motion.div 
          style={{ y: contentY }}
          className="absolute inset-0 flex flex-col items-center justify-start text-center px-4 z-0 pt-[30vh]"
        >
          <div className="space-y-6">
            <h2 className="text-indigo-500 font-mono text-xs tracking-[0.8em] uppercase opacity-60">
              Infrastructure_View
            </h2>
            <p className="text-white text-6xl md:text-9xl font-oswald uppercase max-w-7xl leading-[0.75] tracking-tighter">
              Seamless <br/><span className="text-slate-600">Integration</span>
            </p>
            <motion.div style={{ opacity: btnOpacity }} className="pt-12">
              <button className="px-12 py-5 bg-slate-900 border border-indigo-500/20 text-indigo-400 font-mono text-sm tracking-[0.3em] uppercase hover:border-indigo-500 transition-all duration-700 rounded-sm">
                Initialize System
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* 16:9 GRID DISPERSION */}
        <div className="relative w-full max-w-7xl z-20 pointer-events-none px-12">
          <div className="grid grid-cols-2 gap-4"> 
            {cards.map((card, index) => (
              <ParabolicCard 
                key={card.id} 
                side={card.side as "left" | "right"} 
                progress={scrollYProgress}
                rowIndex={Math.floor(index / 2)} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ParabolicCard({ side, progress, rowIndex }: { side: "left" | "right", progress: MotionValue<number>, rowIndex: number }) {
  const layers = [
    { x: 130, y: -100, rot: 10, scale: 1.1, z: 10 }, 
    { x: 160, y: -20,  rot: 8,  scale: 1.1, z: 20 }, 
    { x: 45,  y: -10,  rot: 30, scale: 1.1, z: 30 }, 
  ];

  const current = layers[rowIndex];
  const xDist = side === "left" ? `-${current.x}%` : `${current.x}%`;

  const x = useTransform(progress, [0, 0.6], ["0%", xDist]);
  const y = useTransform(progress, [0, 0.6], ["0%", `${current.y}%`]);
  const rotate = useTransform(progress, [0, 0.6], [0, side === "left" ? -current.rot : current.rot]);
  const opacity = useTransform(progress, [0, 0.5, 0.6], [1, 1, 0]);

  return (
    <motion.div
      style={{ x, y, rotate, opacity, transformOrigin: "center center", zIndex: current.z, aspectRatio: "16 / 9" }}
      className="relative w-full bg-slate-900 border border-indigo-500/10 rounded-sm overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
    >
      <Image src="/image.png" alt="Infrastructure" fill className="object-cover opacity-80" />
      <div className="absolute inset-0 bg-slate-950/50" />
    </motion.div>
  );
}

function DataTraceCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="group relative bg-slate-50 border border-slate-200 p-8 rounded-xl overflow-hidden hover:bg-white hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300">
      <h3 className="font-oswald text-2xl text-slate-800 mb-2 tracking-wide uppercase">{title}</h3>
      <p className="text-slate-500 text-sm font-medium">{description}</p>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-sky-400 transition-colors duration-300" />
    </div>
  );
}
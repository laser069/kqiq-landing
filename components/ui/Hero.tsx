"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface HeroProps {
  badgeText?: string;
  primaryCtaText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  subtitleLine1?: string;
  subtitleLine2?: string;
  titleLine1?: string;
  titleLine2?: string;
  brandName?: string;
}

export default function Hero({
  badgeText = "SYSTEM STATUS: ONLINE // 2026",
  primaryCtaText,
  onPrimaryClick,
  onSecondaryClick,
  subtitleLine1 = "Next-generation revenue infrastructure designed for high-velocity global transactions.",
  subtitleLine2 = "Seamlessly integrate automated ledger reconciliation, tax compliance, and real-time merchant reporting.",
  titleLine1 = "KWIQ",
  titleLine2 = "BILLING",
  brandName = "ZIPPY",
}: HeroProps): React.JSX.Element {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#e0e5ec]">
      
      {/* 1. Background Image - High Visibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Billing Infrastructure"
          fill
          priority
          className="object-cover object-right opacity-[0.40] contrast-125 saturate-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent z-10" />
      </div>
      
      {/* 2. Main Content Container */}
      <div className="relative z-20 container mx-auto px-8 lg:px-20 h-full flex flex-col justify-start pt-32 md:pt-22 gap-12 lg:gap-16">
        
        {/* TITLED SECTION */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-oswald font-black text-slate-950 tracking-[-0.05em] leading-[0.8] uppercase select-none text-[clamp(4rem,10vw,12rem)]">
              <span className="block">{titleLine1}</span>
              <span className="block text-sky-500">{titleLine2}</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mt-6"
          >
            <div className="h-1 w-8 bg-slate-950" />
            <span className="text-lg md:text-xl font-oswald font-bold tracking-[0.4em] text-slate-400 uppercase">
              BY {brandName}
            </span>
          </motion.div>
        </div>

        {/* SUBTITLE & BUTTON SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-17">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-2xl md:text-3xl text-slate-950 font-black leading-[1.1] uppercase tracking-tight">
              {subtitleLine1}
            </p>
            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-lg">
              {subtitleLine2}
            </p>
          </motion.div>

          {/* Button Container */}
          {primaryCtaText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="lg:col-span-5 flex flex-col justify-start items-start lg:items-end mt-10 lg:mt-16"
            >
              <button 
                onClick={onPrimaryClick}
                className="bg-slate-950 text-white px-10 py-5 rounded-none font-oswald font-bold text-lg uppercase tracking-[0.2em] transition-all duration-300 hover:bg-slate-800 hover:-translate-y-1 active:scale-95"
              >
                {primaryCtaText}
              </button>
            </motion.div>
          )}
        </div>

      </div>

      {/* 3. Decorative Frame Elements */}
      <div className="absolute top-10 left-0 w-full px-12 hidden lg:flex justify-between pointer-events-none">
        <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em]">{badgeText}</span>
        <div className="flex gap-8 pointer-events-auto">
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em] cursor-pointer" onClick={onSecondaryClick}>Node: 04-Global</span>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em]">2026_KV</span>
        </div>
      </div>

    </section>
  );
}

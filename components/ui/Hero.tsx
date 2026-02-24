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
    <section className="relative w-full min-h-[85vh] md:min-h-screen overflow-hidden bg-[#e0e5ec] flex items-center">

      {/* 1. Background Image - High Visibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Billing Infrastructure"
          fill
          priority
          className="object-cover object-right md:object-center opacity-[0.25] md:opacity-[0.40] contrast-125 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#e0e5ec] via-[#e0e5ec]/60 to-transparent z-10" />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 h-full flex flex-col justify-center gap-6 md:gap-10 lg:gap-16">

        {/* TITLED SECTION */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-oswald font-black text-slate-950 tracking-[-0.05em] leading-[0.85] md:leading-[0.8] uppercase select-none text-[clamp(2.8rem,14vw,12rem)]">
              <span className="block">{titleLine1}</span>
              <span className="block text-sky-500">{titleLine2}</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mt-4 sm:mt-8"
          >
            <div className="h-0.5 md:h-1 w-6 md:w-8 bg-slate-950" />
            <span className="text-[10px] sm:text-sm md:text-xl font-oswald font-bold tracking-[0.2em] md:tracking-[0.4em] text-slate-400 uppercase">
              BY {brandName}
            </span>
          </motion.div>
        </div>

        {/* SUBTITLE & BUTTON SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:col-span-7 space-y-4 md:space-y-8"
          >
            <p className="text-lg sm:text-2xl md:text-3xl text-slate-950 font-black leading-[1.2] md:leading-[1.1] uppercase tracking-tight">
              {subtitleLine1}
            </p>
            <p className="text-xs sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-lg">
              {subtitleLine2}
            </p>
          </motion.div>

          {/* Button Container */}
          {primaryCtaText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="lg:col-span-5 flex flex-col justify-start items-start lg:items-end mt-2 sm:mt-8 lg:mt-16"
            >
              <button
                onClick={onPrimaryClick}
                className="w-full sm:w-auto bg-slate-950 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-none font-oswald font-bold text-base sm:text-lg uppercase tracking-[0.2em] transition-all duration-300 hover:bg-slate-800 hover:-translate-y-1 active:scale-95"
              >
                {primaryCtaText}
              </button>
            </motion.div>
          )}
        </div>

      </div>


      {/* 3. Decorative Frame Elements Removed */}

    </section>
  );
}

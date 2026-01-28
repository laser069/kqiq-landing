"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface HeroProps {
  subtitleLine1?: string;
  subtitleLine2?: string;
  subtitleLine3?: string;
}

export default function Hero({
  subtitleLine1 = "Next-generation revenue infrastructure designed for high-velocity global transactions.",
  subtitleLine2 = "Seamlessly integrate automated ledger reconciliation, tax compliance, and real-time merchant reporting.",
  subtitleLine3 = "Built for precision. Optimized for scale. Powered by Zippy.",
}: HeroProps): React.JSX.Element {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Billing Infrastructure"
          fill
          priority
          className="object-cover object-right opacity-[0.90] grayscale brightness-[0.98]" 
        />
      </div>
      
      {/* 2. Soft Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/20 via-transparent to-white/90 pointer-events-none" />

      {/* 3. Main Content Container */}
      <div className="relative z-20 container mx-auto px-8 lg:px-16 h-full flex flex-col justify-between py-48">
        
        {/* TITLE SECTION - UNCHANGED */}
        <div className="mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-oswald font-bold text-slate-950 tracking-[-0.05em] leading-[0.85] uppercase select-none text-7xl md:text-9xl"
          >
            <div className="flex flex-col">
              <span className="block">KWIQ <span className="text-sky-500">BILLING</span></span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="block text-2xl md:text-4xl tracking-[0.3em] text-slate-400 font-light mt-2"
              >
                BY ZIPPY
              </motion.span>
            </div>
          </motion.h1>
        </div>

        {/* SUBTITLE SECTION - TIDY, MID-SIZED, NO LINES */}
        <div className="w-full md:max-w-[45%] flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col gap-3"
          >
            <p className="text-lg md:text-xl text-sky-500 font-medium leading-snug tracking-tight">
              {subtitleLine1}
            </p>
            
            <p className="text-lg md:text-xl text-sky-500 font-medium leading-snug tracking-tight">
              {subtitleLine2}
            </p>
            
            <p className="text-sm md:text-base text-sky-400 font-bold tracking-[0.2em] uppercase opacity-80 mt-1">
              {subtitleLine3}
            </p>
          </motion.div>
        </div>

      </div>

      {/* 4. Minimal Scroll Line - Keeps that high-end feel without cluttering text */}
      <div className="absolute bottom-0 right-16 z-20">
        <motion.div 
          animate={{ height: [0, 120, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="w-[1px] bg-sky-500/30"
        />
      </div>
    </section>
  );
}
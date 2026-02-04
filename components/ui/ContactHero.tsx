"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#e0e5ec] p-6 lg:p-12 flex items-center justify-center overflow-hidden">
      
      <div className="w-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* Panel 1: The Bold Identity Plate */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-4 lg:col-span-8 row-span-2 rounded-[2.5rem] md:rounded-[3.5rem] bg-[#e0e5ec] p-8 md:p-20 
                     shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] md:shadow-[25px_25px_50px_#bebebe,-25px_-25px_50px_#ffffff] 
                     border-t-[1.5px] border-l-[1.5px] border-white/70
                     flex flex-col justify-between relative overflow-hidden min-h-[450px] md:min-h-[550px]"
        >
          {/* Top Metadata */}
          <div className="relative z-10 flex justify-between items-start">
            <div className="px-6 py-2 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]">
              <span className="font-mono text-[10px] text-sky-500 font-black tracking-[0.3em] uppercase">Enterprise_Ready</span>
            </div>
            <span className="font-oswald text-sm text-slate-400 font-bold uppercase tracking-widest">v2.0 // 2026</span>
          </div>
          
          {/* THE BOLD TYPOGRAPHY SECTION */}
          <div className="relative z-10 mt-8 md:mt-12">
            <h1 className="font-oswald font-black text-[clamp(4.5rem,15vw,14rem)] leading-[0.75] text-slate-800 uppercase tracking-[-0.06em]">
              <span className="block drop-shadow-[4px_6px_8px_rgba(0,0,0,0.15)]">KWIQ</span>
              <span className="block text-sky-500 [text-shadow:_-2px_-2px_0_#fff,2px_-2px_0_#fff,-2px_2px_0_#fff,2px_2px_0_#fff,6px_8px_12px_rgba(14,165,233,0.3)]">
                BILLING
              </span>
            </h1>
            
            <div className="mt-12 max-w-xl">
              <p className="font-sans font-black text-xl md:text-2xl text-slate-600 leading-tight uppercase tracking-tight">
                High-Velocity Revenue Infrastructure <br />
                <span className="text-slate-400">Built for Precision. Powered by Zippy.</span>
              </p>
            </div>
          </div>

          {/* Bottom Branding Decor */}
          <div className="absolute -bottom-10 -right-10 font-oswald text-[18rem] font-black text-slate-300/20 select-none tracking-tighter">
            ZIPPY
          </div>
        </motion.div>

        {/* Panel 2: Recessed Metric Display */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 lg:col-span-4 bg-[#e0e5ec] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 
                     shadow-[inset_15px_15px_30px_#bebebe,inset_-15px_-15px_30px_#ffffff] 
                     flex flex-col justify-center border-b border-r border-white/20"
        >
          <p className="font-mono text-[10px] md:text-[11px] text-slate-400 font-black tracking-[0.4em] uppercase mb-4 md:mb-6 text-center">Global_Scale</p>
          <div className="text-center">
            <h2 className="font-oswald font-black text-6xl md:text-8xl text-slate-800 tracking-tighter leading-none">140+</h2>
            <p className="font-oswald text-xl md:text-2xl text-sky-500 font-bold uppercase tracking-widest mt-2">Currency Pairs</p>
          </div>
        </motion.div>

        {/* Panel 3: Tactile Interaction Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2 lg:col-span-4 bg-[#e0e5ec] rounded-[3rem] p-10 
                     shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] 
                     flex flex-col justify-between border-t border-l border-white/60"
        >
          <div className="space-y-4">
            <h3 className="font-oswald font-black text-3xl text-slate-800 uppercase italic">Infrastructure</h3>
            <div className="h-[2px] w-full bg-gradient-to-r from-sky-500 to-transparent" />
          </div>
          
          <div className="space-y-4 py-8">
            {["Ledger_Sync", "Tax_Automate", "Payout_Velocity"].map((label) => (
              <div key={label} className="flex justify-between items-center group cursor-pointer">
                <span className="font-mono text-[10px] text-slate-500 font-bold uppercase group-hover:text-sky-500 transition-colors">{label}</span>
                <div className="w-12 h-6 rounded-full bg-[#e0e5ec] shadow-[inset_2px_2px_5px_#bebebe,inset_-2px_-2px_5px_#ffffff] p-1">
                  <div className="w-4 h-4 rounded-full bg-slate-300 shadow-[1px_1px_3px_#bebebe] group-hover:translate-x-6 group-hover:bg-sky-500 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Panel 4: Footer Bar (Machined Label) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="md:col-span-4 lg:col-span-12 bg-[#e0e5ec] rounded-[3rem] p-12 lg:px-16 
                     shadow-[25px_25px_50px_#bebebe,-25px_-25px_50px_#ffffff] 
                     flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="flex-1 text-center lg:text-left">
            <p className="font-oswald font-black text-3xl md:text-5xl text-slate-800 uppercase leading-[0.9] mb-4">
              Designed for <span className="text-sky-500">Global Scale.</span>
            </p>
            <p className="text-slate-500 font-bold text-sm md:text-lg max-w-2xl mx-auto lg:mx-0">
              Facilitating seamless merchant reporting and automated payout scheduling across international borders.
            </p>
          </div>
          <button 
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            className="px-12 py-6 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] 
                               active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]
                               text-slate-800 font-oswald font-black text-2xl uppercase tracking-widest transition-all"
          >
            Initiate Contact
          </button>
        </motion.div>

      </div>
    </section>
  );
}
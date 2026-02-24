"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#e0e5ec] pt-24 sm:pt-32 p-4 sm:p-6 lg:p-12 flex items-center justify-center overflow-hidden">

      <div className="w-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* Panel 1: The Bold Identity Plate */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-4 lg:col-span-8 row-span-2 rounded-[2rem] md:rounded-[3.5rem] bg-[#e0e5ec] p-6 sm:p-8 md:p-20 
                     shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] md:shadow-[25px_25px_50px_#bebebe,-25px_-25px_50px_#ffffff] 
                     border-t-[1.5px] border-l-[1.5px] border-white/70
                     flex flex-col justify-between relative overflow-hidden min-h-[400px] md:min-h-[550px]"
        >


          {/* THE BOLD TYPOGRAPHY SECTION */}
          <div className="relative z-10 mt-6 sm:mt-12">
            <h1 className="font-oswald font-black text-[clamp(2.5rem,15vw,14rem)] md:text-[clamp(3.5rem,15vw,14rem)] leading-[0.8] text-slate-800 uppercase tracking-[-0.06em]">
              <span className="block drop-shadow-[4px_6px_8px_rgba(0,0,0,0.15)]">KWIQ</span>
              <span className="block text-sky-500 [text-shadow:_-2px_-2px_0_#fff,2px_-2px_0_#fff,-2px_2px_0_#fff,2px_2px_0_#fff,6px_8px_12px_rgba(14,165,233,0.3)]">
                BILLING
              </span>
            </h1>

            <div className="mt-8 md:mt-12 max-w-xl">
              <p className="font-sans font-black text-lg md:text-2xl text-slate-600 leading-tight uppercase tracking-tight">
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

          <div className="text-center">
            <h2 className="font-oswald font-black text-6xl md:text-8xl text-slate-800 tracking-tighter leading-none">140+</h2>
            <p className="font-oswald text-xl md:text-2xl text-sky-500 font-bold uppercase tracking-widest mt-2">Currency Pairs</p>
          </div>
        </motion.div>

        {/* Panel 3: Reliability Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2 lg:col-span-4 bg-[#e0e5ec] rounded-[3rem] p-10 
                     shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] 
                     flex flex-col justify-between border-t border-l border-white/60"
        >
          <div className="space-y-4">
            <h3 className="font-oswald font-black text-3xl text-slate-800 uppercase italic">Commitment</h3>
            <div className="h-[2px] w-full bg-gradient-to-r from-sky-500 to-transparent" />
          </div>

          <div className="space-y-6 py-4">
            {[
              { title: "99.99% Uptime", desc: "Enterprise SLA" },
              { title: "24/7 Support", desc: "Priority Access" },
              { title: "Bank-Grade", desc: "AES-256 Encryption" }
            ].map((item) => (
              <div key={item.title} className="flex flex-col border-l-2 border-sky-500/20 pl-4">
                <span className="font-oswald text-xl md:text-2xl text-slate-800 font-black uppercase tracking-wide leading-none mb-1">{item.title}</span>
                <span className="font-mono text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Panel 4: Footer Bar (Machined Label) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="md:col-span-4 lg:col-span-12 bg-[#e0e5ec] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:px-16 
                     shadow-[25px_25px_50px_#bebebe,-25px_-25px_50px_#ffffff] 
                     flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10"
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
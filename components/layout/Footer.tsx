"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#e0e5ec] py-16 px-6 md:px-24 border-t-[1.5px] border-white/70">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-slate-600">
        
        {/* BRANDING & CORE MISSION */}
        <div className="space-y-6">
          <h3 className="font-oswald font-black text-3xl text-slate-800 tracking-tighter uppercase leading-none">
            KWIQ<span className="text-sky-500">BILL</span>
          </h3>
          <p className="text-sm font-bold leading-relaxed max-w-xs">
            Breaking the barrier of expensive and restrictive billing software. 
            Free, open-source, and built for everyone.
          </p>
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] flex items-center justify-center text-slate-400 hover:text-sky-500 transition-all cursor-pointer">
                <span className="font-mono text-[10px] font-black">X</span>
             </div>
             <div className="w-8 h-8 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] flex items-center justify-center text-slate-400 hover:text-sky-500 transition-all cursor-pointer">
                <span className="font-mono text-[10px] font-black">GH</span>
             </div>
          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="space-y-6">
          <h4 className="font-oswald font-black text-xs tracking-[0.3em] text-slate-400 uppercase">Navigation</h4>
          <ul className="space-y-3 font-oswald font-bold text-sm uppercase tracking-widest">
            <li><Link href="/" className="hover:text-sky-500 transition-colors">Index</Link></li>
            <li><Link href="/observatory" className="hover:text-sky-500 transition-colors">Observatory</Link></li>
            <li><Link href="/expedition" className="hover:text-sky-500 transition-colors">Mission</Link></li>
            <li><Link href="/contact" className="hover:text-sky-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* TERMS & CONDITIONS SUMMARY */}
        <div className="lg:col-span-2 space-y-6 lg:pl-12">
          <h4 className="font-oswald font-black text-xs tracking-[0.3em] text-slate-400 uppercase">Legal & Terms</h4>
          <div className="bg-[#e0e5ec] rounded-3xl p-6 shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff] border-t border-l border-white/40">
            <p className="text-[11px] font-bold leading-relaxed uppercase tracking-tight text-slate-500 italic">
              KwiqBill is free and open-source software provided under the Apache License 2.0. 
              Use at your own risk. No warranties provided. By using this software, you agree to full data ownership 
              and liability standards as defined in our official documentation.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-300/30 flex justify-between items-center">
               <span className="font-mono text-[9px] text-sky-500 font-black">STABLE_RELEASE_V2</span>
               <Link href="/terms" className="font-oswald font-black text-[10px] text-slate-800 hover:text-sky-500 transition-colors uppercase tracking-[0.2em]">View Full Terms →</Link>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-300/30 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          © {currentYear} KWIQBILL PROJECT // POWERED BY ZIPPY
        </p>
        <div className="flex gap-8 font-oswald font-bold text-[10px] text-slate-400 uppercase tracking-[0.2em]">
           <span>NORTH_AMERICA_HQ</span>
           <span>EST_2026</span>
        </div>
      </div>
    </footer>
  );
}

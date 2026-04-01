"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Google OAuth Branding Compliance: Minimalist Privacy Policy
  if (pathname === "/privacy-policy") return null;

  return (
    <footer className="w-full bg-[#e0e5ec] pb-12 pt-24 px-4 sm:px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-slate-600">

        {/* Column 1: BRANDING & CORE MISSION */}
        <div className="space-y-6">
          <h3 className="font-oswald font-black text-[2rem] text-slate-950 tracking-[-0.02em] uppercase leading-none">
            KWIQ<span className="text-[#0ea5e9]">BILL</span>
          </h3>
          <p className="text-[13px] font-bold leading-relaxed max-w-[260px] text-slate-700">
            Breaking the barrier of expensive and
            restrictive billing software. Free, open-
            source, and built for everyone.
          </p>
        </div>

        {/* Column 2: NAVIGATION */}
        <div className="space-y-6 lg:pl-10">
          <h4 className="font-oswald font-black text-[11px] tracking-[0.25em] text-slate-400 uppercase">Navigation</h4>
          <ul className="space-y-[1.15rem] font-oswald font-bold text-[13px] uppercase tracking-widest text-slate-600">
            <li><Link href="/" className="hover:text-sky-500 transition-colors">Index</Link></li>
            <li><Link href="/features" className="hover:text-sky-500 transition-colors">Features</Link></li>
            <li><Link href="/observatory" className="hover:text-sky-500 transition-colors">Observatory</Link></li>
            <li><Link href="/resources" className="hover:text-sky-500 transition-colors">Resources</Link></li>
            <li><Link href="/expedition" className="hover:text-sky-500 transition-colors">Mission</Link></li>
            <li><Link href="/contact" className="hover:text-sky-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: RESOURCES */}
        <div className="space-y-6 lg:pl-6">
          <h4 className="font-oswald font-black text-[11px] tracking-[0.25em] text-slate-400 uppercase">Resources</h4>
          <ul className="space-y-[1.15rem] font-oswald font-bold text-[13px] uppercase tracking-widest text-slate-600">
            <li><Link href="/templates" className="hover:text-sky-500 transition-colors">Invoice Templates</Link></li>
            <li><Link href="/terms" className="hover:text-sky-500 transition-colors">Terms</Link></li>
            <li><Link href="/privacy" className="hover:text-sky-500 transition-colors">Privacy</Link></li>
            <li><Link href="/compare" className="hover:text-sky-500 transition-colors">Compare</Link></li>
            <li><Link href="/contact" className="hover:text-sky-500 transition-colors">Support</Link></li>
          </ul>
        </div>

        {/* Column 4: LEGAL & TERMS */}
        <div className="lg:col-span-1 space-y-5 w-full max-w-[340px] mt-1 lg:pl-4">
          <h4 className="font-oswald font-black text-[11px] tracking-[0.25em] text-slate-400 uppercase mb-[1.4rem]">Legal & Terms</h4>
          <div className="bg-[#e0e5ec] rounded-[2rem] pt-7 px-7 pb-6 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] border-t border-l border-white/40">
            <p className="text-[10px] sm:text-[10.5px] font-bold leading-[1.7] uppercase tracking-wide text-slate-500 italic max-w-[240px]">
              KWIQBILL IS FREE AND OPEN-SOURCE SOFTWARE PROVIDED UNDER THE APACHE LICENSE 2.0. USE AT YOUR OWN RISK. NO WARRANTIES PROVIDED. BY USING THIS SOFTWARE. YOU AGREE TO FULL DATA OWNERSHIP AND LIABILITY STANDARDS AS DEFINED IN OUR OFFICIAL DOCUMENTATION.
            </p>
            <div className="mt-7">
              <Link href="/terms" className="font-oswald font-black text-[11px] text-slate-800 hover:text-sky-500 transition-colors uppercase tracking-[0.2em]">
                View Full Terms →
              </Link>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 mb-4 flex justify-start items-center relative lg:left-0 text-left">
        <p className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">
          © {currentYear} KWIQBILL PROJECT // POWERED BY ZIPPY
        </p>
      </div>
    </footer>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const resources = [
  {
    title: "Invoice Templates",
    id: "resource-invoices",
    protocol: "FMT_01",
    description: "Choose from professionally designed invoice templates that support GST compliance and suit different business needs. All templates are fully customizable inside the KWIQBILL application.",
    items: ["Classic Invoice", "Compact Invoice", "GST-Detailed Invoice", "Minimal Invoice"],
    ctas: [
      { label: "View Templates", href: "#", primary: true },
      { label: "Customize in App", href: "#", primary: false },
    ],
  },
  {
    title: "Agreements & Policies",
    id: "resource-legal",
    protocol: "LGL_DP",
    description: "KWIQBILL follows transparent policies that respect user data ownership and open-source principles. No hidden terms. No vendor lock-in.",
    items: ["Terms & Conditions", "Privacy Policy", "Data Ownership Policy", "Open-Source License (Apache 2.0)"],
    ctas: [
      { label: "Read Terms", href: "/terms", primary: true },
      { label: "View License", href: "#", primary: false },
    ],
  },
  {
    title: "Compare Other Software",
    id: "resource-compare",
    protocol: "CMP_EV",
    description: "See how KWIQBILL compares with traditional billing and POS software, and understand why it's a better fit for small and growing businesses.",
    items: ["Pricing (Free vs Subscription)", "Offline support", "GST readiness", "Data ownership", "Platform support", "Open-source availability"],
    ctas: [
      { label: "Compare Features", href: "/compare", primary: true },
      { label: "Why Choose KWIQBILL", href: "#", primary: false },
    ],
  },
  {
    title: "Learn & Support",
    id: "resource-support",
    protocol: "HLP_V2",
    description: "Learn how to use KWIQBILL step-by-step with clear guides and community-driven support. Help is always available when you need it.",
    items: ["Getting Started Guide", "Frequently Asked Questions (FAQs)", "Setup & Installation Help", "Contact & Community Support"],
    ctas: [
      { label: "Get Started", href: "#", primary: true },
      { label: "View Help Docs", href: "#", primary: false },
    ],
  },
];

export default function ResourcesClient() {
  return (
    <main className="min-h-screen bg-[#e0e5ec] selection:bg-sky-500/20 pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Hero Section */}
        <section className="mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="h-[2px] w-8 bg-sky-500" />
               <span className="font-mono text-[9px] md:text-xs font-black tracking-[0.4em] text-slate-400 uppercase">System_Resources // Vol. 01</span>
            </div>
            <h1 className="font-oswald font-black text-4xl sm:text-6xl md:text-8xl text-slate-900 leading-[0.95] md:leading-[0.9] uppercase mb-8">
              Resources for Using <span className="text-sky-500">KWIQBILL</span> Effectively
            </h1>
            <p className="font-oswald text-lg md:text-2xl text-slate-500 font-bold italic leading-relaxed uppercase tracking-tight">
              Everything you need to understand, customize, compare, and get started with KWIQBILL — from invoice templates to support and documentation.
            </p>
          </motion.div>
        </section>

        {/* Resource Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              id={resource.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="group relative bg-[#e0e5ec] p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-t border-l border-white/60 flex flex-col h-full hover:shadow-[15px_15px_40px_rgba(56,189,248,0.1)] transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="px-4 py-2 md:px-5 md:py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] border border-white/40">
                  <span className="font-mono text-[10px] md:text-xs text-sky-500 font-black tracking-[0.4em] uppercase">{resource.protocol}</span>
                </div>
                <div className="font-mono text-[9px] md:text-[10px] text-slate-300 font-black tracking-widest uppercase">NODE_{index + 1}</div>
              </div>

              <h2 className="font-oswald font-black text-2xl md:text-4xl text-slate-800 uppercase mb-6 tracking-tight">
                {resource.title}
              </h2>
              
              <p className="text-slate-600 font-bold text-sm md:text-lg mb-8 leading-relaxed italic opacity-80 border-l border-sky-500/30 pl-6">
                {resource.description}
              </p>

              <div className="flex-grow">
                <ul className="space-y-3 md:space-y-4 mb-10">
                  {resource.items.map((item) => (
                    <li key={item} className="flex items-center gap-4 text-[13px] md:text-base font-oswald font-bold uppercase tracking-wide text-slate-500 group-hover:text-slate-800 transition-colors">
                      <div className="w-3 md:w-4 h-[1px] bg-sky-500/40 group-hover:w-6 transition-all" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 md:pt-8">
                {resource.ctas.map((cta) => {
                  const btnClasses = `w-full sm:w-auto text-center px-8 py-4 rounded-xl font-oswald font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                    cta.primary
                      ? "bg-slate-900 text-white shadow-[8px_8px_16px_rgba(0,0,0,0.2)] hover:bg-sky-600 hover:shadow-sky-500/30"
                      : "bg-[#e0e5ec] text-slate-700 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-inner"
                  }`;

                  return (
                    <Link
                      key={cta.label}
                      href={cta.href}
                      className={btnClasses}
                    >
                      {cta.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Section */}
        <section className="mt-32 text-center px-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#e0e5ec] p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] shadow-[inset_20px_20px_60px_#bebebe,inset_-20px_-20px_60px_#ffffff] border-t border-l border-white/40"
          >
            <h2 className="font-oswald font-black text-3xl sm:text-5xl md:text-6xl text-slate-900 uppercase mb-10 tracking-tighter leading-none">
              Ready to explore <span className="text-sky-500">KWIQBILL</span> in detail?
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Link
                href="/contact"
                className="w-full md:w-auto px-12 py-6 bg-sky-500 text-white font-oswald font-black text-xl uppercase tracking-[0.2em] rounded-2xl shadow-[10px_10px_20px_rgba(14,165,233,0.3)] hover:bg-sky-400 hover:-translate-y-1 transition-all active:scale-95 flex justify-center items-center"
              >
                Try KWIQBILL
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

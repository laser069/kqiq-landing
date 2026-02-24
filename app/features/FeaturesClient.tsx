"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const highlights = [
  { label: "Fast Billing & Checkout", code: "CMD_FAST" },
  { label: "Mobile & Desktop Support", code: "MULTI_OS" },
  { label: "Offline-First Operation", code: "LOC_SYNC" },
  { label: "GST-Ready Invoicing", code: "TAX_COMP" },
  { label: "Business Reports", code: "ANLYT_S" },
  { label: "Secure Data Backups", code: "AES_ENC" },
];

const coreFeatures = [
  {
    title: "Mobile App",
    subtitle: "Manage your business directly from your mobile device.",
    description: "Create bills, manage products, track customers, and accept payments — even without internet access.",
    points: [
      "Offline-first billing",
      "Fast item selection & checkout",
      "Touch-friendly interface",
      "Ideal for on-the-go businesses"
    ],
    image: "/mobile_final_v1.png",
    id: "feature-mobile"
  },
  {
    title: "Desktop Application",
    subtitle: "A powerful desktop experience designed for counters.",
    description: "Optimized for speed, accuracy, and reliability in high-volume retail environments.",
    points: [
      "Keyboard shortcuts for fast billing",
      "Printer & barcode support",
      "Local data storage",
      "Suitable for retail & wholesale stores"
    ],
    image: "/desktop_dashboard_v1.png",
    id: "feature-desktop"
  },
  {
    title: "Financial Reporting",
    subtitle: "Get clear visibility into your business performance.",
    description: "Real-time dashboards and detailed reports help you make informed decisions effortlessly.",
    points: [
      "Daily, weekly, and monthly sales reports",
      "Profit and expense tracking",
      "Payment method insights",
      "Export reports to PDF"
    ],
    image: "/reporting_dashboard_v1.png",
    id: "feature-reporting"
  },
  {
    title: "Bill Management",
    subtitle: "Highlight invoicing strength and GST handling.",
    description: "Create professional invoices with automatic GST calculations, multiple formats, and full customization.",
    points: [
      "GST-ready (CGST / SGST / IGST)",
      "A4, A5, and Thermal print formats",
      "Custom invoice templates",
      "Invoice history & reprints"
    ],
    image: "/bill_management_v1.png",
    id: "feature-billing"
  }
];

const subFeatures = [
  { title: "Inventory & Stock", tag: "STK_V4" },
  { title: "Customer Profiles", tag: "CRM_ID" },
  { title: "Barcode Generation", tag: "BCODE_GEN" },
  { title: "Google Drive Backup", tag: "CLD_SYNC" },
  { title: "Invoice Customization", tag: "UI_THEME" },
  { title: "Tax Configuration", tag: "GST_RULES" },
];

export default function FeaturesClient() {
  return (
    <main className="min-h-screen bg-[#e0e5ec] selection:bg-sky-500/20 pt-20 pb-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* 1. Page Hero Section */}
        <section className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:max-w-4xl"
          >
            <h1 className="font-oswald font-black text-3xl sm:text-6xl md:text-8xl text-slate-900 leading-[0.95] md:leading-[0.9] uppercase mb-8 text-[clamp(2.5rem,8vw,8rem)]">
              Powerful Billing & Store <span className="text-sky-500">Management</span> — Made Simple
            </h1>
            <p className="font-oswald text-lg md:text-2xl text-slate-500 font-bold italic leading-relaxed uppercase tracking-tight mb-8 md:mb-12">
              KWIQBILL helps Indian businesses manage billing, inventory, customers, and reports with ease — online or offline.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => document.getElementById('core-features')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-oswald font-bold text-sm uppercase tracking-[0.2em] shadow-[10px_10px_20px_rgba(0,0,0,0.2)] hover:bg-sky-600 transition-all active:scale-95"
              >
                Explore Features
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 bg-[#e0e5ec] text-slate-800 font-oswald font-bold text-sm uppercase tracking-[0.2em] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-inner transition-all flex justify-center items-center"
              >
                Try KWIQBILL
              </Link>
            </div>
          </motion.div>
        </section>

        {/* 2. Feature Overview Strip */}
        <section className="mb-32">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-[#e0e5ec] rounded-full shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] border-t border-l border-white/40 group mb-2 sm:mb-0"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
                <span className="font-oswald font-black text-[10px] md:text-[11px] text-slate-900 uppercase tracking-widest leading-none">
                  {h.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Core Feature Sections */}
        <section id="core-features" className="space-y-32">
          {coreFeatures.map((feature, index) => (
            <div
              key={feature.title}
              id={feature.id}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
            >
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-8"
              >
                <div>
                  <h2 className="font-oswald font-black text-2xl sm:text-4xl md:text-6xl text-slate-900 uppercase tracking-tight text-[clamp(1.5rem,8vw,3.75rem)] sm:text-4xl md:text-6xl">
                    {feature.title}
                  </h2>
                  <h3 className="font-oswald text-lg md:text-2xl text-slate-400 font-bold italic uppercase mt-2">
                    {feature.subtitle}
                  </h3>
                </div>

                <p className="text-slate-600 text-base md:text-lg font-bold leading-relaxed italic opacity-80 border-l-2 border-sky-500/20 pl-6">
                  {feature.description}
                </p>

                <ul className="space-y-4">
                  {feature.points.map(point => (
                    <li key={point} className="flex items-center gap-4 text-slate-500 font-oswald font-bold uppercase tracking-wide group cursor-default">
                      <div className="w-6 h-[1px] bg-slate-300 group-hover:w-10 group-hover:bg-sky-500 transition-all duration-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Visual Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex-1 relative w-full ${feature.id === 'feature-mobile' ? 'flex justify-center' : 'aspect-video'}`}
              >
                {feature.id === 'feature-mobile' ? (
                  /* 9:16 Mobile Card */
                  <div className="relative bg-white rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-t border-l border-white/60 max-w-sm aspect-[9/19.5] w-full overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-contain"
                      />

                    </div>
                  </div>
                ) : (
                  /* Original 16:9 Widescreen Card */
                  <div className="absolute inset-0 bg-white rounded-[3rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-t border-l border-white/60 overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-contain"
                      />

                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </section>

        {/* 4. Supporting Features Section */}
        <section className="mt-48 mb-32">
          <div className="text-center mb-16">
            <h2 className="font-oswald font-black text-4xl md:text-5xl text-slate-800 uppercase tracking-tight">Additional Capabilities</h2>
            <div className="h-[2px] w-24 bg-sky-500 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {subFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#e0e5ec] p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] border-t border-l border-white/40 flex flex-col items-start gap-3 sm:gap-4 group hover:shadow-inner transition-all duration-300"
              >
                <span className="font-oswald font-black text-lg sm:text-xl text-slate-800 uppercase tracking-[0.1em]">
                  {f.title}
                </span>
                <div className="w-full h-[1px] bg-slate-300/30 group-hover:bg-sky-500/30 transition-colors mt-2" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Platform Compatibility Section */}
        <section className="mb-32 bg-[#e0e5ec] p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-t border-l border-white/60">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-oswald font-black text-3xl sm:text-5xl md:text-7xl text-slate-900 uppercase tracking-tight mb-6 text-[clamp(2rem,8vw,6rem)]">Works Where Your Business Works</h2>
            <p className="max-w-xl mx-auto text-slate-500 font-bold text-xs sm:text-sm md:text-lg uppercase tracking-widest leading-relaxed px-4">KWIQBILL runs seamlessly across platforms so you’re never tied to a single device.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-16">
            {["MOBILE (ANDROID)", "DESKTOP", "WEB"].map(platform => (
              <div key={platform} className="px-8 py-6 md:px-12 md:py-8 bg-[#e0e5ec] rounded-2xl shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] border border-white/20 flex flex-col items-center">
                <span className="font-oswald font-black text-lg md:text-xl text-slate-800 tracking-[0.2em]">{platform}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Why These Features Matter */}
        <section className="text-center mb-32 md:mb-48 max-w-3xl mx-auto px-4">
          <p className="font-oswald text-xl md:text-3xl text-slate-800 font-bold italic leading-relaxed uppercase tracking-tight">
            &ldquo; Every feature in KWIQBILL is designed to reduce complexity, save time, and give business owners complete control over their billing and data. &rdquo;
          </p>
        </section>

        {/* 7. Closing CTA Section */}
        <section className="text-center px-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#e0e5ec] p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] shadow-[inset_20px_20px_60px_#bebebe,inset_-20px_-20px_60px_#ffffff] border-t border-l border-white/40"
          >
            <h2 className="font-oswald font-black text-3xl sm:text-4xl md:text-6xl text-slate-900 uppercase mb-10 tracking-tighter leading-none">
              Ready to simplify your billing process?
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Link
                href="/contact"
                className="w-full md:w-auto px-10 md:px-12 py-5 md:py-6 bg-sky-500 text-white font-oswald font-black text-lg md:text-xl uppercase tracking-[0.2em] rounded-2xl shadow-[10px_10px_20px_rgba(14,165,233,0.3)] hover:bg-sky-400 hover:-translate-y-1 transition-all active:scale-95 flex justify-center items-center"
              >
                Get Started
              </Link>
              <Link
                href="/resources"
                className="w-full md:w-auto px-10 md:px-12 py-5 md:py-6 bg-slate-900 text-white font-oswald font-black text-lg md:text-xl uppercase tracking-[0.2em] rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.2)] hover:bg-slate-800 hover:-translate-y-1 transition-all active:scale-95 flex justify-center items-center"
              >
                View Resources
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}

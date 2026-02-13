"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import {
  Receipt,
  Box,
  Users,
  BarChart3,
  Wallet,
  MonitorSmartphone,
  Settings,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  XCircle,
  ChevronDown
} from "lucide-react";

type Status = "Available" | "Not Available";

interface ComparisonRow {
  feature: string;
  zoho: Status;
  vyapar: Status;
  kwiqbill: Status;
  notes?: string;
}

interface Category {
  title: string;
  icon: React.ReactNode;
  features: ComparisonRow[];
}

const statusIcons: Record<Status, React.ReactNode> = {
  Available: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
  "Not Available": <XCircle className="w-6 h-6 text-rose-500" />,
};

const comparisonData: Category[] = [
  {
    title: "Billing & Invoicing",
    icon: <Receipt className="w-8 h-8" />,
    features: [
      { feature: "Basic Billing / POS", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Fast Checkout & Shortcuts", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Barcode Billing", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Invoice Templates", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Thermal / A4 / A5 Printing", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Live Invoice Preview", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "GST (CGST/SGST/IGST)", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Discounts (Item & Bill)", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Multiple Bills / Tabs", zoho: "Not Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Custom Footer & Terms", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
    ],
  },
  {
    title: "Inventory Management",
    icon: <Box className="w-8 h-8" />,
    features: [
      { feature: "Product Catalog", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "SKU & HSN Support", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Stock Tracking", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Low Stock Alerts", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Barcode Generation", zoho: "Available", vyapar: "Available", kwiqbill: "Not Available" },
      { feature: "Product Images", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Inventory Reports", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Multi-Warehouse Support", zoho: "Available", vyapar: "Available", kwiqbill: "Not Available" },
    ],
  },
  {
    title: "Customer Management",
    icon: <Users className="w-8 h-8" />,
    features: [
      { feature: "Customer Directory", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "GSTIN Tracking", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Purchase History", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Outstanding / Due Tracking", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Customer Types (Retail/Wholesale)", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Loyalty Points", zoho: "Not Available", vyapar: "Available", kwiqbill: "Not Available" },
      { feature: "Visit / Engagement Tracking", zoho: "Available", vyapar: "Not Available", kwiqbill: "Available" },
    ],
  },
  {
    title: "Reports & Analytics",
    icon: <BarChart3 className="w-8 h-8" />,
    features: [
      { feature: "Sales Summary", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Profit & Loss", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Payment Method Analysis", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Top Products", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Date Range Comparison", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Export to PDF", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Charts & Graphs", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Owner-Level Summary", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
    ],
  },
  {
    title: "Expenses & Cash Flow",
    icon: <Wallet className="w-8 h-8" />,
    features: [
      { feature: "Expense Recording", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Expense Categories", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Cash Flow View", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Expense vs Revenue", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Receipt Upload", zoho: "Available", vyapar: "Not Available", kwiqbill: "Not Available" },
    ],
  },
  {
    title: "Platform Support",
    icon: <MonitorSmartphone className="w-8 h-8" />,
    features: [
      { feature: "Web Application", zoho: "Available", vyapar: "Not Available", kwiqbill: "Available" },
      { feature: "Desktop Application", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Android App", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Offline Mode", zoho: "Not Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Local Device Storage", zoho: "Not Available", vyapar: "Available", kwiqbill: "Available" },
    ],
  },
  {
    title: "Settings & Customization",
    icon: <Settings className="w-8 h-8" />,
    features: [
      { feature: "Store Profile & Logo", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Invoice Customization", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "GST Slab Configuration", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Printer Configuration", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "QR Code on Invoice", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Watermark Control", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
    ],
  },
  {
    title: "Data, Security & Backup",
    icon: <ShieldCheck className="w-8 h-8" />,
    features: [
      { feature: "Cloud Backup", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Google Drive Backup", zoho: "Not Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Local Backup", zoho: "Not Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Role-Based Access", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Audit Logs", zoho: "Available", vyapar: "Not Available", kwiqbill: "Available" },
    ],
  },
  {
    title: "Advanced / Roadmap",
    icon: <Cpu className="w-8 h-8" />,
    features: [
      { feature: "Workflow Automation", zoho: "Available", vyapar: "Not Available", kwiqbill: "Not Available" },
      { feature: "API Access", zoho: "Available", vyapar: "Not Available", kwiqbill: "Available" },
      { feature: "AI / Smart Insights", zoho: "Available", vyapar: "Not Available", kwiqbill: "Not Available" },
      { feature: "Deep Transaction Logging", zoho: "Available", vyapar: "Available", kwiqbill: "Available" },
      { feature: "Modular Architecture", zoho: "Not Available", vyapar: "Not Available", kwiqbill: "Available" },
    ],
  },
];

export default function CompareClient() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#e0e5ec] pt-32 pb-24 px-6 md:px-12 font-oswald overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-sky-500" />
              <span className="font-mono text-[10px] md:text-xs font-black tracking-[0.4em] text-slate-400 uppercase">Comparison_Module // Ver. 2.0</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] uppercase mb-8 tracking-tighter">
              Compare Billing <br /> Software <span className="text-sky-500">Features</span>
            </h1>
            <p className="max-w-2xl text-xl text-slate-500 font-bold italic leading-relaxed uppercase border-l-2 border-sky-500/30 pl-6">
              No Marketing, Just Facts. This transparent comparison is meant to help businesses choose the right tool and guide KWIQBILL’s development roadmap.
            </p>
          </motion.div>
        </section>

        {/* Legend */}
        <div className="mb-12 flex flex-wrap gap-8 p-8 bg-[#e0e5ec] rounded-[2rem] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff]">
          {Object.entries(statusIcons).map(([label, icon]) => (
            <div key={label} className="flex items-center gap-3">
              <span>{icon}</span>
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest">
                {label === "Available" ? "RIGHT" : "WRONG"}
              </span>
            </div>
          ))}
        </div>

        {/* Accordion Comparison */}
        <div className="space-y-6">
          {comparisonData.map((category, idx) => (
            <motion.div
              key={category.title}
              className="bg-[#e0e5ec] rounded-[2.5rem] shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] overflow-hidden border border-white/40"
            >
              <button
                onClick={() => setOpenSection(openSection === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 md:p-10 hover:bg-white/10 transition-colors text-left"
              >
                <div className="flex items-center gap-6">
                  <span className="p-4 bg-[#e0e5ec] rounded-2xl shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-slate-400 group-hover:text-sky-500 transition-colors duration-500">
                    {category.icon}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-800 uppercase tracking-tight">{category.title}</h2>
                </div>
                <div className={`w-12 h-12 rounded-2xl bg-[#e0e5ec] flex items-center justify-center transition-all duration-500 border border-white/40 ${
                  openSection === idx 
                    ? 'shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-sky-500' 
                    : 'shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] text-slate-400 group-hover:text-slate-800'
                }`}>
                  <motion.div
                    animate={{ rotate: openSection === idx ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <ChevronDown className="w-6 h-6 stroke-[3]" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openSection === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-4 pb-8 md:px-10 overflow-x-auto">
                      <table className="w-full border-collapse table-fixed">
                        <thead>
                          <tr className="border-b-2 border-slate-300/30">
                            <th className="py-6 text-left font-mono text-[9px] md:text-[10px] text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">Feature Set</th>
                            <th className="py-6 text-center font-black text-slate-700 uppercase tracking-tighter md:tracking-tight w-16 md:w-32">
                              <span className="hidden md:inline">Zoho Books</span>
                              <span className="md:hidden text-[10px]">Zoho</span>
                            </th>
                            <th className="py-6 text-center font-black text-slate-700 uppercase tracking-tighter md:tracking-tight w-16 md:w-32">
                              <span className="hidden md:inline">Vyapar App</span>
                              <span className="md:hidden text-[10px]">Vyapar</span>
                            </th>
                            <th className="py-6 text-center font-black text-sky-500 uppercase tracking-tighter md:tracking-tight w-16 md:w-32">
                              <span className="hidden md:inline">KWIQBILL</span>
                              <span className="md:hidden text-[10px]">KWIQ</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.features.map((item, i) => (
                            <tr key={i} className="group border-b border-slate-300/10 hover:bg-sky-500/5 transition-colors">
                              <td className="py-4 md:py-5 text-slate-600 font-bold text-[11px] md:text-base leading-tight pr-2 break-words">{item.feature}</td>
                              <td className="py-5">
                                <div className="flex justify-center">{statusIcons[item.zoho]}</div>
                              </td>
                              <td className="py-5">
                                <div className="flex justify-center">{statusIcons[item.vyapar]}</div>
                              </td>
                              <td className="py-5 bg-sky-500/5">
                                <div className="flex justify-center">{statusIcons[item.kwiqbill]}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Honest Summary Section */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-10 bg-[#e0e5ec] rounded-[3rem] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] border-t border-l border-white/60">
            <h3 className="text-2xl font-black text-slate-800 uppercase mb-6">Zoho Books</h3>
            <p className="text-sm font-bold text-slate-500 leading-relaxed uppercase">
              A comprehensive cloud-based ERP solution. Mature, highly automated, and integrates well with the global Zoho ecosystem. Lacks native offline-first architecture and local data ownership.
            </p>
          </div>
          <div className="p-10 bg-[#e0e5ec] rounded-[3rem] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] border-t border-l border-white/60">
            <h3 className="text-2xl font-black text-slate-800 uppercase mb-6">Vyapar</h3>
            <p className="text-sm font-bold text-slate-500 leading-relaxed uppercase">
              Strongly focused on Indian MSMEs with excellent inventory and barcode support. Primarily a desktop application with sync capabilities. Lacks a robust web-first application and open-source accessibility.
            </p>
          </div>
          <div className="p-10 bg-[#e0e5ec] rounded-[3rem] shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] border-2 border-sky-500/20">
            <h3 className="text-2xl font-black text-sky-500 uppercase mb-6">KWIQBILL</h3>
            <p className="text-sm font-bold text-slate-600 leading-relaxed uppercase">
              Built on a modular, offline-first architecture. Offers complete data ownership and open-source transparency. Strong in core billing and cross-platform flexibility, but currently has gaps in advanced automation and template variety.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-32 text-center">
            <Link href="/contact" className="inline-block px-12 py-6 bg-slate-900 text-white font-black text-xl uppercase tracking-[0.2em] rounded-2xl shadow-xl hover:bg-sky-600 hover:-translate-y-1 transition-all">
              REQUEST A FEATURE
            </Link>
        </div>

      </div>
    </main>
  );
}

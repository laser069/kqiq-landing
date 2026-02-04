"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage(): React.JSX.Element {
  const lastUpdated = "February 2026";

  return (
    <div className="min-h-screen bg-[#e0e5ec] text-slate-800 selection:bg-sky-500/20 font-oswald overflow-x-hidden pt-32 pb-24 px-6 md:px-24">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto mb-20 space-y-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4"
        >
          <div className="h-1 w-12 bg-sky-500" />
          <span className="font-mono text-xs text-sky-500 font-black tracking-[0.4em] uppercase">Legal_Framework</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-slate-800 uppercase leading-none"
        >
          TERMS & <span className="text-sky-500">CONDITIONS</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 font-bold uppercase tracking-widest text-sm"
        >
          LAST UPDATED: {lastUpdated}
        </motion.p>
      </div>

      {/* CONTENT GRID */}
      <div className="max-w-4xl mx-auto space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 bg-[#e0e5ec] rounded-[3rem] shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] border-t border-l border-white/40 space-y-6"
        >
          <p className="text-xl md:text-2xl text-slate-600 font-bold leading-relaxed italic">
            &quot;Welcome to KwiqBill. By accessing or using this website or software, you agree to the following terms.&quot;
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: "1. About KwiqBill", 
              content: "KwiqBill is a free and open-source billing software developed and maintained by Zippy. It is provided to help individuals and organizations manage billing, invoicing, and related operations." 
            },
            { 
              title: "2. Open-Source License", 
              content: "KwiqBill is released under the Apache License 2.0. You are free to use, modify, distribute, and self-host for personal or commercial purposes, provided you comply with the license terms." 
            },
            { 
              title: "3. Use of Software", 
              content: "Use KwiqBill responsibly. Do not use for illegal activities, misrepresent as proprietary, remove copyright notices, or claim ownership of the original project." 
            },
            { 
              title: "4. No Warranty", 
              content: "KwiqBill is provided 'as is'. We don't guarantee the software will be error-free or meet all requirements. Users are responsible for data accuracy and backups." 
            },
            { 
              title: "5. Limitation of Liability", 
              content: "To the maximum extent permitted by law, Zippy and KwiqBill contributors are not liable for any damages, including data loss or financial loss. Use at your own risk." 
            },
            { 
              title: "6. Data & Privacy", 
              content: "Data is stored locally or in user-configured cloud services. We do not collect or sell data by default. Syncing services like Google Drive are user-controlled." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-[#e0e5ec] rounded-[2.5rem] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] border-t border-l border-white/40 space-y-4"
            >
              <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-bold leading-relaxed text-sm">{item.content}</p>
            </motion.div>
          ))}
        </div>

        {/* FINAL SECTIONS */}
        <div className="space-y-12 pt-12">
            {[
                { title: "7. Contributions", content: "By contributing code or designs, you agree they are licensed under Apache 2.0 and that you have the right to submit them." },
                { title: "8. Third-Party Services", content: "We are not responsible for the availability or behavior of third-party integrations like cloud storage or authentication." },
                { title: "9. Changes to Terms", content: "We may update these terms occasionally. Continued use of KwiqBill implies acceptance of the updated terms." }
            ].map((section, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="border-b border-slate-300/30 pb-8"
                >
                    <h3 className="text-3xl font-black text-slate-800 uppercase tracking-tight mb-4">{section.title}</h3>
                    <p className="text-slate-500 font-bold leading-relaxed max-w-2xl">{section.content}</p>
                </motion.div>
            ))}
        </div>

        {/* CONTACT SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-slate-950 rounded-[4rem] text-center space-y-8 shadow-2xl"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">HAVE QUESTIONS?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/contact" className="px-12 py-6 bg-sky-500 text-white font-black text-xl tracking-widest uppercase hover:bg-sky-400 transition-all rounded-3xl">
              CONTACT TEAM
            </Link>
            <div className="text-slate-400 font-mono text-xs tracking-widest uppercase">
              OR EMAIL: SUPPORT@KWIQBILL.IO
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

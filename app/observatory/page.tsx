"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// --- TYPES ---
interface Contributor {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  role: string;
  tag: string;
}

// --- DATA: ZILLING CORE CONTRIBUTORS ---
const contributors: Contributor[] = [
  {
    id: 1,
    title: "SHADOW ARCHITECT",
    subtitle: "C_CORE_01",
    image: "/app_dev_1.png",
    role: "Project Lead & Lead Developer",
    tag: "MAINTAINER",
  },
  {
    id: 2,
    title: "PIXEL VANGUARD",
    subtitle: "C_UI_99",
    image: "/app_dev_2.png",
    role: "Lead UI/UX Designer",
    tag: "DESIGN",
  },
  {
    id: 3,
    title: "DATA SENTINEL",
    subtitle: "C_DB_420",
    image: "/app_dev_3.png",
    role: "Backend & Sync Specialist",
    tag: "SECURITY",
  },
  {
    id: 4,
    title: "MESH OPERATOR",
    subtitle: "C_MOBILE_05",
    image: "/app_dev_4.png",
    role: "Mobile Cross-Platform Dev",
    tag: "PLATFORMS",
  },
  {
    id: 5,
    title: "SIGNAL ANALYST",
    subtitle: "C_QA_117",
    image: "/app_dev_5.png",
    role: "Principal QA & Community",
    tag: "COMMUNITY",
  },
];

export default function ObservatoryPage(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 selection:bg-sky-500/10">
      
      {/* 1. HERO SECTION - Laboratory Aesthetic */}
      <section className="relative h-screen w-full flex items-center px-12 md:px-24 overflow-hidden bg-[#e0e5ec]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/observatory_outer_space.png"
            alt="Zilling Observatory Backdrop"
            fill
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0e5ec] via-[#e0e5ec]/40 to-transparent" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>


        <div className="relative z-10 max-w-4xl space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[8rem] md:text-[14rem] font-schabo leading-[0.75] tracking-[-0.03em] text-slate-800 flex flex-col uppercase">
              <span className="block drop-shadow-[4px_6px_8px_rgba(0,0,0,0.05)]">CORE</span>
              <span className="block text-sky-500">CONTRIBUTORS</span>
            </h1>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 1 }}
             className="relative p-1 bg-[#e0e5ec] rounded-[2rem] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]"
          >
            <p className="max-w-xl p-8 text-slate-600 text-lg md:text-xl leading-relaxed tracking-tight font-medium italic">
              &quot;The Zilling Observatory honors the architects and community specialists who drive the open-source mission. Reviewing deployment telemetry and architectural contributions.&quot;
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-12 right-12 md:right-24 text-right space-y-2">
          <div className="font-mono text-[11px] tracking-[0.4em] text-slate-400 font-bold uppercase">
            CONTRIBUTOR LOGS / AUTO_VERIFIED
          </div>
          <div className="inline-block px-4 py-1 bg-white/50 border border-sky-200 rounded-sm font-mono text-[10px] tracking-[0.2em] text-sky-600 font-black uppercase shadow-sm">
            AUTH_STATIONS ONLINE
          </div>
        </div>
      </section>

      {/* 2. FIELDWORK ROUTINE - Contributor Cards */}
      <section ref={containerRef} className="relative h-[400vh] bg-[#f8fafc]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          <div className="absolute top-12 md:top-24 left-12 md:left-24 right-12 md:right-24 z-20">
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-5xl md:text-7xl font-schabo tracking-wider text-slate-800 uppercase">Archive Routine</h2>
              <span className="text-5xl md:text-7xl font-schabo tracking-wider text-slate-200">SPECIALISTS</span>
            </div>
          </div>

          <HorizontalScrollContainer scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* 3. DATA NEXUS TRANSMISSIONS - Transition */}
      <section className="relative min-h-screen bg-[#e0e5ec] flex flex-col items-center justify-center px-12 py-32 overflow-hidden border-t-[1.5px] border-white/70">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/data_nexus_hub.png" alt="Zilling Nexus" fill className="object-cover grayscale" />
        </div>

        <div className="relative z-10 w-full max-w-6xl space-y-24">
          <div className="space-y-6 text-center">
            <h2 className="text-7xl md:text-9xl font-schabo tracking-tight text-slate-800 drop-shadow-sm">COMMUNITY ACTIVE</h2>
            <div className="h-[2px] w-24 bg-sky-500 mx-auto" />
            <p className="max-w-2xl mx-auto text-slate-500 font-mono text-xs tracking-[0.4em] uppercase font-bold">
              ZILLING OSS // BARRIER_BYPASS_ENGAGED
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "SYNCING", title: "OPEN REPO", desc: "Zilling is open to everyone. Fork, contribute, or self-host to build a better billing ecosystem." },
              { label: "ACTIVE", title: "PIXEL PUSH", desc: "Our design system is modular and open for UI/UX improvements from global contributors." },
              { label: "REQUIRED", title: "CODE VERIFY", desc: "Report bugs, suggest features, or contribute code to the Zilling open-source repository." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-[#e0e5ec] rounded-[2.5rem] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] border-t border-white/40 space-y-6 group"
              >
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                   <span className="font-mono text-[10px] text-slate-400 font-black tracking-widest uppercase">{item.label}</span>
                </div>
                <h4 className="text-3xl font-schabo tracking-wide text-slate-800">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-bold italic">{item.desc}</p>
                <div className="h-[1.5px] w-full bg-slate-200/50 group-hover:bg-sky-500/50 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center pt-12">
            <Link href="/expedition" className="px-12 py-6 bg-[#e0e5ec] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] active:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] text-slate-800 font-oswald font-black text-xl tracking-[0.2em] uppercase hover:text-sky-500 transition-all rounded-2xl">
              GO TO EXPEDITION
            </Link>
            <Link href="/contact" className="px-12 py-6 bg-slate-900 text-white font-oswald font-black text-xl tracking-[0.2em] uppercase hover:bg-sky-600 transition-all rounded-2xl shadow-xl">
              CONTACT DEVELOPER
            </Link>
          </div>
        </div>

        <div className="absolute -bottom-10 -left-10 font-oswald text-[15rem] font-black text-slate-400/10 select-none tracking-tighter uppercase">
            Monitor
        </div>
      </section>
    </div>
  );
}

function HorizontalScrollContainer({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <motion.div style={{ x }} className="flex gap-16 px-24 md:px-48">
      {contributors.map((con, index) => (
        <ContributorCard
          key={con.id}
          contributor={con}
          index={index}
          progress={scrollYProgress}
        />
      ))}
    </motion.div>
  );
}

function ContributorCard({
  contributor,
  index,
  progress,
}: {
  contributor: Contributor;
  index: number;
  progress: MotionValue<number>;
}) {
  const imageY = useTransform(progress, [0, 1], ["0%", "-25%"]);

  return (
    <motion.div
      className="relative shrink-0 w-[85vw] md:w-[650px] aspect-[1.5/1] bg-[#e0e5ec] rounded-[3.5rem] p-1 shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] overflow-hidden group"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-full h-full rounded-[3rem] overflow-hidden flex flex-col">
        <motion.div style={{ y: imageY }} className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-all duration-1000">
          <Image
            src={contributor.image}
            alt={contributor.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#e0e5ec] via-[#e0e5ec]/20 to-transparent" />
        </motion.div>

        <div className="relative z-10 p-12 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="px-5 py-2 rounded-full bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">
               <span className="font-mono text-[11px] text-slate-400 font-black tracking-widest">0{index + 1}</span>
            </div>
            <span className="font-mono text-[10px] text-sky-500 font-bold tracking-[0.3em] uppercase bg-white/40 px-3 py-1 rounded-sm shadow-sm">
              {contributor.tag}
            </span>
          </div>

          <div className="space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#e0e5ec] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] flex items-center justify-center text-sky-500 group-hover:text-slate-800 transition-colors">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <div className="space-y-2">
              <h3 className="text-6xl md:text-7xl font-schabo tracking-tight leading-none text-slate-800">
                {contributor.title}
              </h3>
              <div className="flex justify-between items-end border-t border-slate-300/30 pt-4">
                <p className="font-oswald text-xl text-sky-500 font-bold uppercase tracking-widest">
                  {contributor.role}
                </p>
                <div className="text-right">
                   <p className="font-mono text-[9px] text-slate-400 font-black tracking-widest uppercase">ID_LABEL</p>
                   <span className="font-mono text-[11px] text-slate-500 font-bold italic">
                    {contributor.subtitle}
                   </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

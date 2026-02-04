"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "INDEX", href: "/" },
  { label: "OBSERVATORY", href: "/observatory" },
  { label: "MISSION", href: "/expedition" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-center pt-4 bg-transparent overflow-hidden">
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="chamfered-trapezoid" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 L 1 0 L 0.96 1 L 0.04 1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* The Bar: Drops from the top */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          damping: 20, 
          stiffness: 120,
          duration: 0.6 
        }}
        className="
          relative flex items-center justify-center
          bg-white/70 backdrop-blur-xl 
          border-b border-sky-400/20
          shadow-[0_8px_32px_rgba(56,189,248,0.1)]
          px-14 py-3 min-h-[52px]
        "
        style={{ clipPath: "url(#chamfered-trapezoid)" }}
      >
        {/* Unified Menu Container: All items spawn together */}
        <motion.div 
          className="flex items-center gap-10"
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ 
            delay: 0.5, // Waits for the bar to drop first
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[14px] font-schabo tracking-[0.15em] transition-colors duration-300 ${
                  isActive ? "text-sky-600 font-bold" : "text-slate-500 hover:text-sky-400"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span 
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sky-500 rounded-full" 
                  />
                )}
              </Link>
            );
          })}
        </motion.div>
        
        {/* Horizontal Scan Line effect */}
        <motion.div 
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
          className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-40"
        />
      </motion.div>
    </nav>
  );
}
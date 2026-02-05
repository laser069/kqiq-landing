"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "INDEX", href: "/" },
  { label: "OBSERVATORY", href: "/observatory" },
  { label: "MISSION", href: "/expedition" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar(): React.JSX.Element {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className="w-full flex justify-center pt-4 bg-transparent">
      {/* Desktop Chamfered Bar (Hidden on Mobile) */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 120,
          duration: 0.6
        }}
        className="
          hidden md:flex relative items-center justify-center
          bg-white/70 backdrop-blur-xl 
          border-b border-sky-400/20
          shadow-[0_8px_32px_rgba(56,189,248,0.1)]
          px-14 py-3 min-h-[52px]
        "
        style={{ clipPath: "polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)" }}
      >
        <motion.div
          className="flex items-center gap-10"
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[14px] font-oswald font-bold tracking-[0.15em] transition-colors duration-300 ${isActive ? "text-sky-600" : "text-slate-500 hover:text-sky-400"
                  }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-sky-500 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </motion.div>

        {/* Scan Line effect */}
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 1.2, delay: 0.4, repeat: Infinity, repeatDelay: 5 }}
          className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-40"
        />
      </motion.div>

      {/* Mobile Toggle Button (Visible on Mobile) */}
      <div className="md:hidden flex justify-between w-full px-6 items-center">
        <Link href="/" className="font-oswald font-black text-xl tracking-tighter text-slate-800">
          KWIQ<span className="text-sky-500">BILL</span>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-slate-800 z-[1001]"
        >
          <div className={`w-6 h-0.5 bg-slate-800 mb-1.5 transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-slate-800 mb-1.5 transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-slate-800 transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#e0e5ec] z-[1000] flex flex-col pt-32 px-12"
          >
            <div className="space-y-8">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-5xl font-oswald font-black uppercase tracking-tighter block ${pathname === item.href ? "text-sky-500" : "text-slate-800"
                      }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-12">
              <p className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">
                System_Status: Online // 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

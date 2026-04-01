import React from "react";
import Link from "next/link";

/**
 * Dedicated, ultra-lightweight layout for legal pages.
 * No client-side JS dependency, no framer-motion, no hydration-heavy components.
 * Optimized for Google OAuth verification and pure HTML accessibility.
 */
export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#e0e5ec] text-slate-900 font-sans selection:bg-sky-500/30">
      {/* Static Header - No JS Dependency */}
      <header className="w-full py-6 px-6 border-b border-white/20 bg-white/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-oswald font-black text-2xl tracking-tighter text-slate-800 hover:text-sky-600 transition-colors">
            KWIQ<span className="text-sky-500">BILL</span>
          </Link>
          <Link 
            href="/" 
            className="text-xs font-black tracking-widest text-slate-500 hover:text-slate-900 uppercase border-b-2 border-transparent hover:border-sky-500 transition-all pb-1"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Static Footer - No JS Dependency */}
      <footer className="w-full py-12 px-6 border-t border-white/20 bg-white/20 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-oswald font-black text-xl tracking-tighter text-slate-800">
              KWIQ<span className="text-sky-500">BILL</span>
            </p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              &copy; 2026 Zippy Digital Solutions
            </p>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-xs font-bold text-slate-500 hover:text-sky-600 transition-colors uppercase tracking-widest">Privacy</Link>
            <Link href="/terms" className="text-xs font-bold text-slate-500 hover:text-sky-600 transition-colors uppercase tracking-widest">Terms</Link>
            <Link href="/contact" className="text-xs font-bold text-slate-500 hover:text-sky-600 transition-colors uppercase tracking-widest">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

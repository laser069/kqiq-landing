"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LayoutTemplate, X, ZoomIn } from "lucide-react";

const invoices = [
    { id: 1, name: "Classic Template", src: "/invoice1.png" },
    { id: 2, name: "Modern Template", src: "/invoice2.png" },
    { id: 3, name: "Compact Template", src: "/invoice3.png" },
    { id: 4, name: "Thermal Template", src: "/invoice4.png" },
    { id: 5, name: "GST Detailed", src: "/invoice5.png" },
];

export default function TemplatesClient() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-[#e0e5ec] pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 md:px-12 font-oswald overflow-x-hidden">
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
                            <span className="font-mono text-[10px] md:text-xs font-black tracking-[0.4em] text-slate-400 uppercase">Gallery_Viewer // Ver. 1.0</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] uppercase mb-6 md:mb-8 tracking-tighter">
                            Professional <br /> Invoice <span className="text-sky-500">Templates</span>
                        </h1>
                        <p className="max-w-2xl text-sm md:text-xl text-slate-500 font-bold italic leading-relaxed uppercase border-l-2 border-sky-500/30 pl-4 md:pl-6">
                            Browse our fully customizable, GST-compliant invoice formats designed specifically for Indian businesses. Built for standard A4, A5, and thermal printers.
                        </p>
                    </motion.div>
                </section>

                {/* Templates Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {invoices.map((inv, idx) => (
                        <motion.div
                            key={inv.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="group cursor-pointer bg-[#e0e5ec] p-4 md:p-6 rounded-[2rem] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] border-t border-l border-white/60 hover:shadow-[10px_10px_20px_rgba(56,189,248,0.1)] transition-all duration-300"
                            onClick={() => setSelectedImage(inv.src)}
                        >
                            <div className="relative w-full aspect-[1/1.4] bg-white rounded-xl overflow-hidden shadow-inner border border-slate-200">
                                <Image
                                    src={inv.src}
                                    alt={inv.name}
                                    fill
                                    className="object-contain p-2 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/90 shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center text-sky-500">
                                        <ZoomIn className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center gap-3 px-2">
                                <LayoutTemplate className="w-5 h-5 text-slate-400" />
                                <h3 className="font-black text-lg text-slate-800 uppercase tracking-tight">{inv.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Modal Viewer */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 md:p-12"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(null);
                                }}
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-4xl max-h-full rounded-2xl overflow-hidden shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage}
                                    alt="Invoice Preview"
                                    className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom CTA */}
                <div className="mt-32 text-center">
                    <Link href="/resources" className="inline-block px-12 py-6 bg-slate-900 text-white font-black text-xl uppercase tracking-[0.2em] rounded-2xl shadow-xl hover:bg-sky-600 hover:-translate-y-1 transition-all">
                        BACK TO RESOURCES
                    </Link>
                </div>

            </div>
        </main>
    );
}

export const dynamic = "force-static";

import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Best GST Billing Software in India | KWIQ BILLING",
    template: "%s | KWIQ BILLING"
  },
  description: "KWIQ BILLING is the next-generation GST billing and revenue infrastructure for Indian businesses. Offline-first, secure, and multi-platform.",
  keywords: ["gst billing software", "best billing software in india", "free gst billing app", "offline billing software", "inventory management", "pos billing software india"],
  authors: [{ name: "KWIQ BILLING Team" }],
  creator: "KWIQ BILLING",
  publisher: "KWIQ BILLING",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "KWIQ BILLING",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
 metadataBase: new URL("https://kwiq.zippydigitalsolutions.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best GST Billing Software in India | KWIQ BILLING",
    description: "Next-generation revenue infrastructure designed for Indian SMBs. Offline-first, secure, and multi-platform.",
    url: "https://kwiq.zippydigitalsolutions.in",
    siteName: "KWIQ BILLING",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KWIQ BILLING Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KWIQ BILLING | Best GST Billing Software",
    description: "Next-generation billing system for Indian businesses. Secure, offline-first, and POS-ready.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Business",
 verification: {
  google: "1X8e-RTeYB22ybUIHkwUIMpC_U8u_S62ENiFcQO_xmg",
},
};

const schabo = localFont({
  src: "../public/fonts/SCHABO-Condensed.otf",
  variable: "--font-schabo",
});

import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`light ${schabo.variable} ${oswald.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-900">

        {/* Changed 'absolute' to 'fixed' to lock it to the top of the viewport */}
        <header className="fixed top-0 z-[100] w-full bg-transparent pointer-events-none">
          <div className="pointer-events-auto">
            <Navbar />
          </div>
        </header>

        <main className="flex-1 pt-0">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

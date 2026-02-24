import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


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
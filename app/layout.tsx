import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const schabo = localFont({
  src: "../public/fonts/SCHABO-Condensed.otf",
  variable: "--font-schabo",
});

const oswald = localFont({
  src: [
    { path: "../public/fonts/Oswald-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/Oswald-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Oswald-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Oswald-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Oswald-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Oswald-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-oswald",
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
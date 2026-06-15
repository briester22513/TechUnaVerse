import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatCTA from "@/components/FloatCTA";
import Stars from "@/components/Stars";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechUnaVerse — Building Legacies Through Innovation",
  description:
    "AI consulting, web development, business automation, and custom creative products. TechUnaVerse is a multi-division ecosystem empowering creators, builders, and entrepreneurs.",
  keywords: ["AI consulting", "web development", "business automation", "TechUnaVerse", "Virginia"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-navy text-white min-h-screen">
        <Stars />
        <Nav />
        <main className="relative z-10">{children}</main>
        <Footer />
        <FloatCTA />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
 weight: ["400", "500"],
 display: "swap",
});

const bebas = Bebas_Neue({
 subsets: ["latin"],
 variable: "--font-bebas",
 weight: "400",
 display: "swap",
});

export const metadata: Metadata = {
 title: "Vishi Agarwal | Product Owner & Business Analyst",
 description:
 "Portfolio of Vishi Agarwal Product Owner & Business Analyst with 6+ years delivering BFSI digital banking solutions with $10M+ commercial impact.",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
 <body className="font-sans">
  <Navbar />
  {children}
 </body>
 </html>
 );
}

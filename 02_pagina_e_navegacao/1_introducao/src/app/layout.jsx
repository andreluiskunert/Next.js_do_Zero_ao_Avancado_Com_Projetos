import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Projeto em next_2026",
  description: "Projeto ALKTECNO",
};
// Aula05_Layout
export default function home({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Header />
      
      <h1> Estou no layoute</h1>
           {/* Aula06_Components */}
        <main>
          {children}</main>

        <Footer />
      </body>
    </html>
  );
}
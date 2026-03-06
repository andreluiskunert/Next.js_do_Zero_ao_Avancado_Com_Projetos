import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SobrePage from "./sobre/page";

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

export default function home({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Header />
      
        
        <Link href="/home/desenvolvedor-full-stack/Home/Cursos_Udemy/Next.js_do_Zero_ao_Avancado_Com_Projetos/Next.js_do_Zero_ao_Avancado_Com_Projetos/02_pagina_e_navegacao/1_introducao/src/app/page.jsx"><h1>Home</h1></Link>
        <Link href="/sobre">Sobre</Link>
        

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
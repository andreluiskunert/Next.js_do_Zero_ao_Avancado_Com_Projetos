import React from 'react';
import Link from "next/link";

const Categorypage = () => {
   
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    <h1>Temos Roupas</h1>
    <Link href="/produtos/categorias/roupas/camisa_gola_v"> Camisa Gola V</Link>
    <Link href="/"> home</Link> <br />
      </main>
    </div>
  )
}

export default Categorypage

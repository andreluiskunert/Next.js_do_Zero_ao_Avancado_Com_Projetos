import React from 'react';
import Link from "next/link";


const SobrePage = () => {
  return (
     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
     <h1> Aqui teremos um novo projeto em Next</h1>
     <h2>Pagina sobre </h2>
      <Link href="/"> Home</Link>
      </main>
    </div>
  )
}

export default SobrePage

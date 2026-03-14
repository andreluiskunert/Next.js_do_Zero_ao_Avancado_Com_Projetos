import React from 'react';
import Link from "next/link";

const Productpage = ({params}) => {
    const produto = params.produto;
  return (
     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    <h1>Temos Roupas</h1>
    <h2>Vendo produto {produto}</h2>
    <Link href="/"> home</Link> <br />
      </main>
    </div>
  )
}

export default Productpage;

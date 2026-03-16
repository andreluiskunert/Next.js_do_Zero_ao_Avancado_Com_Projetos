import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
   
     <h1> Aqui teremos um novo projeto em Next</h1>
     {/* 1ª Aula_ Navegações*/}
     <h2>Home</h2>
     <Link href="/sobre">Sobre</Link>
      {/* 2ª Aula_Paginas_Dinamicas */}
      <Link href='/posts'>Posts</Link>
      {/* 3ª aula_parametros na URL */}
       <Link href="/exemplo">Pagina como Parametros </Link>
       {/* 4ª Aula_Nestad Routes */}
       <Link href="/produtos/categorias/roupas"> Ir a categoria de Roupas</Link>
       {/* 7ª Aula_Nested layout */}
       <Link href="/dashboard"> Ir para dash</Link>
       
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <marquee>Em breve teremos novidades!</marquee>

        {/* Aula01_Navegacao */}
        <h1>Home</h1>
        <Link href="/sobre">Sobre</Link>

        {/* Aula02_Dados dinâmicos */}
        <h1>Acessar posts</h1>
        <Link href="/posts">Posts</Link>
      </main>
    </div>
  );
}
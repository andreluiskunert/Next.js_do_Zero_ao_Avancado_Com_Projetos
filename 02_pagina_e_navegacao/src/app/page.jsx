import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <main className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow">
        <marquee>Em breve teremos novidades!</marquee>

        {/* Aula01_Navegacao */}
        <h1>Home</h1>
        <Link href="/sobre">Sobre</Link>
   
        {/* Aula02_Dados dinâmicos */}
        <h1>Acessar posts</h1>
        <Link href="/posts">Posts</Link> <br />
        <hr />
        <body>
           aqui teremos corpo

        </body>
        <hr />
        <footer>
          <h1>Desenvolvido por ALKTECNO</h1>
        </footer>
      </main>
    </div>
  );
}
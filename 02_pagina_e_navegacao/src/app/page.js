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
         {/* Aula03_parametros na URL */}
        <Link href="/exemplo?parametro=valor">Página com Parametro</Link> <br></br>
        {/* Aula04_nested routes */}
        <Link href="/products/categorias/roupas">Ir a categoria de Roupas </Link>
        <hr />
          
           <h1> aqui teremos corpo</h1>

       
        <hr />
        <footer>
          <h1>Desenvolvido por ALKTECNO</h1>
        </footer>
      </main>
    </div>
  );
}
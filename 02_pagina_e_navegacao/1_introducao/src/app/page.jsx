import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
     {/* Aula 01ª_navegacao */}
     <h1>Home</h1> <br />
     <Link href="/sobre"> Sobre</Link>
     {/* Aula 02ª_dados dinamicos */}
     <h1>Acessar posts</h1>
     <Link href="/posts"> acessando..</Link>
     {/* Aula 03_Params */}
     <Link  href="/exemplo?parametro=ABC">Paginas com Parametros</Link>

    </main>
  );
}
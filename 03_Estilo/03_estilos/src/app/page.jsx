import FooterPage from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      
      <main className="flex w-full h-full flex-col items-center justify-center bg-white dark:bg-black">
        <marquee>
          Em breve teremos aqui... uma página de estilização
        </marquee>
     {/* 1ª CSS Global  */}
      <h1>Meu titulo</h1>
  <FooterPage/>
      </main>
     
    </div>
  );
}
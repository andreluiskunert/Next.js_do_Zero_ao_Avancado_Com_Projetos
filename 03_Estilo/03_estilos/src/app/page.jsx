import FooterPage from "./components/Footer";
import MyComponent from "./components/MyComponent";
import Container from "./components/Container";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white dark:bg-black">
      <main className="flex flex-1 flex-col items-center justify-center gap-4">
        <marquee>
          Em breve teremos aqui... uma página de estilização
        </marquee>
         {/* 1 CSS Global */}
        <h1>Meu título</h1>
         {/* 2 CSS - Modules */}
        <h2 className={styles.heading_module}>Meu CSS Modules</h2>
        <div className={styles.container}>
            <p>Testando CSS module</p>
        </div>
        {/* 3 TailWindf  */}
         <MyComponent></MyComponent>
         {/* 4 Sass */}
         <Container></Container>
      </main>
     
      <FooterPage />
    </div>
  );
}
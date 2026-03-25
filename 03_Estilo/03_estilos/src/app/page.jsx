import FooterPage from "./components/Footer";
import MyComponent from "./components/MyComponent";
import Container from "./components/Container";
import styles from "./page.module.css";
import Button from "./components/Button";
import CustomButton from "./components/CustomButton";

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
         {/* 5 SASS com CSS module _Revisão_Segunda-feira,23/03/2026_De noite*/}
         <Button/>
         {/* 6 Styled components */}
         <CustomButton>Acesar</CustomButton>
      </main>
     
      <FooterPage />
    </div>
  );
}
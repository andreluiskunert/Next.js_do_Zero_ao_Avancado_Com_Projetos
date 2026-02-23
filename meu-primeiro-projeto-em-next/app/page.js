import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <marquee> Em breve minha aplicação com Next.js e Tailwind CSS!</marquee>
        <h1 className={styles.title}>Meu Primeiro Projeto em Next.js</h1>
        <p className={styles.description}>
          
          Bem-vindo ao meu primeiro projeto em Next.js! Este é um exemplo de
          página inicial.
          
        </p>
        <h2> Explica sobre aplicações Next.js  </h2>
          <marquee> Em breve minha aplicação com Next.js e Tailwind CSS!</marquee>
      </main>
    </div>
  );
}

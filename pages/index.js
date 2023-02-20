import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a
            href={"https://github.com/FujiwaraChoki/ai-collection"}
            target={"_blank"}
          >
            AI-Collection!
          </a>
        </h1>

        <div className={styles.grid}>
          <Link href={"/chatgpt"} className={styles.card}>
            <h2>ChatGPT &rarr;</h2>
            <p>Use the AI-Chatbot that took the world by storm!</p>
          </Link>

          <Link href={"/dalle-2"} className={styles.card}>
            <h2>Dalle 2 &rarr;</h2>
            <p>Create prize-winning images and art!</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/FujiwaraChoki/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coded with ❤️ by &nbsp;
          <span className={styles.companyNameInFooter}>FujiwaraChoki</span>
        </a>
      </footer>
    </div>
  );
}

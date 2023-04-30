import styles from "src/styles/Home.module.scss";
import { Inter } from "next/font/google";
import { Header } from "src/components/Header/header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Main />
      <Footer />
    </main>
  );
}

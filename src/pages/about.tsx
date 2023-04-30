import styles from "src/styles/Home.module.scss";
import { Inter } from "next/font/google";
import { Header } from "src/components/Header/header";
import { Footer } from "src/components/Footer";
import { ContentsAbout } from "src/components/ContentsAbout";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <ContentsAbout />
        <Footer />
      </main>
    </>
  );
}

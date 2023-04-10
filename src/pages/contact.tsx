import styles from "src/styles/Home.module.scss";
import { Inter } from "next/font/google";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { Contents } from "src/components/ContentsAbout";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Contents />
        <Footer />
      </main>
    </>
  );
}

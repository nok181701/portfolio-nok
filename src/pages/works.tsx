import styles from "src/styles/Home.module.scss";
import { Inter } from "next/font/google";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { ContentsWorks } from "src/components/ContentsWorks";

const inter = Inter({ subsets: ["latin"] });

export default function Works() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <ContentsWorks />
        <Footer />
      </main>
    </>
  );
}

import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Main from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Main />
        <Footer />
      </main>
    </>
  );
}

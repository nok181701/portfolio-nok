import styles from "src/styles/Home.module.scss";
import { Inter } from "next/font/google";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { ContentsSkill } from "src/components/ContentsSkill/ContentsSkill";

const inter = Inter({ subsets: ["latin"] });

export default function Skill() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <ContentsSkill />
        <Footer />
      </main>
    </>
  );
}

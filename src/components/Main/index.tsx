import styles from "src/components/Main/Main.module.scss";
import { Inter } from "next/font/google";
import { Animation } from "./Animation";

const inter = Inter({ subsets: ["latin"] });

export function Main() {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>portfolio</h1>
        <Animation />
      </div>
    </>
  );
}

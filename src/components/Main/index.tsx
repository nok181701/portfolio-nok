import styles from "src/components/Main/Main.module.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function Main() {
  return <div className={styles.center}></div>;
}

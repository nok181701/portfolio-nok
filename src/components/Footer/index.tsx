import styles from "src/components/Footer/Footer.module.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.text}>Thank you for coming!</p>
        <p className={styles.text}>©2023 Naoki</p>
      </footer>
    </>
  );
}

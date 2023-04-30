import styles from "src/components/Header/Header.module.scss";
import Link from "next/link";
import { Inter } from "next/font/google";
import { HumbergerMenu } from "./HumbergerMenu/humbergermenu";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <header className={styles.description}>
      <ul>
        <div>
          <HumbergerMenu title="" />
        </div>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/works">Works</Link>
        </li>
      </ul>
    </header>
  );
}

import styles from "src/components/Header/Header.module.scss";
import Link from "next/link";
import { Inter } from "next/font/google";
import { AccountMenu } from "./AccountsMenu";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <header className={styles.description}>
      <ul>
        <div>
          <AccountMenu />
        </div>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/skill">Skill</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}

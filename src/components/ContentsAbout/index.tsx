import styles from "src/components/ContentsAbout/Contents.module.scss";
import Image from "next/image";
import { CustomizedTimeline } from "src/components/ContentsAbout/CustomizedTimeline/CustomizedTimeline";

export function ContentsAbout() {
  return (
    <>
      <h2 className={styles.title}>私について</h2>
      <Image
        src="/user-3.jpg"
        width={150}
        height={150}
        alt="Iwai Naoki"
        className={styles.img}
      />
      <ul className={styles.info}>
        <li className={styles.row}>
          名前：<span>祝井直樹</span>
        </li>
        <li className={styles.row}>
          年齢：<span>25</span>
        </li>
        <li>
          Gmail:<span>nok181701@gmail.com</span>
        </li>
      </ul>

      <CustomizedTimeline />
    </>
  );
}

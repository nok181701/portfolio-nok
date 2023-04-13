import styles from "src/components/ContentsSkill/ContentsSkill.module.scss";
import Image from "next/image";
import { MultiActionAreaCard } from "src/components/ContentsWorks/MultiActionAreaCard/MultiActionAreaCard";

export function ContentsWorks() {
  return (
    <>
      <h2 className={styles.title}>作品について</h2>
      <Image
        src="/user-3.jpg"
        width={150}
        height={150}
        alt="Iwai Naoki"
        className={styles.img}
      />
      <MultiActionAreaCard />
    </>
  );
}

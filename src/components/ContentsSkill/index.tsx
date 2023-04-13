import styles from "src/components/ContentsSkill/ContentsSkill.module.scss";
import Image from "next/image";
import { ActionAreaCard } from "src/components/ContentsSkill/ActionAreaCard/ActionAreaCard";

export function ContentsSkill() {
  return (
    <>
      <h2 className={styles.title}>スキルについて</h2>
      <Image
        src="/user-3.jpg"
        width={150}
        height={150}
        alt="Iwai Naoki"
        className={styles.img}
      />
      <ActionAreaCard />
    </>
  );
}

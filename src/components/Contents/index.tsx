import styles from "src/components/Contents/Contents.module.scss";
import { Inter } from "next/font/google";
import { Avatar } from "@mui/material";
import { CustomizedTimeline } from "src/components/Contents/CustomizedTimeline/CustomizedTimeline";

const inter = Inter({ subsets: ["latin"] });

export function Contents() {
  return (
    <>
      <h2 className={styles.title}>私について</h2>
      <div></div>
      <Avatar alt="Iwai Naoki" src="./user-3.jpg" className={styles.icon} />
      <CustomizedTimeline />
    </>
  );
}

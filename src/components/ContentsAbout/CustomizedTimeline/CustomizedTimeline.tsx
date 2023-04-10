import * as React from "react";
import styles from "src/components/ContentsAbout/CustomizedTimeline/CustomizedTimeline.module.scss";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WatchIcon from "@mui/icons-material/Watch";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";

export function CustomizedTimeline() {
  return (
    <Timeline position="alternate" className={styles.timeline}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <p className={styles.theme}>武蔵大学</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolIcon sx={{ width: 35, height: 35 }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }} className={styles.text}>
          <Typography variant="h6" component="span">
            大学を卒業
          </Typography>
          <Typography className={styles.text}>
            学部は社会学を専攻。卒論ではポケモンGoの集まり（相互行為のパターン）を研究しました。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <p className={styles.theme}>株式会社共和コーポレーション</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <BusinessCenterIcon sx={{ width: 35, height: 35 }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            営業職
          </Typography>
          <Typography>
            営業職に就職ゲームセンターの総合職に就職しました。店舗運営を経験したのち、筐体を販売する営業をしていました。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <p className={styles.theme}>株式会社ユーズカンパニー</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <WatchIcon sx={{ width: 35, height: 35 }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            ECサイト
          </Typography>
          <Typography>
            大学で趣味だったプログラミングを仕事にしたく時計のECサイトに転職。楽天市場を担当しており、LPやバナーの作成・メルマガの運営を行いました。
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <p className={styles.theme}>株式会社ウェブエッジ</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <LaptopChromebookIcon sx={{ width: 35, height: 35 }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            エンジニア
          </Typography>
          <Typography>
            プログラミング寄りの業務に携わりたいと思いSESとしてフロントエンジニアに転向。今後もさまざまな現場で活躍します。
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

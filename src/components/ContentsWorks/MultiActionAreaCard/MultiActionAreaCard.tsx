import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "src/components/ContentsWorks/MultiActionAreaCard/MultiActionAreaCard.module.scss";
import { SimpleAccordionSimpleAccordion } from "src/components/ContentsWorks/MultiActionAreaCard/SimpleAccordion/SimpleAccordion";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

export function MultiActionAreaCard() {
  return (
    <Card className={styles.card} sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/portfolio.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Portfolio
          </Typography>
          <Link href="https://github.com/nok181701/portfolio-nok">
            <GitHubIcon
              className={styles.icon}
              sx={{ width: 35, height: 35 }}
            />
          </Link>
          <Typography variant="body2" color="text.secondary">
            Reactを使ってポートフォリオを制作いたしました。まだまだ簡潔に記述できる部分があるので定期的にリファクタリングしていこうかなと思います。
          </Typography>
        </CardContent>
        <SimpleAccordionSimpleAccordion />
      </CardActionArea>
    </Card>
  );
}

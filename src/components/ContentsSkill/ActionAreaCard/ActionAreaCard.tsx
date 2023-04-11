import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "src/components/ContentsSkill/ActionAreaCard/ActionAreaCard.module.scss";
import { CardActionArea, Rating } from "@mui/material";

export function ActionAreaCard() {
  return (
    <div className={styles.cardwrapper}>
      <Card className={styles.card} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia className={styles.icon}>
            <Image src="/react.png" width={200} height={200} alt="Iwai Naoki" />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
              <Rating
                name="rating-read"
                defaultValue={3}
                className={styles.rate}
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              こちらのポートフォリオはReactで作っています。
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={styles.card} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia className={styles.icon}>
            <Image
              src="/typescript.png"
              width={200}
              height={200}
              alt="Iwai Naoki"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              TypeScript
              <Rating
                name="rating-read"
                defaultValue={3}
                className={styles.rate}
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ああああああああああああああああああああああああああああああああああああ
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={styles.card} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia className={styles.icon}>
            <Image
              src="/nextjs.png"
              width={200}
              height={200}
              alt="Iwai Naoki"
              className={styles.nextjs}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Next.js
              <Rating
                name="rating-read"
                defaultValue={3}
                className={styles.rate}
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ああああああああああああああああああああああああああああああああああああ
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={styles.card} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia className={styles.icon}>
            <Image src="/sass.png" width={200} height={200} alt="Iwai Naoki" />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sass
              <Rating
                name="rating-read"
                defaultValue={4}
                className={styles.rate}
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ああああああああああああああああああああああああああああああああああああ
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={styles.card} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia className={styles.icon}>
            <Image
              src="/javascript.png"
              width={200}
              height={200}
              alt="Iwai Naoki"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              JavaScript
              <Rating
                name="rating-read"
                defaultValue={4}
                className={styles.rate}
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ああああああああああああああああああああああああああああああああああああ
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={styles.card} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia className={styles.icon}>
            <Image
              src="/github.png"
              width={200}
              height={200}
              alt="Iwai Naoki"
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              GitHub
              <Rating
                name="rating-read"
                defaultValue={4}
                className={styles.rate}
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ああああああああああああああああああああああああああああああああああああ
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

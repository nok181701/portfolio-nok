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
            <Typography variant="h5" component="div">
              React
            </Typography>
            <Rating
              name="rating-read"
              defaultValue={3}
              className={styles.rate}
            />
            <Typography variant="body2" color="text.secondary">
              直近の現場で少し触りました。こちらのポートフォリオはReactを使用しています。
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
            <Typography variant="h5" component="div">
              TypeScript
            </Typography>
            <Rating
              name="rating-read"
              defaultValue={3}
              className={styles.rate}
            />
            <Typography variant="body2" color="text.secondary">
              「記述長くなるな…」と思っていましたが、とはいえ型付けの素晴らしさに感動しました。今後も勉強したいと思います。
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
            <Typography variant="h5" component="div">
              Next.js
            </Typography>
            <Rating
              name="rating-read"
              defaultValue={3}
              className={styles.rate}
            />
            <Typography variant="body2" color="text.secondary">
              こちらもポートフォリオで使用。Zero Configや File-system
              Routingの恩恵でスムーズにつくれると思い、こちらを採用しています。
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
            <Typography variant="h5" component="div">
              Sass
            </Typography>
            <Rating
              name="rating-read"
              defaultValue={4}
              className={styles.rate}
            />
            <Typography variant="body2" color="text.secondary">
              CSSは必ずSassに変換してから使っています。（Tailwind
              CSSもいずれ学ぶ予定…！）
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
            <Typography variant="h5" component="div">
              JavaScript
            </Typography>
            <Rating
              name="rating-read"
              defaultValue={4}
              className={styles.rate}
            />
            <Typography variant="body2" color="text.secondary">
              学生時代から実務まで使用してきましたので割と自信があります。
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
            <Typography variant="h5" component="div">
              GitHub
            </Typography>
            <Rating
              name="rating-read"
              defaultValue={4}
              className={styles.rate}
            />
            <Typography variant="body2" color="text.secondary">
              こちらも個人から実務まで使用。エンジニアにとって必須ですね。
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

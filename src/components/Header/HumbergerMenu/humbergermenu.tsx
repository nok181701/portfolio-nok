import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Menu } from "./Menu/menu";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./header.module.scss";
import Link from "next/link";

type Props = {
  title: string;
  scroll?: string[];
};

export function HumbergerMenu(props: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* pc */}
      <header className={styles.description}>
        <ul>
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

      {/* SP */}
      <AppBar position="fixed" className={styles.appbar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
            <Menu />
          </Drawer>
          <Container>
            <Typography variant="h6" component="div">
              {props.title}
            </Typography>
          </Container>
          <Container className="text-right mr-2"></Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

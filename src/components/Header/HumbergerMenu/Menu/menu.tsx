import * as React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import FaceIcon from "@mui/icons-material/Face";
import HouseIcon from "@mui/icons-material/House";
import SchoolIcon from "@mui/icons-material/School";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import styles from "./menu.module.scss";
import Link from "next/link";

export function Menu() {
  return (
    <Paper className={styles.page}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <HouseIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Link href={"/"}>Home</Link>
          </ListItemText>
          <Typography variant="body2"></Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FaceIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Link href={"/about"}>About</Link>
          </ListItemText>
          <Typography variant="body2"></Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SchoolIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Link href={"/skills"}>Skills</Link>
          </ListItemText>
          <Typography variant="body2"></Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <InsertPhotoIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Link href={"/works"}>Works</Link>
          </ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

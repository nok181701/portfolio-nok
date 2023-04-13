import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

export function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          padding: "5px",
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <HomeIcon sx={{ width: 34, height: 34, color: "#fff" }}></HomeIcon>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            background: "#f5ad42",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <HomeIcon
            sx={{
              width: 32,
              height: 32,
              color: "#fff",
              marginRight: 1,
            }}
          />
          <Link href="/">{<span style={{ color: "#fff" }}>Home</span>}</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AccountCircleSharpIcon
            sx={{
              width: 32,
              height: 32,
              color: "#fff",
              marginRight: 1,
            }}
          />
          <Link href="/about">
            {<span style={{ color: "#fff" }}>About</span>}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <RateReviewIcon
            sx={{
              width: 32,
              height: 32,
              color: "#fff",
              marginRight: 1,
            }}
          />
          <Link href="/skills">
            {<span style={{ color: "#fff" }}>Skills</span>}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ConnectWithoutContactIcon
            sx={{
              width: 32,
              height: 32,
              color: "#fff",
              marginRight: 1,
            }}
          />
          <Link href="/works">
            {<span style={{ color: "#fff" }}>Works</span>}
          </Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

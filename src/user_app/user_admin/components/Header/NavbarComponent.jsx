import React from "react";
import logo1 from "../../../assets/logo0.png";
import {
  AppBar,
  Box,
  Hidden,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import LanguageIcon from "@mui/icons-material/Language";
import "./style.css";
import { useStyles } from "./HeaderStyle";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function NavbarComponent({ handleDrawerToggle }) {
  const classes = useStyles();
  const styles = {
    "&.MuiButton-outlined": {
      border: "1px solid #6D6DFC ",
      color: "#6D6DFC ",
      fontFamily: "Poppins",
      fontSize: "0.7rem",
    },
    "&.MuiButton-outlined:hover": {
      color: "White",
    },
  };

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Box className="main-l" style={{}}>
          <img src={logo1} className="img1" alt="Mekka Stack" />
        </Box>
        <Hidden smDown>
          <Box className="main-b">
            <Box className="num1">
              {" "}
              <LanguageIcon></LanguageIcon>
            </Box>

            <Typography className="salona" sx={{ fontFamily: "Poppins" }}>
              <span style={{ color: "#C615A9", marginRight: "4px" }}>
                {" "}
                Salona Network
              </span>{" "}
            </Typography>
            <Typography className="num" mr={2} sx={{ color: "#C615A9" }}>
              {" "}
              <span style={{ color: "#C615A9", marginRight: "4px" }}>
                {" "}
                968554
              </span>{" "}
            </Typography>

            <WalletMultiButton />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuRoundedIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

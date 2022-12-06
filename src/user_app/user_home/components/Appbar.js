import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import React, { useContext } from "react";
import "./style.css";
import LanguageIcon from "@mui/icons-material/Language";
import logo1 from "../assets/logo0.png";

import Mycontext from "../Context/Mycontext";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const Appbar = () => {
  const context = useContext(Mycontext);
  const { name, logo } = context;

  const { publicKey } = useWallet();

  // console.log("my connection object", connection);
  // console.log(" my public key", publicKey?.toBase58());
  // console.log("my transaction", sendTransaction);

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
    <>
      <AppBar position="sticky" elevation={0}>
        {/* <Toolbar disableGutters={true}> */}
        <Container
          maxWidth="xl"
          sx={{
            width: "100%",
            backgroundColor: "#1B194B",
          }}
        >
          <Toolbar disableGutters={true}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                className="main-l"
                sx={{ width: "100%" }}
                display="flex"
                alignItems="center"
              >
                {logo ? (
                  <Avatar
                    alt=""
                    src={`http://localhost:5000/${logo}`}
                    sx={{ width: 45, height: 45 }}
                  />
                ) : (
                  <img src={logo1} className="img1" alt="Mekka Stack" />
                )}
                {name ? <Typography marginLeft={1}>{name}</Typography> : null}
              </Box>

              <Box className="main-b">
                <Box className="num1">
                  {" "}
                  <LanguageIcon></LanguageIcon>
                </Box>

                <Typography
                  className="salona"
                  sx={{ fontFamily: "Poppins", paddingRight: "3px" }}
                >
                  SOLANA NETWORK:{" "}
                </Typography>
                <Typography className="num" mr={2} sx={{ color: "#C615A9" }}>
                  {" "}
                  <span> 968554</span>{" "}
                </Typography>
                <WalletMultiButton />
                {/* {publicKey?.toBase58() ? navigate("connect") : navigate("/")} */}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Appbar;

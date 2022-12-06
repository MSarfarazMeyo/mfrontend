import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useContext, useEffect, useState } from "react";
import Mycontext from "../../context/Mycontext";
import { Metaplex } from "@metaplex-foundation/js";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import Appbar from "../../views/Appbar";
import "../style.css";
import CircularProgress from "@mui/material/CircularProgress";
import NftData from "./NftData";
const Homepage = () => {
  const context = useContext(Mycontext);
  const {
    headline,
    yourappheadline,
    caption,
    yourappcaption,
    themecolor,
    orientation,
    candymachin,
    verifiedmethod,
    loading,
    loadingmethod,
  } = context;

  const [candyNfts, setCandyNfts] = useState([]);
  const [hasnfts, sethasnfts] = useState(false);
  const { wallet, publicKey } = useWallet();
  const connection = new Connection(clusterApiUrl("devnet"));
  const metaplex = new Metaplex(connection);

  const getNfts = async () => {
    if (publicKey && candymachin) {
      loadingmethod(true);
      const nfts = await metaplex.nfts().findAllByCreator({
        creator: new PublicKey(candymachin),
        position: 1,
      });

      console.log("nftlength", nfts);

      if (nfts.length > 0) {
        setCandyNfts(nfts);
        sethasnfts(true);
        verifiedmethod(true);
      } else {
        sethasnfts(false);
      }
    }
  };
  React.useEffect(() => {
    getNfts();
  }, [wallet, publicKey, candymachin]);

  console.log(candymachin, "machine");
  console.log(candyNfts, "çandy nfts");

  const clr = themecolor;
  const theme = createTheme({
    palette: {
      secondary: {
        main: themecolor,
      },
    },
    "&.MuiButton-contained:hover": {
      background: themecolor,
    },
  });
  var w1 = 5;
  var w2 = 4;
  var w3 = 3;
  var dir = "row";

  if (orientation) {
    w1 = 12;
    w2 = 12;
    w3 = 12;
    dir = "column";
  }

  yourappheadline(headline);
  yourappcaption(caption);
  return (
    <Paper>
      <Grid
        container
        direction={dir}
        height="100%"
        overflow="hidden"
        sx={{
          borderRight: ".5px solid",
          borderLeft: ".5px solid",
          "&::-webkit-scrollbar": {
            width: "0em",
            height: "0em",
          },
        }}
      >
        <Grid
          item
          md={w1}
          xs={12}
          overflow="hidden"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "80%",

            "&::-webkit-scrollbar": {
              width: "0em",
              height: "0em",
            },
          }}
        >
          <ThemeProvider theme={theme}>
            <Box mt={4}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  mb: 2,
                  display: { xs: "100%" },
                }}
              >
                {headline}
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="body" sx={{ fontFamily: "Poppins" }}>
                {caption}
              </Typography>
            </Box>
            <Box mt={4}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ color: "white", fontFamily: "Poppins" }}
              >
                connect wallet
              </Button>
            </Box>
          </ThemeProvider>
        </Grid>

        <Grid
          item
          md={w2}
          xs={12}
          height="60vh"
          overflow="hidden"
          sx={{
            borderRight: ".5px solid",
            borderLeft: ".5px solid",
            "&::-webkit-scrollbar": {
              width: "0em",
              height: "0em",
            },
          }}
        >
          {/* <Box width="100%" height="300px">
            <marquee direction="up">

            </marquee>
          </Box> */}
          {hasnfts ? (
            candyNfts && candyNfts.map((elem) => <NftData data={elem} />)
          ) : loading ? (
            <Box
              sx={{
                display: "flex",

                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <marquee direction="up">
              <Box
                width="100%"
                height="300px"
                display="flex"
                justifyContent="space-around"
                paddingTop={2}
                marginTop={2}
                flexDirection="column"
                alignItems="center"
                paddingBottom={2}
              >
                <Box
                  width="80%"
                  height="80%"
                  bgcolor="blue"
                  justifyContent="center"
                  alignItems="center"
                  borderLeft="7px solid "
                  borderBottom="7px solid "
                  borderTop="2px solid "
                  borderRight="2px solid "
                >
                  <Typography
                    textAlign="center"
                    fontWeight="bold"
                    color={themecolor}
                  >
                    Your NFTs goes here
                  </Typography>
                </Box>
                <Typography width="80%" height="10%" color={themecolor}>
                  Nft Name
                </Typography>
                <hr style={{ width: "80%" }} />
              </Box>
            </marquee>
          )}
        </Grid>

        <Grid
          item
          md={w3}
          xs={12}
          overflow="hidden"
          sx={{
            borderRight: ".5px solid",
            borderLeft: ".5px solid",
            "&::-webkit-scrollbar": {
              width: "0em",
              height: "0em",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",

              width: "100%",
            }}
          >
            <Box sx={{ borderBottom: "0.1em solid " }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                NFT States
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "0.1em solid ",

                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body" sx={{ mt: 1 }}>
                NFT Release
              </Typography>
              <Typography
                variant="body"
                sx={{
                  mb: 1,
                }}
              >
                0
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "0.1em solid ",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body" sx={{ fontWeight: "5px", mt: 1 }}>
                NFT Staked Rate
              </Typography>
              <Typography variant="body" sx={{ mb: 1 }}>
                0%
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "0.1em solid ",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body" sx={{ mt: 1 }}>
                Token Distributed
              </Typography>
              <Typography variant="body">0</Typography>
              <Typography variant="h6" mb={1}>
                $Solona
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "0.1em solid ",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body" sx={{ fontWeight: "5px", mt: 1 }}>
                Minimum Value
              </Typography>
              <Typography variant="body" sx={{ fontWeight: "5px" }}>
                Locked
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "5px", mb: 1 }}>
                $ 0
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Homepage;

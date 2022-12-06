import { Button, Grid, Typography, Box, Paper, Stack } from "@mui/material";
import React, { useState, useContext } from "react";
import Mycontext from "../../context/Mycontext";
import Reward from "./Reward";
import Wallet from "./Wallet";
import "../style.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const Dashboardpage = () => {
  const [rewardtbtnvariant, setrewardtbtnvariant] = useState("contained");
  const [walletbtnvariant, setwalletbtnvariant] = useState("outlined");
  const context = useContext(Mycontext);
  const {
    headline,
    yourappheadline,
    caption,
    yourappcaption,
    themecolor,
    orientation,
  } = context;
  const [rewardcomponent, setrewardcomponent] = useState(true);

  const styles = {
    border: "1px solid  ",
    "&.MuiButton-contained": {
      color: "white",
    },
    "&.MuiButton-outlined": {
      border: "2px solid  ",
      color: "black",
    },
  };

  const theme = createTheme({
    palette: {
      secondary: {
        light: "#ff7961",
        main: themecolor,
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  const handlereward = () => {
    setrewardtbtnvariant("contained");
    setwalletbtnvariant("outlined");
    setrewardcomponent(true);
  };
  const handlewallet = () => {
    setrewardtbtnvariant("outlined");
    setwalletbtnvariant("contained");
    setrewardcomponent(false);
  };
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          borderBottom: ".5px solid ",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2, mb: 2 }}>
          Staking Dashboard
        </Typography>
      </Grid>
      <Grid item container>
        <Grid item xs={4} sx={{ borderRight: ".5px solid " }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",

              borderBottom: ".5px solid ",
            }}
          >
            <Button
              onClick={handlereward}
              variant={rewardtbtnvariant}
              sx={{
                "&.MuiButton-contained": {
                  background:
                    " linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)",
                },
              }}
            >
              Rewards
            </Button>
            <Button
              onClick={handlewallet}
              variant={walletbtnvariant}
              sx={{
                "&.MuiButton-contained": {
                  background:
                    " linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)",
                },
              }}
            >
              My Wallet
            </Button>
          </Box>

          {rewardcomponent ? <Reward /> : <Wallet />}
        </Grid>

        <Grid item xs={8} p={2}>
          <Typography>20 NFT</Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Box>
              <Paper elevation={3}>
                <Box
                  sx={{
                    height: "130px",
                    width: "170px",
                    display: "flex",

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" p={1} color="primary">
                    your Nfc goes here
                  </Typography>
                </Box>
              </Paper>
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: 1,
                  paddingRight: 1,
                }}
              >
                <Typography fontSize="small">#0134</Typography>
                <Typography fontSize="small">000d: 23:243</Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: 1,
                  paddingRight: 1,
                }}
              >
                <Typography fontSize="small">Reawards</Typography>
                <Typography fontSize="small">0</Typography>
              </Stack>
              <hr marginTop={2}></hr>
            </Box>
            <Box>
              <Paper elevation={3}>
                <Box
                  sx={{
                    height: "130px",
                    width: "170px",
                    display: "flex",

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" p={1} color="primary">
                    your Nfc goes here
                  </Typography>
                </Box>
              </Paper>
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: 1,
                  paddingRight: 1,
                }}
              >
                <Typography fontSize="small">#0134</Typography>
                <Typography fontSize="small">000d: 23:243</Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: 1,
                  paddingRight: 1,
                }}
              >
                <Typography fontSize="small">Reawards</Typography>
                <Typography fontSize="small">0</Typography>
              </Stack>
              <hr marginTop={2}></hr>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboardpage;

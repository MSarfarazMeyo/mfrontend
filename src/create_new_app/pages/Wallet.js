import React, { useContext } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Button, Grid, Typography, Box, Paper, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Mycontext from "../../context/Mycontext";
const Wallet = () => {
  const context = useContext(Mycontext);
  const {
    headline,
    yourappheadline,
    caption,
    yourappcaption,
    themecolor,
    orientation,
  } = context;

  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: themecolor,
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  return (
    <>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          flexDirection="column"
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            mt: 2,
          }}
        >
          <Typography
            fontSize="small"
            sx={{ fontWeight: "bold" }}
            variant="body"
          >
            Balance
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", mt: 1 }}>
            <Typography fontSize="small">
              <CircleIcon variant="Outlined" fontSize="small"></CircleIcon>
            </Typography>
            <Typography fontSize="small" variant="body1">
              $SOLONA
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="small"
            sx={{
              mt: 2,
              "&.MuiButton-contained": {
                background:
                  " linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)",
              },
            }}
          >
            Claim Now
          </Button>

          <Typography fontSize="small" mt={2} mb={2} variant="body1">
            Transactions
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          flexDirection="column"
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            mt: 2,
          }}
        >
          <Typography sx={{ marginLeft: 2, fontWeight: "bold" }} variant="body">
            NFT Statics
          </Typography>

          <Typography marginTop={3} fontSize="small" variant="body1">
            Stack Rate
          </Typography>

          <Typography variant="h6">0%</Typography>
          <Typography marginTop={2} fontSize="small" variant="body1">
            NFT Released
          </Typography>

          <Typography variant="h6">0%</Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Wallet;

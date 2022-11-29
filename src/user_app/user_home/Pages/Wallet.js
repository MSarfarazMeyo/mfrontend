import React, { useContext } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Button, Grid, Typography, Box, Paper, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Wallet = () => {
  return (
    <>
      <Box
        flexDirection="column"
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",

          mt: 10,
          color: "white",
        }}
      >
        <Typography variant="body">Balance</Typography>
        <Box sx={{ display: "flex", gap: "10px", mt: 1, alignItems: "center" }}>
          <Typography fontSize="50px">0.0000 </Typography>
          <Typography fontSize="small" variant="body1" sx={{ opacity: "50%" }}>
            $FLINT
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 1,
            width: "70%",
            "&.MuiButton-contained": {
              background:
                " linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)",
              color: "white",
            },
          }}
        >
          Claim Now
        </Button>

        <Typography mt={1} mb={10} variant="body1">
          Transactions
        </Typography>
      </Box>
      <hr style={{ width: "100%" }} />
      <Box
        flexDirection="column"
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mt: 2,
          mb: 4,

          color: "white",
        }}
      >
        <Typography sx={{ margin: 2, fontSize: "30px" }} variant="body">
          NFT Statics
        </Typography>

        <Typography marginTop={3} fontSize="medium" variant="body1">
          Stacked Rate
        </Typography>

        <Typography color="white" variant="h6">
          0.000%
        </Typography>
        <Typography marginTop={2} fontSize="medium" variant="body1">
          NFT Released
        </Typography>

        <Typography color="white" variant="h6">
          2211
        </Typography>
      </Box>
    </>
  );
};

export default Wallet;

import { Typography } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import React from "react";

const LandingPage = () => {
  return (
    <Grid
      container
      sx={{
        background: "linear-gradient(68.46deg, #1B194B 25.89%, #312677 72.06%)",
      }}
      height="90vh"
    >
      <Grid
        item
        xs={6}
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRight={1}
      >
        <Box
          width="70%"
          height="70%"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Typography variant="h5">Next-Gen Staking Made</Typography>
          <Typography variant="h1">AffordAble</Typography>
          <Typography variant="body1">
            Create a beautiful staking platform for your Solana NFT project in a
            few easy steps. Stake it your own way.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} height="100%"></Grid>
    </Grid>
  );
};

export default LandingPage;

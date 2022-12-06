import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Button, Grid, Typography, Box, Paper, Stack } from "@mui/material";

const Reward = () => {
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
            Todays Reward
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", mt: 1 }}>
            <Typography fontSize="small">
              <CircleIcon variant="Outlined" fontSize="small"></CircleIcon>
            </Typography>
            <Typography fontSize="small" variant="body1">
              $SOLONA
            </Typography>
          </Box>
          <Typography fontSize="small">estimated 0 salona/day</Typography>
          <Typography
            fontSize="small"
            sx={{ fontWeight: "bold", mt: 2 }}
            variant="body"
          >
            Todays Reward
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", mt: 1 }}>
            <Typography>
              <CircleIcon variant="Outlined" fontSize="small"></CircleIcon>
            </Typography>
            <Typography fontSize="small" variant="body1">
              $SOLONA
            </Typography>
          </Box>
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

export default Reward;

import React, { useContext } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Button, Grid, Typography, Box, Paper, Stack } from "@mui/material";
import Mycontext from "../Context/Mycontext";

const Reward = () => {
  const context = useContext(Mycontext);
  const { rewards } = context;

  console.log(rewards, "rewards");

  return (
    <>
      <Box
        flexDirection="column"
        sx={{
          width: "80%",
          display: "flex",

          flexDirection: "column",
          mt: 2,
          mb: 2,

          color: "white",
        }}
      >
        <Typography fontSize="small" sx={{ fontSize: "25px" }} variant="body">
          Todays Reward
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", mt: 2, alignItems: "center" }}>
          <Typography fontSize="50px">{rewards} </Typography>
          <Typography fontSize="small" variant="body1" sx={{ opacity: "50%" }}>
            $FLINT
          </Typography>
        </Box>
        <Typography
          bgcolor="#242531"
          textAlign="center"
          width="70%"
          p={1}
          fontSize="large"
        >
          estimated 0 salona/day
        </Typography>
        <Typography
          fontSize="small"
          sx={{ fontSize: "20px", mt: 3 }}
          variant="body"
        >
          Rewards to Date
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", mt: 2, alignItems: "center" }}>
          <Typography sx={{ fontSize: "30px" }}>0.000011</Typography>
          <Typography fontSize="small" variant="body1" sx={{ opacity: "50%" }}>
            $FLINT
          </Typography>
        </Box>
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

export default Reward;

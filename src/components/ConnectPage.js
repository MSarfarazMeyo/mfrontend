import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

const ConnectPage = () => {
  return (
    <Grid
      container
      height="90vh"
      sx={{
        background: "linear-gradient(68.46deg, #1B194B 25.89%, #312677 72.06%)",
      }}
    >
      <Grid
        item
        xs={12}
        height="20%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={5}
      >
        <Typography variant="h3">My Staking Site</Typography>
        <Typography variant="h6">
          choose one to Edit or create a new one
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        gap={2}
        display="flex"
        justifyContent="center"
        height="60%"
      >
        <Link href="create" style={{ textDecoration: "none" }}>
          <Box
            width="400px"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border={1}
          >
            <Typography variant="h3">Create New Site</Typography>
          </Box>
        </Link>
        <Box
          width="400px"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          border={1}
        >
          <Link href="/user/home" style={{ textDecoration: "none" }}>
            <Button variant="contained" width="50%" p={2}>
              {" "}
              My Stacking Site
            </Button>
          </Link>
          <Button
            sx={{ marginTop: "10px" }}
            variant="contained"
            width="50%"
            p={2}
          >
            {" "}
            Admin Dashboard
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ConnectPage;

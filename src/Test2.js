import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";

const Test2 = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} bgcolor="primary.main">
          <Typography>helo</Typography>
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={6} bgcolor="secondary.main">
            <Typography bgcolor="black">helo world</Typography>
          </Grid>
          <Grid container item xs={6} bgcolor="error.main">
            <Grid
              xs={12}
              sm={6}
              display="flex"
              flexDirection="column"
              alignItems="center"
              bgcolor="warning.main"
              paddingTop={2}
              paddingBottom={2}
            >
              <Typography bgcolor="black">helo world</Typography>
              <Typography>he</Typography>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              display="flex"
              flexDirection="column"
              bgcolor="success.main"
            >
              <Typography width="50%" margin="auto" textAlign="center">
                helo world
              </Typography>
              <Typography width="50%" margin="auto" textAlign="center">
                helo world
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} bgcolor="primary.main">
          <Typography>helo</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Test2;

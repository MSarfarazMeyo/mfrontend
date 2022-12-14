import React from "react";
import { Divider, Grid, Toolbar, Typography, Box } from "@mui/material";
import UserHome from "../create_new_app/UserHome";
import Sidebar from "../components/Sidebar";

const NewSitePage = () => {
  return (
    <Grid
      container
      sx={{
        height: "100%",
        background: "linear-gradient(68.46deg, #1B194B 25.89%, #312677 72.06%)",
        borderTop: "0.1em solid  #44327E",
      }}
    >
      <Grid
        item
        sx={{
          height: "90vh",
          borderRight: "0.1em solid #44327E",
          background: "#1B194B",
        }}
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={4}
      >
        <Sidebar />
      </Grid>
      {/* <Divider orientation="vertical" flexItem></Divider> */}

      <Grid
        item
        sx={{ height: "90vh", pl: 2, pr: 2 }}
        xl={8}
        lg={8}
        md={6}
        sm={12}
        xs={12}
      >
        <UserHome />
      </Grid>
    </Grid>
  );
};

export default NewSitePage;

import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";

import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";
import Footer from "./Footer";
import ContextStore from "../Context/ContextStore";

const UserHome = () => {
  return (
    <ContextStore>
      <Box height="100vh" flexDirection="column">
        <Box>
          <Appbar />
        </Box>
        <Box
          height="80%"
          sx={{
            borderTop: 2,
            borderColor: "#ADD8E6",
            background:
              "linear-gradient(68.46deg, #1B194B 25.89%, #312677 72.06%)",
          }}
        >
          <Outlet />
        </Box>
        <Box
          height="10%"
          sx={{
            borderTop: 2,
            borderColor: "#ADD8E6",
          }}
        >
          {" "}
          <Footer />
        </Box>
      </Box>
    </ContextStore>
  );
};

export default UserHome;

import React, { useContext } from "react";
import Header from "./Header";
import {
  Typography,
  Button,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import Footer from "./Footer";
import Mycontext from "../../context/Mycontext";

const Layout = ({ body }) => {
  const context = useContext(Mycontext);
  const { themecolor, thememode } = context;

  const theme = createTheme({
    palette: {
      mode: thememode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "73vh",
          backgroundColor: "#14121F",
          border: 1,
          m: 1,
          borderColor: "#ADD8E6",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <Box>
          <Paper>
            <Header />
          </Paper>
          <hr />
        </Box>
        <Box
          backgroundColor={themecolor}
          width="100%"
          alignSelf="center"
          sx={{
            height: "80%",
            overflowY: "scroll",

            "&::-webkit-scrollbar": {
              width: "0em",
              height: "0em",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(0,0,0,.1)",
              outline: "1px solid slategrey",
            },
          }}
        >
          {body}
        </Box>
        <hr />
        <Paper>
          <Box sx={{ height: "20%", width: "100%", bottom: 0 }}>
            <Footer />
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;

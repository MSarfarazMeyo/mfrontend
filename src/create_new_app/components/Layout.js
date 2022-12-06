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
import { amber, deepOrange, grey } from "@mui/material/colors";

const Layout = ({ body }) => {
  const context = useContext(Mycontext);
  const { themecolor, thememode } = context;

  const theme = createTheme({
    palette: {
      mode: thememode,
      ...(thememode === "dark" && {
        background:
          " linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)",
      }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        bgcolor=" linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "73vh",

          border: 1,
          m: 1,
          borderColor: "#ADD8E6",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <Box bgcolor=" linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)">
          <Paper>
            <Header />
          </Paper>
          <hr />
        </Box>
        <Box
          bgcolor=" linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)"
          width="100%"
          alignSelf="center"
          sx={{
            height: "79%",
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
          {" "}
          <Paper square>{body}</Paper>
        </Box>
        <hr />
        <Box>
          <Paper square>
            <Footer />
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;

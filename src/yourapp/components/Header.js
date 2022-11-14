import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Button,
  Paper,
} from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import Mycontext from "../../context/Mycontext";
import LanguageIcon from "@mui/icons-material/Language";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import "../style.css"
const Header = () => {
  const context = useContext(Mycontext);
  const { name, logo2,themecolor, } = context;
  const theme = createTheme({
    palette: {
   
      secondary: {
        
        main: themecolor,
       
      },
    },
    "&.MuiButton-contained:hover":{
        background:themecolor
  },});

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: "#14121F", border:"2px solid #6D6DFC" }}>
      <Paper>
        <Toolbar>
          <Grid
            container
            disableGutters={true}
            sx={{
              display: "flex",
              justifyContent:"space-between",
              alignItems: "center",
            }}
          >
            <Grid item xs={5} xl={6}>
              <Box
              className="h-l"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar alt="yourlogo" src={logo2} />

                <Typography marginLeft={2}> {name}</Typography>
              </Box>
            </Grid>
           
            <Grid item xs={5} xl={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Typography className="num" marginRight={1}>
                  <LanguageIcon className="num"></LanguageIcon>
                </Typography>
                <ThemeProvider  theme={theme}>
                <Typography className="num" sx={{ color: "#C615A9" }}>:968554</Typography>
                <Typography marginLeft={2}>
                  {" "}

                  <Button size="small" color="secondary" variant="outlined">
                    Connect Wallete
                  </Button>
                </Typography>
                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Paper>
    </AppBar>
  );
};

export default Header;

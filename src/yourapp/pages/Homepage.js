import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { createTheme,ThemeProvider } from '@mui/material/styles';
import React, { useContext } from "react";
import Mycontext from "../../context/Mycontext";
import Appbar from "../../views/Appbar";
import "../style.css"
const Homepage = () => {
  const context = useContext(Mycontext);
  const {
    headline,
    yourappheadline,
    caption,
    yourappcaption,
    themecolor,
    orientation,
  } = context;
     const clr=themecolor;
     const theme = createTheme({
      palette: {
     
        secondary: {
          
          main: themecolor,
         
        },
      },
      "&.MuiButton-contained:hover":{
          background:themecolor
    },});
  var w1 = 5;
  var w2 = 4;
  var w3 = 3;
  var dir = "row";

  if (orientation) {
    w1 = 12;
    w2 = 12;
    w3 = 12;
    dir = "column";
  }

  yourappheadline(headline);
  yourappcaption(caption);
  return (
    
    <Paper>
      
      <Grid container direction={dir} sx={{border:"2px solid #4e39d7",height:"100%",width:"100%"}} >
        
        <Grid
          item
          md={w1}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "80%",
             paddingBottom:"2rem",
            p: 4,
          }}
          className="main-g"
        >
          <ThemeProvider theme={theme}>
          <Box mt={4}>
            <Typography
              variant="h6"
              sx={{ fontSize:"", fontFamily:"Poppins",fontWeight: "bold", mb: 2 , display: { xs: "100%" } }}
            >
              {headline}
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography variant="body" sx={{fontFamily:"Poppins",}}>{caption}</Typography>
          </Box>
          <Box mt={4}>
            <Button variant="contained" color="secondary" sx={{color:"white",fontFamily:"Poppins"}}>
              connect wallet
            </Button>
          </Box>
          </ThemeProvider>
        </Grid>

        <Grid item md={w2} xs={12}>
          <Paper elevation={3}>
            <Box
              sx={{
                mt: 4,
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{fontFamily:"Poppins",}} color={themecolor}>
                your Nfc goes here
              </Typography>
            </Box>
          </Paper>
          <Typography mt={1} variant="h6" sx={{fontFamily:"Poppins",}}>
            NFT #034464
          </Typography>
          <hr />
          <Paper elevation={3}>
            <Box
              sx={{
                mt: 4,
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{fontFamily:"Poppins",}} color={themecolor}>
                your Nfc goes here
              </Typography>
            </Box>
          </Paper>
          <Typography mt={1} variant="h6" sx={{fontFamily:"Poppins",}}>
            NFT #034464
          </Typography>
          <hr />
          <Paper elevation={3}>
            <Box
              sx={{
                mt: 4,
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{fontFamily:"Poppins",}} color={themecolor}>
                your Nfc goes here
              </Typography>
            </Box>
          </Paper>
          <Typography mt={1} variant="h6" sx={{fontFamily:"Poppins",}}>
            NFT #034464
          </Typography>
          <hr />
        </Grid>

        <Grid item md={w3} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",

              width: "100%",
            }}
          >
            <Box sx={{ borderBottom: "0.1em solid " }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                NFT States
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "0.1em solid ",

                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body" sx={{ mt: 1 }}>
                NFT Release
              </Typography>
              <Typography
                variant="body"
                sx={{
                  mb: 1,
                }}
              >
                0
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "0.1em solid ",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body" sx={{ fontWeight: "5px", mt: 1 }}>
                NFT Staked Rate
              </Typography>
              <Typography variant="body" sx={{ mb: 1 }}>
                0%
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "0.1em solid ",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body" sx={{ mt: 1 }}>
                Token Distributed
              </Typography>
              <Typography variant="body">0</Typography>
              <Typography variant="h6" mb={1}>
                $Solona
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "0.1em solid ",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body" sx={{ fontWeight: "5px", mt: 1 }}>
                Minimum Value
              </Typography>
              <Typography variant="body" sx={{ fontWeight: "5px" }}>
                Locked
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "5px", mb: 1 }}>
                $ 0
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
     
    </Paper>
 
  );
};

export default Homepage;

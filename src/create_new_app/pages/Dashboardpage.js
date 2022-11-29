import { Button, Grid, Typography, Box, Paper, Stack } from "@mui/material";
import React, { useState, useContext } from "react";
import Mycontext from "../../context/Mycontext";
import Reward from "./Reward";
import Wallet from "./Wallet";
import "../style.css"
import { createTheme,ThemeProvider } from '@mui/material/styles';
const Dashboardpage = () => {
  const [rewardtbtnvariant, setrewardtbtnvariant] = useState("contained");
  const [walletbtnvariant, setwalletbtnvariant] = useState("outlined");
  const context = useContext(Mycontext);
  const {
    headline,
    yourappheadline,
    caption,
    yourappcaption,
    themecolor,
    orientation,
  } = context;
  const [rewardcomponent, setrewardcomponent] = useState(true);

      
  const styles = {
   
    border: "1px solid  ",
    "&.MuiButton-contained": {
   
      color: "white",
    },
    "&.MuiButton-outlined": {
      border: "2px solid  ",
      color: "black",
    },
  
  }
   
  const theme = createTheme({
    palette: {
      
      secondary: {
        light: '#ff7961',
        main: themecolor,
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  const handlereward = () => {
    setrewardtbtnvariant("contained");
    setwalletbtnvariant("outlined");
    setrewardcomponent(true);
  };
  const handlewallet = () => {
    setrewardtbtnvariant("outlined");
    setwalletbtnvariant("contained");
    setrewardcomponent(false);
  };
  return (
   
    <Paper square>
      
      <Grid container    sx={{border:"2px solid #6D6DFC"}} >
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center",border:"2px solid #6D6DFC" }}>
          <Paper
            square
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2, mb: 2 }}>
              Staking Dashboard
            </Typography>
          </Paper>
        </Grid>
            <div  className="dash-main"> 
            <div   className="das-mainl">
    
          <Paper square elevation={3}>
         <ThemeProvider theme={theme}>
            <Box
            className="dash"
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 1,
                border:"2px solid #6D6DFC"
              }}
            >

              <Button onClick={handlereward} variant={rewardtbtnvariant} sx={styles} color="secondary">
                Rewards
              </Button>
              <Button onClick={handlewallet} variant={walletbtnvariant} sx={styles} color="secondary">
                My Wallet
              </Button>
            </Box>
            </ThemeProvider>
          </Paper>
          {rewardcomponent ? <Reward /> : <Wallet />}
      
        </div>
        <div className="dash-main-r"> 
       
          <Paper
            square
            elevation={3}
            sx={{
              height: "100%",
              width: "100%",
              p: 1,
            }}
          >
            <Typography>20 NFT</Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Box>
                <Paper elevation={3}>
                  <Box
                    sx={{
                      height: "130px",
                      width: "170px",
                      display: "flex",

                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" p={1} color="primary">
                      your Nfc goes here
                    </Typography>
                  </Box>
                </Paper>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 1,
                    paddingRight: 1,
                  }}
                >
                  <Typography fontSize="small">#0134</Typography>
                  <Typography fontSize="small">000d: 23:243</Typography>
                </Stack>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 1,
                    paddingRight: 1,
                  }}
                >
                  <Typography fontSize="small">Reawards</Typography>
                  <Typography fontSize="small">0</Typography>
                </Stack>
                <hr marginTop={2}></hr>
              </Box>
              <Box>
                <Paper elevation={3}>
                  <Box
                    sx={{
                      height: "130px",
                      width: "170px",
                      display: "flex",

                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" p={1} color="primary">
                      your Nfc goes here
                    </Typography>
                  </Box>
                </Paper>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 1,
                    paddingRight: 1,
                  }}
                >
                  <Typography fontSize="small">#0134</Typography>
                  <Typography fontSize="small">000d: 23:243</Typography>
                </Stack>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 1,
                    paddingRight: 1,
                  }}
                >
                  <Typography fontSize="small">Reawards</Typography>
                  <Typography fontSize="small">0</Typography>
                </Stack>
                <hr marginTop={2}></hr>
              </Box>
              <Box>
                <Paper elevation={3}>
                  <Box
                    sx={{
                      height: "130px",
                      width: "170px",
                      display: "flex",

                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" p={1} color="primary">
                      your Nfc goes here
                    </Typography>
                  </Box>
                </Paper>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 1,
                    paddingRight: 1,
                  }}
                >
                  <Typography fontSize="small">#0134</Typography>
                  <Typography fontSize="small">000d: 23:243</Typography>
                </Stack>

                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 1,
                    paddingRight: 1,
                  }}
                >
                  <Typography fontSize="small">Reawards</Typography>
                  <Typography fontSize="small">0</Typography>
                </Stack>
                <hr marginTop={2}></hr>
              </Box>
            </Stack>
            <Stack direction="row" spacing={2} flexWrap="wrap" mt={2}>
              <Box>
                <Paper elevation={3}>
                  <Box
                    sx={{
                      height: "130px",
                      width: "170px",
                      display: "flex",

                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" p={1} color="primary">
                      your Nfc will display here
                    </Typography>
                  </Box>
                </Paper>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 1,
                    paddingRight: 1,
                  }}
                >
                  <Typography fontSize="small">#0134</Typography>
                  <Typography fontSize="small">000d: 23:243</Typography>
                </Stack>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 1,
                    paddingRight: 1,
                  }}
                >
                  <Typography fontSize="small">Reawards</Typography>
                  <Typography fontSize="small">0</Typography>
                </Stack>
                <hr marginTop={2}></hr>
              </Box>
              <Box>
                <Paper elevation={3}>
                  <Box
                    sx={{
                      height: "130px",
                      width: "170px",
                      display: "flex",

                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" p={1} color="primary">
                      your Nfc goes here
                    </Typography>
                  </Box>
                </Paper>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 1,
                    paddingRight: 1,
                  }}
                >
                  <Typography fontSize="small">#0134</Typography>
                  <Typography fontSize="small">000d: 23:243</Typography>
                </Stack>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 1,
                    paddingRight: 1,
                  }}
                >
                  <Typography fontSize="small">Reawards</Typography>
                  <Typography fontSize="small">0</Typography>
                </Stack>
                <hr marginTop={2}></hr>
              </Box>
              <Box>
                <Paper elevation={3}>
                  <Box
                    sx={{
                      height: "130px",
                      width: "170px",
                      display: "flex",

                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" p={1} color="primary">
                      your Nfc goes here
                    </Typography>
                  </Box>
                </Paper>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 1,
                    paddingRight: 1,
                  }}
                >
                  <Typography fontSize="small">#0134</Typography>
                  <Typography fontSize="small">000d: 23:243</Typography>
                </Stack>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 1,
                    paddingRight: 1,
                  }}
                >
                  <Typography fontSize="small">Reawards</Typography>
                  <Typography fontSize="small">0</Typography>
                </Stack>
                <hr marginTop={2}></hr>
              </Box>
            </Stack>
          </Paper>
       
        </div>
      </div> 

      </Grid>
      
    </Paper>
    
  );
};

export default Dashboardpage;

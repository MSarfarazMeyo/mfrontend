import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import scrlimg from "../assets/scrlimg.png";
import scrlimg2 from "../assets/scrlimg2.png";
import "./style.css";

const StackingHome = () => {
  return (
    <>
      <Grid container height="100%">
        <Grid
          item
          xs={6}
          sx={{
            borderRight: 1,
            borderColor: "#FFFFFF",
            overflowY: "scroll",

            "&::-webkit-scrollbar": {
              width: "0em",
              height: "0em",
            },
          }}
          display="flex"
          justifyContent="center"
        >
          <Box
            width="80%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignSelf="center"
            height="100%"
          >
            <Typography variant="h2" color="white" mt={-5} mb={5}>
              SDFSD
            </Typography>
            <Button variant="contained" sx={{ width: "40%" }}>
              {" "}
              connect wallet
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="center"
          height="100%"
          overflow="hidden"
          sx={{ borderRight: 1, borderColor: "#FFFFFF" }}
        >
          <Box width="80%" height="100px">
            <marquee direction="up">
              <Box
                borderTop={1}
                borderColor="white"
                height="100%"
                width="100%"
                alignSelf="center"
                marginBottom={2}
              >
                <Box
                  width="100%"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  mt={2}
                >
                  <Box height="85%" width="100%" bgcolor="blue">
                    <img
                      width="100%"
                      height="98%"
                      src={scrlimg}
                      alt="yourNft"
                      style={{
                        marginLeft: "10px",
                      }}
                    />
                  </Box>
                  <Typography variant="h4" color="white">
                    MellowMen #1788
                  </Typography>
                </Box>
              </Box>

              <Box
                borderTop={1}
                borderColor="white"
                height="100%"
                width="100%"
                alignSelf="center"
                marginTop={2}
                marginBottom={2}
              >
                <Box
                  width="100%"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  mt={2}
                >
                  <Box height="85%" width="100%" bgcolor="blue">
                    <img
                      width="100%"
                      height="98%"
                      src={scrlimg2}
                      alt="yourNft"
                      style={{
                        marginLeft: "10px",
                      }}
                    />
                  </Box>
                  <Typography variant="h4" color="white">
                    MellowMen #1788
                  </Typography>
                </Box>
              </Box>

              <Box
                borderTop={1}
                borderColor="white"
                height="100%"
                width="100%"
                alignSelf="center"
                marginTop={2}
                marginBottom={2}
              >
                <Box
                  width="100%"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  mt={2}
                >
                  <Box height="85%" width="100%" bgcolor="blue">
                    <img
                      width="100%"
                      height="98%"
                      src={scrlimg}
                      alt="yourNft"
                      style={{
                        marginLeft: "10px",
                      }}
                    />
                  </Box>
                  <Typography variant="h4" color="white">
                    MellowMen #1788
                  </Typography>
                </Box>
              </Box>
              <Box
                borderTop={1}
                borderColor="white"
                height="100%"
                width="100%"
                alignSelf="center"
                marginTop={2}
              >
                <Box
                  width="100%"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  mt={2}
                >
                  <Box height="85%" width="100%" bgcolor="blue">
                    <img
                      width="100%"
                      height="98%"
                      src={scrlimg}
                      alt="yourNft"
                      style={{
                        marginLeft: "10px",
                      }}
                    />
                  </Box>
                  <Typography variant="h4" color="white">
                    MellowMen #1788
                  </Typography>
                </Box>
              </Box>
            </marquee>
          </Box>
        </Grid>
        <Grid
          item
          xs={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          sx={{
            overflowY: "scroll",

            "&::-webkit-scrollbar": {
              width: "0em",
              height: "0em",
            },
          }}
        >
          <Box width="90%" height="90%" display="flex" flexDirection="column">
            <Typography
              variant="h4"
              fontWeight="bold"
              color="white"
              mb={4}
              mt={4}
            >
              NFT Stats
            </Typography>

            <Box borderTop={1} bordercolor="white" color="white">
              <Typography color="white" mt={1} mb={1} variant="h6">
                NFT Released
              </Typography>
              <Typography color="white" mb={4} variant="h5">
                2211
              </Typography>
            </Box>
            <Box borderTop={1} bordercolor="white" color="white">
              <Typography color="white" mt={1} mb={1} variant="h6">
                NFT Staked Rate
              </Typography>
              <Typography color="white" mb={4} variant="h5">
                0.00%
              </Typography>
            </Box>
            <Box borderTop={1} bordercolor="white" color="white">
              <Typography color="white" mt={1} mb={1} variant="h6">
                Tokens Distributed
              </Typography>
              <Typography color="white" variant="h5">
                0.0000
              </Typography>
              <Typography color="white" mb={4} variant="h5">
                $FLINT
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default StackingHome;

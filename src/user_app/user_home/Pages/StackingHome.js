import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import scrlimg from "../assets/scrlimg.png";
import scrlimg2 from "../assets/scrlimg2.png";
import "./style.css";
import Animations from "./Animations";
import Mycontext from "../Context/Mycontext";

import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import NftData from "./NftData";

const StackingHome = () => {
  const context = useContext(Mycontext);
  const { candymachineid } = context;

  const [hasnfts, sethasnfts] = useState(false);
  const [candyNfts, setCandyNfts] = useState([]);
  const connection = new Connection(clusterApiUrl("devnet"));
  const metaplex = new Metaplex(connection);

  const getNfts = async () => {
    const nft = await metaplex.nfts().findAllByCreator({
      creator: new PublicKey(candymachineid),
      position: 1,
    });

    if (nft.length > 0) {
      setCandyNfts(nft);
      sethasnfts(true);
    } else {
      sethasnfts(false);
    }
  };
  useEffect(() => {
    getNfts();
  }, [candymachineid]);

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
          flexDirection="column"
          alignItems="center"
          height="100%"
          overflow="hidden"
          sx={{ borderRight: 1, borderColor: "#FFFFFF" }}
        >
          <Typography color="white" fontSize="large">
            <span style={{ opacity: "50%", marginRight: 1 }}>Total Nfts :</span>
            {candyNfts?.length}
          </Typography>
          <Box
            width="100%"
            height="100%"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
            sx={{
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "0em",
                height: "0em",
              },
            }}
          >
            {hasnfts ? (
              candyNfts && candyNfts.map((elem) => <NftData data={elem.uri} />)
            ) : (
              <Animations value={"300px"} />
            )}
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

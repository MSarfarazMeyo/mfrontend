import { Button, Grid, Typography, Box, Paper, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import scrlimg from "../assets/scrlimg.png";
import Reward from "./Reward";
import Wallet from "./Wallet";
import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import "./style.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NftData from "./NftData";
import Mycontext from "../Context/Mycontext";

const StackingDashboard = () => {
  const [rewardtbtnvariant, setrewardtbtnvariant] = useState("contained");
  const [walletbtnvariant, setwalletbtnvariant] = useState("outlined");

  const [rewardcomponent, setrewardcomponent] = useState(true);
  const [hasnfts, sethasnfts] = useState(false);
  const [candyNfts, setCandyNfts] = useState([]);
  const { wallet, publicKey } = useWallet();
  const connection = new Connection(clusterApiUrl("devnet"));
  const metaplex = new Metaplex(connection);
  const [appdata, setappdata] = useState();
  const [walletid, setwalletid] = useState(publicKey?.toString());

  const context = useContext(Mycontext);
  const {
    walletmethod,
    namemethod,
    logomethod,
    colormethod,
    headlinemethod,
    captionmethod,
    domainmethod,
    candymachinemethod,
    nftmethod,
    rewardmethod,
    tokenmethod,
    emailmethod,
  } = context;

  const getdata = async () => {
    await axios
      .get(`http://localhost:5000/api/${walletid}`)
      .then((res) => setappdata(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, [wallet]);

  console.log("appdata", appdata);

  const candymachineid = appdata?.candymachineid;

  walletmethod(appdata?.wallet);
  namemethod(appdata?.appname);
  logomethod(appdata?.applogo);
  colormethod(appdata?.appcolor);
  headlinemethod(appdata?.appheadline);
  captionmethod(appdata?.appcaption);
  domainmethod(appdata?.appsubdomain);
  nftmethod(appdata?.nfts);
  rewardmethod(appdata?.rewards);
  tokenmethod(appdata?.tokenfromwallet);
  emailmethod(appdata?.contactemails);
  candymachinemethod(appdata?.candymachineid);

  console.log(candymachineid, "candymachineid");

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

  console.log(candyNfts, "candyNfts");

  return (
    <>
      (
      <Grid container height="100%">
        <Grid
          item
          xs={12}
          height="20%"
          display="flex"
          justifyContent="center"
          borderBottom={1}
          borderColor="white"
        >
          <Box width="80%" height="100%" display="flex" alignItems="center">
            <Typography variant="h4" fontWeight="bold" color="white">
              Stacking Dashboard
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          borderRight={1}
          borderColor="white"
          height="50vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            borderBottom={1}
            borderColor="white"
            width="100%"
            height="15%"
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              sx={{ width: "40%", borderLeft: 1 }}
              onClick={handlereward}
              variant={rewardtbtnvariant}
            >
              Reward
            </Button>
            <Button
              sx={{ width: "40%", borderLeft: 1 }}
              onClick={handlewallet}
              variant={walletbtnvariant}
            >
              Wallet
            </Button>
          </Box>
          <Box
            height="50vh"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              overflowY: "scroll",

              "&::-webkit-scrollbar": {
                width: "0em",
                height: "0em",
              },
            }}
          >
            {rewardcomponent ? <Reward /> : <Wallet />}
          </Box>
        </Grid>

        <Grid
          item
          xs={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          height="80%"
        >
          <Box width="90%" height="10%" display="flex" alignItems="center">
            <Typography color="white" fontSize="large">
              {candyNfts?.length}
              <span style={{ opacity: "50%", marginLeft: 1 }}> Nfts</span>
            </Typography>
          </Box>
          <Box
            width="90%"
            height="50vh"
            display="flex"
            flexWrap="wrap"
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
              candyNfts && candyNfts.map((elem) => <NftData data={elem} />)
            ) : (
              <Box
                borderBottom={1}
                borderColor="white"
                height="300px"
                width="250px"
              >
                <Box
                  width="100%"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Box height="70%" width="100%" bgcolor="blue">
                    <img
                      width="100%"
                      height="98%"
                      src={scrlimg}
                      alt="yourNft"
                      style={{
                        marginLeft: "5px",
                      }}
                    />
                  </Box>
                  <Box
                    display="flex"
                    width="100%"
                    flexDirection="column"
                    mt={1}
                  >
                    <Typography variant="body" color="white">
                      MellowMen #1512 00d:00h:00m
                    </Typography>
                    <Box
                      display="flex"
                      width="100%"
                      justifyContent="space-between"
                      mt={1}
                    >
                      <Typography variant="body" color="white">
                        Rewards
                      </Typography>
                      <Typography variant="body" color="white">
                        349674
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
      )
    </>
  );
};

export default StackingDashboard;

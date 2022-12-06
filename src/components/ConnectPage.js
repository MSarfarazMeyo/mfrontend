import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useWallet } from "@solana/wallet-adapter-react";
const ConnectPage = () => {
  const LastSegment = window.location.pathname.split("/").pop();
  const { wallet, publicKey } = useWallet();
  const [domainname, setdomainname] = useState();
  const [appdata, setappdata] = useState();
  const [show, setshow] = useState(false);
  const [disable, setdisable] = useState(true);
  const [walletid, setwalletid] = useState(publicKey?.toString());
  const [inputdomain, setinputdomain] = useState();
  const [status, setstatus] = useState();

  const getdata = async () => {
    await axios
      .get(`http://localhost:5000/api`)
      .then((res) => setappdata(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const checkdomain = () => {
    const domain = appdata?.find((elem) => elem.appsubdomain == inputdomain);
    if (domain) {
      setdomainname(domain.appsubdomain);
      setstatus(domain.status);
      setshow(true);

      if (domain.wallet == walletid) {
        setdisable(false);
      } else {
        setdisable(true);
      }
    } else {
      setshow(false);
    }
  };

  useEffect(() => {
    setwalletid(publicKey?.toString());
    checkdomain();
  }, [appdata, walletid]);

  const handledomain = (e) => {
    setinputdomain(e.target.value);
  };

  return (
    <Grid
      container
      height="90vh"
      sx={{
        background: "linear-gradient(68.46deg, #1B194B 25.89%, #312677 72.06%)",
      }}
    >
      <Grid
        item
        xs={12}
        height="20%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={2}
      >
        <Typography variant="h3">My Staking Site</Typography>
        <Typography variant="h6">
          choose one to Edit or create a new one
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box width="50%" display="flex" gap={2}>
          <TextField
            id="outlined-basic"
            label="Enter Domain"
            variant="outlined"
            onChange={handledomain}
            value={inputdomain}
          />
          <Button
            onClick={getdata}
            variant="contained"
            sx={{ width: "20%", height: "50px" }}
          >
            Connect
          </Button>
        </Box>
        {show && status == false ? (
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography fontWeight="bold" fontSize="large" color="white">
              {" "}
              Access Denied !
            </Typography>

            <Link to="#">
              <Typography color="red">Contact To Admin Support</Typography>
            </Link>
          </Box>
        ) : null}
      </Grid>
      <Grid
        item
        xs={12}
        gap={2}
        display="flex"
        justifyContent="center"
        height="60%"
      >
        <Box
          width="400px"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          border={1}
        >
          {" "}
          <Link to="create" style={{ color: "white" }}>
            <Typography variant="h3">Create New Site</Typography>
          </Link>
        </Box>

        {show && status ? (
          <Box
            width="400px"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            border={1}
          >
            <Link
              to={{
                pathname: `/user/${domainname}`,
              }}
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" width="50%" p={2}>
                {" "}
                My Staking Site
              </Button>
            </Link>

            <Button
              disabled={disable}
              sx={{ marginTop: "10px" }}
              variant="contained"
              href={`/admin/${domainname}`}
              width="50%"
              p={2}
            >
              {" "}
              Admin Dashboard
            </Button>
          </Box>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default ConnectPage;

import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button, IconButton, Typography } from "@mui/material";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { Link } from "react-router-dom";
import SidebarBody from "./SidebarBody";
import Mycontext from "../context/Mycontext";
import axios from "axios";
import SidebarBody2 from "./SidebarBody2";
import { useEffect } from "react";

const Sidebar = () => {
  const context = useContext(Mycontext);
  const [Error, setError] = useState();
  const { publicKey } = useWallet();
  const [wallet, setwallet] = useState();

  useEffect(() => {
    setwallet(publicKey?.toString());
  }, [publicKey]);

  const styles = {
    width: "100%",
    marginTop: "5px",
    marginBottom: "5px",
    border: "2px solid #44327E ",
    color: "black",
    "&.MuiButton-contained": {
      background:
        " linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)",
    },
    "&.MuiButton-contained:hover": {
      backgroundColor: "#6D6DFC",
    },
  };

  const {
    name,
    logo,
    headline,
    caption,
    subdomain,
    themecolor,
    candymachin,
    tokenfromwallet,
    dailyreward,
    nftperday,
    email,
  } = context;

  const [nextpage, setnextpage] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const url = "http://localhost:5000/appdata";
  //     const { data: res } = await axios.post(url, data);
  //     console.log(res.message);
  //   } catch (error) {
  //     if (
  //       error.response &&
  //       error.response.status >= 400 &&
  //       error.response.status <= 500
  //     ) {
  //       console.log(error.response.data.message);
  //     }
  //   }
  // };

  const nextstep = (e) => {
    e.preventDefault();

    if (logo == null) {
      alert("logo required");
    } else if (name == "AppName" || name == "") {
      alert("App Naem Required");
    } else if (
      headline == "Your website headlines goes here" ||
      headline == ""
    ) {
      alert("App headline required");
    } else if (
      caption == "the caption of your website goes here ." ||
      caption == ""
    ) {
      alert("App Caption required");
    } else if (subdomain == "subdomain" || caption == "") {
      alert("subdomain required");
    } else {
      setnextpage(true);
    }
  };

  const submitdata = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("wallet", wallet);
    formData.append("applogo", logo);
    formData.append("appname", name);
    formData.append("appcolor", themecolor);
    formData.append("appheadline", headline);
    formData.append("appcaption", caption);
    formData.append("appsubdomain", subdomain);

    formData.append("candymachineid", candymachin);
    formData.append("tokenfromwallet", tokenfromwallet);
    formData.append("nfts", nftperday);
    formData.append("rewards", dailyreward);
    formData.append("contactemails", email);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    await axios
      .post("http://localhost:5000/api", formData, config)
      .then((res) => {
        console.log(res);
        alert("data added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const sendRequest = async () => {
  //   await axios
  //     .post("http://localhost:5000/appdata", {
  //       apptheme: String(thememode),
  //       applogo: String(logo),
  //       appname: String(name),
  //       appcolor: String(themecolor),
  //       appheadline: String(headline),
  //       appcaption: String(caption),
  //       appsubdomain: String(subdomain),
  //     })
  //     .then((res) => res.data);
  // };

  // const handleSubmit = () => {
  //   sendRequest().then(alert("data added successfully"));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(name);
  //   console.log(logo);
  //   console.log(headline);
  //   console.log(caption);
  //   console.log(subdomain);
  //   console.log(themecolor);
  //   console.log(thememode);

  //   const res = await fetch("http://localhost:5000/appdata", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       apptheme: thememode,
  //       applogo: logo,
  //       appname: name,
  //       appcolor: themecolor,
  //       appheadline: headline,
  //       appcaption: caption,
  //       appsubdomain: subdomain,
  //     }),
  //   });

  //   const data = await res.json();
  //   console.log(data);

  //   if (res.status === 422 || !data) {
  //     console.log("error ");
  //     alert("error");
  //   } else {
  //     alert("data added successfully");
  //     console.log("data added");
  //   }
  // };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor:
          "linear-gradient(68.46deg, #1B194B 25.89%, #312677 72.06%)",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        paddingTop={4}
        sx={{
          height: "6%",
          width: "85%",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Typography sx={{ color: "#ffffff", mt: 2 }}>
          <IconButton
            sx={{ color: "#ffffff", mt: 2 }}
            onClick={() => setnextpage(false)}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
            fontWeight: "bold",
            mt: 2,
            fontFamily: "Poppins",
          }}
        >
          Back
        </Typography>
      </Box>

      <Box
        sx={{
          height: "60%",
          overflowY: "scroll",
          width: "100%",
          paddingLeft: "1rem",
          "&::-webkit-scrollbar": {
            width: "0.4em",
            height: "0.5em",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#4E39D7",
            outline: "1px solid slategrey",
          },
        }}
      >
        {nextpage ? <SidebarBody2 /> : <SidebarBody />}
      </Box>
      <Box
        sx={{ height: "20%", width: "80%", bottom: 0, borderColor: "white" }}
      >
        <Typography>
          {nextpage ? (
            <Button sx={styles} variant="contained" onClick={submitdata}>
              Publish
            </Button>
          ) : (
            <Button sx={styles} variant="contained" onClick={nextstep}>
              Next Step
            </Button>
          )}

          {Error && <Box sx={{ width: "80%", height: "20%" }}>{Error}</Box>}
          <Button mt={1} href="/appdata">
            check Db Data
          </Button>
        </Typography>
        <Box
          sx={{
            display: "flex",
            m: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: "#ffffff", me: 1 }}>
            Want a more functional site ?
          </Typography>
          <Link
            component="button"
            variant="body2"
            style={{
              textDecoration: "none",
              color: "#6D6DFC",
              fontSize: "12px",
            }}
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            <span> consult us now</span>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

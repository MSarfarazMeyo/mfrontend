import React, { useContext, useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import axios from "axios";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";
import "./style.css";
import { Outlet } from "react-router-dom";
import Mycontext from "../../Context/Mycontext";

export default function HearderComponent() {
  const domainname = window.location.pathname.split("/").pop();

  const [appdata, setappdata] = useState();

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
      .get(`http://localhost:5000/api/${domainname}`)
      .then((res) => setappdata(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, [domainname]);

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

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <>
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box className={classes.wrapper}>
        <Outlet />
      </Box>
    </>
  );
}

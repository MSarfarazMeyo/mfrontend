import React from "react";
import { Box } from "@material-ui/core";

import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";
import './style.css';
import { Outlet } from "react-router-dom";


export default function HearderComponent() {
  // const [LastSegment, setLastSegment] = useState(
  //   window.location.pathname.split("/").pop()
  // );

  // const [LastSegment2, setLastSegment2] = useState(window.location.pathname);
  // console.log("lastse", LastSegment);
  // console.log("lastse2", LastSegment2);

  // let Content = "";
  // switch (LastSegment) {
  //   case "dashboard":
  //     Content = <Dashboard />;
  //     break;
  //   case "blog":
  //     Content = <BlogPost />;
  //     break;
  //   case "link1":
  //     Content = <Link1 />;
  //     break;
  //   case "notification":
  //     Content = <Notification />;
  //     break;
  //   case "logout":
  //     Content = <Logoutmodel />;
  //     break;

  //   default:
  //     Content = <Dashboard />;
  // }

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
         
        <Outlet/>
      </Box>
    </>
  );
}

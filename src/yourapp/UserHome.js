import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { TabPanel } from "@mui/lab";
import Homepage from "./pages/Homepage";
import Dashboardpage from "./pages/Dashboardpage";
import Layout from "./components/Layout";
import { Button, IconButton } from "@mui/material";
import StayPrimaryLandscapeIcon from "@mui/icons-material/StayPrimaryLandscape";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import Mycontext from "../context/Mycontext";
import "../yourapp/style.css"
export default function UserHome() {
  const context = React.useContext(Mycontext);
  const { yourapporientation, yourappmobileview, mobileview } = context;

  var widthh = "100%";
  var alignn = null;
  let style = {
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "40px",

  }
  let styles2 = {
    color: "white",
    ms: 2

  }
  let style3 = {
    color: "#C615A9",
    ms: 2, me: 2,
  }
  if (mobileview ) {
    widthh = "400px";
    alignn = "center";
    const styles1 = {
      paddingLeft: "0px",
      paddingRight: "0px",
      paddingTop: "0px",
     

    }
    const style4 = {
      color: "#C615A9"
    }
    const style5 = {
      color: "white",
      
    }
    style3 = style5;
    styles2 = style4;

    style = styles1;



  }
  



  const [value, setValue] = React.useState("1");

  const [homepage, sethomepage] = React.useState(true);
  const [dashboard, setdashboard] = React.useState(false);
  const [currentButtonVariant, setCurrentButtonVariant] =
    React.useState("outlined");
  const [currentButtonVariant2, setCurrentButtonVariant2] =
    React.useState("contained");




  const styles = {
    width: "50%",
    heigth: "",
    border: "1px solid #44327E ",
    "&.MuiButton-contained": {
      background: " linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)",
      color: "white",
    },
    "&.MuiButton-outlined": {
      border: "2px solid  #44327E",
      color: "white",
    },
    "&.MuiButton-outlined:hover": {
      color: "#6D6DFC",
    }

  }
  const handleButtonVariantChange = () => {
    sethomepage(false);
    if (currentButtonVariant === "outlined") {
      setCurrentButtonVariant("contained");
      setCurrentButtonVariant2("outlined");
    } else {
      setCurrentButtonVariant("outlined");
      setCurrentButtonVariant2("outlined");
    }
  };
  const handleButtonVariantChange2 = () => {
    sethomepage(true);
    if (currentButtonVariant === "outlined") {
      setCurrentButtonVariant2("contained");
      setCurrentButtonVariant("outlined");
    } else {
      setCurrentButtonVariant2("contained");
      setCurrentButtonVariant("outlined");
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlemobile = () => {
    yourappmobileview(true);
    yourapporientation(true);
  };
  const handlelandscap = () => {
    yourappmobileview(false);
    yourapporientation(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "90%",

          m: "40px",
          justifyContent: "space-between",
        }}
      >
        <Box className="homep" >
          <Button
            variant={currentButtonVariant2}
            onClick={handleButtonVariantChange2}
            sx={styles}
          >
            HomePage
          </Button>
          <Button
            variant={currentButtonVariant}
            onClick={handleButtonVariantChange}
            sx={styles}
          >
            Dashboard
          </Button>
        </Box>
        <Box  className="m12" sx={{ paddingRight: "1.5rem" }}>


          <IconButton
            onClick={handlelandscap}
            className="m12"
            sx={style3}
          >
            <StayPrimaryLandscapeIcon  />
          </IconButton>

          <IconButton onClick={handlemobile} sx={styles2}>
            <MobileScreenShareIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={
        {
          width: "100%",
          display: "flex",
          justifyContent: "center",


        }
      }>
        {homepage ? (
          <Box width={widthh} className="homep1" sx={style} >
            <Layout body={<Homepage />} />
          </Box>
        ) : (
          <Box width={widthh} sx={style}>
            <Layout body={<Dashboardpage />} />
          </Box>
        )}
      </Box>
    </>

    // <Box sx={{ typography: "body", background: "#2B2D2F" }}>
    //   <TabContext value={value}>
    //     <Box sx={{ mt: 2, background: "#2B2D2F" }}>
    //       <TabList
    //         onChange={handleChange}
    //         aria-label="lab API tabs example"
    //         centered
    //         variant="standard"
    //       >
    //         <Tab
    //           sx={{
    //             border: 1,
    //             backgroundcolor: "#00000",
    //           }}
    //           label="Home"
    //           value="1"
    //         />
    //         <Tab label="Dashboard" value="2" />
    //       </TabList>
    //     </Box>

    //     <TabPanel value="1">
    //       <Layout body={<Homepage />} />
    //       {/*  */}
    //     </TabPanel>
    //     <TabPanel value="2">
    //       <Layout body={<Dashboardpage />} />
    //     </TabPanel>
    //   </TabContext>
    // </Box>
  );
}

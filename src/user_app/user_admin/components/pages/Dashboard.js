import { Grid, Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { DatePicker } from "antd";
import "antd/dist/reset.css";
import CanvasJSReact from "../../../user_home/assets/convas/canvasjs.react";
const { RangePicker } = DatePicker;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Dashboard = () => {
  const [homepage, sethomepage] = useState(true);
  const [currentButtonVariant, setCurrentButtonVariant] = useState("outlined");
  const [currentButtonVariant2, setCurrentButtonVariant2] =
    useState("contained");
  const style = {
    width: "50%",
    heigth: "",
    border: "1px solid #44327E ",
    "&.MuiButton-contained": {
      background:
        " linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)",
      color: "white",
    },
    "&.MuiButton-outlined": {
      border: "2px solid  #44327E",
      color: "white",
    },
    "&.MuiButton-outlined:hover": {
      color: "#6D6DFC",
    },
  };
  const styles = {
    width: "100%",

    "&.MuiButton-contained": {
      background: "#6D6DFC",
      color: "white",
    },
    "&.Mui-disabled": {
      background: "#242531 !important",
      color: "#a1a8b0",
    },
  };
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
  const options = {
    animationEnabled: true,
    backgroundColor: "transparent",

    axisX: {
      valueFormatString: "MMM",
      lineColor: "green",
      labelFontColor: "white",
    },
    toolTip: {
      enabled: true, //disable here
      animationEnabled: true, //disable here
    },
    axisY: {
      labelFontColor: "white",
      lineColor: "transparent",
    },
    data: [
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "MMMM",
        lineColor: "green",
        type: "spline",
        markerColor: "white",
        color: "white",
        dataPoints: [
          { x: new Date(2017, 0), y: 0 },
          { x: new Date(2017, 1), y: 0 },
          { x: new Date(2017, 2), y: 87 },
          { x: new Date(2017, 3), y: 0 },
          { x: new Date(2017, 4), y: 0 },
          { x: new Date(2017, 5), y: 0 },
          { x: new Date(2017, 6), y: 0 },
          { x: new Date(2017, 7), y: 0 },
          { x: new Date(2017, 8), y: 0 },
          { x: new Date(2017, 9), y: 0 },
          { x: new Date(2017, 10), y: 0 },
          { x: new Date(2017, 11), y: 0 },
        ],
      },
    ],
  };
  const options1 = {
    animationEnabled: true,
    backgroundColor: "transparent",

    axisX: {
      valueFormatString: "MMM",
      lineColor: "green",
      labelFontColor: "white",
    },
    toolTip: {
      enabled: true, //disable here
      animationEnabled: true, //disable here
    },
    axisY: {
      labelFontColor: "white",
      lineColor: "transparent",
    },
    data: [
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "MMMM",
        lineColor: "green",
        type: "spline",
        markerColor: "white",
        color: "white",
        dataPoints: [
          { x: new Date(2017, 0), y: 0 },
          { x: new Date(2017, 1), y: 57 },
          { x: new Date(2017, 2), y: 87 },
          { x: new Date(2017, 3), y: 85 },
          { x: new Date(2017, 4), y: 34 },
          { x: new Date(2017, 5), y: 0 },
          { x: new Date(2017, 6), y: 0 },
          { x: new Date(2017, 7), y: 0 },
          { x: new Date(2017, 8), y: 0 },
          { x: new Date(2017, 9), y: 0 },
          { x: new Date(2017, 10), y: 0 },
          { x: new Date(2017, 11), y: 0 },
        ],
      },
    ],
  };

  return (
    <Grid container width={"100%"}>
      <Grid item xs={12}>
        <Box
          p={"40px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "initial",
            borderBottom: "3px solid #4E39D7",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "#a1a8b0",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "14px",
                textTransform: "uppercase",
              }}
            >
              NO. OF NFT STAKED TODAY
            </Typography>

            <Typography
              sx={{
                color: "#edf0fc",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "32px",
                marginTop: "12px",
              }}
            >
              {" "}
              O
            </Typography>
            <Button variant="contained" disabled sx={styles}>
              {" "}
              -- Vs LAST DAY
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "#a1a8b0",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "14px",
                textTransform: "uppercase",
              }}
            >
              {" "}
              % OF NFT STAKED TODAY{" "}
            </Typography>

            <Typography
              sx={{
                color: "#edf0fc",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "32px",
                marginTop: "12px",
              }}
            >
              {" "}
              O.OO%
            </Typography>
            <Button variant="contained" disabled sx={styles}>
              {" "}
              -- Vs LAST DAY
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "#a1a8b0",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "14px",
                textTransform: "uppercase",
              }}
            >
              {" "}
              Rewards Pool balance{" "}
            </Typography>

            <Typography
              sx={{
                color: "#edf0fc",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "32px",
                marginTop: "12px",
              }}
            >
              {" "}
              0{" "}
              <span style={{ fontSize: "12px", lineHeight: "12px" }}>
                $FlINT
              </span>
            </Typography>
            <Button variant="contained" sx={style}>
              {" "}
              Top up
            </Button>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "#a1a8b0",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "14px",
                textTransform: "uppercase",
              }}
            >
              {" "}
              sucpicious wallet{" "}
            </Typography>

            <Typography
              sx={{
                color: "#edf0fc",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "32px",
                marginTop: "12px",
              }}
            >
              {" "}
              O
            </Typography>
            <Button variant="contained" disabled sx={styles}>
              {" "}
              Check
            </Button>
          </Box>
        </Box>
        <Grid
          item
          xs={12}
          width={"100%"}
          sx={{ borderBottom: "3px solid #4E39D7" }}
        >
          <Box
            paddingTop={2}
            paddingBottom={4}
            paddingRight={4}
            paddingLeft={4}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box sx={{ width: "50%", alignItems: "center", mt: 2 }}>
                <Button
                  variant={currentButtonVariant2}
                  onClick={handleButtonVariantChange2}
                  sx={style}
                >
                  STAKED NFT
                </Button>
                <Button
                  variant={currentButtonVariant}
                  onClick={handleButtonVariantChange}
                  sx={style}
                >
                  TOKEN DISTRIBUTION
                </Button>
              </Box>
              <Box
                sx={{
                  width: "50%",
                  alignItems: "center",
                  mt: 2,
                  display: "flex",
                  justifyContent: "right",
                }}
              >
                <Typography sx={{ color: "white" }} pr={2}>
                  SORT BY
                </Typography>
                <RangePicker />
              </Box>
            </Box>
            <Box sx={{ width: "100%", mt: 2 }}>
              {homepage ? (
                <CanvasJSChart options={options} />
              ) : (
                <CanvasJSChart options={options1} />
              )}
            </Box>
          </Box>
        </Grid>

        <Box
          p={"40px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "",
            alignItems: "initial",
            borderBottom: "3px solid #4E39D7",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginRight: "1rem",
            }}
          >
            <Typography
              sx={{
                color: "#a1a8b0",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "14px",
                textTransform: "uppercase",
              }}
            >
              NO. OF NFT STAKED TODAY
            </Typography>

            <Typography
              sx={{
                color: "#edf0fc",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "32px",
                marginTop: "12px",
              }}
            >
              {" "}
              O
            </Typography>
            <Button variant="contained" disabled sx={styles}>
              {" "}
              -- Vs LAST DAY
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "8rem",
            }}
          >
            <Typography
              sx={{
                color: "#a1a8b0",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "14px",
                textTransform: "uppercase",
              }}
            >
              {" "}
              % OF NFT STAKED TODAY{" "}
            </Typography>

            <Typography
              sx={{
                color: "#edf0fc",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "32px",
                marginTop: "12px",
              }}
            >
              {" "}
              O.OO%
            </Typography>
            <Button variant="contained" disabled sx={styles}>
              {" "}
              -- Vs LAST DAY
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

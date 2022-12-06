import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { blue, green, lightBlue, red, teal } from "@material-ui/core/colors";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useStyles } from "../BodyStyles";
import GraphComponent from "../../../Common/GraphComponent";
import BlogGraph from "./BlogGraph";
import Section3 from "./Section3";
import { fakeArrayGenrator } from "../../../Common/fakeDataGenetator";
import { PageHeader } from "../../../Common/Components";
import axios from "axios";
import Mycontext from "../../../context/Mycontext";

export default function Dashboard() {
  const context = useContext(Mycontext);
  const { latestentriesmethod, alltentries, alltentriesmethod } = context;

  const classes = useStyles();
  const getUserData = async () => {
    const res = await axios.get(`http://localhost:5000/api`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 401 || !res.data) {
      console.log("errror");
    } else {
      const data2 = res.data.data;
      alltentriesmethod(data2);
      latestentriesmethod(data2.slice(-2).reverse());
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const DisplayData = [
    {
      label: "Total Entries",
      value: alltentries?.length,
      icon: <ArrowDropUpIcon />,
      iconLabel: "20%",
    },
    {
      label: "Others",

      icon: <ArrowDropUpIcon />,
    },
    {
      label: "Others",

      icon: <ArrowDropDownIcon />,
    },
    {
      label: "Others",

      icon: <ArrowDropDownIcon />,
    },
  ];

  //updating the graph

  return (
    <Box mt={2}>
      {/* //title section  */}
      <PageHeader label="Dashboard" title="Blog Overview" />

      <Grid container spacing={1} className={classes.section}>
        {DisplayData.map((item, i) => (
          <Grid key={i} item xs={6} sm={3} md={3}>
            <Card>
              <CardContent className={classes.displayCard}>
                <canvas
                  id={item.label}
                  className={classes.displayCardGraph}
                ></canvas>
                <Box className={classes.cardDataContent}>
                  <Typography
                    variant="subtitle2"
                    className={classes.cardLabel}
                    gutterBottom={true}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h2"
                    className={classes.cardHeader}
                  >
                    {item.value}
                  </Typography>
                  <Box className={classes.ratio}>
                    <Button
                      startIcon={item.icon}
                      size="small"
                      style={{
                        color: item.label[0] === "P" ? green[700] : red[400],
                        fontSize: "1.1rem",
                      }}
                    >
                      {item.iconLabel}
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* section blog graph  */}
      {/* <BlogGraph /> */}
      <Section3 />
    </Box>
  );
}

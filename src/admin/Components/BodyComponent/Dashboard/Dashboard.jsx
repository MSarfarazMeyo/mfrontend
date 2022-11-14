import React, { useEffect, useState } from "react";
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

export default function Dashboard() {
  const classes = useStyles();
  const [hasFetched, setHasFetched] = useState(false);

  const [data, setData] = useState([]);
  const getUserData = async () => {
    const res = await axios.get(`http://localhost:5000/api`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 401 || !res.data) {
      console.log("errror");
    } else {
      setData(res.data.data);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const DisplayData = [
    {
      label: "Total Entries",
      value: data.length,
      icon: <ArrowDropUpIcon />,
      iconLabel: "70%",
    },
    {
      label: "Others",
      value: "180",
      icon: <ArrowDropUpIcon />,
      iconLabel: "5.3%",
    },
    {
      label: "Others",
      value: "450",
      icon: <ArrowDropDownIcon />,
      iconLabel: "4.1%",
    },
    {
      label: "Others",
      value: "37450",
      icon: <ArrowDropDownIcon />,
      iconLabel: "2.5%",
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

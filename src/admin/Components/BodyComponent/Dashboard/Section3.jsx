import React, { useContext, useEffect, useState } from "react";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../BodyStyles";
import { GetPosts, GetUsers } from "../../../Common/requestApi";
import axios from "axios";
import TableDataShow from "./TableDataShow";
import Mycontext from "../../../context/Mycontext";

export default function Section3() {
  const classes = useStyles();

  const context = useContext(Mycontext);
  const { latestentries } = context;

  // useEffect(() => {
  //   if (!hasFetched) {
  //     GetPosts({ limit: 5 }).then(({ data: { data } }) => {
  //       setPosts(data);
  //       console.log(data);
  //     });
  //     GetUsers({ limit: 5 }).then(({ data: { data } }) => {
  //       setAuthors(data);
  //       console.log("setAuthors", data);
  //     });
  //     setHasFetched(true);
  //   }
  // }, [hasFetched]);

  return (
    <Grid container className={classes.section} spacing={1}>
      {/* <Grid item xs={12} sm={5} md={5}>
        <Card component={Paper}>
          <CardContent>
            <Typography variant='h6' className={classes.cardTitle} align='left'>
              Top Author
            </Typography>
          </CardContent>
          <Divider />
          <List>
            {authors.length === 0 ? (
              <Box className={classes.progressbarContainer}>
                <CircularProgress color='primary' />
              </Box>
            ) : (
              authors.map((item, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <Avatar
                      src={item.picture}
                      alt={item.text}
                      className={classes.avatar}></Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={item.firstName}
                    secondary={item.email}></ListItemText>
                </ListItem>
              ))
            )}
          </List>
        </Card>
      </Grid> */}
      {/* usedByDevices */}
      <Grid item xs={12} sm={12} md={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" className={classes.cardTitle} align="left">
              Latest Entries
            </Typography>
          </CardContent>
          <Divider />
          <TableDataShow latestData={latestentries} />
        </Card>
      </Grid>
    </Grid>
  );
}

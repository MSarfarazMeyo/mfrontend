import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import { PageHeader } from "../../Common/Components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { GetPosts } from "../../Common/requestApi";
import { useStyles } from "./BodyStyles";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableDataShow from "./Dashboard/TableDataShow";
import Mycontext from "../../context/Mycontext";

export default function BlogPost() {
  const classes = useStyles();
  const [Fetched, setFetched] = useState(false);
  const [Posts, setPosts] = useState([]);
  const context = useContext(Mycontext);
  const { alltentries } = context;

  //calling posts api
  // useEffect(() => {
  //   !Fetched &&
  //     GetPosts({ limit: 25 }).then(({ data: { data } }) => {
  //       setPosts(data);
  //       setFetched(true);
  //       console.log("dataPost:", data);
  //     });
  // }, [Fetched]);

  // https.get(`${baseUrl}/post?limit=${limit}`);

  return (
    <Box mt={2}>
      <PageHeader label="" title="All Entries" />
      {/* <Grid container spacing={1}>
        {data.length <= 0 ? (
          <Typography component="p" align="center" style={{ width: "100%" }}>
            <CircularProgress color="primary" />
          </Typography>
        ) : (
          data.map((item, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={4}
              style={{ maxWidth: "400px", margin: "10px auto" }}
            >
              <Card>
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label={item.appname}
                      src={`http://localhost:5000/${item.applogo}`}
                    ></Avatar>
                  }
                  title={item.appname}
                  // subheader={'Posted on'+ item.owner.email}
                />

                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="body2"
                  >
                    {item.appsubdomain}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    startIcon={<FavoriteIcon color="secondary" />}
                    size="small"
                    color="secondary"
                  >
                    {item.appheadline}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid> */}
      <TableDataShow latestData={alltentries} />
    </Box>
  );
}

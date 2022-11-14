import React, { useEffect, useState } from "react";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
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

export default function Section3() {
  const classes = useStyles();
  const [hasFetched, setHasFetched] = useState(false);
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);

  const [data, setData] = useState([]);
  console.log(data);

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

      setData(data2.slice(-2).reverse());
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

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

          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Logo</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Headline</TableCell>
                  <TableCell>Caption</TableCell>
                  <TableCell>Subdomain</TableCell>
                  <TableCell>Color</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Avatar
                        width="10%"
                        alt="Cindy Baker"
                        src={`http://localhost:5000/${row.applogo}`}
                      />
                    </TableCell>
                    <TableCell>{row.appname}</TableCell>
                    <TableCell>{row.appheadline}</TableCell>
                    <TableCell>{row.appcaption}</TableCell>
                    <TableCell>{row.appsubdomain}</TableCell>
                    <TableCell align="center">
                      <Box width="20px%" height="15px" bgcolor={row.appcolor}>
                        color
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    </Grid>
  );
}

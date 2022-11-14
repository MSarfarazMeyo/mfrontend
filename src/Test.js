import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

// const URL = "http://localhost:5000/appdata";
// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// };
// const Test = () => {
//   const [data, setdata] = useState();
//   useEffect(() => {
//     fetchHandler().then((data) => setdata(data.userdata));
//   }, []);
//   // console.log(books);
//   // console.log(alldata[0]);

const Test = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const getUserData = async () => {
    const res = await axios.get("http://localhost:5000/api", {
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

  return (
    // <h1>h</h1>
    <Grid container>
      {data.map((elem) => {
        return (
          <Grid
            height="100px"
            item
            xs={12}
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
          >
            <Typography width="15%" variant="body">
              {elem._id}
            </Typography>
            <Typography width="10%">{elem.apptheme}</Typography>

            <Avatar
              width="10%"
              alt="Cindy Baker"
              src={`http://localhost:5000/${elem.applogo}`}
            />
            <Typography width="20%" variant="body">
              {elem.applogo}
            </Typography>

            <Typography width="5%">{elem.appname}</Typography>
            <Box width="10%" height="30px" bgcolor={elem.appcolor}>
              color
            </Box>
            <Typography width="10%" variant="body">
              {elem.appheadline}
            </Typography>
            <Typography width="10%" variant="body">
              {elem.appcaption}
            </Typography>

            <Typography width="10%" variant="body">
              {elem.appsubdomain}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Test;

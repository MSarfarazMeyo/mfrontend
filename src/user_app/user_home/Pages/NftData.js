import { Box, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import axios from "axios";

const NftData = ({ data }) => {
  const [nftdata, setnftdata] = useState();

  console.log(data, "data");

  const getapi = () => {
    if (data) {
      fetch(data)
        .then((response) => response.json())
        .then((res) => {
          // console.log(res, "response");
          setnftdata(res);
        });
    }
  };

  useEffect(() => {
    getapi();
  }, [data]);

  return (
    <>
      <Box borderBottom={1} borderColor="white" height="300px" width="250px">
        <Box
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box height="70%" width="100%" bgcolor="blue">
            <img
              width="100%"
              height="98%"
              src={nftdata?.image}
              alt="yourNft"
              style={{
                marginLeft: "5px",
              }}
            />
          </Box>
          <Box display="flex" width="100%" flexDirection="column" mt={1}>
            <Typography variant="body" color="white">
              {nftdata?.name}
            </Typography>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              mt={1}
            >
              <Typography variant="body" color="white">
                Rewards
              </Typography>
              <Typography variant="body" color="white">
                349674
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NftData;

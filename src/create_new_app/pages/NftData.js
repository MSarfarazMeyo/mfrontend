import { Box, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import axios from "axios";

const NftData = ({ data }) => {
  const [name, setname] = useState();

  console.log(data, "data");

  const getapi = () => {
    if (data) {
      fetch(data.uri)
        .then((response) => response.json())
        .then((res) => {
          // console.log(res, "response");
          setname(res);
        });
    }
  };

  useEffect(() => {
    getapi();
  }, [data]);

  console.log(name, "name");

  return (
    <>
      {name && (
        <Box
          width="100%"
          height="250px"
          display="flex"
          flexDirection="column"
          borderBottom={1}
        >
          <img
            src={name.image}
            alt="image no found"
            loading="lazy"
            width="100%"
            height="80%"
          />

          <Typography fontWeight="bold" width="100%" height="10%">
            {name.name}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default NftData;

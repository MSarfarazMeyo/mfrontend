import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import Mycontext from "../../context/Mycontext";

const Footer = () => {
  const context = useContext(Mycontext);
  const { themecolor } = context;
  const styles={
         alignItems:"center",
         display:"flex",
         justifyContent:"space-between",
         border:"2px solid #6D6DFC"

  }

  return (
    <Box
     
      sx={styles}
    >
      <Typography marginLeft={2} variant="body">
        {" "}
        MekkaStack
      </Typography>
      <Typography marginRight={2} color={themecolor} variant="caption">
        {" "}
        Powered By MekkaStack
      </Typography>
    </Box>
  );
};

export default Footer;

import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { CircularProgress } from "@mui/material";

export default function Animations(props) {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" gap={2} flexWrap="wrap">
        <Box width={props.value}>
          <Skeleton variant="rectangular" width="100%" height={150} />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
        <Box width={props.value}>
          <Skeleton variant="rectangular" width="100%" height={150} />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      </Box>
      <CircularProgress />
    </Box>
  );
}

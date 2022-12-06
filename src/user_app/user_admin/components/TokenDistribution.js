import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, Typography, Box, Button, Input } from "@mui/material";
import { DatePicker } from "antd";
import { DataGrid } from "@mui/x-data-grid";

import "antd/dist/reset.css";

const { RangePicker } = DatePicker;
const styles = {
  color: "#edf0fc",
  fontFamily: "ClashDisplay,sans-serif",
  fontSize: "28px",
  fontWeight: "500",
  lineHeight: "28px",
};
const cut = {
  color: "white",
  "&.MuiDataGrid-toolbarContainer": {
    color: "white",
  },
};
const style = {
  width: "50%",
  heigth: "",
  border: "1px solid #44327E ",
  "&.MuiButton-contained": {
    background: " linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)",
    color: "white",
  },
  "&.MuiButton-outlined": {
    border: "2px solid  #44327E",
    color: "white",
  },
  "&.MuiButton-outlined:hover": {
    color: "#6D6DFC",
  },
};
const styles2 = {
  width: "70%",
  color: "white ",
  "&.MuiInput-root": {
    borderBottom: "2px solid #4E39D7",
    color: "white ",
    fontFamily: "Poppins",
    background: "#242531!important",
  },
};
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const TokenDistribution = () => {
  return (
    <Grid container width={"100%"}>
      <Grid
        item
        xs={12}
        width={"100%"}
        sx={{ borderBottom: "3px solid #4E39D7" }}
      >
        <Typography sx={styles} padding={4}>
          {" "}
          TokenDistribution{" "}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          p={"40px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "start",
            borderBottom: "3px solid #4E39D7",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "#a1a8b0",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "14px",
                textTransform: "uppercase",
              }}
            >
              {" "}
              Rewards Pool balance{" "}
            </Typography>

            <Typography
              sx={{
                color: "#edf0fc",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "32px",
                marginTop: "12px",
              }}
            >
              {" "}
              0{" "}
              <span style={{ fontSize: "12px", lineHeight: "12px" }}>
                $FlINT
              </span>
            </Typography>
            <Button variant="contained" sx={style}>
              {" "}
              Top up
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "#a1a8b0",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "14px",
                textTransform: "uppercase",
              }}
            >
              {" "}
              Distribution plan{" "}
            </Typography>

            <Typography
              sx={{
                color: "#edf0fc",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "32px",
                marginTop: "12px",
              }}
            >
              {" "}
              <span style={{ fontSize: "12px", lineHeight: "12px" }}>AVG.</span>
              0.001
              <span style={{ fontSize: "12px", lineHeight: "12px" }}>
                $FlINT.NFT?DAY
              </span>
            </Typography>
            <Button variant="contained" sx={style}>
              {" "}
              Edit
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "#a1a8b0",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "14px",
                textTransform: "uppercase",
              }}
            >
              {" "}
              sucpicious wallet{" "}
            </Typography>

            <Typography
              sx={{
                color: "#edf0fc",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "32px",
                marginTop: "12px",
              }}
            >
              {" "}
              0
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sx={{ width: "100%" }}>
        <Box
          paddingTop={2}
          paddingBottom={4}
          paddingRight={4}
          paddingLeft={4}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ width: "50%", mt: 2, display: "flex" }}>
            <Input
              sx={styles2}
              type="text"
              placeholder=" Search Wallets"
              variant="outlined"
            />
            <SearchIcon
              marginLeft={4}
              fontSize="large"
              sx={{ color: "#4E39D7", alignSelf: "center" }}
            />
          </Box>
          <Box
            sx={{
              width: "50%",
              alignItems: "center",
              mt: 2,
              display: "flex",
              justifyContent: "right",
            }}
          >
            <Typography sx={{ color: "white" }} pr={2}>
              SORT BY
            </Typography>
            <RangePicker />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} paddingRight={4} paddingLeft={4}>
        <Box sx={{ width: "100%", height: 400 }}>
          <DataGrid
            sx={cut}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TokenDistribution;

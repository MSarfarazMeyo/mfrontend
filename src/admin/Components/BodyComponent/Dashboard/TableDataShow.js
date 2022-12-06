import React from "react";
import axios from "axios";
import {
  Avatar,
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
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0px solid blue",
  borderRadius: "50px",
  boxShadow: 24,
  p: 4,
};

const TableDataShow = ({ latestData }) => {
  const [open, setOpen] = React.useState(false);
  const [appdomainname, setappdomainname] = React.useState();
  const [nametodelete, setnamenametodelete] = React.useState();

  const [stat, handlestat] = React.useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlestates = (name, stats) => {
    setappdomainname(name);
    handlestat(stats);
    handleOpen();
  };

  const handledeletestates = (name) => {
    setnamenametodelete(name);

    handleOpen();
  };

  const handlestatus = async (domainname, stat) => {
    const updatedData = { status: !stat };
    await axios
      .patch(`http://localhost:5000/api/${domainname}`, updatedData)
      .then((res) => {
        alert("updated sucessfully");
        handleClose();
      })
      .catch((error) => console.log(error));
  };

  const handledelete = async (nametd) => {
    await axios
      .delete(`http://localhost:5000/api/${nametd}`)
      .then((res) => {
        console.log(res);
        alert("data deleted successfully");
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Please Confirm ..
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}
            >
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => handlestatus(appdomainname, stat)}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>

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
              <TableCell>CandyMachineId</TableCell>
              <TableCell>WalletAddress</TableCell>
              <TableCell>EmailAddress</TableCell>

              <TableCell>User Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {latestData?.map((row) => (
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
                <TableCell>{row.appcolor}</TableCell>
                <TableCell>{row.candymachineid.slice(0, 8)}....</TableCell>
                <TableCell>{row.wallet.slice(0, 8)}....</TableCell>
                <TableCell>{row.contactemails}</TableCell>

                <TableCell>
                  {row.status ? (
                    <Button
                      color="success"
                      onClick={() => handlestates(row.appsubdomain, row.status)}
                      sx={{ width: "35px", height: "25px" }}
                      variant="contained"
                    >
                      Active
                    </Button>
                  ) : (
                    <Button
                      color="warning"
                      onClick={() => handlestates(row.appsubdomain, row.status)}
                      sx={{ width: "35px", height: "25px" }}
                      variant="contained"
                    >
                      Paused
                    </Button>
                  )}

                  <Button
                    color="error"
                    onClick={() => handledelete(row.appsubdomain)}
                    sx={{ width: "35px", height: "25px", mt: 1 }}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableDataShow;

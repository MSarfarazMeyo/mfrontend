import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Stack } from "@mui/material";
import Mycontext from "../Context/Mycontext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import img1 from "../assets/1.svg";
import img2 from "../assets/2.svg";
import img3 from "../assets/3.svg";
import img4 from "../assets/4.png";
import img5 from "../assets/5.svg";
import img6 from "../assets/6.png";
import img7 from "../assets/7.svg";
import img9 from "../assets/9.png";
import img10 from "../assets/10.svg";
import img11 from "../assets/11.svg";

export default function WalletModel() {
  const context = React.useContext(Mycontext);
  const { walletmodel, handlewallet } = context;
  const [showmore, setshowmore] = React.useState(false);
  const handlemodel = () => {
    walletmodel(false);
    setOpen(false);
  };

  const handleshow = () => {
    setshowmore(true);
  };

  const handleWallete = () => {
    setOpen(false);
    handlewallet(true);
  };

  const [open, setOpen] = React.useState(true);

  const handleClose = () => setOpen(true);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#141320",
            borderRight: "1px solid #6D6DFB",
            borderTop: "1px solid #6D6DFB",
            borderLeft: "5px solid #6D6DFB",
            borderBottom: "5px solid #6D6DFB",
            boxShadow: 24,
            p: 2,
          }}
        >
          <Box display="flex" color="white" justifyContent="space-between">
            <Typography variant="body" component="h2">
              Connect Your Wallet
            </Typography>
            <IconButton onClick={handlemodel}>
              <CloseIcon color="primary" fontSize="large" />
            </IconButton>
          </Box>
          <Typography
            id="modal-modal-title"
            variant="body"
            component="body"
            mt={-2}
            color="#808080"
          >
            Choose one of our available wallet providers
          </Typography>
          <NavLink to="connect" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              onClick={handleWallete}
              startIcon={<img src={img1} width="15px" height="15px" />}
              sx={{
                width: "100%",
                marginTop: 5,
                "&.MuiButton-contained": {
                  background: "#242531",
                  color: "white",
                },
              }}
            >
              Phantom
            </Button>
          </NavLink>

          <Button
            variant="contained"
            startIcon={<img src={img2} width="15px" height="15px" />}
            sx={{
              width: "100%",
              marginTop: 1,
              marginBottom: 5,
              "&.MuiButton-contained": {
                background: "#242531",
                color: "white",
              },
            }}
          >
            Ledger
          </Button>

          <Box>
            {showmore ? (
              <Stack
                width="100%"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                flexWrap="wrap"
                gap={2}
                mb={2}
              >
                <Box
                  width="45%"
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  color="white"
                  bgcolor="#242531"
                >
                  <Button
                    sx={{ color: "white" }}
                    startIcon={<img src={img3} width="15px" height="15px" />}
                  >
                    Solflare
                  </Button>
                  <ErrorOutlineIcon fontSize="small" />
                </Box>
                <Box
                  width="45%"
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  color="white"
                  bgcolor="#242531"
                >
                  <Button
                    sx={{ color: "white" }}
                    startIcon={<img src={img4} width="15px" height="15px" />}
                  >
                    Sollet
                  </Button>
                  <ErrorOutlineIcon fontSize="small" />
                </Box>
                <Box
                  width="45%"
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  color="white"
                  bgcolor="#242531"
                >
                  <Button
                    sx={{ color: "white" }}
                    startIcon={<img src={img5} width="15px" height="15px" />}
                  >
                    Torus
                  </Button>
                  <ErrorOutlineIcon fontSize="small" />
                </Box>
                <Box
                  width="45%"
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  color="white"
                  bgcolor="#242531"
                >
                  <Button
                    sx={{ color: "white" }}
                    startIcon={<img src={img6} width="15px" height="15px" />}
                  >
                    Glow
                  </Button>
                  <ErrorOutlineIcon fontSize="small" />
                </Box>
                <Box
                  width="45%"
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  color="white"
                  bgcolor="#242531"
                >
                  <Button
                    sx={{ color: "white" }}
                    startIcon={<img src={img7} width="15px" height="15px" />}
                  >
                    MathWallet
                  </Button>
                  <ErrorOutlineIcon fontSize="small" />
                </Box>
                <Box
                  width="45%"
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  color="white"
                  bgcolor="#242531"
                >
                  <Button
                    sx={{ color: "white" }}
                    startIcon={<img src={img9} width="15px" height="15px" />}
                  >
                    Solong
                  </Button>
                  <ErrorOutlineIcon fontSize="small" />
                </Box>
                <Box
                  width="45%"
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  color="white"
                  bgcolor="#242531"
                >
                  <Button
                    sx={{ color: "white" }}
                    startIcon={<img src={img10} width="15px" height="15px" />}
                  >
                    Coin98
                  </Button>
                  <ErrorOutlineIcon fontSize="small" />
                </Box>
                <Box
                  width="45%"
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  color="white"
                  bgcolor="#242531"
                >
                  <Button
                    sx={{ color: "white" }}
                    startIcon={<img src={img11} width="15px" height="15px" />}
                  >
                    Slope
                  </Button>
                  <ErrorOutlineIcon fontSize="small" />
                </Box>

                <Button
                  sx={{ marginTop: 5 }}
                  onClick={() => setshowmore(false)}
                  endIcon={<ArrowDropUpIcon />}
                  color="success"
                >
                  HIDE OPTIONS
                </Button>
              </Stack>
            ) : (
              <Button
                color="success"
                onClick={handleshow}
                endIcon={<ArrowDropDownIcon />}
              >
                SHOW MORE OPTIONS
              </Button>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

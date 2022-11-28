import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import React, { useContext, useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Typography,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  IconButton,
} from "@mui/material";
import Mycontext from "../context/Mycontext";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { SketchPicker } from "react-color";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import * as SPLToken from "@solana/spl-token";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";

const SidebarBody2 = () => {
  const context = useContext(Mycontext);
  const {
    candymachin,
    candymachinmethod,
    verified,
    tokenfromwalletmethod,
    dailyrewardmethod,
    nftperdaymethod,
    emailmethod,
  } = context;

  const [em1, setem1] = useState(false);
  const [em2, setem2] = useState(false);
  const [em3, setem3] = useState(true);
  const [email, setemail] = useState("");
  const [email1, setemail1] = useState("");
  const [email2, setemail2] = useState("");
  const [cmid, setcmid] = useState("");
  const [dsable, setdsable] = useState(true);
  const { wallet, publicKey } = useWallet();
  const [splTokens, setSplTokens] = useState();
  const [candyNfts, setCandyNfts] = useState([]);
  const [verify, setverify] = useState(false);
  const [show, setshow] = useState(false);

  const [nftperday, setnftperday] = useState();

  const connection = new Connection(clusterApiUrl("devnet"));
  const metaplex = new Metaplex(connection);

  const getNfts = async () => {
    console.log("working");
    if (publicKey) {
      console.log(" my public key", publicKey.toString());

      const tokens = await connection.getTokenAccountsByOwner(publicKey, {
        programId: TOKEN_PROGRAM_ID,
      });

      const nfts = await metaplex.nfts().findAllByCreator({
        creator: new PublicKey("3oks3FULunJG1DHvDAk6L5tVVuPQbMmsjsPzYXvXT35z"),
      });

      setCandyNfts(nfts);

      console.log(nfts, "candynfts");

      console.log(tokens, "tokens aa");
      setSplTokens(tokens);
    }
  };

  React.useEffect(() => {
    getNfts();
  }, [wallet, publicKey, candymachin]);

  const handleemail = (event) => {
    setemail(event.target.value);
    emailmethod(event.target.value);
  };

  const handlenft = (event) => {
    setnftperday(event.target.value);
    nftperdaymethod(event.target.value);
  };

  const handleemail1 = (event) => {
    setemail1(event.target.value);
  };

  const handleemail2 = (event) => {
    setemail2(event.target.value);
  };

  const handleemailshow = () => {
    setem1(true);
    setem3(false);
  };
  const handleemailshow2 = () => {
    setem2(true);
    setem3(true);
  };

  const handlecandymachine = () => {
    if (cmid.length >= 5) {
      candymachinmethod(cmid);
    }
  };

  const handlefileshow = () => {
    setshow(true);
  };

  const styles = {
    width: "50%",
    border: "1px solid #44327E ",
    "&.MuiButton-contained": {
      background:
        " linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)",
      color: "White",
    },
    "&.MuiButton-outlined": {
      border: "1px solid #44327E ",
      color: "white",
      fontFamily: "Poppins",
    },
    "&.MuiButton-outlined:hover": {
      color: "#6D6DFC",
    },
  };
  const styles2 = {
    width: "100%",
    "&.MuiButton-outlined": {
      border: "2px solid #44327E ",
      color: "white ",
      fontFamily: "Poppins",
    },
  };

  const [twallet, settwallet] = React.useState("");

  const handleChange = (event) => {
    settwallet(event.target.value);
    tokenfromwalletmethod(event.target.value);
  };

  const handleChange1 = (event) => {
    setcmid(event.target.value);
    if (event.target.value.length >= 5) {
      setdsable(false);
    } else if (event.target.value.length <= 4) {
      setdsable(true);
    }
  };

  React.useEffect(() => {
    const fetchToken = async () => {
      if (splTokens) {
        splTokens.value.forEach(async (token) => {
          console.log(token.pubkey.toBase58());
          const accountData = await connection.getAccountInfo(token.pubkey);
          console.log(accountData, "account data");

          const accountInfo = SPLToken.AccountLayout.decode(accountData.data);
          console.log(`mint: ${new PublicKey(accountInfo.mint)}`);
          console.log(accountInfo, "account info");
          let tokenmetaPubkey = await Metadata.data(
            new PublicKey(accountInfo.mint)
          );

          const tokenmeta = await Metadata.load(connection, tokenmetaPubkey);
          console.log(tokenmeta, "token meta");
          // console.log(`amount: ${SPLToken.u64.fromBuffer(accountInfo.amount)}`);
        });
      }
    };
    fetchToken();
  }, [splTokens]);

  return (
    <div>
      <Box
        paddingBottom={4}
        paddingRight={4}
        paddingLeft={4}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontWeight: "500",
            color: "white",
            width: "100%",
            mb: 2,
            fontFamily: "Poppins",
            fontSize: "32px",
            lineHeight: "32px",
          }}
          variant="h3"
        >
          Set the token distribution rule.
        </Typography>

        <Box
          sx={{
            width: "95%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: 2,
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            CANDY MACHINE ID OF YOUR NFT
            <span style={{ color: "green" }}> *</span>
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
              fontFamily: "Poppins",
            }}
            variant="body2"
          >
            Verify your NFTs through Candy Machine ID
          </Typography>
          <Box>
            <TextField
              sx={{
                width: "45%",
                mt: 1,

                background: "#36454F",
                borderBottom: "2px solid #44327E",
                borderRadius: "2px",
                fontFamily: "Poppins",
              }}
              id="outlined-name"
              label="enter candy machine id"
              variant="outlined"
              name="candy machine Id"
              value={cmid}
              onChange={handleChange1}
            />

            <Button
              variant="contained"
              disabled={dsable}
              onClick={handlecandymachine}
              sx={{
                width: "45%",
                height: "60px",
                mt: 1,
                ml: 1,
              }}
            >
              Verify
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "95%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: 2,
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            THE TOKEN TO BE DISTRIBUTED{" "}
            <span style={{ color: "green" }}> *</span>
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
              fontFamily: "Poppins",
            }}
            variant="body2"
          >
            If you would like to issue new tokens, please consult us.
          </Typography>

          {/* <TextField
            sx={{
              width: "100%",
              mt: 1,
              background: "#36454F",
              borderBottom: "2px solid #44327E",
              borderRadius: "2px",
              fontFamily: "Poppins",
            }}
            id="outlined-name"
            label="Pride balance"
            variant="outlined"
            name="appname"
            value={appname}
            onChange={handleChange1}
          /> */}

          <FormControl fullWidth sx={{ background: "#36454F" }}>
            <InputLabel id="demo-simple-select-label">
              Choose a token from your wallet
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={twallet}
              label="Choose a token from your wallet"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            width: "95%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: 2,
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            TOKEN DISTRIBUTION RULE
            <span style={{ color: "green" }}> *</span>
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
              fontFamily: "Poppins",
            }}
            variant="body2"
          >
            Set a general distribution rule for your NFTs. For special rewards,
            upload the hashlist for the specific NFTs to set.
          </Typography>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-around"
            mt={2}
            mb={2}
          >
            <Box width="45%">
              <Typography color="white">NFTs</Typography>
              <Box
                width="100%"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                color="white"
                bgcolor="#312677"
              >
                <Button
                  sx={{ color: "white" }}
                  endIcon={<ErrorOutlineIcon fontSize="small" />}
                >
                  General NFTs
                </Button>
              </Box>
            </Box>
            <Box width="45%">
              <Typography color="white" variant="body1">
                Rewards
              </Typography>
              <Box
                width="100%"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                color="white"
                bgcolor="#36454F"
              >
                <TextField
                  variant="standard"
                  value={nftperday}
                  onChange={handlenft}
                  sx={{
                    mt: 1,
                    background: "#36454F",
                  }}
                  id="standard-basic"
                  label=""
                  name="appname"
                />
                <Typography fontSize="15px" color="#A120B7">
                  Token/Nft/Day
                </Typography>
              </Box>
            </Box>
          </Box>

          {show && verified ? (
            <Button variant="contained" component="label">
              Upload
              <input hidden accept="application/pdf" type="file" />
            </Button>
          ) : (
            <Button
              onClick={handlefileshow}
              sx={{ width: "50%", fontSize: "small" }}
              endIcon={<AddIcon />}
            >
              New Rule
            </Button>
          )}
        </Box>

        <Box
          sx={{
            width: "95%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: 2,
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            CONTACT EMAIL（UP TO 3） <span style={{ color: "green" }}> *</span>
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
              fontFamily: "Poppins",
            }}
            variant="body2"
          >
            To receive system notifications in time (eg. Your tokens in vault
            are insufficient.).
          </Typography>

          <TextField
            sx={{
              width: "100%",
              mt: 1,
              background: "#36454F",
              borderBottom: "2px solid #44327E",
              borderRadius: "2px",
              fontFamily: "Poppins",
            }}
            id="outlined-name"
            label="enter email address here"
            variant="outlined"
            name="email"
            value={email}
            onChange={handleemail}
          />
          {em1 ? (
            <Box display="flex" alignItems="center">
              <TextField
                sx={{
                  width: "90%",
                  mt: 1,
                  background: "#36454F",
                  borderBottom: "2px solid #44327E",
                  borderRadius: "2px",
                  fontFamily: "Poppins",
                }}
                id="outlined-name"
                label="enter email address here"
                variant="outlined"
                name="email2"
                value={email1}
                onChange={handleemail1}
              />
              <IconButton onClick={() => setem1(false)}>
                {" "}
                <DeleteForeverIcon fontSize="large" sx={{ color: "#36454F" }} />
              </IconButton>
            </Box>
          ) : null}
          {em2 ? (
            <Box display="flex" alignItems="center">
              <TextField
                sx={{
                  width: "90%",
                  mt: 1,
                  background: "#36454F",
                  borderBottom: "2px solid #44327E",
                  borderRadius: "2px",
                  fontFamily: "Poppins",
                }}
                id="outlined-name"
                label="enter email address here"
                variant="outlined"
                name="email3"
                value={email2}
                onChange={handleemail2}
              />
              <IconButton onClick={() => setem2(false)}>
                {" "}
                <DeleteForeverIcon fontSize="large" sx={{ color: "#36454F" }} />
              </IconButton>
            </Box>
          ) : null}

          {em3 ? (
            <Button
              onClick={handleemailshow}
              endIcon={<AddIcon />}
              sx={{ width: "50%", marginTop: 2 }}
            >
              Add New Email
            </Button>
          ) : (
            <Button
              onClick={handleemailshow2}
              endIcon={<AddIcon />}
              sx={{ width: "50%", marginTop: 2 }}
            >
              Add New Email
            </Button>
          )}
        </Box>

        {/* <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            Color Mode
          </Typography>
          <Box
            sx={{
              mt: 1,
              width: "95%",
              display: "flex",
            }}
          >
            <Button
              onClick={handleButtonVariantChange2}
              sx={styles}
              variant={currentButtonVariant2}
            >
              Dark
            </Button>
            <Button
              onClick={handleButtonVariantChange}
              sx={styles}
              variant={currentButtonVariant}
            >
              Light
            </Button>
          </Box>
        </Box> */}
        {/* 
        <Box
          sx={{
            width: "95%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: 2,
              mb: 2,
              fontWeight: "500",
              fontSize: "15px",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            LOGO <span style={{ color: "green" }}>*</span>
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
              lineHeight: "150%",
              marginBottom: "10px",
              fontFamily: "Poppins",
            }}
            variant="body2"
          >
            Jpg. Jpeg. PNG only 5mb limit{" "}
            <span style={{ color: "#6D6DFC" }}>
              {" "}
              <u>A Few Tips</u>
            </span>
          </Typography>

          <Button variant="outlined" component="label" sx={styles2}>
            Upload
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={handlelogo}
            />
          </Button>
        </Box>

        <Box
          sx={{
            width: "95%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: 2,
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            Project Name<span style={{ color: "green" }}> *</span>
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
              fontFamily: "Poppins",
            }}
            variant="body2"
          >
            Please fill in the exact name of your collection on Magic Eden, we
            will use it to get your floor price.
          </Typography>

          <TextField
            sx={{
              width: "100%",
              mt: 1,
              background: "#36454F",
              borderBottom: "2px solid #44327E",
              borderRadius: "2px",
              fontFamily: "Poppins",
            }}
            id="outlined-name"
            label="Project Name"
            variant="outlined"
            name="appname"
            value={appname}
            onChange={handleChange1}
          />
        </Box>

        <Box
          sx={{
            width: "95%",
            mt: 2,
            mb: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: 2,

              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            Theme Color
          </Typography>
          <Box
            sx={{
              mt: 1,
              mb: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {picker ? (
              <Box sx={{ display: "flex" }}>
                <SketchPicker
                  color={currentcolor}
                  onChangeComplete={handlechange}
                ></SketchPicker>
                <CloseIcon color="info" onClick={() => setpicker(false)} />
              </Box>
            ) : null}
          </Box>
          <Button onClick={handlesketchpicker} sx={styles2} variant="outlined">
            {" "}
            Pick Color
          </Button>
        </Box>

        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            Theme Orientation
          </Typography>
          <Box
            sx={{
              mt: 1,
              width: "95%",
              display: "flex",
            }}
          >
            <Button
              onClick={handlevertical}
              sx={styles}
              variant={currentButtonVariant4}
            >
              Vertical
            </Button>
            <Button
              onClick={handlehorizontel}
              sx={styles}
              variant={currentButtonVariant3}
            >
              Horizontal
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "95%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: 2,
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            WEBSITE HEADLINE <span style={{ color: "green" }}>*</span>
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
            }}
            variant="body2"
          >
            50 Latters Max
          </Typography>

          <TextField
            multiline
            rows={3}
            maxRows={4}
            sx={{
              width: "100%",
              mt: 1,
              background: "#36454F",
              color: "#757e8a",
              borderBottom: "2px solid #44327E",
              borderRadius: "2px",
              fontSize: "1px",
              fontFamily: "Poppins",
            }}
            id="outlined-name"
            label="input website headline  here"
            variant="outlined"
            name="appheadline"
            value={appheadline}
            onChange={handleChange2}
          />
        </Box>
        <Box
          sx={{
            width: "95%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: 2,
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            Website Headline Caption (optional)
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
            }}
            variant="body2"
          >
            50 Latters Max
          </Typography>

          <TextField
            multiline
            rows={3}
            maxRows={4}
            sx={{
              width: "100%",
              mt: 1,
              background: "#36454F",
              color: "#757e8a",
              borderBottom: "2px solid #44327E",
              borderRadius: "2px",
            }}
            id="outlined-name"
            label="input website headline caption here"
            variant="outlined"
            name="appcaption"
            value={appcaption}
            onChange={handleChange3}
          />
        </Box>
        <Box
          sx={{
            width: "95%",
            mt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              mt: 2,
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            SubDomain <span style={{ color: "green" }}>*</span>{" "}
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
            }}
            variant="body2"
          >
            Your NFTs will be showcased in the homepage
          </Typography>

          <TextField
            sx={{
              width: "100%",
              height: "100%",
              mt: 1,
              background: "#36454F",
              color: "#757e8a",
              borderBottom: "2px solid #44327E",
            }}
            id="outlined-name"
            label="enter your domain"
            variant="outlined"
            name="subdomain"
            value={subdomain}
            onChange={handleChange4}
          />
        </Box> */}
      </Box>
    </div>
  );
};

export default SidebarBody2;

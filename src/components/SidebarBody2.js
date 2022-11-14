import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import React, { useContext, useState } from "react";
import { Typography, Button } from "@mui/material";
import Mycontext from "../context/Mycontext";

import { SketchPicker } from "react-color";
import CloseIcon from "@mui/icons-material/Close";

const SidebarBody2 = () => {
  const context = useContext(Mycontext);
  const {
    yourappname,
    yourappheadline,
    yourappcaption,
    yourappsubdomain,
    yourapplogo,
    yourapplogo2,
    yourappthemecolor,
    yourappthememode,
    yourapporientation,
  } = context;
  // const [state, setstate] = React.useState({
  //   appname: "",
  //   appheadline: "",
  //   appcaption: "",
  //   subdomain: "domain",
  // });

  const [appname, setappname] = useState("");
  const [appheadline, setappheadline] = useState("");
  const [appcaption, setappcaption] = useState("");
  const [subdomain, setsubdomain] = useState("");
  const [image, setImage] = useState(null);
  const [imageurl, setImageurl] = useState(null);

  const [currentcolor, setcurrentcolor] = useState("#ff6");
  const [backGroundColor, setBackGroundColor] = useState("");
  const [picker, setpicker] = useState(false);
  const handlesketchpicker = () => {
    setpicker(true);
  };

  const handlechange = (color) => {
    setcurrentcolor(color.hex);
    yourappthemecolor(color.hex);
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

  const [currentButtonVariant, setCurrentButtonVariant] = useState("outlined");
  const [currentButtonVariant2, setCurrentButtonVariant2] =
    useState("contained");
  const [currentButtonVariant3, setCurrentButtonVariant3] =
    useState("outlined");
  const [currentButtonVariant4, setCurrentButtonVariant4] =
    useState("contained");

  const handleChange1 = (event) => {
    setappname(event.target.value);
    yourappname(event.target.value);
  };

  const handleChange2 = (event) => {
    setappheadline(event.target.value);
    yourappheadline(event.target.value);
  };

  const handleChange3 = (event) => {
    setappcaption(event.target.value);
    yourappcaption(event.target.value);
  };

  const handleChange4 = (event) => {
    setsubdomain(event.target.value);
    yourappsubdomain(event.target.value);
  };

  const handlelogo = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageurl(event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  yourapplogo(imageurl);
  yourapplogo2(image);

  const handleButtonVariantChange = () => {
    yourappthememode("light");
    if (currentButtonVariant === "outlined") {
      setCurrentButtonVariant("contained");
      setCurrentButtonVariant2("outlined");
    } else {
      setCurrentButtonVariant("outlined");
      setCurrentButtonVariant2("outlined");
    }
  };
  const handleButtonVariantChange2 = () => {
    yourappthememode("dark");
    if (currentButtonVariant === "outlined") {
      setCurrentButtonVariant2("contained");
      setCurrentButtonVariant("outlined");
    } else {
      setCurrentButtonVariant2("contained");
      setCurrentButtonVariant("outlined");
    }
  };

  const handlehorizontel = () => {
    yourapporientation(false);

    if (currentButtonVariant === "outlined") {
      setCurrentButtonVariant3("contained");
      setCurrentButtonVariant4("outlined");
    } else {
      setCurrentButtonVariant3("outlined");
      setCurrentButtonVariant4("outlined");
    }
  };
  const handlevertical = () => {
    yourapporientation(true);

    if (currentButtonVariant === "outlined") {
      setCurrentButtonVariant4("contained");
      setCurrentButtonVariant3("outlined");
    } else {
      setCurrentButtonVariant4("outlined");
      setCurrentButtonVariant3("outlined");
    }
  };

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
              label="Project Name"
              variant="outlined"
              name="appname"
              value={appname}
              onChange={handleChange1}
            />
            <TextField
              sx={{
                width: "45%",
                mt: 1,
                ml: 1,
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
              label="Project Name"
              variant="outlined"
              name="appname"
              value={appname}
              onChange={handleChange1}
            />
            <TextField
              sx={{
                width: "45%",
                mt: 1,
                ml: 1,
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

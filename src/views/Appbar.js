import { AppBar, Container, Toolbar, Typography, Box, Button,  } from "@mui/material";
import React from "react";
import "./style.css"
import LanguageIcon from "@mui/icons-material/Language";
import logo1 from "../assets/logo0.png"
const styles = {
  "&.MuiButton-outlined": {
    border: "1px solid #6D6DFC ",
    color: "#6D6DFC ",
    fontFamily: "Poppins",
    fontSize:"0.7rem",

  },
  "&.MuiButton-outlined:hover": {
    color: "White",
  }
}
const Appbar = () => {
  return (
    <AppBar position="sticky" elevation={0} sx={{ background: "#1B194B", }}>
      {/* <Toolbar disableGutters={true}> */}
      <Container maxWidth="xl"  sx={{width:"100%"}}>
      <Toolbar disableGutters>
      
       <Box  sx={{display:"flex" , justifyContent:"space-between",alignItems:"center",width:"100%"}}>

       <Box  className='main-l' sx={{width:"100%"}}>
        
        
           <img src={logo1} className="img1"   alt="Mekka Stack" />
        
        </Box>
      
        

      
         
            <Box  className='main-b' >
           
            <Typography marginRight={1} className='num'>
                <LanguageIcon className='num1'></LanguageIcon>
              </Typography>
              <Typography className='salona' sx={{ fontFamily: "Poppins", }}>SOLANA NETWORK:</Typography>
              <Typography className='num' mr={2} sx={{ color: "#C615A9" }}>  968554</Typography>
              
                <Button wid  variant="outlined" sx={styles} className='btn'>
                  Connect Wallete
                </Button>
             
         
              
              </Box>
             
         
              </Box>
        
       
      </Toolbar>
    </Container>




        {/* <Grid container alignItems="center">
          <Grid item xs={6} sm={5} md={4} padding={1}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                marginLeft: "20px"
              }}
            >


              <img src={logo1} style={{ paddingLeft: "10px", width: "300px", height: "auto" }} alt="Mekka Stack" />


            </Box>
          </Grid>
          <Grid item sm={2} md={4}></Grid>
          <Grid item xs={6} sm={5} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography marginRight={1}>
                <LanguageIcon></LanguageIcon>
              </Typography>
              <Typography sx={{ fontFamily: "Poppins", }}>SOLANA NETWORK:</Typography>
              <Typography sx={{ color: "#C615A9" }}> 968554</Typography>
              <Typography marginLeft={4}>
                {" "}
                <Button wid sx={styles} variant="outlined">
                  Connect Wallete
                </Button>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Toolbar> */}
    </AppBar>
  );
};

export default Appbar;

import React, { useState } from 'react'
import { Box, Grid, Input, Typography,Button ,TextField} from '@mui/material'
const styles={
  color: "#edf0fc",
    fontFamily: "ClashDisplay,sans-serif",
    fontSize: "28px",
    fontWeight: "500",
    lineHeight: "28px",
}
const styles2 = {
  width: "100%",
  "&.MuiButton-outlined": {
    border: "2px solid #44327E ",
    color: "white ",
    fontFamily: "Poppins",
    "&.Mui-disabled":{
      background:"#242531 !important",
      color:"#a1a8b0",
      borderColor:"#242531"

    }
  },
};
const styles3={
   
  "&.MuiButton-contained": {
    background:
      " linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)",
    color: "White",
  },
}

const Seo = () => {

  const [subdomain, setsubdomain] = useState("");
  const [display,setDisplay]=useState(true)
  const [image, setImage] = useState(null);
  const [imageurl, setImageurl] = useState(null);
  const handlelogo = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageurl(event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
   
  const handleChange4 = (event) => {
    setsubdomain(event.target.value);
    
  };
  return (
    <Grid container width={"100%"}>
    <Grid  item xs={9}  width={"100%"} sx={{borderBottom:"3px solid #4E39D7"}} >
      
     <Typography   sx={styles} padding={4}>  Seo  </Typography>
      </Grid>
    <Grid  item xs={3}  width={"100%"} sx={{borderBottom:"3px solid #4E39D7 ",display:"flex",alignItems:"center"}} >
      {display?(<Button variant='contained' sx={styles3} onClick={(e)=>{setDisplay(!display)
       }}> Edit</Button>):(<Box p={2} sx={{display:"flex",justifyContent:"space-evenly",width:"100%"}}>
        <Button variant='contained' sx={styles3}   > Save</Button>
        <Button variant='contained' sx={styles3}   onClick={(e)=>{setDisplay(!display)}}> Cancel</Button>
       </Box>)}
       
       
      </Grid>
      <Grid xs={12}>
      <Box
      paddingTop={2} 
        paddingBottom={4}
        paddingRight={4}
        paddingLeft={4}
        sx={{
          width:"50%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
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
            Sub Domain
          </Typography>
          
          <TextField
            sx={{
              width: "100%",
            
              mt: 1,
              background: "#36454F",
              color: "#757e8a",
              borderBottom: "2px solid #44327E",
            }}
            id="outlined-name"
          
            variant="outlined"
            name="subdomain"
            value={"Ali"}
            onChange={handleChange4}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
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
            FEVICON
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
            Ico, only 5MB limited.
           
          </Typography>

          <Button variant="outlined" component="label" disabled={display} sx={styles2}>
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
            width: "100%",
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
            WEBSITE Title<span style={{ color: "green" }}> *</span>
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
              fontFamily: "Poppins",
            }}
            variant="body2"
          >
           Your website title for search results.
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
            label="Input Website Title Here"
            variant="outlined"
            name="appname"
             disabled={display}
             
          />
        </Box>
        <Box
          sx={{
            width: "100%",
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
            Website Description
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
            }}
            variant="body2"
          >
          Your website description for search results.

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
           value={"GamesSite"}
            variant="outlined"
            name="appcaption"
             disabled={display}
          />
        </Box>
      </Box>
    
      </Grid>
      </Grid>
  )
}

export default Seo
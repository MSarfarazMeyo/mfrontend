import React ,{useState} from 'react'
import { Box, Grid, Input, Typography,Button ,TextField} from '@mui/material'






const styles={
  color: "#edf0fc",
    fontFamily: "ClashDisplay,sans-serif",
    fontSize: "28px",
    fontWeight: "500",
    lineHeight: "28px",
}
const styles3={
   
  "&.MuiButton-contained": {
    background:
      " linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)",
    color: "White",
  },
}




const Other = () => {

 
    const handleChange4 = (event) => {
        setText(event.target.value)
        
      };
    const [display,setDisplay]=useState(true)
    const [text,setText]=useState("")
  return (
    <Grid container width={"100%"}>
    <Grid  item xs={9}  width={"100%"} sx={{borderBottom:"3px solid #4E39D7"}} >
      
     <Typography   sx={styles} padding={4}>  Others </Typography>
      </Grid>
    <Grid  item xs={3}  width={"100%"} sx={{borderBottom:"3px solid #4E39D7 ",display:"flex",alignItems:"center"}} >
      {display?(<Button variant='contained' sx={styles3} onClick={(e)=>{setDisplay(!display)
       }}> Edit</Button>):(<Box p={2} sx={{display:"flex",justifyContent:"space-evenly",width:"100%"}}>
        <Button variant='contained' sx={styles3}   > Save</Button>
        <Button variant='contained' sx={styles3}   onClick={(e)=>{setDisplay(!display)}}> Cancel</Button>
       </Box>)} 
      </Grid>
      <Grid item xs={12}>
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
              fontWeight: "500",
              fontSize: "15px",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
           TWITTER
          </Typography>
          <Input type='text'    sx={{    width: "100%",
            
            mt: 1,
            background: "#36454F",
            color: "#757e8a",
            borderBottom: "2px solid #44327E",}}
            disabled={display}
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
           DISCORD
          </Typography>
          <Input type='text'    sx={{    width: "100%",
            
            mt: 1,
            background: "#36454F",
            color: "#757e8a",
            borderBottom: "2px solid #44327E",}}
            disabled={display}
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
           MEDIAM
          </Typography>
          <Input type='text'    sx={{    width: "100%",
            
            mt: 1,
            background: "#36454F",
            color: "#757e8a",
            borderBottom: "2px solid #44327E",}}
            disabled={display}
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
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            COMING SOON: ALLOW ADS IN YOUR SITE
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
            }}
            variant="body2"
          >
       You can allow ads from Mekka in your site to gain extra profit.

          </Typography>

       
        </Box>

      </Box>

      </Grid>

      </Grid>
  )
}

export default Other
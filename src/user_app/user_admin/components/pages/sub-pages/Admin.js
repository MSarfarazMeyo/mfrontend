import React ,{useState} from 'react'
import { Box, Grid, Input, Typography,Button ,TextField} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const styles2={
  background:"#242531 !important" 
  ,color:"white !important",
  textColor:"white !important",
  padding:"9px 12px",
 width:"100%",

  ".MuiInput-root:hover":{
    color:"#757e8a !important",
  }
}

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
const styles4={
  color:"#6D6DFC",
    "&.MuiTypography-root:hover":{
           textDecoration:"underline"
    }
  }







const Admin = () => {
  const [display,setDisplay]=useState(true)
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };
  return (
    <Grid container width={"100%"}>
    <Grid  item xs={9}  width={"100%"} sx={{borderBottom:"3px solid #4E39D7"}} >
      
     <Typography   sx={styles} padding={4}>  Admin </Typography>
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
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            SITE OWNER<span style={{ color: "green" }}> *</span>
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
              fontFamily: "Poppins",
            }}
            variant="body2"
          >
           With full access to all functions.
          </Typography>
          <Input type='text'    sx={{    width: "100%",
            
            mt: 1,
            background: "#36454F",
            color: "#757e8a",
            borderBottom: "2px solid #44327E",}}
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
              mt: 4,
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
            variant="body"
          >
            ADMIN WALLET（UP TO 3 WALLETS）<span style={{ color: "green" }}> *</span>
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
              fontFamily: "Poppins",
            }}
            variant="body2"
          >
           Admin wallets have access to admin module of the site.
          </Typography>
          {
            display ?(null):(<Box sx={{marginTop:"10px",width:"100%" }}>
            {serviceList.map((singleService, index) => (
              <div key={index} className="services">
    
                 
                <div className="first-division">
                <Box sx={{display:"flex",width:"100%",alignItems:"center",marginBottom:"8px"}}>
                  
                  <Input
                    name="service"
                    type="text"
                    id="service"
                    sx={styles2}
                    value={singleService.service}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                  />
                
                  
                  {serviceList.length !== 1 && (
                    <>
                    <DeleteForeverIcon sx={{ color:"#4E39D7"}}    onClick={() => handleServiceRemove(index)}
                      className="remove-btn" />
                   
                    </>
                  )}
                 
                  </Box>
              
                  {serviceList.length - 1 === index && serviceList.length < 4 && (
                    <Typography  sx={styles4}  onClick={handleServiceAdd}>ADD NEW CM ID +
                  </Typography>
                    
                  )}
                </div>
              
              </div>
            ))}
       
      
          </Box>)
          }
          

          </Box>
      <Box
          sx={{
            width: "100%",
            mt: 4,
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
          CONTACT EMAIL (UP TO 3 EMAILS)
          </Typography>
          <Typography
            sx={{
              color: "#757e8a",
              fontFamily: "Poppins",
            }}
            variant="body2"
          >
          The email is for receiving system notifications
          </Typography>

           {
            display ? (   
              <Input
                name="service"
                type="text"
                id="service"
                sx={styles2}
                mt={2}
                onChange={(e) => handleServiceChange()}
                required disabled={display}
              />):(<Box sx={{marginTop:"10px",width:"100%" }}>
            {serviceList.map((singleService, index) => (
              <div key={index} className="services">
    
                 
                <div className="first-division">
               
               
                <Box sx={{display:"flex",width:"100%",alignItems:"center",marginBottom:"8px"}}>
                  
                  <Input
                    name="service"
                    type="text"
                    id="service"
                    sx={styles2}
                    value={singleService.service}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                  />
               
                  
                  {serviceList.length !== 1 && (
                    <>
                    <DeleteForeverIcon sx={{ color:"#4E39D7"}}    onClick={() => handleServiceRemove(index)}
                      className="remove-btn" />
                   
                    </>
                  )}
                 
                  </Box>
              
                  {serviceList.length - 1 === index && serviceList.length < 4 && (
                    <Typography  sx={styles4}  onClick={handleServiceAdd}>ADD NEW CM ID +
                  
                  </Typography>)}
                </div>
              
              </div>
            ))}
       
      
          </Box> )
           }




         
          

          </Box>
          






      </Box>
      
      
      </Grid>
      </Grid>
  )
}

export default Admin
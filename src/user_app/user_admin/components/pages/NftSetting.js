import { Edit } from '@mui/icons-material'
import { Box, Grid, Input, Typography } from '@mui/material'
import React ,{useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import "./style.css"
const styles={
  color: "#edf0fc",
    fontFamily: "ClashDisplay,sans-serif",
    fontSize: "28px",
    fontWeight: "500",
    lineHeight: "28px",
}
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
const styles3={
color:"#6D6DFC",
  "&.MuiTypography-root:hover":{
         textDecoration:"underline"
  }
}
const NftSetting = () => {
  const [disableButton,setDisableButton] = useState(true)
  const [text,setText] = useState("C412mas23amsmamsa")
  
  const handleChange=((e)=>{
    setText(e.target.value);


  })
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
    <div>
        <Grid container width={"100%"}>
         <Grid  item xs={12}  width={"100%"} sx={{borderBottom:"3px solid #4E39D7"}} >
          <Typography   sx={styles} padding={4}>  NFT Settings  </Typography>
           </Grid>
           <Grid item sx={12}>  
           
           <Box pt={5} pl={5} >    
           <Box  sx={{ width:"180px", boxSizing:"border-box" ,border: "1px solid #4add85"}}>
              <Box padding={3} >
              <Typography sx={{fontSize:"14px",fontWeight:"500",fontFamily:"WorkSans,sans-serif",color:"white"}}>VERIFIED NFTS</Typography>
              <Typography sx={{fontSize:"32px",fontWeight:"500",color:"white",lineHeight:"32px",marginTop:"12px"}}>2211 </Typography>
              </Box>
           </Box>
              <Typography marginTop={4} sx={{color:"white",fontFamily:"WorkSans,sans-serif",fontStyle:"normal",fontWeight:500,lineHeight:"14px",textTransform:"uppercase"}}> Your NFT COllections</Typography>
              <Box mt={2} sx={{lineHeight:"100%"}}>
              <Typography sx={{color:"#757e8a", fontSize:"14px"}}> NFTs verified via <span style={{color:"#423ab0"}}>Camdy Machine ID</span> will be eligible for staking.</Typography>
              <Typography  sx={{color:"#757e8a", fontSize:"14px"}}> NB: Any change of CM IDs will cause temporary shutdown of your site for about 5 mins.</Typography>
              </Box>
              <Box sx={{width:"100%",display:"flex",alignItems:"center",marginTop:"20px"}}>
    <Input
    
    onChange={handleChange}
    placeholder={text}
    sx={styles2}
    disabled={disableButton}
    
     
    
    />
{ disableButton ?
(<Edit  
  fontSize='small' 
 sx={{color:"#423ab0",paddingLeft:"15px"}} 
 onClick={() => setDisableButton(!disableButton)}  />
)  :(
<Box sx={{display:"flex",paddingLeft:"15px"}}>
     <SaveIcon fontSize='small' sx={{color:"#423ab0"}}  onClick={() => setDisableButton(!disableButton)} />
   <CloseIcon fontSize='small'sx={{color:"#423ab0"}}  onClick={() => setDisableButton(!disableButton)}  />
   
   </Box>  
)                   }
    
 
</Box>
<Box sx={{marginTop:"10px",width:"100%" }}>
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
                <CloseIcon    onClick={() => handleServiceRemove(index)}
                  className="remove-btn" />
               
                </>
              )}
             
              </Box>
          
              {serviceList.length - 1 === index && serviceList.length < 4 && (
                <Typography  sx={styles3}  onClick={handleServiceAdd}>ADD NEW CM ID +
              </Typography>
                
              )}
            </div>
          
          </div>
        ))}
   
  
      </Box>
      <Box sx={{marginTop:"20px"}}>
         <Box paddingTop={4}sx={{linHeight:"100%"}}>
         <Typography marginTop={4} sx={{color:"white",fontFamily:"WorkSans,sans-serif",fontStyle:"normal",fontWeight:500,lineHeight:"14px",fontSize:"14px",textTransform:"uppercase"}}>BLOCK NFTS</Typography>
         <Typography sx={{color:"#757e8a", fontSize:"14px" ,marginTop:"8px"}}>Input the token ID of the NFTs that you would like to block from your staking site.</Typography>
         
         </Box>
         <Box sx={{marginTop:"10px"}}>  <Input
      
   value={"0 BLOCKED NFTS"}
    type="text"
    sx={styles2}
 
     
    
    /></Box>
      </Box>

           </Box>
           
           
                 </Grid>
                
        </Grid>
    </div>
  )
}

export default NftSetting
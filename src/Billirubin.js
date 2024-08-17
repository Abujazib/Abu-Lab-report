import React from 'react';
import './index.css';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip  from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';


function Drfaizal() {
  return (
    <div className='Df'>
      <Typography sx={{fontSize: '25px', marginBottom: '10px'}} className='Billir'><b>BILLIRUBIN</b></Typography>
    <Box className='firpage' sx={{ border: '2px solid #00bcd4', borderRadius: '5px'}}>
    <Tooltip title="Page">
    <Typography sx={{ marginLeft: '1020px'}} className='pageno'>1/1</Typography>
    </Tooltip>
    <Typography sx={{fontfamily: 'Cambria', fontSize: '20px'}}>  Patient Name
      <Typography sx={{marginLeft: '30px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> 
    </Typography><br/>

    <Typography sx={{fontfamily: 'Cambria', fontSize: '20px'}}>  Age / Sex
      <Typography sx={{marginLeft: '65px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> 
      <TextField variant="outlined" size= "small" color='none' className=".MuiOutlinedInput-root" 
      sx={{fontSize: '20px', color:'black', width: '140px', marginLeft: '5px'}} defaultValue="Age/Sex"/>
    </Typography><br/>

    <Typography sx={{fontfamily: 'Cambria', fontSize: '20px'}}> Date
      <Typography sx={{marginLeft: '110px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> 
      <TextField variant="outlined" size= "small" color='none' className=".MuiOutlinedInput-root" 
      sx={{fontSize: '20px', color:'black', width: '140px', marginLeft: '5px'}} type='date'/>
    </Typography><br/>

    <Typography sx={{fontfamily: 'Cambria', fontSize: '20px'}}> Ref.By
      <Typography sx={{marginLeft: '95px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> 
      <TextField variant="outlined" size= "small" color='none' className=".MuiOutlinedInput-root" 
      sx={{fontSize: '20px', color:'black', width: '800px', marginLeft: '5px'}}/>
    </Typography><br/>

    <hr/>
    <Typography> <b> Investigation </b>
    <Typography sx={{marginLeft: '300px', display:'inline-block'}} className='Result'> <b> Result </b></Typography>
    <Typography sx={{marginLeft: '350px', display:'inline-block'}} className='RefRange'> <b> Ref.Range </b> </Typography>
    </Typography>
    <hr/>

    <Typography> <u>BLOOD REPORT :</u> </Typography>
    </Box>
    <div className='War'>
    <hr/>
    <Typography  color="warning" sx={{textAlign: 'center', size: '25px'}}> <ReportGmailerrorredIcon sx={{marginRight: '10px'}}/> 
    *** This is end of Billirubin file ***</Typography>
    <hr/>
    </div>
    </div>
  )
}
export default Drfaizal
import React from 'react';
import './index.css';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip  from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';

function Biochemistry() {
  return (
    <div className='Df'>
      <Typography sx={{fontSize: '25px', marginBottom: '10px'}} className='Billir'><b>BIO-CHEMISTRY</b></Typography>
    <Box className='firpage' sx={{ border: '2px solid #00bcd4', borderRadius: '5px'}}>
    <Tooltip title="Page">
    <Typography sx={{ marginLeft: '1020px'}} className='pageno'>1/9</Typography>
    </Tooltip>
    <Typography sx={{fontfamily: 'Cambria', fontSize: '20px'}}> <i> Patient Name
      <Typography sx={{marginLeft: '25px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> </i>
    </Typography><br/>
    
    <Typography sx={{fontfamily: 'Cambria', fontSize: '20px'}}> <i> Age / Sex
      <Typography sx={{marginLeft: '55px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> </i>
      <TextField variant="outlined" size= "small" color='none' className=".MuiOutlinedInput-root" 
      sx={{fontSize: '20px', color:'black', width: '140px', marginColor: 'red'}} defaultValue="Age/Sex"/>
    </Typography><br/>

    <Typography sx={{fontfamily: 'Cambria', fontSize: '20px'}}> <i> Date
      <Typography sx={{marginLeft: '90px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> </i>
      <TextField variant="outlined" size= "small" color='none' className=".MuiOutlinedInput-root" 
      sx={{fontSize: '20px', color:'black', width: '140px', marginLeft: '5px'}} type='date'/>
    </Typography><br/>

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
export default Biochemistry
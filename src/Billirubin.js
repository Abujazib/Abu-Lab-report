import React from 'react';
import './index.css';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip  from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';

function Bilirubin() {

  return (
    <div className='Df'>
    <Box className='firpage' sx={{ border: '2px solid #00bcd4', borderRadius: '5px'}}>
    <Tooltip title="Page">
    <Typography sx={{ marginLeft: '1020px'}} className='pageno'>1/1</Typography>
    </Tooltip><div className='fist'>
    <Typography sx={{fontfamily: 'Cambria', fontSize: '20px'}}>  Patient Name
      <Typography sx={{marginLeft: '30px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> 
    </Typography><br/>

    <Typography sx={{fontfamily: 'Cambria !important', fontSize: '20px'}}>  Age / Sex
      <Typography sx={{marginLeft: '65px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> 
      <TextField variant="outlined" size= "small"  className=".MuiOutlinedInput-root"  placeholder="Age/Sex" 
      sx={{fontSize: '20px', color:'black', width: '140px', marginLeft: '5px',}}/>
    </Typography><br/>

    <Typography sx={{fontfamily: 'Cambria', fontSize: '20px'}}> Date
      <Typography sx={{marginLeft: '110px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> 
      <TextField variant="outlined" size= "small"  className=".MuiOutlinedInput-root" 
      sx={{fontSize: '20px', color:'black', width: '140px', marginLeft: '5px'}} type='date'/>
    </Typography><br/>

    <Typography sx={{fontfamily: 'Cambria', fontSize: '20px'}}> Ref.By
      <Typography sx={{marginLeft: '95px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> 
      <TextField variant="outlined" size= "small"  className=".MuiOutlinedInput-root" 
      sx={{fontSize: '20px', color:'black', width: '500px', marginLeft: '5px'}}/>
    </Typography><br/></div>

    <Box sx={{border: '1px solid black'}}>
    <Typography> <b> Investigation </b>
    <Typography sx={{marginLeft: '200px', display:'inline-block'}} className='Result'> <b> Result </b></Typography>
    <Typography sx={{marginLeft: '200px', display:'inline-block'}} className='RefRange'> <b> Ref.Range </b> </Typography>
    </Typography>
    </Box>
    <Typography> <u>BLOOD REPORT :</u> </Typography>
    <Typography>Bilirubin (Total)
      <Typography sx={{marginLeft: '190px', marginTop: '2px' ,display: 'inline-block', fontSize: '1rem'}}> <b> : </b></Typography>
      <TextField variant="outlined" size= "small" defaultValue="17.6" sx={{width: '60px', fontSize: '1rem'}}/>
      <Typography sx={{display: 'inline-block', fontSize: '1rem'}}>mgs / dl</Typography>
      <Typography sx={{display: 'inline-block', marginLeft: '100px'}}>0.1 – 1.2 mgs / dl</Typography>
    </Typography>
    <Typography sx={{marginTop: '2px'}}>Bilirubin (Direct)
      <Typography sx={{marginLeft: '180px', display: 'inline-block', fontSize: '1rem'}}> <b> : </b></Typography>
      <TextField variant="outlined" size= "small" defaultValue="1.0" sx={{width: '60px', fontSize: '1rem'}}/>
      <Typography sx={{display: 'inline-block', fontSize: '1rem'}}>mgs / dl</Typography>
      <Typography sx={{display: 'inline-block', marginLeft: '100px'}}>0.0 – 0.3/ dl</Typography>
    </Typography>
    <Typography sx={{marginTop: '2px'}}>Bilirubin (Indirect)
      <Typography sx={{marginLeft: '170px', display: 'inline-block', fontSize: '1rem'}}> <b> : </b></Typography>
      <TextField variant="outlined" size= "small" defaultValue="16.6" sx={{width: '60px', fontSize: '1rem'}}/>
      <Typography sx={{display: 'inline-block', fontSize: '1rem'}}>mgs / dl</Typography>
    </Typography>
    <Typography sx={{marginLeft: '900px', fontSize: '20px', marginTop: '800px'}}><b>LABINCHARGE</b></Typography>
    </Box>
    <div className='War'>
    <hr/>
    <Tooltip title="End of Billirubin file">
    <Typography  color="error" sx={{textAlign: 'center', size: '25px'}}> <ReportGmailerrorredIcon sx={{marginRight: '10px'}}/> 
    *** This is end of Billirubin file *** <ReportGmailerrorredIcon sx={{marginRight: '10px'}}/> </Typography>
    </Tooltip>
    <hr/>
    </div>
    </div>
  );
}
export default Bilirubin
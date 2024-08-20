import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './index.css';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip  from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle'

function Biochemistry() {

  const [firMenu,setFirMenu]=useState(false);
  const opendio = () => {
    setFirMenu(true);
  }
  const onClome = () => {
    setFirMenu(false)
  }
  return (
    <div className='Df'>
    <Box className='firpage' sx={{ border: '2px solid #00bcd4', borderRadius: '5px'}}>
    <Tooltip title="Page">
    <Typography sx={{ marginLeft: '1020px'}} className='pageno'>1/9</Typography>
    </Tooltip><div className='fist'>
    <Typography sx={{fontfamily: 'Cambria', fontSize: '20px'}}>  Patient Name
      <Typography sx={{marginLeft: '30px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> 
    </Typography><br/>
    
    <Typography sx={{fontfamily: 'Cambria', fontSize: '20px'}}>  Age / Sex
      <Typography sx={{marginLeft: '65px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> 
      <TextField variant="outlined" size= "small" color='none' className=".MuiOutlinedInput-root" 
      sx={{fontSize: '20px', color:'black', width: '140px', marginLeft: '5px'}} defaultValue="Age/Sex" placeholder="Age/Sex"/>
      <Button startIcon={<AddCircleIcon/>} sx={{display: 'inline-block', marginLeft: '590px'}}  variant="contained"
      onClick={opendio}>Add Result</Button>
    </Typography><br/>

    <Typography sx={{fontfamily: 'Cambria', fontSize: '20px'}}>  Date
      <Typography sx={{marginLeft: '110px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> 
      <TextField variant="outlined" size= "small" color='none' className=".MuiOutlinedInput-root" 
      sx={{fontSize: '20px', color:'black', width: '140px', marginLeft: '5px'}} type='date'/>
    </Typography><br/>

    <Typography sx={{fontfamily: 'Cambria', fontSize: '20px'}}> Ref.By
      <Typography sx={{marginLeft: '95px', fontSize: '20px' ,display: 'inline-block'}}> <b> : </b> </Typography> 
      <TextField variant="outlined" size= "small" color='none' className=".MuiOutlinedInput-root" 
      sx={{fontSize: '20px', color:'black', width: '500px', marginLeft: '5px'}}/>
    </Typography><br/></div>
    
    <hr/>
    <Typography sx={{fontSize: '15px'}}> <b> Investigation </b>
    <Typography sx={{marginLeft: '250px', display:'inline-block', fontSize: '15px'}} className='Result'> <b> Result </b></Typography>
    <Typography sx={{marginLeft: '250px', display:'inline-block', fontSize: '15px'}} className='RefRange'> <b> Ref.Range </b> </Typography>
    </Typography>
    <hr/>
    <Typography> <u>BLOOD REPORT</u> </Typography>
    <Typography>Blood sugar [F]
      <Typography sx={{marginLeft: '190px', marginTop: '2px' ,display: 'inline-block', fontSize: '1rem'}}> <b> : </b></Typography>
      <TextField variant="outlined" size= "small" defaultValue="80.0" sx={{width: '60px', fontSize: '1rem'}}/>
      <Typography sx={{display: 'inline-block', fontSize: '1rem'}}>mgs / dl</Typography>
      <Typography sx={{display: 'inline-block', marginLeft: '100px'}}>0.1 – 1.2 mgs / dl</Typography>
    </Typography>
    <Typography sx={{fontSize: '20px', marginTop: '900px', marginLeft: '900px'}}>
      <b>LABINCHARGE</b>
    </Typography>
    </Box>
    <div className='War'>
    <hr/>
    <Tooltip title="End of Billirubin file">
    <Typography  color="error" sx={{textAlign: 'center', size: '25px'}}> <ReportGmailerrorredIcon sx={{marginRight: '10px'}}/> 
    *** This is end of Billirubin file *** <ReportGmailerrorredIcon sx={{marginRight: '10px'}}/> </Typography>
    </Tooltip>
    <hr/>
    </div>
    <Dialog onClose={onClome} open={firMenu}>
      <DialogTitle>Rusult</DialogTitle>
      <Button>BLOOD REPORT [F | PP]</Button>
      <Button>BLOOD REPORT [F]</Button>
      <Button>BLOOD REPORT [PP]</Button>
      <Button>SERUM LIPID PROFILE [ Fasting]</Button>
      <Button>ATHEROGENICITY INDEX RATIO</Button>
      <Button color= 'error' onClick={onClome}>Close</Button>
    </Dialog>
    </div>
  )
}
export default Biochemistry
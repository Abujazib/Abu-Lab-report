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
  const onClose = () => {
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
      sx={{fontSize: '20px', color:'black', width: '140px', marginLeft: '5px'}} defaultValue="Age/Sex"/>
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
    <Typography sx={{fontSize: '20px', marginTop: '900px', marginLeft: '900px'}}>
    <Button startIcon={<AddCircleIcon/>} sx={{display: 'inline-block'}} variant="contained"
      onClick={opendio}>Add Result</Button>
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
    <Dialog onClose={onClose} open={firMenu}>
      <DialogTitle>Set backup account</DialogTitle>
    </Dialog>
    </div>
  )
}
export default Biochemistry
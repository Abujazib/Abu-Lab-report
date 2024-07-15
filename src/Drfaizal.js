import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import './index.css';
import Typography from '@mui/material/Typography';
import Button  from '@mui/material/Button';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

function CurrentDate() {
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    const today = new Date();
    setCurrentDate(today);
  }, []);

  return (
    <div>
      Today's date: {currentDate ? currentDate.toLocaleDateString() : 'Loading...'}
    </div>
  );
}

function Drfaizal() {
  return (
    <div className='Df'>
    <div>
      <Typography sx={{fontSize: '20px', fontFamily: '"Mukta", sans-serif', marginLeft: '50px', marginTop: '20px'}} className='Pname'> 
        <i> Patient Name : </i>
        <TextField variant="standard" className='te' sx={{marginBottom: '5px', width: '200px', marginLeft: '100px' ,'&:hover': {}}}/>
      </Typography>
    </div> 
      <Typography sx={{ fontSize: '20px', fontFamily: '"Mukta", sans-serif', marginLeft: '50px', marginTop: '20px'}}>
        <i> Age / Sex :</i>
        <TextField variant="standard" className='te' sx={{marginBottom: '5px', width: '200px', marginLeft: '70px' ,'&:hover': {}}}/>
      </Typography>
      <Typography sx={{ fontSize: '20px', fontFamily: '"Mukta", sans-serif', marginLeft: '50px', marginTop: '20px'}}>
        <i> Date : </i>
        <Typography sx={{marginBottom: '5px', width: '200px', marginLeft: '100px'}}> <CurrentDate/> </Typography>
      </Typography>
      <Typography sx={{ fontSize: '20px', fontFamily: '"Mukta", sans-serif', marginLeft: '50px', marginTop: '20px'}}>
        <i> Ref By : </i>
        <TextField variant="standard" className='te' sx={{marginBottom: '5px', width: '200px', marginLeft: '100px' ,'&:hover': {}}}/>
      </Typography>
      <hr color='#000000'/>
      <Button className='Addbut'  variant="contained" sx={{marginTop: '600px', backgroundColor: '#ffee58', color: '#006064', Size: '20px', '&:hover': {backgroundColor: '#006064', color: '#ffee58'}}} startIcon={<AddBoxRoundedIcon/>}>
        Add Test Result
      </Button>
    </div>
  )
}

export default Drfaizal
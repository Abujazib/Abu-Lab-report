import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import './index.css';
import ArticleIcon from '@mui/icons-material/Article';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

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
      <Box sx={{backgroundColor: '#90caf9'}}>
        <Typography sx={{textAlign: 'center', color: 'Ash' ,fontWeight: 'Bold', fontSize: '30px', fontFamily: 'Courier-Oblique'}}> 
          <ArticleIcon/> Dr Faizal</Typography>
      </Box>
    </div>
  )
}

export default Drfaizal
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import './index.css';
import Box from '@mui/material/Box';

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
      <p>Drfaizal</p>
    </div>
  )
}

export default Drfaizal
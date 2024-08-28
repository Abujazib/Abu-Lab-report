
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './index.css';
import Typography from '@mui/material/Typography';
import Billirubin from './Billirubin';
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';



const drawerWidth = 240;

const Print = () =>{
  window.print();
}

export default function PermanentDrawerLeft(){

  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: '1600', ml: `${drawerWidth}px`, backgroundColor: '#E0EAF3'}}
        className='appbar'
      >
        <Toolbar>
        <Typography noWrap component="div" sx={{marginLeft: '400px',fontSize: '30px' ,fontFamily: 'Eamily' ,color: 'black'}}>
            Abu Laboratory<br/>
          </Typography>
          <Button variant="contained" sx={{backgroundColor: '#00796b', color: 'white', marginLeft: 'auto',
            "&:hover":{ backgroundColor:'white', color: '#00796b'}}} startIcon={<PrintRoundedIcon/>} onClick={Print}>print</Button>
        </Toolbar>
      </AppBar>

<div>
      <Billirubin/>
</div>  
      </Box>
  );
}
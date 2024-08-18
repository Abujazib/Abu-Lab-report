
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './index.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Billirubin from './Billirubin';
import Biochemistry from './Biochemistry';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


const drawerWidth = 240;

const Print = () =>{
  window.print();
}

export default function PermanentDrawerLeft(){

  const [drfaOpen,setDrfaOpen]= useState(false);
  const OpenDrfazil = () => {
    setDrfaOpen(true);
  };
  const Closedrfa = () =>{
    setDrfaOpen(false);
  };

  const [bioChem,setBioChem]= useState(false);
  const Openbio = () => {
    setBioChem(true);
  };
  const Closebio = () =>{
    setBioChem(false);
  };

  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#E0EAF3'}}
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
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
             backgroundColor: '#E0EAF3'
          },
        }}
        variant="permanent"
        anchor="left"
        className='drawe'
      >
        <Toolbar />
        <Divider />
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        onClick={OpenDrfazil}>BILLIRUBIN</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        onClick={Openbio}>BIO-CHEMISTRY</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >BIO-CHEMISTRY-1</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >BIO-CHEHISTRY-2</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >C SPINE X RAY OPINION</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >Culture report</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >Dr Faizal </Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >Dr.Ibrahim  Sha </Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >DRUGS NAME</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >ENDOCRINOLOGY </Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >Fitness Certificate </Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >HAJ COMMITEE </Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >HEAMATOLOGY </Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >HEAMATOLOGY-1 </Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >HEAMATOLOGY-2</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >HEAMATOLOGY-3</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >HEAMATOLOGY-4</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >HEAMATOLOGY-5</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >knee opinion x ray</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >LAB BILL</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >LAB BILL-1</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >LFT</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >LFT-1</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >LFT-2</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >LIPID PROFILE</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >M</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >MANTOUX</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >MOTION TEST</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >MOTION TEST-1</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >OGCT</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >OGCT-1</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >Ref.DR</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >Ref.DR-1</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >Ref.DR-2</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >Self</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >Semen Analysis</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >Semen Analysis-1</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >SEROLOGY</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >Stool Culture</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >Sugar Timing Report</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >URINE ANALYSIS</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >urine culture</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >urine culture - NORMAL</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >X-ray OPINION</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: '#43C6AC'}}}
        >X-ray Foot</Button>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      { drfaOpen &&
        (<div sx={{display: 'none'}}>
            <Typography sx={{fontSize: '25px', marginBottom: '10px'}} className='Billir'><b>BILLIRUBIN</b>
            <Tooltip title="Close">
            <IconButton sx={{"&:hover":{color: 'red'} , display: 'inline-block' ,color: '#08c8f3', marginLeft: '880px'}}
            onClick={Closedrfa} className='clo'><CancelRoundedIcon/></IconButton>
            </Tooltip>
            </Typography>
            <Billirubin/>
        </div>) 
      }
      { bioChem &&
        (<div sx={{display: 'none'}}>
            <Typography sx={{fontSize: '25px', marginBottom: '10px'}} className='Billir'><b>BIO-CHEMISTRY</b>
            <Tooltip title="Close">
            <IconButton sx={{"&:hover":{color: 'red'} , display: 'inline-block' ,color: '#08c8f3', marginLeft: '880px'}}
            onClick={Closebio} className='clo'><CancelRoundedIcon/></IconButton>
            </Tooltip>
            </Typography>
            <Biochemistry/>
        </div>) 
      }
      </Box>
    </Box>
  );
}
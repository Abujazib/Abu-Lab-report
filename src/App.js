import React, { useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './index.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Drfaizal from './Drfaizal';
import Adddr from './Adddr';
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';


const drawerWidth = 240;

const Print = () =>{      
  window.print();
}

export default function PermanentDrawerLeft(){

  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#ffab91'}}
        className='appbar'
      >
        <Toolbar>
        <Typography noWrap component="div" sx={{marginLeft: '400px',fontSize: '30px' ,fontFamily: 'Helvetica-BoldOblique' ,color: 'black'}}>
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
             backgroundColor: '#ffab91'
          },
        }}
        variant="permanent"
        anchor="left"
        className='drawe'
      >
        <Toolbar />
        <Divider />
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}} onClick={() => setShowFirst(!showFirst)}>BILLIRUBIN</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}} onClick={() => setShowSecond(!showSecond)}>BIO-CHEMISTRY</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>BIO-CHEMISTRY-1</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>BIO-CHEHISTRY-2</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>C SPINE X RAY OPINION</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>Culture report</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>Dr Faizal </Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>Dr.Ibrahim  Sha </Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>DRUGS NAME</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>ENDOCRINOLOGY </Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>Fitness Certificate </Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>HAJ COMMITEE </Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>HEAMATOLOGY </Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>HEAMATOLOGY-1 </Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>HEAMATOLOGY-2</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>HEAMATOLOGY-3</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>HEAMATOLOGY-4</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>HEAMATOLOGY-5</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>knee opinion x ray</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>LAB BILL</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>LAB BILL-1</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>LFT</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>LFT-1</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>LFT-2</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>LIPID PROFILE</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>M</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>MANTOUX</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>MOTION TEST</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>MOTION TEST-1</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>OGCT</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>OGCT-1</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>Ref.DR</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>Ref.DR-1</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>Ref.DR-2</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>Self</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>Semen Analysis</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>Semen Analysis-1</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>SEROLOGY</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>Stool Culture</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>Sugar Timing Report</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>URINE ANALYSIS</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>urine culture</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>urine culture - NORMAL</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>X-ray OPINION</Button>
        <Button variant="text" sx={{color:'#00bcd4', fontSize: 15 ,"&:hover": {color: 'white'}}}>X-ray Foot</Button>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3}}
      >
        <Toolbar />
        <div>
       {showFirst && (<Drfaizal/>)}
       </div>
       <div>
       {showSecond && (<Adddr/>)}
       </div>
      </Box>
    </Box>
  );
}
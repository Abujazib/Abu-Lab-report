import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import './index.css';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AssignmentIcon from '@mui/icons-material/Assignment';

const actions = [
  { icon: <AssignmentIcon />, name: 'Copy' },
  { icon: <AssignmentIcon />, name: 'Save' },
  { icon: <AssignmentIcon />, name: 'Print' },
  { icon: <AssignmentIcon />, name: 'Share' },
];

 function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Backdrop open={open} sx={{backgroundColor: 'smokewhite'}}/>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16,}}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

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
      <SpeedDialTooltipOpen/>
    </div>
  )
}

export default Drfaizal
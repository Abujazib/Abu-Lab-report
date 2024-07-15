import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import React from 'react'

function Adddr() {
  return (
    <div>
    <Typography sx={{textAlign: 'center', color: '#00bcd4', fontWeight: 'Bold', fontSize: '30px', fontFamily: 'ourier-Oblique'
    }}>Add Doctor Name</Typography>
    <TextField label="DrName" variant="outlined" sx={{marginTop: '70px', marginLeft: '300px', width: '500px'}}/>
   </div>
  )
}

export default Adddr
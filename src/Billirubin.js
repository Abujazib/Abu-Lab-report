import React from 'react';
import './index.css';
import TextField from '@mui/material/TextField'
import ArticleIcon from '@mui/icons-material/Article';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@mui/material';

// function CurrentDate() {
//   const [currentDate, setCurrentDate] = useState(null);

//   useEffect(() => {
//     const today = new Date();
//     setCurrentDate(today);
//   }, []);

//   return (
//     <div>
//       Today's date: {currentDate ? currentDate.toLocaleDateString() : 'Loading...'}
//     </div>
//   );
// }

function Drfaizal() {
  return (
    <div className='Df'>
      <Typography sx={{fontSize: '25px', marginBottom: '10px'}}><b>Billirubin</b></Typography>
    <Box className='1page' sx={{border: '2px solid black'}}>
    <Tooltip title="Page">
    <Typography sx={{ marginLeft: '1020px'}}>1/1</Typography>
    </Tooltip>
    </Box>
    </div>
  )
}
export default Drfaizal
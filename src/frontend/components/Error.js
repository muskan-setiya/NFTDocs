import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material';
//import Login from "./components/Login.js";


export default function Error() {
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: 1200,
        height: 300,
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h3" style={{ color: 'black' }}>
        ERROR!
      </Typography>
      <Typography variant="h6" style={{ color: 'black' }}>
        The page you are looking for does not exist.
      </Typography>
    </Box>
  );
}
//
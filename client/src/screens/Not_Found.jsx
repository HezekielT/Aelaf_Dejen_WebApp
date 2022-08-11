import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const paperSx ={
  marginTop: 25,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

function Not_Found(props) {
  return (
    <Container maxWidth="sm" sx={{pt: '8%'}}>         
      <Paper
        sx={ paperSx }
      >
        <Typography comoponent="h1" variant='h5' sx={{p: 3}}>
            404 | Not Found
        </Typography>
        <Typography comoponent="h4" variant='h5' sx={{p: 3}}>
            Please check your url and try again!
        </Typography>
      </Paper>
    </Container>
  );
}

export default Not_Found;
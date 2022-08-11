import React from 'react';
import { Container, Paper, Typography } from '@mui/material';

function CheckEmail(props) {
  return (
    <Container maxWidth="sm" sx={{pt: '8%'}}>  
      <Paper
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography comoponent="h1" variant='h5' sx={{p: 3}}>
          Please Check Your Email Inbox!
        </Typography>
      </Paper>
    </Container>
  );
}

export default CheckEmail;
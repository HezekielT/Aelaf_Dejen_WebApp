import React from 'react';
import { Paper, Typography } from '@mui/material';

function CheckEmail(props) {
  return (
    <Paper
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography comoponent="h1" variant='h5' sx={{p: 3}}>
        Please Check Your Inbox(Email)!
      </Typography>
    </Paper>
  );
}

export default CheckEmail;
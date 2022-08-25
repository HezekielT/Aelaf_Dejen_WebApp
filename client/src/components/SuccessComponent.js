import { Alert, Snackbar } from '@mui/material';
import React from 'react';

function SuccessComponent(props) {
  return (
    <Snackbar
      open={props.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
      onClose={handleClose}
    >
      <Alert severity={props.type}>{props.message}</Alert>
    </Snackbar>
  );
}

export default SuccessComponent;
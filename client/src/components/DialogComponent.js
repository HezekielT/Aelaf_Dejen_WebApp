import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

function ConfirmRegistration(props) {
    return (
        <React.Fragment>
            <Dialog open={props.open}>
                <DialogTitle component="h1" variant="h5" sx={{ textAlign: 'center'}}>{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.message}
                    </DialogContentText>
                </DialogContent>
                {props.confirm ? (
                    <DialogActions>
                        <Button autoFocus onClick={() => {props.setDeleteConfirmation(false); props.setOpen(false)}}>
                            Cancel  
                        </Button>
                        <Button onClick={() => {props.setDeleteConfirmation(true); props.setOpen(false)}}>Delete</Button>
                    </DialogActions>
                ) : (<></>)}
            </Dialog>
        </React.Fragment>
    );
}

export default ConfirmRegistration;
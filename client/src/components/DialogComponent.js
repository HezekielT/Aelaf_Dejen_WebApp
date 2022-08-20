import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

function ConfirmRegistration(props) {
    return (
        <React.Fragment>
            <Dialog open={props.open} onClose={() => props.setOpen(false)}>
                <DialogTitle component="h1" variant="h5" sx={{ textAlign: 'center'}}>{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.message}
                    </DialogContentText>
                </DialogContent>
                {props.confirm ? (
                    <DialogActions>
                        <Button autoFocus onClick={() => props.setDelete(false)}>
                            Cancel  
                        </Button>
                        <Button onClick={() => props.setDelete(true)}>Delete</Button>
                    </DialogActions>
                ) : (<></>)}
            </Dialog>
        </React.Fragment>
    );
}

export default ConfirmRegistration;
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';

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
            </Dialog>
        </React.Fragment>
    );
}

export default ConfirmRegistration;
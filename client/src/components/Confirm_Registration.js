import React from 'react';
import Modal from '@mui/material/Modal'
import { Typography, Box } from '@mui/material';

function Confirm_Registration(props) {
    const [open, setOpen] = React.useState(false);
    if(props.val === true){
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" sx={{ mt: 2 }}>
                    Thank You for Registering!!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    You have Successfully registered for the upcoming convention.
                    Updates will be sent to you!
                </Typography>
            </Box>
        </Modal>
    );
}

export default Confirm_Registration;
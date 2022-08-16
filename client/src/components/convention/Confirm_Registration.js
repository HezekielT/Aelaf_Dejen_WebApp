import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal'
import { Typography, Box } from '@mui/material';

function ConfirmRegistration(props) {
    const [open, setOpen] = React.useState(false);
    // console.log(props.val)
    useEffect(() => {

        if(props.val == true){
            handleOpen()
        }
    },[])
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        
    };

    return (
        <React.Fragment>
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box>
                    <Typography id="modal-modal-title" sx={{ mt: 2 }}>
                        Thank You for Registering!!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        You have Successfully registered for the upcoming convention.
                        Updates will be sent to you!
                    </Typography>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default ConfirmRegistration;
import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal'
import { Typography, Box } from '@mui/material';

function ConfirmRegistration(props) {
    // const [open, setOpen] = React.useState(false);
    // // console.log(props.val)
    // useEffect(() => {

    //     if(props.val == true){
    //         handleOpen()
    //     }
    // },[])
    // const handleOpen = () => {
    //     setOpen(true)
    // };
    // const handleClose = () => {
        
    // };

    return (
        <React.Fragment>
            <Modal
                open={props.open}
                onClose={() => {props.setOpen(false)}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box position='absolute' top="50%" left="50%">
                    <Typography id="modal-modal-title" sx={{ mt: 2 }}>
                        Success
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.message}
                    </Typography>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default ConfirmRegistration;
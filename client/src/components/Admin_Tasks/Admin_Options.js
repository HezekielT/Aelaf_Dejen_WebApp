import { Button, ThemeProvider, Paper, Box, createTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const mdTheme = createTheme()

const boxSx = {

    backgroundColor: (theme) =>
    theme.palette.mode === 'light'
    ? theme.palette.grey[100]
    : theme.palette.grey[900],
    flexGrow: 1,
    minHeight: '83.6vh',
    overflow: 'auto',
    
}
const paperSx = {
        m: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 5
}

function Admin_Options(props) {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={mdTheme}>
            <Box
                component="main"
                sx={ boxSx }
            >
            <Paper
             sx={ paperSx }
            >
                <Button variant="outlined" onClick={() => navigate('/dashboard/contents')}>
                    Manage website contents
                </Button>
            </Paper>
            <Paper
                sx={ paperSx }
            >
                <Button variant="outlined" onClick={() => navigate('/dashboard/transport')}>
                    Register Drivers
                </Button>
            </Paper>
            <Paper
                sx={ paperSx }
            >
                <Button variant="outlined" onClick={() => navigate('/dashboard/accounts')}>
                    Manage Account
                </Button>
            </Paper>
            </Box>
        </ThemeProvider>
        // Manage website's content
        // Transport Providers registration
        // Manage Account
        // 
    );
}

export default Admin_Options;
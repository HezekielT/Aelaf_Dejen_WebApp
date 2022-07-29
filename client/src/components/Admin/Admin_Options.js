import { Button, Container, Paper } from '@mui/material';
import React from 'react';

function Admin_Options(props) {
    return (
        <Container maxWidth="lg" sx={{pt: '8%'}}>
            <Paper
            sx={{
                m: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2
            }}
            >
                <Button variant="outlined">
                    Manage website contents
                </Button>
            </Paper>
            <Paper
                sx={{
                    m: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 2
                }}
            >
                <Button variant="outlined">
                    Register Drivers
                </Button>
            </Paper>
            <Paper
                sx={{
                    m: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 2
                }}
            >
                <Button variant="outlined">
                    Manage Account
                </Button>
            </Paper>
        </Container>
        // Manage website's content
        // Transport Providers registration
        // Manage Account
        // 
    );
}

export default Admin_Options;
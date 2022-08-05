import { Button, Container, Paper } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Admin_Options(props) {
    const navigate = useNavigate();

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
                <Button variant="outlined" onClick={() => navigate('/dashboard/contents')}>
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
                <Button variant="outlined" onClick={() => navigate('/dashboard/transport')}>
                    Register Drivers
                </Button>
            </Paper>
            <Paper
                sx={{
                    m: 6,
                    mb: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 2
                }}
            >
                <Button variant="outlined" onClick={() => navigate('/dashboard/accounts')}>
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
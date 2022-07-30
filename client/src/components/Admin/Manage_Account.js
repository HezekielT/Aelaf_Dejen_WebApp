import { Button, Container, Paper } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';

function Manage_Account(props) {
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
                    Reset Password
                </Button>
            </Paper>
            {/* should i also add "add new admin" and "remove an admin" functionality */}
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
                    <LogoutIcon /> {" Logout"}
                </Button>
            </Paper>
        </Container>
    );
}

export default Manage_Account;
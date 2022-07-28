import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

function Copyright() {
    const navigate = useNavigate;
    return (
        <Typography sx={{ justifyContent: 'center' }} variant='body2' color='text.secondary'>
            {'Copyright ©  '}
            <Link color="inherit" onClick={() => navigate('/')}>
                AELAPH-DEJEN
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Footer(props) {
    return (
        <Box
            component="footer"
            sx={{
                display: 'flex',
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) => 
                theme.palette.mode === 'light' 
                ? theme.palette.grey[200] 
                : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="sm">
                <Typography variant='body1'>
                    AELAPH-DEJEN WEB APP
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
}

export default Footer;
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Box, Typography, Container, Link, Grid } from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AboutUs from './AboutUs';

const navigate = useNavigate;
function Copyright() {
    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{mx: '25%' }}>
            <Typography variant='body2' color='text.secondary'>
                {'Copyright ©  '}
                <Link color="inherit" onClick={() => navigate('/')}>
                    AELAPH-DEJEN
                </Link>
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Grid>
    );
}

function Addresss() {
    return (
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography>Address</Typography>
        </Grid>
    )
}

function Usefullinks() {
    return (
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box 
                variant='body1' 
                sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    py: 4,
                    cursor: 'pointer'
                }}
            >
                <Link onClick={() => navigate('/aboutus')}>
                    About Us
                </Link>
                <Link onClick={() => navigate('/aboutus')}>
                    Contact Us
                </Link>
                <Link onClick={() => navigate('/aboutus')}>
                    Terms of Service
                </Link>
                <Link onClick={() => navigate('/aboutus')}>
                    Privacy Policiy
                </Link>
            </Box>
        </Grid>
    )
}

function SocialLinks() {
    return (
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography>
                Our Social Links
            </Typography>
                        
            <Grid item xs={4} sm={2} md={4} lg={4} xl={4}
                sx={{
                    pt: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    // mx: 3
                }}
                >
                <Grid item>
                    <Link >
                        <GoogleIcon/>
                    </Link>
                </Grid>
                <Grid item>
                    <Link>
                        <FacebookIcon />
                    </Link>
                </Grid>
                <Grid item>
                    <Link>
                        <TwitterIcon />
                    </Link>
                </Grid>
                <Grid item>
                    <Link>
                        <LinkedinIcon />
                    </Link>
                </Grid>
                <Grid item>
                    <Link>
                        <InstagramIcon />
                    </Link>
                </Grid>
            
            </Grid>
        </Grid>

    )
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
            <Container maxWidth="xl">
                <Grid>
                    <Typography variant='body1'>
                        AELAPH-DEJEN PLC
                    </Typography>
                </Grid>
                <Grid container spacing={2}>
                    <Addresss />
                    <Usefullinks />
                    <SocialLinks />
                    <Copyright />
                </Grid>
                
            </Container>
        </Box>
    );
}

export default Footer;
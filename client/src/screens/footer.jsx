import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Box, Typography, Container, Link, Grid } from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const navigate = useNavigate;
function Copyright() {
    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{pl: 3,display: 'flex', justifyContent: 'center' }}>
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
        // <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <>
                <Typography sx={{ pl:2 }}> &gt; Address</Typography>
                <Typography sx={{}}>
            Addis Ababa, Ethiopia
            </Typography>
            <Typography sx={{ 
                // pl: 2
            }}>
            +251-(0)-9
            </Typography>
            </>
            
        // </Grid>
    )
}

function Usefullinks() {
    return (
        // <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <>
            <Typography sx={{ 
                pl: 2, 
                color: '#64748B'}}>
            &gt; Useful links
            </Typography>
            <Box 
                variant='body1' 
                sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    // pt: 2,
                    // px: 10,
                    cursor: 'pointer'
                }}
                >
                {/* <Link onClick={() => navigate('/aboutus')}>
                    &gt; About Us
                </Link>
                <Link onClick={() => navigate('/aboutus')}>
                    &gt; Contact Us
                </Link> */}
                <Link onClick={() => navigate('/aboutus')}>
                    Terms of Service
                </Link>
                <Link onClick={() => navigate('/aboutus')}>
                    Privacy Policiy
                </Link>
            </Box>
        </>
        // </Grid>
    )
}

function SocialLinks() {
    return (
        // <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <>
            <Typography sx={{ pl: 2}}>
            &gt; Our Social Links
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
            </>
        // </Grid>

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
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} sx={{ pl: 3,display: 'flex', justifyContent: 'center' }}>
                        <Typography variant='body1'>
                            AELAPH-DEJEN PLC
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Addresss />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Usefullinks />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SocialLinks />
                    </Grid>
                    {/* <Grid item xs={12} md={4}> */}
                        <Copyright />
                    {/* </Grid> */}
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
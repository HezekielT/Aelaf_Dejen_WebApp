import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Link, Grid } from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [footer, setFooter] = useState(null)
    
    useEffect(() => {
        // {console.log(location.)}
        if(location.pathname === '/' || location.pathname === '/dashboard' 
        || location.pathname === '/dashboard/contents' || location.pathname === '/dashboard/transport' 
        || location.pathname === '/dashboard/accounts') {
            setFooter(
                <Box
                    component="footer"
                    sx={{
                        display: 'flex',
                        // position: "relative",
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
                                    AELAPH-DEJEN CONVENTION
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ justifyContent: {xs: 'center'}, display: {xs: 'flex'}, }}>
                                <Addresss />
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ justifyContent: {xs: 'center'}, display: {xs: 'flex'}, }}>
                                <Usefullinks />
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ justifyContent: {xs: 'center'}, display: {xs: 'flex'}, }}>
                                <SocialLinks />
                            </Grid>
                            {/* <Grid item xs={12} md={4}> */}
                                <Copyright />
                            {/* </Grid> */}
                        </Grid>
                    </Container>
                </Box>
            )
        } else {
            setFooter( <></> )
            
        }
    },[location.pathname])    

    function Usefullinks() {
        return (
            // <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
            </Box>
            // </Grid>
        )
    }

    function SocialLinks() {
        return (
            // <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
                <Typography sx={{ pl: 2}}>
                &gt; Our Social Links
                </Typography>
                            
                <Grid item xs={4} sm={2} md={4} lg={4} xl={4}
                    sx={{
                        pt: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        // justifyContent: 'space-around',
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
                </Box>
    
        )
    }

    function Addresss() {
        return (
            // <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
                    <Typography sx={{ pl:2, }}> &gt; Address</Typography>
                    <Typography sx={{}}>
                U.S
                </Typography>
                <Typography sx={{ 
                    // pl: 2
                }}>
                +1 (469) 432-2435
                </Typography>
                </Box>
                
            // </Grid>
        )
    }
    
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

    return (
        footer
    )
}

export default Footer;
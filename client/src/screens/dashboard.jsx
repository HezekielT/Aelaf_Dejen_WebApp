import React from 'react';
import { Typography, Grid, Paper,
    ThemeProvider, Box, Container, createTheme, SxProps } from '@mui/material'
import Events from '../components/convention/Events';
import Home from '../components/Home';
import ContactUs from '../components/ContactUs';
import NavBar from './navbar';
import Footer from './footer';
import { useReference } from '../context/refProvider';

const mdTheme = createTheme()

const boxSx = {

    backgroundColor: (theme) =>
    theme.palette.mode === 'light'
    ? theme.palette.grey[100]
    : theme.palette.grey[900],
    flexGrow: 1,
    minHeight: '90.6vh',
    overflow: 'auto',
    
}
const paperSx = { 
    display: 'flex',
    flexDirection: 'column',
    mt:5, mb: 4,
}
 const typographySx = { mt: 4,mb: 4,textAlign: 'center'}
 const gridSx = { my: 3, justifyContent: 'center' }

function Dashboard(props) {
    const { eventRef } = useReference();

    return (
        <ThemeProvider theme={mdTheme}>
            <NavBar />
            <Home />
            <Box
                ref={eventRef}
                component="main"
                sx={ boxSx }
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12} sx={{ mt: 2}}>
                        <Paper
                            sx={ paperSx }
                        >
                            <Typography component="h1" variant="h5" sx={ typographySx }>
                                Upcoming Conventions
                            </Typography>  
                        </Paper>
                        <Container>
                            <Grid item xs={12} md={12} lg={12} sx={ gridSx }>
                                <Events admin={false}/>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
            <ContactUs />
            <Footer />
        </ThemeProvider>
    );
}

export default Dashboard;





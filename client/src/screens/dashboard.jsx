import React from 'react';
import { Typography, Grid, Paper,
    ThemeProvider, Box, Container, createTheme } from '@mui/material'
import Events from '../components/Events';
import Home from '../components/Home';
import ContactUs from '../components/ContactUs';


import { useReference } from '../context/refProvider';
const mdTheme = createTheme()

function Dashboard(props) {
    const { eventRef } = useReference();

    return (
        <ThemeProvider theme={mdTheme}>

            <Home />
            <Box
                ref={eventRef}
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                    flexGrow: 1,
                    minHeight: 'auto',
                    overflow: 'auto',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12} sx={{ mt: 2}}>
                        <Paper
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                mt:5, mb: 4,
                            }}
                        >
                            <Typography component="h1" variant="h5" sx={{ mt: 4,mb: 4,textAlign: 'center'}}>
                                Upcoming Conventions
                            </Typography>  
                        </Paper>
                        <Container>
                            <Grid item xs={12} md={12} lg={12} sx={{ my: 3, justifyContent: 'center' }}>
                                <Events admin={false}/>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
            <ContactUs />
        </ThemeProvider>
    );
}

export default Dashboard;





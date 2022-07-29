import React from 'react';
import { Typography, Grid, Paper, 
    ThemeProvider, Box, Container, createTheme } from '@mui/material'
import Participant_Regist from '../components/Participant-Registeration';

const mdTheme = createTheme()

function Dashboard(props) {
    return (
        <ThemeProvider theme={mdTheme}>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '83.6vh',
                    overflow: 'auto'
                }}
            >
                <Container maxWidth="lg" sx={{ mt:4, mb: 4, }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    mt:-1, mb: 4,
                                }}
                            >
                                <Typography component="h1" variant="h5" sx={{ mt: 4,mb: 4,textAlign: 'center'}}>
                                    Upcoming Conventions
                                </Typography>  
                            </Paper>
                            <Grid container spacing={2}>
                                <Grid item lg={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Participant_Regist />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default Dashboard;
// This component will serve as an introductory 
// for our web and will be associated with /home path

import React from 'react';
import { Box, ThemeProvider, Container, 
    Grid, Paper, 
    Typography, createTheme, Card } from '@mui/material'

import { useReference } from '../context/refProvider';

const mdTheme = createTheme();

function Home(props) {
    const { homeRef } = useReference();
    return (
            <Card
                ref={homeRef}
                component="main"
                sx={{
                    backgroundColor: '#1565c0',
                    flexGrow: 1,
                    minHeight: '88vh',
                    overflow: 'auto',
                    mt: 4
                }}
            >
                <Container maxWidth="xl" sx={{ mt:4, mb: 4, display: 'flex', flexDirection: 'row'}}>
                    <Grid container spacing={2} sx={{ }}>
                        <Grid item xs={12} md={12} lg={6}>
                            <Paper
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    mt:-1, mb: 4,
                                    mt: '30%',
                                }}
                            >
                                <Typography component="h1" variant="h5" sx={{ mt: 4,mb: 4,textAlign: 'center'}}>
                                    WELCOME TO AELAPH DEJEN
                                </Typography>  
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                        <Paper
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                mt:-1, mb: 4,
                                mt: '15%',mb: '15%',
                                p: '5%'
                            }}
                        >
                            <Typography paragraph variant="h5" sx={{ mt: 4,mb: 4,textAlign: 'center'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>  
                        </Paper> 
                        </Grid>
                    </Grid>
                </Container>
            </Card>
    );
}

export default Home;
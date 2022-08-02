import { Box, Button, Card, Grid, Paper, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useReference } from '../context/refProvider';

function ContactUs(props) {
    const { contactRef } = useReference();
    return (
        <Container ref={contactRef}>
            <Grid container>
            <Grid item xs={12} lg={12} sx={{ p: 3,display: 'flex', justifyContent: 'center' }}>
                <Typography 
                    variant='h4'
                    noWrap
                    component="div"
                    sx={{color: '#1565c0', }}
                >
                    Contact Us
                </Typography>

            </Grid>
                <Grid item xs={12} lg={12} sx={{ p: 4,display: 'flex', justifyContent: 'center' }}>

                    <Paper sx={{width: '60vh'}}>
                        {/* <Card > */}
                        <Box maxWidth="lg" sx={{backgroundColor: '#f5f5f5',p: 4,display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <Typography sx={{p: 2}}>
                                Your Name
                            </Typography>
                            <TextField 
                                variant='outlined'
                                />
                            <Typography sx={{p: 2}}>
                                Your Email
                            </Typography>
                            <TextField 
                                variant='outlined'
                            />
                            <Typography sx={{p: 2}}>
                                Message 
                            </Typography>
                            <TextField 
                                variant='outlined'
                                />
                            <Button variant='contained' sx={{m: 2}}>Send Message</Button>
                        </Box>
                        {/* </Card> */}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ContactUs;
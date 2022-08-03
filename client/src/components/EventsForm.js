import { Button, Container, Box, 
    Grid, Paper, Typography, TextField } from '@mui/material';
import React from 'react';

function EventsForm(props) {
    return (
        <Container>
            <Grid container>
            <Grid item xs={12} lg={12} sx={{ p: 3,display: 'flex', justifyContent: 'center' }}>
                <Typography 
                    variant='h4'
                    noWrap
                    component="div"
                    sx={{color: '#1565c0', }}
                >
                    Convention Details
                </Typography>

            </Grid>
                <Grid item xs={12} lg={12} sx={{ p: 4,display: 'flex', justifyContent: 'center' }}>

                    <Paper sx={{width: '60vh'}}>
                        {/* <Card > */}
                        <Box maxWidth="lg" sx={{backgroundColor: '#f5f5f5',p: 4,display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <Typography sx={{p: 2}}>
                                Convention's Title
                            </Typography>
                            <TextField 
                                variant='outlined'
                                />
                            <Typography sx={{p: 2}}>
                                Description
                            </Typography>
                            <TextField 
                                variant='outlined'
                            />
                            <Typography sx={{p: 2}}>
                                Poster(if any)
                            </Typography>
                            <label htmlFor='poster'>
                                <input 
                                    id="poster"
                                    type="file"
                                    accept='image/*'
                                    style={{ display: 'none'}}
                                    // onChange={(e) => }
                                />
                                <Button
                                    variant="outlined"
                                    component="span"
                                    fullWidth
                                >Choose Poster</Button>
                            </label>
                            <Typography sx={{p: 2}}>
                                Date and Time
                            </Typography>
                            <TextField 
                                variant='outlined'
                                />
                            <Typography sx={{p: 2}}>
                                Venue
                            </Typography>
                            <TextField 
                                variant='outlined'
                            />

                            <Button variant='contained' sx={{m: 2}}>Submit</Button>
                        </Box>
                        {/* </Card> */}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default EventsForm;
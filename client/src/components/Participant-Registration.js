import { Typography, Grid, Paper, TextField, Box, Button, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React from 'react';

function Participant_Regist(props) {
    return (
        // <Container>
            <Grid container>
            <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography 
                    variant='h6'
                    // noWrap
                    component="div"
                    sx={{color: '#1565c0', px: 3}}
                >
                    Please Fill in the following information
                </Typography>

            </Grid>
                <Grid item xs={12} lg={12} sx={{ p: 1,display: 'flex', justifyContent: 'center' }}>

                    <Paper sx={{width: '60vh',}}>
                        {/* <Card > */}
                        <Box maxWidth="lg" sx={{backgroundColor: '#f5f5f5',p: 6,display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <TextField
                        required
                        // id="fname"
                        // name="fname"
                        label="First Name"
                        fullWidth
                        autoComplete="first name"
                        variant="outlined"
                        sx={{py: 1}}
                        // value={props.form.fname}
                        // onChange={(e) => props.onChange([props.form.fname = e.target.value])}
                        />
                            <TextField
                        required
                        // id="lname"
                        // name="lname"
                        label="Last Name"
                        fullWidth
                        autoComplete="last name"
                        variant="outlined"
                        sx={{py: 1}}
                        // value={props.form.lname}
                        // onChange={(e) => props.onChange([props.form.lname = e.target.value])}
                    />
                            <TextField
                        required
                        // id="licenceNo"
                        // name="licenceNo"
                        label="Email"
                        fullWidth
                        autoComplete="email"
                        variant="outlined"
                        sx={{py: 1}}
                        // value={props.form.driver_licence_no}
                        // onChange={(e) => props.onChange([props.form.driver_licence_no = e.target.value])}
                        />
                        <TextField
                        required
                        // id="lname"
                        // name="lname"
                        label="Phone Number"
                        fullWidth
                        autoComplete="phoneno"
                        variant="outlined"
                        sx={{py: 1}}
                        // value={props.form.lname}
                        // onChange={(e) => props.onChange([props.form.lname = e.target.value])}
                        />
                        <Typography sx={{py: 2}}>
                        Since we have prepared a transport service, please select the closest location to you from the following
                    </Typography>
                    <Box sx={{ py:3, display: 'flex', justifyContent: 'center'}}>
                        
                    <FormControl fullWidth>
                        <InputLabel id="select-label">Locations</InputLabel>
                        <Select
                        labelId="select-label"
                        label="address"
                        
                        >
                            <MenuItem>Item</MenuItem>
                            <MenuItem>Item 2</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    <Button
                        type="submit"
                        // onClick={handleRequest}
                        variant="contained"
                        sx={{ mt: 4, mb: 4, }}
                        >
                        Register
                    </Button></Box>
                        {/* </Card> */}
                    </Paper>
                </Grid>
            </Grid>
        // </Container>
    );
}

export default Participant_Regist;
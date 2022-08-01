import { Typography, Grid, TextField, Box, Button, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React from 'react';

function Participant_Regist(props) {
    return (
        <Container maxWidth="sm" sx={{
            backgroundColor: "#fff",
            flexGrow: 1,
            overflow: 'auto',
            mb: 4,
            p: 4
        }}>
            <Typography paragraph component="h4" variant="h6">Please Fill in the following information</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        // id="fname"
                        // name="fname"
                        label="First Name"
                        fullWidth
                        autoComplete="first name"
                        variant="standard"
                        // value={props.form.fname}
                        // onChange={(e) => props.onChange([props.form.fname = e.target.value])}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        // id="lname"
                        // name="lname"
                        label="Last Name"
                        fullWidth
                        autoComplete="last name"
                        variant="standard"
                        // value={props.form.lname}
                        // onChange={(e) => props.onChange([props.form.lname = e.target.value])}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        // id="licenceNo"
                        // name="licenceNo"
                        label="Email"
                        fullWidth
                        autoComplete="email"
                        variant="standard"
                        // value={props.form.driver_licence_no}
                        // onChange={(e) => props.onChange([props.form.driver_licence_no = e.target.value])}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        // id="lname"
                        // name="lname"
                        label="Phone Number"
                        fullWidth
                        autoComplete="phoneno"
                        variant="standard"
                        // value={props.form.lname}
                        // onChange={(e) => props.onChange([props.form.lname = e.target.value])}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography>
                        Since we have prepared a transport service, please select the closest location to you from the following
                    </Typography>
                </Grid>
                {/* <Grid item xs={12} sm={5}> */}
                {/* <TextField
                        required
                        // id="licenceNo"
                        // name="licenceNo"
                        label="Address"
                        fullWidth
                        autoComplete="address"
                        variant="standard"
                        // value={props.form.driver_licence_no}
                        // onChange={(e) => props.onChange([props.form.driver_licence_no = e.target.value])}
                    />
                </Grid> */}
                <Grid item xs={12} sm={12} sx={{pb: 4 }}>
                    <Box sx={{ px:10, display: 'flex', justifyContent: 'center'}}>
                        
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
                </Grid>
                <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        type="submit"
                        // onClick={handleRequest}
                        variant="contained"
                        sx={{ mt: -4, mb: 4, }}
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Participant_Regist;
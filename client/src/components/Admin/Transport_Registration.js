import { Typography, Grid, TextField, Box, Button, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React from 'react';

function Transport_Registration(props) {
    return (
        <Container maxWidth="sm" sx={{
            backgroundColor: "#fff",
            flexGrow: 1,
            overflow: 'auto',
            mb: 4,
            p: 4
        }}>
            <Typography>Please Fill in the following information</Typography>
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
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        // id="lname"
                        // name="lname"
                        label="Car's Plate Number"
                        fullWidth
                        autoComplete="plateno"
                        variant="standard"
                        // value={props.form.lname}
                        // onChange={(e) => props.onChange([props.form.lname = e.target.value])}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        // id="lname"
                        // name="lname"
                        label="Car's Plate Number"
                        fullWidth
                        autoComplete="plateno"
                        variant="standard"
                        // value={props.form.lname}
                        // onChange={(e) => props.onChange([props.form.lname = e.target.value])}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        // id="lname"
                        // name="lname"
                        label="Assign Starting Location"
                        fullWidth
                        autoComplete="startinglocation"
                        variant="standard"
                        // value={props.form.lname}
                        // onChange={(e) => props.onChange([props.form.lname = e.target.value])}
                    />
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

export default Transport_Registration;
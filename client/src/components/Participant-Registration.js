import { Typography, Grid, Paper, TextField, Box, Button, 
    Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {v4 as uuidV4 } from "uuid";

const axios = require('axios');

const validationSchema = yup.object({
    first_name: yup
      .string('Enter your name')
      .required('Name is required'),
    last_name: yup
      .string('Enter your name')
      .required('Name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    phoneno: yup
      .string('Enter phone no')
      .required('Your phone number is required'),
    address: yup
      .string('Enter Address')
      .required('Location is required'),
});

function Participant_Regist(props) {
    const pid = uuidV4();

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            phoneno: '',
            address: '',
          },
          validationSchema: validationSchema,
          onSubmit: async (values) => {
            // e.preventDefault();
            const config = {
                header: {
                    "Content-Type": "application/json"
                },
            };

            await axios.post(
                "http://localhost:5000/participate",
                {
                    id: pid,
                    event_id: props.id,
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email,
                    phoneno: values.phoneno,
                    address: values.address,
                    event_name: props.event_name,
                },
                config
            ).then(function (){
                alert(JSON.stringify("Thank You for Registering!"))
            }).catch(function (error){
                console.log(error);
            })
          }
    });

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
                        <Box component="form" onSubmit={formik.handleSubmit} maxWidth="lg" sx={{backgroundColor: '#f5f5f5',p: 6,display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <TextField
                                required
                                id="first_name"
                                name="first_name"
                                label="First Name"
                                fullWidth
                                autoComplete="first name"
                                variant="outlined"
                                sx={{py: 1}}
                                value={formik.values.first_name}
                                onChange={formik.handleChange}
                                error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                                helperText={formik.touched.first_name && formik.errors.first_name}
                            />
                            <TextField
                                required
                                id="last_name"
                                name="last_name"
                                label="Last Name"
                                fullWidth
                                autoComplete="last name"
                                variant="outlined"
                                sx={{py: 1}}
                                value={formik.values.last_name}
                                onChange={formik.handleChange}
                                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                                helperText={formik.touched.last_name && formik.errors.last_name}
                            />
                            <TextField
                                id="email"
                                name="email"
                                required
                                label="Email"
                                fullWidth
                                autoComplete="email"
                                variant="outlined"
                                sx={{py: 1}}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField
                                id="phoneno"
                                name="phoneno"
                                required
                                fullWidth
                                label="Phone Number"
                                autoComplete="phoneno"
                                variant="outlined"
                                sx={{py: 1}}
                                value={formik.values.phoneno}
                                onChange={formik.handleChange}
                                error={formik.touched.phoneno && Boolean(formik.errors.phoneno)}
                                helperText={formik.touched.phoneno && formik.errors.phoneno}
                            />
                            <Typography sx={{py: 2}}>
                                Since we have prepared a transport service, please select the closest location to you from the following
                            </Typography>
                            <Box sx={{ py:3, display: 'flex', justifyContent: 'center'}}>
                            
                                <FormControl fullWidth>
                                    <InputLabel id="select-label">Locations</InputLabel>
                                    <Select
                                        id='address'
                                        name="address"
                                        labelId="select-label"
                                        label="address"
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        error={formik.touched.address && Boolean(formik.errors.address)}
                                        // helperText={formik.touched.address && formik.errors.address}
                                    >
                                        <MenuItem value="Item">Item</MenuItem>
                                        <MenuItem>Item 2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 4, mb: 4, }}
                                >
                                Register
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        // </Container>
    );
}

export default Participant_Regist;
import { Typography, Grid, TextField, Paper, Box, Button } from '@mui/material';
import React from 'react';
  
import { useFormik } from 'formik';
import * as yup from 'yup';

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
    plateno: yup
      .string('Enter plate no')
      .required('Plate number of the car is required'),
    location: yup
      .string('Enter location')
      .required('Location is required'),
})

function Transport_Registration(props) {

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            phoneno: '',
            plateno: '',
            location: '',
          },
          validationSchema: validationSchema,
          onSubmit: (values) => {
            alert(JSON.stringify("Thank You for Registering!"))
          }
    });

    return (

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
                    <TextField
                        required
                        id="plateno"
                        name="plateno"
                        label="Car's Plate Number"
                        fullWidth
                        autoComplete="plateno"
                        variant="outlined"
                        sx={{py: 1}}
                        value={formik.values.plateno}
                        onChange={formik.handleChange}
                        error={formik.touched.plateno && Boolean(formik.errors.plateno)}
                        helperText={formik.touched.plateno && formik.errors.plateno}
                    />
                    <TextField
                        required
                        id="location"
                        name="location"
                        label="Assign Starting Location"
                        fullWidth
                        autoComplete="startinglocation"
                        variant="outlined"
                        sx={{py: 1}}
                        value={formik.values.location}
                        onChange={formik.handleChange}
                        error={formik.touched.location && Boolean(formik.errors.location)}
                        helperText={formik.touched.location && formik.errors.location}
                    />
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
    );
}

export default Transport_Registration;
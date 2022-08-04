import { Typography, Grid, TextField, Box, Button, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
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
                        id="first_name"
                        name="first_name"
                        label="First Name"
                        fullWidth
                        autoComplete="first name"
                        variant="outlined"
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                        helperText={formik.touched.first_name && formik.errors.first_name}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="last_name"
                        name="last_name"
                        label="Last Name"
                        fullWidth
                        autoComplete="last name"
                        variant="outlined"
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                        helperText={formik.touched.last_name && formik.errors.last_name}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="plateno"
                        name="plateno"
                        label="Car's Plate Number"
                        fullWidth
                        autoComplete="plateno"
                        variant="outlined"
                        value={formik.values.plateno}
                        onChange={formik.handleChange}
                        error={formik.touched.plateno && Boolean(formik.errors.plateno)}
                        helperText={formik.touched.plateno && formik.errors.plateno}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="location"
                        name="location"
                        label="Assign Starting Location"
                        fullWidth
                        autoComplete="startinglocation"
                        variant="outlined"
                        value={formik.values.location}
                        onChange={formik.handleChange}
                        error={formik.touched.location && Boolean(formik.errors.location)}
                        helperText={formik.touched.location && formik.errors.location}
                    />
                </Grid>
                <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        type="submit"
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
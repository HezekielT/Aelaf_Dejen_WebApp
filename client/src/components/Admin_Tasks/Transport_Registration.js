import { Typography, Grid, TextField, Paper,
     Box, Button, Select, MenuItem,
     FormControl, InputLabel  } from '@mui/material';
import React, { useEffect, useState } from 'react';
  
import { useFormik } from 'formik';
import * as yup from 'yup';
import { v4 as uuidV4 } from 'uuid'
import axios from 'axios'

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
    convention: yup
      .string('Enter location')
      .required('convention is required'),
    location: yup
      .string('Enter location')
      .required('Location is required'),
})

function Transport_Registration(props) {
    const tid = uuidV4()
    const [conventions, setConventions] = useState([])

    useEffect(() => {
        const fetch = () => {
            axios.get(
                "http://localhost:5000/getEvents"
            ).then(function(response) {
                // console.log("response", response)
                setConventions(response.data)
                // console.log("conv", response.data)
            }).catch(function (error) {
                console.log(error)
            })
        }
        fetch();
    }, [])

    function RenderConventions(props) {
        
        return (
            <FormControl fullWidth>
                <InputLabel id="select-label">Convention</InputLabel>
                <Select
                    id='convention'
                    name="convention"
                    labelId="select-label"
                    label="convention"
                    value={formik.values.convention}
                    onChange={formik.handleChange}
                    error={formik.touched.convention && Boolean(formik.errors.convention)}
                    // helperText={formik.touched.address && formik.errors.address}
                    
                >
                    {conventions.map(convention => 
                        <MenuItem key={convention.id} value={convention.id}>{convention.location}</MenuItem>
                    )}
                </Select>
            </FormControl>
        )
    }

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            phoneno: '',
            plateno: '',
            convention: '',
            location: '',
          },
          validationSchema: validationSchema,
          onSubmit: (values) => {
            const putvalues = () => {
                axios.post(
                    "http://localhost:5000/registerDriver",
                    {
                        id: tid,
                        first_name: values.first_name,
                        last_name: values.last_name,
                        email: values.email,
                        phoneno: values.phoneno,
                        plateno: values.plateno,
                        convention: values.convention,
                        initialLocation: values.location,
                    }
                ).then(function() {
                    alert(JSON.stringify("Driver Registered!"))
                }).catch(function (error) {
                    console.log(error)
                })
            }
            putvalues();

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
                    <Box sx={{ py:3, display: 'flex', justifyContent: 'center'}}>
                        {conventions !== [] ? (
                            <RenderConventions conventions={conventions}/>
                        ) : (
                            <FormControl fullWidth>
                                <InputLabel id="select-label">Convention</InputLabel>
                                <Select
                                    id='convention'
                                    name="convention"
                                    labelId="select-label"
                                    label="convention"
                                    value={formik.values.convention}
                                    onChange={formik.handleChange}
                                    error={formik.touched.convention && Boolean(formik.errors.convention)}
                                    // helperText={formik.touched.address && formik.errors.address}
                                    
                                >
                                    <MenuItem>None available</MenuItem>
                                </Select>
                            </FormControl>
                    )}
                    </Box>
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
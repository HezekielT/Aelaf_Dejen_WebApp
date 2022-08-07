import { Button, Container, Box, 
    Grid, Paper, Typography, TextField } from '@mui/material';
import React from 'react';
import { v4 as uuidV4 } from "uuid";
import { useFormik } from 'formik';
import * as yup from 'yup';

const axios = require('axios');

const conventionValidationSchema = yup.object({
    title: yup
      .string("Enter convention's title")
      .required('Title is required'),
    description: yup
      .string('Enter description')
      .required('Description is required'),
    dateTime: yup
      .string('Enter Time and Date of the convention')
      .required('Date and Time of the convention is required'),
    venue: yup
      .string('Enter Venue')
      .required('Venue is required'),
});

function EventsForm(props) {
    const eid = uuidV4();

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            dateTime: '',
            venue: '',
          },
          validationSchema: conventionValidationSchema,
          onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            // e.preventDefault();
            // const config = {
            //     header: {
            //         "Content-Type": "application/json"
            //     },
            // };
            // const putvalues = async () => {
            //     await axios.post(
            //         "http://localhost:5000/addEvent",
            //         {
            //             id: eid,
            //             title: values.title,
            //             description: values.description,
            //             dateTime: values.dateTime,
            //             venue: values.venue,
            //         },
            //         config
            //     ).then(function (){
            //         alert(JSON.stringify("Successfully Added!"))
            //     }).catch(function (error){
            //         alert(error)
            //     })
            // }

          }
    });
    
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
                        <Box component="form" onSubmit={formik.handleSubmit} maxWidth="lg" sx={{backgroundColor: '#f5f5f5',p: 4,display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <Typography sx={{p: 2}}>
                                Convention's Title
                            </Typography>
                            <TextField 
                                required
                                id="title"
                                name="title"
                                label="title"
                                fullWidth
                                autoComplete="title"
                                variant="outlined"
                                sx={{py: 1}}
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                error={formik.touched.title && Boolean(formik.errors.title)}
                                helperText={formik.touched.title && formik.errors.title}
                            />
                            <Typography sx={{p: 2}}>
                                Description
                            </Typography>
                            <TextField 
                                required
                                id="description"
                                name="description"
                                fullWidth
                                autoComplete="description"
                                variant="outlined"
                                sx={{py: 1}}
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}
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
                                required
                                id="dateTime"
                                name="dateTime"
                                fullWidth
                                autoComplete="dateTime"
                                variant="outlined"
                                sx={{py: 1}}
                                value={formik.values.dateTime}
                                onChange={formik.handleChange}
                                error={formik.touched.dateTime && Boolean(formik.errors.dateTime)}
                                helperText={formik.touched.dateTime && formik.errors.dateTime}
                            />
                            <Typography sx={{p: 2}}>
                                Venue
                            </Typography>
                            <TextField 
                                required
                                id="venue"
                                name="venue"
                                fullWidth
                                autoComplete="venue"
                                variant="outlined"
                                sx={{py: 1}}
                                value={formik.values.venue}
                                onChange={formik.handleChange}
                                error={formik.touched.venue && Boolean(formik.errors.venue)}
                                helperText={formik.touched.venue && formik.errors.venue}
                            />

                            <Button type="submit" variant='contained' sx={{m: 2}}>Submit</Button>
                        </Box>
                        {/* </Card> */}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default EventsForm;
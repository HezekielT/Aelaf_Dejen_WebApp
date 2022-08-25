import { Button, Container, Box, 
    Grid, Paper, Typography, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { v4 as uuidV4 } from "uuid";
import { useFormik } from 'formik';
import * as yup from 'yup';
import storage from "../../firebase";
import ConfirmRegistration from '../DialogComponent';

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

    const msg =props.convention!==undefined ? ("Successfully Updated") : ("Successfully Added New Convention");
    const [open, setOpen] = useState(false)
    const title = "Success";

    const [imagePath, setImagePath] = useState(undefined);
    const [remove, setRemove] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(false)
    let val = ''

    function UploadToFirebase(value) {
        setButtonDisable(true)
        const uploadTask = storage.ref(`posters/${value.name}`).put(value);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                var percent = snapshot.bytesTransferred / snapshot.totalbytes * 100 ;
            },
            (error) => {console.log(error)},
            async () => {
                await storage
                    .ref("posters").child(value.name).getDownloadURL().then((urls) => {
                        console.log("Here is the url ",urls)
                        val = urls;
                        setImagePath(val) 
                        setButtonDisable(false)
                })
                
            }
        )
    }
    // useEffect(() => {
    //     // setImagePath(val)
    //     console.log(imagePath, 'after uploading hopefully')
    // },[imagePath])

    const formik = useFormik({
        initialValues: {
            title: props.convention!==undefined ? (props.convention.title) : (''),
            description: props.convention!==undefined ? (props.convention.description) : (''),
            dateTime: props.convention!==undefined ? (props.convention.dateTime) : (''),
            venue: props.convention!==undefined ? (props.convention.location) : (''),
          },
          validationSchema: conventionValidationSchema,
          onSubmit: (values, actions) => {
            const config = {
                header: {
                    "Content-Type": "application/json"
                },
            };
            if(props.convention!==undefined){
                const putvalues = async () => {
                    if(imagePath === undefined) {
                        setImagePath(props.convention.image);
                    }
                    if(remove) {
                        setImagePath(undefined);
                    }
                    await axios.post(
                        `/api/event/updateEvent/${props.convention.id}`,
                        {
                            title: values.title,
                            image: remove ? ('') : (imagePath),
                            description: values.description,
                            dateTime: values.dateTime,
                            location: values.venue,
                        },{
                            header: {
                                "Content-Type": "application/json",
                            },}
                    ).then(function (){
                        // alert(JSON.stringify("Successfully Updated!"))
                        setOpen(true)
                        setImagePath(undefined)
                        setRemove(false)
                        props.setEnableEdit(false)
                        props.setReloadComponent(!props.reloadComponent)
                    }).catch(function (error){
                        alert(error)
                    })
                }
                putvalues()
                actions.setSubmitting(false);
                actions.resetForm({
                    values: {
                        title: '',
                        description: '',
                        dateTime: '',
                        venue: '',
                    },  
                });
            } else {
                const putvalues = async () => {
                    await axios.post(
                        "/api/event/addEvent",
                        {
                            id: eid.toString(),
                            title: values.title,
                            image: imagePath,
                            description: values.description,
                            dateTime: values.dateTime,
                            location: values.venue,
                        },{
                            header: {
                                "Content-Type": "application/json",
                            },}
                    ).then(function (){
                        // props.setReloadComponent(!props.reloadComponent)
                        // alert(JSON.stringify("Successfully Added!"))
                        setOpen(true)
                        props.setEnableEdit(false)
                        props.setReloadComponent(!props.reloadComponent)
                    }).catch(function (error){
                        alert(error)
                    })
                }
                putvalues()
                actions.setSubmitting(false);
                actions.resetForm({
                    values: {
                        title: '',
                        description: '',
                        dateTime: '',
                        venue: '',
                    },  
                });
            }

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
                        <Box component="form" onSubmit={formik.handleSubmit} maxWidth="lg" sx={{backgroundColor: '#f5f5f5',p: 4,display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <Typography sx={{p: 2}}>
                                Convention's Title
                            </Typography>
                            <TextField 
                                required
                                id="title"
                                name="title"
                                fullWidth
                                autoComplete="title"
                                variant="outlined"
                                placeholder={props.convention!==undefined ? (props.convention.title) : ('')}
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
                                placeholder={props.convention!==undefined ? (props.convention.description) : ('')}
                                sx={{py: 1}}
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}
                            />
                            <Typography sx={{p: 2}}>
                                Poster Image( Optional )
                            </Typography>
                            <label htmlFor='poster'>
                                <input 
                                    id="poster"
                                    type="file"
                                    accept='image/*'
                                    style={{ display: 'none'}}
                                    onChange={(e) => UploadToFirebase(e.target.files[0])}
                                />
                                <Button
                                    variant="outlined"
                                    component="span"
                                    fullWidth
                                >Choose Poster</Button>
                            </label>
                            {props.convention!==undefined ? (
                                <Button variant='outlined' component="span" fullwidth='true' sx={{my: 2}} onClick={() => {setRemove(true)}}>
                                    Remove Poster
                                </Button>
                            ): (<></>)}
                            <Typography sx={{p: 2}}>
                                Date and Time
                            </Typography>
                            <TextField 
                                required
                                id="dateTime"
                                name="dateTime"
                                label="YYYY/MM/D 00:00 PM/AM"
                                fullWidth
                                autoComplete="dateTime"
                                variant="outlined"
                                placeholder={props.convention!==undefined ? (props.convention.dateTime) : ('')}
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
                                placeholder={props.convention!==undefined ? (props.convention.location) : ('')}
                                sx={{py: 1}}
                                value={formik.values.venue}
                                onChange={formik.handleChange}
                                error={formik.touched.venue && Boolean(formik.errors.venue)}
                                helperText={formik.touched.venue && formik.errors.venue}
                            />
                            {props.convention!==undefined ? (
                                <Button variant='outlined' sx={{m: 2}} onClick={() => {props.setEnableEdit(false)}}>
                                    Cancel
                                </Button>
                            ): (<></>)}
                            <Button type="submit" variant='contained' disabled={buttonDisable} sx={{m: 2}}>Submit</Button>
                            <ConfirmRegistration open={open} setOpen={setOpen} title={title} message={msg} /> 
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default EventsForm;
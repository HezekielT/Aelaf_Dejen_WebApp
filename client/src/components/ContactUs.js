import { Box, Button, Card, Grid, Paper, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useReference } from '../context/refProvider';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup
      .string('Enter your name')
      .required('Name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    subject: yup
      .string('Enter the subject')
      .required('Subject is required'),
    message: yup
      .string('Enter your message')
      .required('Message is required'),
});

function ContactUs(props) {
    const { contactRef } = useReference();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
          },
          validationSchema: validationSchema,
          onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
          },
    });
    return (
        <Container ref={contactRef}>
            <Grid container>
            <Grid item xs={12} lg={12} sx={{ p: 3,display: 'flex', justifyContent: 'center' }}>
                <Typography 
                    variant='h4'
                    noWrap
                    component="div"
                    sx={{color: '#1565c0', }}
                >
                    Contact Us
                </Typography>

            </Grid>
                <Grid item xs={12} lg={12} sx={{ p: 4,display: 'flex', justifyContent: 'center' }}>

                    <Paper sx={{width: '60vh'}}>
                        <Box component="form" onSubmit={formik.handleSubmit} minWidth="xs" sx={{backgroundColor: '#f5f5f5',p: 4,display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <Typography sx={{p: 2}}>
                                Your Name
                            </Typography>
                            <TextField 
                                id="name"
                                name="name"
                                autoFocus
                                variant='outlined'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                            <Typography sx={{p: 2}}>
                                Your Email
                            </Typography>
                            <TextField 
                                id="email"
                                name="email"
                                autoComplete="email"
                                variant='outlined'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}/>
                            <Typography sx={{p: 2}}>
                                Subject
                            </Typography>
                            <TextField 
                                id="subject"
                                name="subject"
                                variant='outlined'
                                value={formik.values.subject}
                                onChange={formik.handleChange}
                                error={formik.touched.subject && Boolean(formik.errors.subject)}
                                helperText={formik.touched.subject && formik.errors.subject}
                            />
                            <Typography sx={{p: 2}}>
                                Message 
                            </Typography>
                            <TextField
                                id="message"
                                multiline
                                rows={4}
                                name="message"value={formik.values.message}
                                onChange={formik.handleChange}
                                error={formik.touched.message && Boolean(formik.errors.message)}
                                helperText={formik.touched.message && formik.errors.message}
                            />
                            <Button type="submit" variant='contained' sx={{m: 2}}>Send Message</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ContactUs;
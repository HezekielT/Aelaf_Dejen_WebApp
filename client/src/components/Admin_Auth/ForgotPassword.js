import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Container, Paper, 
  Typography, Box, TextField } from '@mui/material';
import axios from 'axios';
import CheckEmail from './CheckEmail';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email can not be empty')
});

function ForgotPasswordForm(props) {

  const [responseError, setResponseError] = useState('');

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const putvalues = async () => {
        await axios.post(
          "http://localhost:5000/forgotPassword",
          {
            email: values.email,
          },
        ).then(function () {
          <CheckEmail />
        }).catch(function (error) {
          alert(error)
          setResponseError(error.message);
        })
      }
      putvalues()
      setResponseError('')
    }
  })
  return (
    <Container maxWidth="sm" sx={{pt: '8%'}}>
                    
      <Paper
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
      >
        <Typography comoponent="h1" variant='h5' sx={{p: 3}}>
            AELAPH-DEJEN ADMIN
        </Typography>
        <Typography component="h3" variant="h5">
            {responseError}
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1, px: 7, pb: 7 }}>
              
          <TextField 
            required
            id="email"
            name='email'
            margin='normal'
            autoComplete='email'
            autoFocus
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.error.email}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default ForgotPasswordForm;
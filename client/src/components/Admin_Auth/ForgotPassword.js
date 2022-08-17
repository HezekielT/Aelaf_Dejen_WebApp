import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Container, Paper, 
  Typography, Box, TextField } from '@mui/material';
import axios from 'axios';
import CheckEmail from './CheckEmail';

const boxSx = {
  backgroundColor: (theme) =>
  theme.palette.mode === 'light'
  ? theme.palette.grey[100]
  : theme.palette.grey[900],
  flexGrow: 1,
  minHeight: '100vh',
  overflow: 'auto'
}

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email can not be empty')
});

function ForgotPasswordForm(props) {

  const [responseError, setResponseError] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setResponseError('')
      const putvalues = async () => {
        await axios.post(
          "/api/admin/forgotPassword",
          {
            email: values.email,
          },
        ).then(function () {
          setCheckEmail(true)
        }).catch(function (error) {
          setResponseError(error.response.data.message);
        })
      }
      putvalues()
      setResponseError('')
    }
  })
  return (
    <Box
      component="main"
      sx={ boxSx }
    >
      <Container maxWidth="sm" sx={{pt: '8%'}}>
        {checkEmail ? (
          <CheckEmail />
        ) :(
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
          <Typography sx={{color: "#c62828"}}>
                {responseError}
            </Typography>
          <Typography component="h3" variant="h5">
              Your Email
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
              label="Email"
              autoFocus
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
      )} 
      </Container>
    </Box>
  );
}

export default ForgotPasswordForm;
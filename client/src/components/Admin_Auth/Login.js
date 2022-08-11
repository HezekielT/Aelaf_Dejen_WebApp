import React, { useState } from 'react';
import { Box, Paper, TextField,
    Button, Grid, Link,
    Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const axios = require('axios')

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters')
    .required('Password is required')
});

const paperSx ={
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const boxSx = { mt: 1, px: 7, pb: 7 }

function Login(props) {
  const [responseError, setResponseError] = useState('');
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      const putvalues = async () => {
        await axios.post(
          "http://localhost:5000/signin",
          {
            email: values.email,
            password: values.password,
          },
        ).then(function (){
          navigate('/dashboard')
        }).catch(function (error){
          setResponseError(error.message);
        })
      }
      putvalues()
      setResponseError('')
    },
  });
    return (
      <Container maxWidth="sm" sx={{pt: '8%'}}>
                    
        <Paper
            sx={ paperSx }
            >
            <Typography comoponent="h1" variant='h5' sx={{p: 3}}>
                AELAPH-DEJEN ADMIN
            </Typography>
            <Typography component="h3" variant="h5">
                Login
            </Typography>
            <Typography>
                {responseError}
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit} sx={ boxSx }>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs sx={{textAlign:"center", pb: 2}}>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </Box>
          </Paper>
      </Container>
    );
}

export default Login;
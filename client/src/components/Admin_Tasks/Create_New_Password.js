import React, { useEffect, useState } from 'react';
import { Grid, Typography, Paper, 
  Box, TextField, Button } from '@mui/material';

import * as yup from 'yup';
import { useFormik } from 'formik';

import { useNavigate, useParams } from 'react-router-dom';
const axios = require('axios')

const NewPsdValidation = yup.object({
  newPassword: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Password must match')
})

function Create_New_Password(props) {
  const navigate = useNavigate();
  const token = useParams();
  const code = token.confirmationCode;
  const [responseError, setResponseError] = useState('')
  const [ getId, setGetId] = useState(null)
  useEffect( () => {
    const fetch = async () => {
      await axios.get(
        `http://localhost:5000/confirm/${code}`
      ).then(function(response) {
        setGetId(response.data.id)
      }).catch(error => {
        console.log(error)
      })
    }
      fetch();
      alert("We have verified your email, please set a new password.")
  },[])

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: NewPsdValidation,
    onSubmit: (values) => {
      const putvalues = async () => {
        axios.post('http://localhost:5000/createnewpassword',
        {
          id: getId,
          password: values.confirmPassword
        }).then(function(response) {
          navigate('/admin')
        }).catch((error) =>
        setResponseError(error.response.data.message)
        )
      }
      putvalues()
    }
  });

  return (
    <Grid container>
      <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography>{responseError}</Typography>
          <Typography 
              variant='h6'
              component="div"
              sx={{color: '#1565c0', px: 3, mt: '15%'}}
          >
              Create a new password
          </Typography>

      </Grid>
      <Grid item xs={12} lg={12} sx={{ p: 1,display: 'flex', justifyContent: 'center' }}>

          <Paper sx={{width: '60vh',}}>
              <Box component="form" onSubmit={formik.handleSubmit} maxWidth="lg" sx={{backgroundColor: '#f5f5f5',p: 6,display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="newPassword"
                label="New Password"
                type="password"
                id="newPassword"
                autoComplete="current-password"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                helperText={formik.touched.newPassword && formik.errors.newPassword}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
              <Button
              type="submit"
              variant="contained"
              sx={{ mt: 4, mb: 4, }}
          >
              Submit
          </Button>
          </Box>
          </Paper> 
      </Grid>
    </Grid>
  );
}

export default Create_New_Password;
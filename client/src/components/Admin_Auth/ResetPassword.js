import React, { useState } from 'react';
import { Grid, Typography, Paper, 
  Box, TextField, Button } from '@mui/material';

import * as yup from 'yup';
import { useFormik } from 'formik';

import { useLocation, useNavigate, useParams } from 'react-router-dom';
const axios = require('axios')

const changePsdValidation = yup.object({
  oldPassword: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters')
    .required('Password is required'),
  newPassword: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Password must match')
});

function ResetPassword(props) {
  const resetToken = useParams();
  const location = useLocation();
  const reset = resetToken.resetToken;
  const endpoint = (reset !== null) ? 
    (`http://localhost:5000/passwordreset/${reset}`) :
    ('http://localhost:5000/passwordreset')

  const navigate = useNavigate();
  function getName() {
    const name = localStorage.getItem('name');
    
    if( name !== null ) {
      if( name === undefined ) {
        return ''
      } else {
        return name
      }
    }
    return ''
  }

  const name = getName()
  const [responseError, setResponseError] = useState('');
  
  const formik = useFormik({
  initialValues: {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  },
  validationSchema: changePsdValidation,
  onSubmit: (values) => {
      const body = (reset !== null) ? ({
        id: name.id,
        password: values.confirmPassword,
      }) : ({
        password: values.confirmPassword,
      })
      setResponseError('')
      const reset = async () => {
        await axios.post(
          endpoint,
          body,
          {
            header: {
              "Content-Type": "application/json",
            }
          }
        )
        .then(function(response){
          alert("Password Successfully Updated!")
          localStorage.removeItem('UserInfo')
          localStorage.setItem('UserInfo', response.data.token)
          navigate('/dashboard', { state: {user: response.data}})
        })
        .catch(function(error){
          setResponseError(error)
        }) 
      }
      reset();
    },
});

  return (
    <Grid container>
      <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography>{responseError}</Typography>
          <Typography 
              variant='h6'
              component="div"
              sx={{color: '#1565c0', px: 3,  mt: '15%'}}
          >
              Change Password
          </Typography>

      </Grid>
      <Grid item xs={12} lg={12} sx={{ p: 1,display: 'flex', justifyContent: 'center' }}>

          <Paper sx={{width: '60vh',}}>
              <Box component="form" onSubmit={formik.handleSubmit} maxWidth="lg" sx={{backgroundColor: '#f5f5f5',p: 6,display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="oldPassword"
                label="Old Password"
                type="password"
                id="oldPassword"
                autoComplete="current-password"
                value={formik.values.oldPassword}
                onChange={formik.handleChange}
                error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
                helperText={formik.touched.oldPassword && formik.errors.oldPassword}
              />
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
              Change Password
          </Button>
          </Box>
          </Paper> 
      </Grid>
    </Grid>
  )
}

export default ResetPassword;
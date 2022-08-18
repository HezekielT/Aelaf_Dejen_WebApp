import React, { useState } from 'react';
import { Grid, Typography, Paper, 
  Box, TextField, Button, Container } from '@mui/material';

import * as yup from 'yup';
import { useFormik } from 'formik';
import ConfirmRegistration from '../SuccessDialog';

import { useNavigate, useParams } from 'react-router-dom';
const axios = require('axios')


function ResetPassword(props) {
  const msg = "You have Successfully updated your password, \
  Please use your new password when when you log in next time!";
  const [open, setOpen] = useState(false)
  const title = "Password Updated Successfully!";
  
  const resetToken = useParams();
  // const location = useLocation();
  const navigate = useNavigate();
  const reset = resetToken.resetToken;
  const changePsdValidation = reset !== undefined ? (
    yup.object({
      newPassword: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters')
        .required('Password is required'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('newPassword'), null], 'Password must match')
    })
  ) : (
    yup.object({
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
    })
  )
    
  const endpoint = (reset !== undefined) ? 
    (`/api/admin/passwordreset/${reset}`) :
    ('/api/admin/passwordreset')

  // const navigate = useNavigate();
  // console.log(endpoint)
  function getName() {
    const name = localStorage.getItem('id');
    
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
  const initialValue = reset!== undefined ? (
  {
    newPassword: '',
    confirmPassword: '',
  })
: ({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const formik = useFormik({
  initialValues: initialValue,  
  validationSchema: changePsdValidation,
  onSubmit: (values, actions) => {
      const body = (reset !== undefined) ? ({
        password: values.confirmPassword,
      }) : ({
        id: name,
        oldPassword: values.oldPassword,
        password: values.confirmPassword,
      })
      console.log("bob", body)
      setResponseError('')
      const resetFunc = async () => {
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
          setOpen(true);
          localStorage.removeItem('UserInfo')
          localStorage.setItem('UserInfo', response.data.token)
          localStorage.setItem("fname",  response.data.first_name)
          localStorage.setItem("lname",  response.data.last_name)
          localStorage.setItem('pri', response.data.privilege)
          localStorage.setItem('id', response.data.id)
          navigate('/dashboard')
        })
        .catch(function(error){
          setResponseError(error.response.data.message)
        }) 
      }
      resetFunc();
      actions.setSubmitting(false);
      actions.resetForm({
        values: 
          reset!== undefined ? 
          { 
            newPassword: '',
            confirmPassword: '',
          }
          : 
          {
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
          }
            
      });
    },
    
});
  return (
    <Container>
      
    <Grid container>
      <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography 
              variant='h6'
              component="div"
              sx={{color: '#1565c0', px: 3,  mt: '15%'}}
              >
                {reset !== undefined ? (
                  'Reset Password'
                ) : (
                  'Change Password'
                )}
          </Typography>

      </Grid>
      <Grid item xs={12} lg={12}>
        <Typography sx={{color: "#c62828", my: '1%', display: 'flex', justifyContent: 'center'}}>
          {responseError}
        </Typography>
      </Grid>
      <Grid item xs={12} lg={12} sx={{ p: 1,display: 'flex', justifyContent: 'center' }}>

          <Paper sx={{width: '60vh',}}>
              <Box component="form" onSubmit={formik.handleSubmit} maxWidth="lg" sx={{backgroundColor: '#f5f5f5',p: 6,display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              {reset === undefined ? (
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
                ) : (<></>)}
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
          <ConfirmRegistration open={open} setOpen={setOpen} title={title} message={msg} /> 
          </Box>
          </Paper> 
      </Grid>
    </Grid>
    </Container>
  )
}

export default ResetPassword;
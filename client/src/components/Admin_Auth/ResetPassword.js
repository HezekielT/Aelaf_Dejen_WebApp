import React from 'react';
import { Grid, Typography, Paper, 
  Box, TextField, Button } from '@mui/material';

import * as yup from 'yup';
import { useFormik } from 'formik';


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
  const formik = useFormik({
    initialValues: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      },
      validationSchema: changePsdValidation,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
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
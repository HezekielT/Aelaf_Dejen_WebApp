import { Grid, Box, Paper, Typography, 
  TextField, FormControl, InputLabel, 
  Select, MenuItem, Button } from '@mui/material';
import React from 'react';
import { v4 as uuidV4 } from 'uuid'
import { useFormik } from 'formik';
import * as yup from 'yup';
const axios = require('axios');

const validationSchema = yup.object({
  first_name: yup
    .string('Enter your name')
    .required('Name is required'),
  last_name: yup
    .string('Enter your name')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  phoneno: yup
    .string('Enter phone no')
    .required('Your phone number is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters')
//     .required('Password is required'),
  privilege: yup
    .string('Enter your password')
    .required('privilege is required')
});

function AddAdmin(props) {
  const aid = uuidV4();
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phoneno: '',
    //   password: '',
      privilege: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
    const putvalues = async () => {
        await axios.post(
            "/api/admin/registerAdmin",
            {
                id: aid,
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                phoneno: values.phoneno,
                // password: values.password,
                privilege: values.privilege,
            },{
            header: {
                "Content-Type": "application/json",
            },
        }
        ).then(function (){
            alert(JSON.stringify(`Admin Successfully Added, please check ${values.email} email's to verify!`));
        }).catch(function (error){
            console.log(error);
        })
    }
    putvalues()
    actions.setSubmitting(false);
    actions.resetForm({
    values: {
        first_name: '',
        last_name: '',
        email: '',
        phoneno: '',
        privilege: '',
    },
    });
    },
  });
return(
    <Grid container>
    <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography 
            variant='h6'
            // noWrap
            component="div"
            sx={{color: '#1565c0', px: 3}}
        >
            Add an Admin
        </Typography>

    </Grid>
    <Grid item xs={12} md={12} sx={{ p: 1,display: 'flex', justifyContent: 'center' }}>

        <Paper sx={{width: '60vh',}}>
            {/* <Card > */}
            <Box component="form" onSubmit={formik.handleSubmit} maxWidth="lg" sx={{backgroundColor: '#f5f5f5',p: 6,display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <TextField
            required
            id="first_name"
            name="first_name"
            label="First Name"
            fullWidth
            autoComplete="first name"
            variant="outlined"
            sx={{py: 1}}
            value={formik.values.first_name}
            onChange={formik.handleChange}
            error={formik.touched.first_name && Boolean(formik.errors.first_name)}
            helperText={formik.touched.first_name && formik.errors.first_name}
        />
        <TextField
            required
            id="last_name"
            name="last_name"
            label="Last Name"
            fullWidth
            autoComplete="last name"
            variant="outlined"
            sx={{py: 1}}
            value={formik.values.last_name}
            onChange={formik.handleChange}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
        />
        <TextField
            id="email"
            name="email"
            required
            label="Email"
            fullWidth
            autoComplete="email"
            variant="outlined"
            sx={{py: 1}}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
            id="phoneno"
            name="phoneno"
            required
            fullWidth
            label="Phone Number"
            autoComplete="phoneno"
            variant="outlined"
            sx={{py: 1}}
            value={formik.values.phoneno}
            onChange={formik.handleChange}
            error={formik.touched.phoneno && Boolean(formik.errors.phoneno)}
            helperText={formik.touched.phoneno && formik.errors.phoneno}
        />
        <Box sx={{ py:3, display: 'flex', justifyContent: 'center'}}>
                        
            <FormControl fullWidth>
                <InputLabel id="select-label">Privilege</InputLabel>
                <Select
                    id='privilege'
                    name="privilege"
                    labelId="select-label"
                    label="privilege"
                    value={formik.values.privilege}
                    onChange={formik.handleChange}
                    error={formik.touched.privilege && Boolean(formik.errors.privilege)}
                    // helperText={formik.touched.address && formik.errors.address}
                >
                    <MenuItem value="super_admin">Super Admin</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                </Select>
            </FormControl>
        </Box>
            <Typography paragraph sx={{ m: 2,backgroundColor: '#f5f5f5'}}>Note: The only difference between admin and super admin is an admin can't add a new admin while super admin can</Typography>
        <Button
            type="submit"
            variant="contained"
            sx={{ mt: 4, }}
        >
            Add
        </Button>
        </Box>
        </Paper>
    </Grid>
</Grid>
)
}

export default AddAdmin;
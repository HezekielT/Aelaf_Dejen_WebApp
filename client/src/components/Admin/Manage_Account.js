import { Grid, Tabs, Tab, Card, Container, 
    Paper, Typography, Box, TextField, Button,
    Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import PropTypes from 'prop-types';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return(
        <Paper sx={{  backgroundColor: '#f5f5f5', height: '85vh' }}
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        {...other}
        >
            {value === index && (
                    <Box sx={{ p: 3}}>
                    {children}
                </Box>
            )}
        </Paper>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function tabProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

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
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters')
      .required('Password is required'),
    privilege: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters')
      .required('Password is required')
});

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

function AddAdmin() {
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
          privilege: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        //   navigate('/dashboard')
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
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 4, }}
            >
                Add
            </Button>
            </Box>
            <Typography paragraph sx={{ backgroundColor: '#f5f5f5'}}>Note: The only difference between admin and super admin is an admin can't add a new admin while super admin can</Typography>
            </Paper>
        </Grid>
    </Grid>
    )
}

function ChangePassword() {
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

function Manage_Account(props) {
    const [value, setValue ] = React.useState(0);
    const handleChange = (event, newValue ) => {
        setValue(newValue);
    }

    return (
        <Container maxWidth="lg"
         sx={{
             pt: '8%',
             
            }}
        >
            <Grid container spacing={2}>
                <Grid item sx={{ height: '86vh', display: {xs: 'none', lg: 'flex'}}}>
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                            height: '77vh',
                            mt: 2,
                            mb: 4, 
                            pl: 2
                        }}
                    >
                        <Tabs
                            orientation='vertical'
                            value={value}
                            onChange={handleChange}
                            scrollButtons="auto"
                            aria-label="Vertical Tabs"
                            sx={{ mt: 33,borderRight: 1, borderColor: 'divider', }}
                        >
                            <Tab label="Reset Password" {...tabProps(0)}/>
                            <Tab label="Add New Admin" {...tabProps(1)}/>
                        </Tabs>
                    </Card>
                </Grid>
                <Grid item xs={12} sx={{ display: {xs: 'flex', lg: 'none'}}}>
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                            // height: '77vh',
                            // mt: 2,
                            // mb: 4, 
                            py: 2,
                            px: 6
                        }}
                    >
                        <Tabs
                            orientation='horizontal'
                            value={value}
                            onChange={handleChange}
                            scrollButtons="auto"
                            variant="scrollable"
                            // aria-label="Vertical Tabs"
                            sx={{ borderRight: 1, }}
                        >
                            <Tab label="Reset Password" {...tabProps(0)}/> 
                            <Tab label="Add New Admin" {...tabProps(1)}/>
                        </Tabs>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} lg={9}
                    sx={{
                        height: '80vh',
                        mb: 4
                    }}
                >
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                            height: '77vh',
                            mt: 2,
                            mb: 4, 
                        }}
                    >
                        <TabPanel value={value} index={0}>
                            <ChangePassword />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <AddAdmin />
                        </TabPanel>
                    </Card> 
                </Grid>
            </Grid>
            {/* <Paper
            sx={{
                m: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2
            }}
            >
                <Button variant="outlined">
                    Reset Password
                </Button>
            </Paper>
            <Paper
            sx={{
                m: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2
            }}
            >
                <Button variant="outlined">
                    <LogoutIcon /> {" Logout"}
                </Button>
            </Paper> */}
        </Container>
    );
}

export default Manage_Account;
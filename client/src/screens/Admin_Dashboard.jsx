import React from 'react';
import { ThemeProvider, Box, createTheme } from '@mui/material';
import Login from '../components/Admin_Auth/Login';
import Admin_Options from '../components/Admin_Tasks/Admin_Options';
import Manage_Contents from '../components/Admin_Tasks/manage_web_content';

const mdTheme = createTheme();
const boxSx = {
    backgroundColor: (theme) =>
    theme.palette.mode === 'light'
    ? theme.palette.grey[100]
    : theme.palette.grey[900],
    flexGrow: 1,
    maxHeight: '100vh',
    overflow: 'auto'
}
function AdminDashboard(props) {
    return (
        <ThemeProvider theme={mdTheme}>
            <Box
                component="main"
                sx={ boxSx }
            >
                <Login />
                {/* <Admin_Options /> */}
                {/* <Manage_Contents /> */}
            </Box>
        </ThemeProvider>
    );
}

export default AdminDashboard;
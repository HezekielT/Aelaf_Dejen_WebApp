import React from 'react';
import { ThemeProvider, Box, createTheme } from '@mui/material';
import Login from '../components/Admin/Login';
import Admin_Options from '../components/Admin/Admin_Options';
import Manage_Contents from '../components/Admin/manage_web_content';

const mdTheme = createTheme();
function AdminDashboard(props) {
    return (
        <ThemeProvider theme={mdTheme}>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto'
                }}
            >
                {/* <Login /> */}
                {/* <Admin_Options /> */}
                <Manage_Contents />
            </Box>
        </ThemeProvider>
    );
}

export default AdminDashboard;
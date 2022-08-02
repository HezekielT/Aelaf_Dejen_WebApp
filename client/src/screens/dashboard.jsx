import React from 'react';
import { Typography, Grid, Paper, 
    ThemeProvider, Box, Container, createTheme } from '@mui/material'
import Participant_Regist from '../components/Participant-Registration';
import Events from '../components/Events';
import Home from '../components/Home';
import ContactUs from '../components/ContactUs';

const mdTheme = createTheme()

function Dashboard(props) {
    return (
        <ThemeProvider theme={mdTheme}>

            <Home />
            <Events />
            <ContactUs />

        </ThemeProvider>
    );
}

export default Dashboard;
import React, { useRef } from 'react';
import { Typography, Grid, Paper, 
    ThemeProvider, Box, Container, createTheme } from '@mui/material'
import Participant_Regist from '../components/Participant-Registration';
import Events from '../components/Events';
import Home from '../components/Home';
import ContactUs from '../components/ContactUs';

const mdTheme = createTheme()

function Dashboard(props) {

    // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

    // const homeRef = useRef(null)
    // const eventRef = useRef(null)
    // const contact = useRef(null)

    // const executeScroll = (refe) => scrollToRef(refe)
    return (
        <ThemeProvider theme={mdTheme}>

            <Home />
            <Events />
            <ContactUs />

        </ThemeProvider>
    );
}

export default Dashboard;
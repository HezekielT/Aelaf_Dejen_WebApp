import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Events from './components/Events';
import Dashboard from './screens/dashboard';
import Footer from './screens/footer';
import NavBar from './screens/navbar';

function Navigator(props) {


    // const executeScroll = (refe) => scrollToRef(refe)

    return (
        <Router>
            <NavBar />
            <Dashboard/>
            <Routes>
                {/* <Route exact path="/" element={<Dashboard />} /> */}
                {/* <Route path="/conventions" element={<Events />} /> */}
                {/* <Route path="#contactus" element={<ContactUs />} /> */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default Navigator;
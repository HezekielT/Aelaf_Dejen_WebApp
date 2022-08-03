import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './screens/Admin_Dashboard';
import Dashboard from './screens/dashboard';
import Footer from './screens/footer';
import NavBar from './screens/navbar';

function Navigator(props) {

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/admin" element={<AdminDashboard />} /></Routes>
            <Footer />
        </Router>
    );
}

export default Navigator;
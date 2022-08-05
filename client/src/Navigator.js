import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin_Options from './components/Admin/Admin_Options';
import Manage_Account from './components/Admin/Manage_Account';
import Manage_Contents from './components/Admin/manage_web_content';
import Transport_Registration from './components/Admin/Transport_Registration';
import AdminDashboard from './screens/Admin_Dashboard';
import Dashboard from './screens/dashboard';
import Footer from './screens/footer';
import NavBar from './screens/navbar';

function Navigator(props) {

    return (
        <Router>
            {/* <NavBar /> */}
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/dashboard" element={<Admin_Options />} />
                <Route path="/dashboard/contents" element={<Manage_Contents />} />
                <Route path="/dashboard/transport" element={<Transport_Registration />} />
                <Route path="/dashboard/accounts" element={<Manage_Account />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default Navigator;
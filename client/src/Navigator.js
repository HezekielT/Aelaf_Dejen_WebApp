import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPasswordForm from './components/Admin_Auth/ForgotPassword';
import Admin_Options from './components/Admin_Tasks/Admin_Options';
import Manage_Account from './components/Admin_Tasks/Manage_Account';
import Manage_Contents from './components/Admin_Tasks/manage_web_content';
import Transport_Registration from './components/Admin_Tasks/Transport_Registration';
import AdminDashboard from './screens/Admin_Dashboard';
import Dashboard from './screens/dashboard';

function Navigator(props) {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/dashboard" element={<Admin_Options />} />
                <Route path="/dashboard/contents" element={<Manage_Contents />} />
                <Route path="/dashboard/transport" element={<Transport_Registration />} />
                <Route path="/dashboard/accounts" element={<Manage_Account />} />
                <Route path="/forgotpassword" element={<ForgotPasswordForm />} />
            </Routes>
        </Router>
    );
}

export default Navigator;
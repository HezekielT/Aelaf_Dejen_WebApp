import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPasswordForm from './components/Admin_Auth/ForgotPassword';
import ResetPassword from './components/Admin_Auth/ResetPassword';
import Admin_Options from './components/Admin_Tasks/Admin_Options';
import Manage_Account from './components/Admin_Tasks/Manage_Account';
import Manage_Contents from './components/Admin_Tasks/manage_web_content';
import Transport_Registration from './components/Admin_Tasks/Transport_Registration';
import AdminDashboard from './screens/Admin_Dashboard';
import Dashboard from './screens/dashboard';
import NavBar from '../src/screens/navbar';
import Footer from '../src/screens/footer';
import Not_Found from './screens/Not_Found';
import Create_New_Password from './components/Admin_Tasks/Create_New_Password';
import PrivateRoute from './Routes/PrivateRoute'

function Navigator(props) {
    
    return (
        <Router>
            <NavBar />
                <Routes>
                    <Route exact path='/' element={<Dashboard />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route exact path="/dashboard" element={<PrivateRoute />}>
                        <Route exact path="/dashboard" element={<Admin_Options />} />
                    </Route>
                    <Route path="/dashboard/contents" element={<PrivateRoute />}>
                        <Route path="/dashboard/contents" element={<Manage_Contents />} />
                    </Route>
                    <Route path="/dashboard/transport" element={<PrivateRoute />}>
                        <Route path="/dashboard/transport" element={<Transport_Registration />} />
                    </Route>
                    <Route path="/dashboard/accounts" element={<PrivateRoute />}>
                        <Route path="/dashboard/accounts" element={<Manage_Account />} />
                    </Route>
                    <Route path="/forgotpassword" element={<ForgotPasswordForm />} />
                    <Route path="/passwordreset/:resetToken?" element={<ResetPassword />} />
                    <Route path='/confirm/:confirmationCode' element={<Create_New_Password />} />
                    <Route path="*" element={<Not_Found />} />
                </Routes>
            <Footer />
        </Router>
    );
}

export default Navigator;
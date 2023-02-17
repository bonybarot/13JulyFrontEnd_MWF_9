import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
// import { Navigate } from "react-router-dom";
import AdminDashboard from './AdminDashboard.jsx';
import AdminProfile from './AdminProfile.jsx';


class AdminRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    {/* <Route path="admin/admindashboard" element={<AdminDashboard />} /> */}
                    <Route path="/" element={<AdminDashboard />} >
                        <Route path="profile" element={<AdminProfile />} ></Route>
                    </Route>
                </Routes>
            </>
        );
    }
}

export default AdminRoute;

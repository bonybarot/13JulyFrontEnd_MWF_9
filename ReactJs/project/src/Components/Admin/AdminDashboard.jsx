import React from 'react';
import { Outlet } from "react-router-dom";
const AdminDashboard = () => {
    return (
        <div>
            AdminDashboard
            <Outlet></Outlet>
        </div>
    );
};

export default AdminDashboard;
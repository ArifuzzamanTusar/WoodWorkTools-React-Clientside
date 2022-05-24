import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSkeleton from './DashboardSkeleton';

const Dashboard = () => {
    return (
        <div>
            <DashboardSkeleton>
                <Outlet></Outlet>
            </DashboardSkeleton>
        </div>
    );
};

export default Dashboard;
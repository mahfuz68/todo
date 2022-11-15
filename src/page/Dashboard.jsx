import React from 'react';
import DashboardNavbar from '../component/DashboardNavbar';
import DContent from '../component/DContent';
import Sidebar from '../component/Sidebar';

export default function Dashboard() {
    return (
        <div className="dark:bg-black h-screen">
            <DashboardNavbar />
            <div className="grid grid-cols-12">
                <Sidebar />
                <DContent />
            </div>

            {/* <div className="h-screen" /> */}
        </div>
    );
}

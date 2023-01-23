import { getAuth } from 'firebase/auth';
import { child, get, getDatabase, ref } from 'firebase/database';
import React from 'react';
import DashboardNavbar from '../component/DashboardNavbar';
import DContent from '../component/DContent';
import Sidebar from '../component/Sidebar';

export default function Dashboard() {
    const dbRef = ref(getDatabase());
    const auth = getAuth();
    const userId = auth.currentUser.uid;
    console.log(userId);
    /* 
    e
*/

    get(child(dbRef, 'users'))
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log('No data available');
            }
        })
        .catch((error) => {
            console.error(error);
        });

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

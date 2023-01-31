import React from 'react'
import DashboardNavbar from "../component/DashboardNavbar"

export default function HomeLayout({children}) {
  return (
<div className="dark:bg-black h-screen">
            <DashboardNavbar />
            {children}
            </div>  
            )
}

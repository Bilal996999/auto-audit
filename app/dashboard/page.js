export const metadata = {
    title: 'Dashboard',
    description: 'Dashboard details',
  }
  

import DashboardPage from '@/pages/DashboardPage'
import React from 'react'
  
  const Dashboard = () => {
    return (
      <main className="min-h-screen relative login-page">
        <DashboardPage/>
      </main>
    )
  }
  
  export default Dashboard
  
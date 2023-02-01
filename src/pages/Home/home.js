import React from 'react';
import DashboardLayout from '../../components/Layout';
import UserHome from './UserHome';

const HomePage = () => {
  return (
    <DashboardLayout>
        <UserHome/>
    </DashboardLayout>
  )
}

export default HomePage;
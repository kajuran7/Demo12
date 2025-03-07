import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import UserList from './UserList';
import DesignsList from './DesignsList';
import DesignForm from './DesignForm';
import PaymentList from './PaymentDetails';
function Dashboard() {
  return (
    <div>
      <AdminNavbar />
      <Routes>

        <Route path="/userlist" element={<UserList />} />
        <Route path="/Designslist" element={<DesignsList />} />
        <Route path="/DesignForm" element={<DesignForm />} />
        <Route path="/Orders" element={<PaymentList />} />

      </Routes>
    </div>
  );
}

export default Dashboard;
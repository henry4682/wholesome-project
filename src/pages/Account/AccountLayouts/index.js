import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Aside from '../components/Aside';
import AsideMobile from '../components/AsideMobile';
import { useAuth } from '../../../context/auth';
function AccountLayout() {
  const { user, setUser } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <main className="container my-3">
        <Breadcrumb />
        <AsideMobile />
        <div className="d-flex">
          <Aside />
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AccountLayout;

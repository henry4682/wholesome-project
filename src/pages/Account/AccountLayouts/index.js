import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Aside from '../components/Aside';
import AsideMobile from '../components/AsideMobile';
import { useAuth } from '../../../context/auth';
function AccountLayout() {
  const [breadcrumbData, setBreadcrumbData] = useState('');
  const { user, setUser, isLogin } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <main className="container my-5">
        <Breadcrumb breadcrumbData={breadcrumbData} />
        <AsideMobile />
        <div className="d-flex">
          <Aside />
          <Outlet context={[setBreadcrumbData]} />
        </div>
      </main>
    </>
  );
}

export default AccountLayout;

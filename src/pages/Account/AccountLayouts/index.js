import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import Aside from './Aside';
function AccountLayout() {
  return (
    <>
      <main className="container">
        <Breadcrumb />
        <div className="d-flex">
          <Aside />
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AccountLayout;

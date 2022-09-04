import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Aside from '../components/Aside';
import './index.scss';
function AccountInfo() {
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

export default AccountInfo;

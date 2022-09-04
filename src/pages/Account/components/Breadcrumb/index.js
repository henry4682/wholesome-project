import React from 'react';
import './index.scss';

function Breadcrumb() {
  return (
    <>
      <div className="account-breadcrumb">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Home</li>
            <li className="breadcrumb-item active" aria-current="page">
              我的帳戶
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}

export default Breadcrumb;

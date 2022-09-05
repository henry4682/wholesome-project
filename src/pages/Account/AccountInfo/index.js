import React from 'react';
import './index.scss';
function AccountInfo() {
  return (
    <>
      <div className="account_info w-100">
        <div className="account_info-card w-100 d-flex">
          <div className="account_info-card-left w-25">left</div>
          <div className="account_info-card-right w-75">right</div>
        </div>
      </div>
    </>
  );
}

export default AccountInfo;

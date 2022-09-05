import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

function AccountInfo() {
  return (
    <>
      <div className="account_info w-100">
        <div className="account_info-card w-100 d-flex">
          <div className="account_info-card-left w-25">
            <p className="account_info-card-name">王小明</p>
            <button className="btn btn-sm btn-outline-primary">登出</button>
            <div>
              <Link to="edit">查看個人資訊</Link>
            </div>
          </div>
          <div className="account_info-card-right w-75">
            <div className="d-flex">
              <p>
                總累計消費金額 NT$<span>0</span>
              </p>
              <p>
                可用優惠券<span>1</span>張
              </p>
            </div>
            <Link to="orders" className="btn btn-primary text-white">
              訂單查詢
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountInfo;

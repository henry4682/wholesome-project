import React from 'react';
import './index.scss';

function AccountCoupons() {
  return (
    <div className="account_coupons w-100">
      <div className="account_coupons-title d-flex align-items-center">
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label className="col-form-label">優惠券代碼:</label>
          </div>
          <div className="col-auto">
            <input type="text" className="form-control form-control-sm" />
          </div>
          <div className="col-auto">
            <button className="btn btn-sm btn-secondary">確認</button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end mb-2">
        <p>
          可用優惠券總計
          <span className="account_coupons-count text-primary mx-1">1</span>張
        </p>
      </div>
      <table className="account_coupons-table table table-bordered">
        <thead className="table-secondary">
          <tr>
            <th scope="col"></th>
            <th scope="col">優惠活動名稱</th>
            <th scope="col">優惠券金額</th>
            <th scope="col">優惠券代碼</th>
            <th scope="col">起始時間</th>
            <th scope="col">結束期限</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>註冊禮金</td>
            <td>NT$100 </td>
            <td>NEW100</td>
            <td>2022-09-01</td>
            <td>2022-09-30</td>
          </tr>
        </tbody>
      </table>
      {/* mobile */}
      <ul className="account_coupons-mobile">
        <li className="d-flex p-1">
          <div>優惠活動名稱:</div>
          <div className="ms-1">註冊禮金</div>
        </li>
        <li className="d-flex p-1">
          <div>優惠券金額:</div>
          <div className="ms-1">NT$100</div>
        </li>
        <li className="d-flex p-1">
          <div>優惠券代碼:</div>
          <div className="ms-1">NEW100</div>
        </li>
        <li className="d-flex p-1">
          <div>起始時間:</div>
          <div className="ms-1">無</div>
        </li>
        <li className="d-flex p-1">
          <div>結束期限:</div>
          <div className="ms-1">無</div>
        </li>
      </ul>
    </div>
  );
}

export default AccountCoupons;

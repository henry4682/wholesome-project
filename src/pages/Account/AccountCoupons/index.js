import React from 'react';
import './index.scss';

function AccountCoupons() {
  return (
    <div className="account_coupons w-100">
      <div className="account_coupons-title d-flex align-items-center">
        <p>
          可用優惠券總計
          <span className="account_coupons-count text-primary px-2">1張</span>
        </p>
      </div>
      <table className="account_coupons-table table table-bordered">
        <thead className="table-secondary">
          <tr>
            <th scope="col"></th>
            <th scope="col">優惠券金額</th>
            <th scope="col">優惠活動名稱</th>
            <th scope="col">優惠券代碼</th>
            <th scope="col">起始時間</th>
            <th scope="col">結束期限</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>NT$100 </td>
            <td>註冊禮金</td>
            <td>NEW100</td>
            <td>2022-09-01</td>
            <td>2022-09-30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AccountCoupons;

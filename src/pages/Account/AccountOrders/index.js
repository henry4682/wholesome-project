import React from 'react';
import './index.scss';

function AccountOrders() {
  return (
    <div className="account_order w-100">
      <table className="account_coupons-table table table-bordered">
        <thead className="table-secondary">
          <tr>
            <th scope="col"></th>
            <th scope="col">訂單編號</th>
            <th scope="col">訂購時間</th>
            <th scope="col">訂單金額</th>
            <th scope="col">備註</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>A20220728Q12 </td>
            <td>2022-07-28 11:30</td>
            <td>NT$598</td>
            <td>無</td>
            <td>
              <button className="btn btn-primary btn-sm text-white">
                查看訂單
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AccountOrders;

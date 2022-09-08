import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
function AccountOrders() {
  return (
    <>
      <div className="account_orders w-100">
        <table className="account_orders-table table table-bordered">
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
                <Link
                  to=":orderId"
                  className="btn btn-primary btn-sm text-white"
                >
                  查看明細
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        {/* mobile */}
        <ul className="border border-secondary">
          <li className="d-flex">
            <div>訂單編號</div>
            <div>A20220728Q12</div>
          </li>
          <li className="d-flex">
            <div>訂購時間</div>
            <div>2022-07-28 11:30</div>
          </li>
          <li className="d-flex">
            <div>訂單金額</div>
            <div>NT$598</div>
          </li>
          <li className="d-flex">
            <div>備註</div>
            <div>無</div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AccountOrders;

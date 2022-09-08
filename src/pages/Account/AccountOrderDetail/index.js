import React from 'react';
import './index.scss';

function AccountOrderDetail() {
  return (
    <>
      <div className="account_order_detail w-100">
        <div className="account_order_detail-info">
          <p>
            訂單編號:<span className="text-primary">A20220728Q12</span>
          </p>
          <p>2022-07-28 11:30 </p>
        </div>
        <table className="account_order_detail-table table table-bordered">
          <thead className="table-secondary">
            <tr>
              <th scope="col">商品圖片</th>
              <th scope="col">商品名稱</th>
              <th scope="col">商品價格</th>
              <th scope="col">商品數量</th>
              <th scope="col">小計</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td>
                <img
                  src="https://cdn.cybassets.com/media/W1siZiIsIjEzODUwL3Byb2R1Y3RzLzMxOTUxMTA1LzE2MDM0MzQ5NTNfZjFlNjEwOTcxYzcwMWZkMmM3MjEucG5nIl0sWyJwIiwidGh1bWIiLCI2MDB4NjAwIl1d.png?sha=a134d4f53b04b833"
                  alt="apple juice"
                />
              </td>
              <td className="align-middle">Voelkel黑棗汁</td>
              <td className="align-middle">NT$399</td>
              <td className="align-middle">2</td>
              <td className="align-middle">NT$798</td>
            </tr>
            <tr className="border">
              <td>
                <img
                  src="https://cdn.cybassets.com/media/W1siZiIsIjEzODUwL3Byb2R1Y3RzLzMxOTUxMTA1LzE2MDM0MzQ5NTNfZjFlNjEwOTcxYzcwMWZkMmM3MjEucG5nIl0sWyJwIiwidGh1bWIiLCI2MDB4NjAwIl1d.png?sha=a134d4f53b04b833"
                  alt="apple juice"
                />
              </td>
              <td className="align-middle">Voelkel黑棗汁</td>
              <td className="align-middle">NT$399</td>
              <td className="align-middle">2</td>
              <td className="align-middle">NT$798</td>
            </tr>
            <tr>
              <td colSpan={5}>
                <ul className="account_order_detail-price">
                  <li className="d-flex justify-content-end">
                    <div>商品總計:</div>
                    <div>NT$1596</div>
                  </li>
                  <li className="d-flex justify-content-end">
                    <div>優惠券折抵</div>
                    <div>
                      (<span>會員註冊購物金</span>):-NT$100
                    </div>
                  </li>
                  <li className="d-flex justify-content-end">
                    <div>付款方式:</div>
                    <div>貨到付款</div>
                  </li>
                  <li className="d-flex justify-content-end">
                    <div>運費:</div>
                    <div>NT$0</div>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <ul className="account_order_detail-price">
          <li className="d-flex justify-content-end">
            <div>商品總計:</div>
            <div>NT$1596</div>
          </li>
          <li className="d-flex justify-content-end">
            <div>優惠券折抵</div>
            <div>
              (<span>會員註冊購物金</span>):-NT$100
            </div>
          </li>
          <li className="d-flex justify-content-end">
            <div>付款方式:</div>
            <div>貨到付款</div>
          </li>
          <li className="d-flex justify-content-end">
            <div>運費:</div>
            <div>NT$0</div>
          </li>
        </ul> */}
        <div className="account_order_detail-total d-flex justify-content-end text-primary">
          <div>總金額:</div>
          <div>
            NT$<span>1696</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountOrderDetail;

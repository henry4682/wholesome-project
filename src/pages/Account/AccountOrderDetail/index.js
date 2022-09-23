import { React, useEffect, useState } from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../context/auth';
import { API_URL } from '../../../utils/config';
import axios from 'axios';
function AccountOrderDetail() {
  const { user, setUser } = useAuth();
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    let getOrders = async () => {
      let response = await axios.get(`${API_URL}/orders/${orderId}`);
      // console.log(response.data);
      setOrderDetail(response.data.orderDetail);
      setOrderData(response.data.orderData);
    };
    getOrders();
  }, [orderId]);

  return (
    <>
      <div className="account_order_detail w-100">
        <div className="account_order_detail-info">
          <p>
            訂單編號:
            <span className="text-primary">
              {orderData.map((v) => v.order_sn)}
            </span>
          </p>
          <p> {orderData.map((v) => v.create_time)}</p>
        </div>
        <div className="account_order_detail-reciever">
          <p>購買人資訊</p>
          <p>姓名:{orderData.map((v) => v.receiver_name)}</p>
          <p>電話:{orderData.map((v) => v.receiver_phone)}</p>
          <p>收件地址:{orderData.map((v) => v.receiver_address)}</p>
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
            {orderDetail.map((v, i) => {
              return (
                <tr key={v.id} className="border">
                  <td>
                    <img
                      src={require(`../../../Assets/products/${v.image}`)}
                      alt="apple juice"
                    />
                  </td>
                  <td className="align-middle">{v.name}</td>
                  <td className="align-middle">NT${v.product_price}</td>
                  <td className="align-middle">{v.amount}</td>
                  <td className="align-middle">
                    NT${v.product_price * v.amount}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={5}>
                <ul className="account_order_detail-price">
                  <li className="d-flex justify-content-end">
                    <div>商品總計:</div>
                    <div>NT${orderData.map((v) => v.total_price)}</div>
                  </li>
                  <li className="d-flex justify-content-end">
                    <div>優惠券折抵</div>
                    <div>
                      {orderData.map((v, i) => (
                        <div key={i}>
                          (<span>{v.coupon_name ? v.coupon_name : '無'}</span>
                          ):-NT$
                          {v.coupon_price ? v.coupon_price : '0'}
                        </div>
                      ))}
                    </div>
                  </li>
                  <li className="d-flex justify-content-end">
                    <div>付款方式:</div>
                    <div>貨到付款</div>
                  </li>
                  <li className="d-flex justify-content-end">
                    <div>運費:</div>
                    <div>NT$80</div>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <div className="account_order_detail-total d-flex justify-content-end text-primary">
                  <div>總金額:</div>
                  <div>
                    NT$
                    <span>
                      {orderData.map(
                        (v) => v.total_price - v.coupon_price + 80
                      )}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* mobile */}
        <ul className="account_order_detail-mobile ">
          {orderDetail.map((v, i) => {
            return (
              <li key={v.id} className="border-bottom d-flex p-2">
                <img
                  src={require(`../../../Assets/products/${v.image}`)}
                  alt="product"
                />
                <div className="ms-1">
                  <div className="mb-1">
                    商品名稱:<span>{v.name}</span>
                  </div>
                  <div className="mb-1">
                    商品價格:<span>NT${v.product_price}</span>
                  </div>
                  <div className="mb-1">
                    商品數量:<span>{v.amount}</span>
                  </div>
                  <div className="mb-1">
                    小計:<span>NT${v.product_price * v.amount}</span>
                  </div>
                </div>
              </li>
            );
          })}
          <li className="p-2">
            <div className="mb-1">
              商品總計:<span>NT${orderData.map((v) => v.total_price)}</span>
            </div>
            <div className="mb-1">
              {orderData.map((v, i) => (
                <div key={i}>
                  優惠券折抵(<span>{v.coupon_name ? v.coupon_name : '無'}</span>
                  ) :-NT$
                  {v.coupon_price ? v.coupon_price : '0'}
                </div>
              ))}
            </div>
            <div className="mb-1">
              付款方式:<span>貨到付款</span>
            </div>
            <div className="mb-1">
              運費:<span>NT$80</span>
            </div>
            <div className="mb-1 text-primary">
              總金額:NT$
              <span>
                {orderData.map((v) => v.total_price - v.coupon_price + 80)}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AccountOrderDetail;

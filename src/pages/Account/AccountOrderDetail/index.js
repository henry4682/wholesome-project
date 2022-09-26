import { React, useEffect, useState } from 'react';
import './index.scss';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../../context/auth';
import { API_URL } from '../../../utils/config';
import axios from 'axios';
import { BsPencil } from 'react-icons/bs';
import Rating from '@mui/material/Rating';
import { errorToastAlert } from '../../../components/Alert';

function AccountOrderDetail() {
  const { user, setUser } = useAuth();
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);
  // 訂單狀態
  const [orderStatus, setOrderStatus] = useState(0);
  // 撰寫評論的星星數
  const [star, setStar] = useState(0);
  // 撰寫評論的內容
  const [comment, setComment] = useState('');
  const [userIsComment, setUserIsComment] = useState(false);

  useEffect(() => {
    let getOrders = async () => {
      let response = await axios.get(`${API_URL}/orders/${orderId}`);
      // console.log(response.data);
      setOrderDetail(response.data.orderDetail);
      setOrderData(response.data.orderData);
      setOrderStatus(response.data.orderData[0].status_id);
    };
    getOrders();
  }, [orderId]);
  console.log(orderStatus);

  // 使用者可不可以對這筆商品評論
  async function handleCommentWrite(userId, productId) {
    try {
      let response = await axios.get(
        `${API_URL}/user/${userId}/productComment?product=${productId}`
      );
      console.log('POST res', response);
      console.log(response.data.message);
      setUserIsComment(response.data.userIsComment);
    } catch (e) {
      errorToastAlert(e.response.data.message, 1200, false, 'center');
      console.error(e);
      setUserIsComment(e.response.data.userIsComment);
    }
  }

  async function handleCommentSubmit(userId, productId, content, grade) {
    console.log('--- user ---', userId);
    console.log('--- product ---', productId);
    console.log('--- 星星數 ---', grade);
    console.log('--- 評論內容 ---', content);
    try {
      let response = await axios.post(
        `${API_URL}/user/${userId}/productComment?product=${productId}`,
        { grade: grade, comment: comment }
      );
      console.log('POST res', response);
      console.log(response.data.message);
      alert(response.data.message);
      setStar(0);
      setComment('');
    } catch (e) {
      alert(e.response.data.message);
      console.error('POST comment Error', e.response.data.message);
    }
  }

  return (
    <>
      <div className="account_order_detail w-100">
        <div className="account_order_detail-info">
          <p className="mb-1">
            訂單編號:
            <span className="text-primary">
              {orderData.map((v) => v.order_sn)}
            </span>
          </p>
          <p>訂單成立時間:{orderData.map((v) => v.create_time)}</p>
        </div>
        <div className="account_order_detail-reciever">
          <p className="mb-1">購買人資訊</p>
          <p className="mb-1">姓名:{orderData.map((v) => v.receiver_name)}</p>
          <p className="mb-1">電話:{orderData.map((v) => v.receiver_phone)}</p>
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
              {orderStatus === 1 ? <th>評論商品</th> : <></>}
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
                  {orderStatus === 1 ? (
                    <td className="align-middle">
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target={`#Modal${i}`}
                        onClick={() => {
                          handleCommentWrite(v.user_id, v.product_id);
                        }}
                      >
                        <BsPencil />
                      </button>
                      {/* 商品評論 modal */}
                      <div
                        className="modal fade"
                        id={`Modal${i}`}
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                {v.name}
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            {/* 商品評論表單 */}
                            <form>
                              <div className="modal-body">
                                {/* 商品圖片 */}
                                <div className="m-3">
                                  <img
                                    src={require(`../../../Assets/products/${v.image}`)}
                                    alt="product"
                                  />
                                </div>

                                {/* 星星數量 */}
                                <div className="m-3">
                                  <Rating
                                    name="simple-controlled"
                                    value={star}
                                    onChange={(event, newValue) => {
                                      setStar(newValue);
                                    }}
                                  />
                                </div>
                                {/* 撰寫評論的欄位 */}
                                <div className="m-3">
                                  <label className="form-label">撰寫評論</label>
                                  <textarea
                                    className="form-control"
                                    rows="3"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                  ></textarea>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  取消評論
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-primary text-white"
                                  data-bs-dismiss="modal"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleCommentSubmit(
                                      v.user_id,
                                      v.product_id,
                                      comment,
                                      star
                                    );
                                  }}
                                >
                                  送出評論
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </td>
                  ) : (
                    <></>
                  )}
                </tr>
              );
            })}
            <tr>
              <td colSpan={orderStatus === 1 ? 6 : 5}>
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
                          <span>({v.coupon_name ? v.coupon_name : '無'})</span>
                          :-NT$
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
              <td colSpan={orderStatus === 1 ? 6 : 5}>
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
        <div className="account_order_detail-back mt-2">
          <Link className="btn btn-sm btn-secondary" to="/account/orders">
            查看所有訂單
          </Link>
        </div>
      </div>
    </>
  );
}

export default AccountOrderDetail;

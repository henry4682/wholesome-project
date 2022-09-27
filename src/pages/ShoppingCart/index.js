import { React, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';
import { BiX, BiPlus, BiMinus } from 'react-icons/bi';
import { BsFillCaretUpFill } from 'react-icons/bs';
import './styles/index.scss';
import { useCart } from '../../context/cart';
import { useAuth } from '../../context/auth';
import axios from 'axios';
import { API_URL } from '../../utils/config';

function ShoppingCart() {
  const { cart, setCart, minusOne, plusOne, remove, calcTotal } = useCart();
  const { user } = useAuth();
  const [show, setShow] = useState(true);
  const cartTotalPrice = calcTotal();
  const [isFinish, setIsFinish] = useState(false);
  const [orderId, setOrderId] = useState();

  console.log(user);
  // 控制優惠券下拉選單的狀態(注意資料類型)
  const [selectCoupon, setSelectCoupon] = useState(0);
  // 取得會員所有優惠券資料的狀態
  const [userCouponsData, setUserCouponsData] = useState([]);
  // 控制收件人資訊的狀態
  const [receiver, setReceiver] = useState({
    receiver_name: user.name,
    receiver_phone: user.phone,
    receiver_address: user.address,
  });

  useEffect(() => {
    let userCoupons = async () => {
      let response = await axios.get(`${API_URL}/user/${user.id}/coupons`);
      console.log(response.data);
      setUserCouponsData(response.data.couponsCanUse);
    };
    userCoupons();
  }, [user.id]);

  const handleFieldChange = (e) => {
    setReceiver({ ...receiver, [e.target.name]: e.target.value });
  };

  async function orderSubmit(e) {
    e.preventDefault();
    try {
      let submit = await axios.post(`${API_URL}/cart/${user.id}`, {
        user,
        cart,
        receiver,
        selectCoupon,
        cartTotalPrice,
      });
      console.log(submit.data.message);
      //  <Navigate to="/account" />;
      alert(submit.data.message);
      setCart([]);
      setIsFinish(true);
      setOrderId(submit.data.newestOrderId);
    } catch (e) {
      console.error(e);
    }
  }
  if (isFinish) {
    return <Navigate to={`/account/orders/${orderId}`} />;
  }

  return (
    <div className="container">
      <div className="mt-4 row cart_index_desktop ">
        {/* sideSection 側邊部分 */}
        <div className="col-2">
          <div className="sticky-top cart_sideSection">
            <div className="cart_card my-3 ">
              <div className="title ">結帳金額</div>
              <hr />
              <span className="d-flex justify-content-between">
                商品小計
                <span>
                  NT$ <em>{calcTotal()}</em>
                </span>
              </span>
              <hr />
              <span className="d-flex justify-content-between">
                運費
                <span>
                  NT$ <em>80</em>
                </span>
              </span>
              <hr />
              <span className="d-flex justify-content-between  align-items-end">
                應付總額
                <span className=" text-primary ">
                  NT$
                  <em className="cart_total text-primary">
                    {calcTotal() + 80}
                  </em>
                </span>
              </span>
            </div>

            <div className="cart_card my-3 cart_card_side_tablet">
              <div className="d-flex title justify-content-between">
                購物車內容
                <button
                  className="cart_button d-block"
                  onClick={() => setShow(!show)}
                >
                  <BsFillCaretUpFill />
                </button>
              </div>
              <hr />
              <span>
                {show
                  ? cart.map((v, i) => {
                      return (
                        <div key={v.id}>
                          <div>
                            <div className="cart_product m-2">{v.name}</div>
                            <div className="d-flex m-2 justify-content-end">
                              數量 <div>{v.amount}</div>
                            </div>
                            <hr />
                          </div>
                        </div>
                      );
                    })
                  : null}

                <span className="m-2">合計有{cart.length}項商品</span>
              </span>
            </div>
          </div>
        </div>
        {/* mainSection 主要部分 */}
        <div className="col-9">
          {/* CartMain 購物車商品列表 */}
          <div className="my-4">
            <div className="d-flex align-items-center mb-2">
              <div className="position-relative cart_number rounded-circle bg-secondary ">
                <RiNumber1 className="position-absolute top-50 start-50 translate-middle " />
              </div>
              <p className="title ms-2">購物車內容</p>
            </div>

            {/* desktop */}
            <table className="table border border-secondary">
              <thead className="table-secondary">
                <tr>
                  <th scope="col">商品圖片</th>
                  <th scope="col">商品名稱</th>
                  <th scope="col">單價</th>
                  <th scope="col">數量</th>
                  <th scope="col">小計</th>
                  <th scope="col">刪除</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((v, i) => {
                  return (
                    <tr key={v.id} className="border border-secondary">
                      <td>
                        <img
                          className="cart_product_pic"
                          src={require(`../../Assets/products/${v.image}`)}
                          alt="item"
                        />
                      </td>
                      <td className="align-middle">
                        <div className="ms-3">{v.name}</div>
                      </td>
                      <td className="align-middle">
                        <div>
                          NT$ <em className="cart">{v.price}</em>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <button
                            name={v.id}
                            //onClick={() => handleChange(v, -1)}
                            onClick={() => minusOne(v.id)}
                            className="cart_add p-1 border border-secondary rounded"
                          >
                            <BiMinus />
                          </button>
                          <div className="d-flex justify-content-center align-items-center mx-2 ">
                            {v.amount}
                          </div>
                          <button
                            onClick={() => plusOne(v.id)}
                            className="cart_sub p-1 border border-secondary rounded"
                          >
                            <BiPlus />
                          </button>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div>NT${v.price * v.amount}</div>
                      </td>
                      <td className="align-middle">
                        <button
                          onClick={() => remove(v.id, v.amount, v.stock)}
                          className="cart_button delete col-1"
                        >
                          <BiX size={25} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={6}>購物車內合計有 {cart.length} 項商品</td>
                </tr>
              </tbody>
            </table>
          </div>
          <form>
            {/* 優惠券 */}
            <div className="mt-3">
              <div className="d-flex align-items-center">
                <div className="position-relative cart_number rounded-circle bg-secondary ">
                  <RiNumber2 className="position-absolute top-50 start-50 translate-middle " />
                </div>
                <p className="title ms-2">選擇優惠券</p>
              </div>
              <div className="cart_card mt-3">
                <div className="cart_coupon">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    // value={selectCoupon}
                    onChange={(e) => {
                      setSelectCoupon(e.target.value);
                    }}
                  >
                    <option value={null}>--- 請選擇優惠券 ---</option>
                    {userCouponsData.map((v, i) => {
                      return (
                        <option key={v.id} value={v.coupon_id}>
                          {v.coupon_name}
                        </option>
                      );
                    })}
                    {/* <option value="2">Two</option>
                    <option value="3">Three</option> */}
                  </select>
                </div>
              </div>
            </div>
            {/* 購買資訊 */}
            <div className="my-3">
              <div className="d-flex align-items-center">
                <div className="position-relative cart_number rounded-circle bg-secondary ">
                  <RiNumber3 className="position-absolute top-50 start-50 translate-middle " />
                </div>
                <p className="title ms-2">付款</p>
              </div>
              <div className="cart_card mt-3">
                <div className="subtitle">付款方式</div>
                <div className="my-3 text-primary">
                  <p>貨到付款</p>
                </div>
                <hr />
                <div className="subtitle mt-4">購買人資訊</div>

                <div className="cart_ship member">
                  <label className="mt-4">姓名</label>
                  <input
                    className=" mt-3 px-4"
                    type="text"
                    placeholder="購買人姓名"
                    name="receiver_name"
                    value={receiver.receiver_name}
                    onChange={handleFieldChange}
                  />
                  <label className="mt-4">聯絡電話</label>
                  <input
                    className=" mt-3 px-4"
                    type="text"
                    placeholder="購買人聯絡電話"
                    name="receiver_phone"
                    value={receiver.receiver_phone}
                    onChange={handleFieldChange}
                  />
                  <label className="mt-4 ">購買人地址</label>
                  <input
                    className=" mt-3 px-4"
                    type="text"
                    placeholder="請填寫詳細地址"
                    name="receiver_address"
                    value={receiver.receiver_address}
                    onChange={handleFieldChange}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mb-4 col-12 btn btn-primary text-light text-center"
              onClick={orderSubmit}
            >
              結帳
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

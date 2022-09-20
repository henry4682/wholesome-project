import React from 'react';
import { useState, useEffect } from 'react';
import { IconName } from 'react-icons/fa';
import CartMain from './components/CartMain';
import CartCoupon from './components/CartCoupon';
import Shipping from './components/Shipping';
import SideSection from './components/SideSection';
import './styles/index.scss';
import { useCart } from '../../context/cart';

//側欄
import { BsFillCaretUpFill, BsTypeH1 } from 'react-icons/bs';
import './styles/SideSection.scss';

// 購物車內容
import './styles/CartMain.scss';
import { RiNumber1 } from 'react-icons/ri';
import { BiX } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import { IoIosArrowDropleftCircle, IoMdThermometer } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

//加購商品區
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './components/SwiperForCart/SwiperForCart.scss';

//優惠券
import './styles/CartCoupon.scss';
import { RiNumber2 } from 'react-icons/ri';

//付款運送方式
import './styles/Shipping.scss';
import { RiNumber3 } from 'react-icons/ri';
import { BsCreditCard2Front } from 'react-icons/bs';

function ShoppingCart() {
  const { cart, setCart } = useCart();
  // const [error, setError] = useState(null);
  const [data, setData] = useState([]); //資料最後長相是[]
  const [total, setTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const [show, setShow] = useState(true);

  // 阻擋預設表單送出行為
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //數量增減
  const handleChange = (item, d) => {
    const ind = data.indexOf(item);
    const arr = data;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setData([...arr]);
  };

  //移除產品
  const handleRemove = (id) => {
    const arr = data.filter((item) => item.product_id !== id);
    setData(arr);
    setTotal(); //重新計算總價
    setTotalAmount(); //重新計算總數量
  };

  //計算總價
  const handleTotal = () => {
    let total = 0;
    data.map((item) => {
      total += item.amount * item.price;
      setTotal(total);
    });
  };

  //計算總數量
  const handleTotalAmount = () => {
    let totalAmount = 0;
    data.map((item) => {
      totalAmount += item.amount;
      setTotalAmount(totalAmount);
    });
  };

  useEffect(() => {
    handleTotal();
    handleTotalAmount();
  });

  return (
    <div className="container">
      {/* desktop */}
      <div className="mt-4 row  cart_index_desktop ">
        <div className="col-2">
          {/* <SideSection
            data={data}
            setData={setData}
            handleChange={handleChange}
            handleRemove={handleRemove}
            total={total}
            setTotal={setTotal}
            handleTotal={handleTotal}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            handleTotalAmount={handleTotalAmount}
          /> */}
          {/* 側欄 */}
          <div className="cart_sideSection">
            <div className="cart_card my-3 ">
              <div className="title ">結帳金額</div>
              <hr />
              <span className="d-flex justify-content-between">
                商品小計
                <span>
                  NT$ <em>{total}</em>
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
                  NT$ <em className="cart_total text-primary">{total + 80}</em>
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
                  ? data.map((item, i) => {
                      return (
                        <div key={item.id}>
                          <div>
                            <div className="cart_product m-2">{item.name}</div>
                            <div className="d-flex m-2 justify-content-end">
                              數量 <div>{item.amount}</div>
                            </div>
                            <hr />
                          </div>
                        </div>
                      );
                    })
                  : null}

                <span className="m-2">合計有{totalAmount}項商品</span>
              </span>
            </div>
          </div>
        </div>

        <div className="col-9">
          <form action="">
            {/* <CartMain
              data={data}
              setData={setData}
              handleChange={handleChange}
              handleRemove={handleRemove}
              total={total}
              setTotal={setTotal}
              handleTotal={handleTotal}
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
              handleTotalAmount={handleTotalAmount}
            /> */}
            {/* 購物車內容 */}

            <div className="my-4">
              <div className="d-flex align-items-center">
                <div className="position-relative cart_number rounded-circle bg-secondary ">
                  <RiNumber1 className="position-absolute top-50 start-50 translate-middle " />
                </div>
                <p className="title ms-2">購物車內容</p>
              </div>

              {/* desktop */}
              <ul className="cart_main_desktop  mt-3 cart_card_main cart_product_list overflow-hidden">
                <li className="d-flex row mx-0 bg-secondary cart_heading rounded-top">
                  <div className="cart_th col-lg-5 col-md-4  d-sm-inline">
                    商品明細
                  </div>
                  <div className="cart_th col-lg-2 col-md-2 d-none d-md-block">
                    單價
                  </div>
                  <div className="cart_th col-lg-2 col-md-2 d-none d-md-block">
                    數量
                  </div>
                  <div className="cart_th col-lg-2 col-md-2 d-none d-md-block">
                    小計
                  </div>
                  <div className="cart_delete col-1"></div>
                </li>

                {cart.map((item) => {
                  return (
                    <div key={item.id}>
                      <li className=" d-flex row align-items-center my-3">
                        <div className="d-flex detail col-lg-5 col-md-4 align-items-center ">
                          <img
                            className="cart_product_pic"
                            src={require(`../../Assets/products/${item.image}`)}
                            alt=""
                          />
                          <div className="ms-3">{item.name}</div>
                        </div>
                        <div className="cart_price col-2">
                          <div>
                            NT$ <em className="cart">{item.price}</em>
                          </div>
                        </div>
                        <div className="d-flex cart_counter col-2 align-items-center">
                          <button
                            name={item.product_id}
                            onClick={(e) => {
                              e.preventDefault();
                              console.log('amount', item.amount);
                              
                            }}
                            className="cart_add p-1 border border-secondary rounded"
                          >
                            <BiMinus />
                          </button>
                          <div className="cart_total_amount mx-2 ">
                            {/* amount - 與庫存有關 */}
                            {item.amount}
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="cart_sub p-1 border border-secondary rounded"
                          >
                            <BiPlus />
                          </button>
                        </div>
                        <div className="cart_subtotal col-1">
                          <div>NT${item.price * item.amount}</div>
                        </div>
                        <button
                          onClick={() => handleRemove(item.product_id)}
                          className="cart_button delete col-1"
                        >
                          <BiX size={25} />
                        </button>
                      </li>
                    </div>
                  );
                })}
                <hr />

                <li className="justify-content-end mb-2 ms-2">
                  購物車內合計有 2 項商品
                </li>
              </ul>
              {/* table & mobile */}
              <ul className="cart_main_tablet mt-3 cart_card cart_product_list">
                <li className="d-flex bg-secondary cart_heading">
                  <div className="cart_th">商品明細</div>
                </li>
                <li className=" row align-items-center my-3">
                  <div className="d-flex">
                    <img
                      className="cart_item_pic"
                      src={require('../../Assets/products/milk1004.jpg')}
                      alt=""
                    />
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between">
                        <div className="ms-4 mt-3 d-flex ">蘋果醋</div>
                        <button className="delete cart_button">
                          <BiX size={25} />
                        </button>
                      </div>
                      <div className="ms-4 my-3 cart">NT$ 3,566</div>
                    </div>
                  </div>

                  <div className=" d-flex justify-content-between mt-3">
                    <div className="d-flex cart_counter col-2 align-items-center">
                      <button className="cart_button cart_add p-2 border border-secondary rounded">
                        <BiMinus />
                      </button>
                      <div className="cart_total_amount mx-3 ">1</div>
                      <button className="cart_button cart_sub p-2 border border-secondary rounded">
                        <BiPlus />
                      </button>
                    </div>
                    <div className="cart_subtotal col-2  text-primary  d-flex align-items-center">
                      NT$ 3,566
                    </div>
                  </div>
                </li>
                <hr />

                <li className="justify-content-end">購物車內合計有 2 項商品</li>
              </ul>

              {/* 訂單加購商品區 */}

              <div className="cart_title ms-2 my-3">訂單加購商品區</div>

              <hr />

              {/* <SwiperForCart /> */}
              <Swiper
                modules={[Navigation, A11y]}
                breakpoints={{
                  '@0.00': {
                    slidesPerView: 1,
                  },
                  '@0.75': {
                    slidesPerView: 2,
                  },
                  '@1.00': {
                    slidesPerView: 3,
                  },
                  '@1.50': {
                    slidesPerView: 4,
                  },
                }}
                navigation
              >
                {/* 對Slide做map */}
                <SwiperSlide>
                  <div className="card product_detail-card">
                    <img
                      src={require('../../Assets/products/milk1002.jpg')}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body products_detail-card-body">
                      <Link
                        className="card-title product_detail-card-title"
                        to=""
                      >
                        咖啡師燕麥奶 (1000ml)
                      </Link>
                      <p className="card-text cart_detail_price ">NT156</p>
                      <button className=" btn btn-primary text-light px-4">
                        我要加購
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* <CartCoupon /> */}
            {/* 優惠券 */}
            <div className="mt-5">
              <div className="d-flex align-items-center">
                <div className="position-relative cart_number rounded-circle bg-secondary ">
                  <RiNumber2 className="position-absolute top-50 start-50 translate-middle " />
                </div>
                <p className="title ms-2">優惠券</p>
              </div>
              <div className="cart_card mt-3">
                <form action="" className="cart_coupon">
                  <label className="cart_subtitle">優惠券代碼</label>
                  <br />
                  <input
                    className=" mt-3 px-4"
                    type="text"
                    placeholder="請輸入優惠券代碼"
                  />
                  <button className=" ms-2 cart_btn_md px-4 py-2">確認</button>
                </form>
              </div>
            </div>
            {/* <Shipping /> */}
            {/* 付款運送方式 */}
            <div className="my-5">
              <div className="d-flex align-items-center">
                <div className="position-relative cart_number rounded-circle bg-secondary ">
                  <RiNumber3 className="position-absolute top-50 start-50 translate-middle " />
                </div>
                <p className="title ms-2"> 付款運送方式</p>
              </div>
              <div className="cart_card mt-3">
                <div className="subtitle">付款方式</div>
                <button className="cart_btn_large my-3 ">
                  <div className="d-flex justify-content-between">貨到付款</div>
                </button>
                <hr />

                <div className="cart_credit_card mt-3">
                  <label className="mt-4">備註</label>
                  <br />
                  <input
                    className=" mt-3 px-4"
                    type="text"
                    placeholder="限50字"
                  />
                </div>
                <div className="subtitle mt-4">結帳須知</div>
                <div className="my-3 p-3 bg-secondary">
                  <p> 親愛的顧客您好：</p>
                  <br />
                  <p> 1. 我們的來電顯示不會顯示為簡碼。</p>
                  <br />
                  <p>2.我們不會主動請您提供銀行或信用卡的相關資料</p>
                  <br />
                  <p>3: 我們不會主動請您至ATM提款機做任何操作。</p>
                  <br />
                  <p>4. 我們絕不會任意變更訂單的付款方式，請您務必小心！</p>
                  <br />
                  <p>
                    請注意：ATM僅會將您的錢轉出，無法取消分期設定、轉入退款…等。
                  </p>
                </div>
                <hr />
                <div className="subtitle mt-4">購買人資訊</div>

                <div className="cart_ship member">
                  <label className="mt-4">姓名</label>
                  <br />
                  <input
                    className=" mt-3 px-4"
                    type="text"
                    placeholder="購買人姓名"
                  />
                  <br />
                  <label className="mt-4">聯絡電話</label>
                  <br />
                  <input
                    className=" mt-3 px-4"
                    type="text"
                    placeholder="購買人聯絡電話"
                  />
                  <br />
                  <label className="mt-4 ">購買人地址</label>
                  <input
                    className=" mt-3 px-4"
                    type="text"
                    placeholder="請填寫詳細地址"
                  />
                </div>
              </div>
            </div>

            <div className=" cart_shipping_term my-2">
              <div className="d-flex align-items-center">
                <input type="checkbox" id="secret" name="secret" />
                <label for="secret" className="ps-3">
                  同意會員責任規範及商家會員條款
                </label>
              </div>
              <button
                type="submit"
                className="col-12 btn  btn-primary text-light px-4   my-3 text-center"
              >
                結帳
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* mobile &  tablet */}
      <div className="my-4  cart_index_tablet ">
        <div>
          <CartMain
            data={data}
            setData={setData}
            handleChange={handleChange}
            handleRemove={handleRemove}
            total={total}
            setTotal={setTotal}
            handleTotal={handleTotal}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            handleTotalAmount={handleTotalAmount}
          />
          <CartCoupon />
          <SideSection
            data={data}
            setData={setData}
            handleChange={handleChange}
            handleRemove={handleRemove}
            total={total}
            setTotal={setTotal}
            handleTotal={handleTotal}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            handleTotalAmount={handleTotalAmount}
          />
          <Shipping />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

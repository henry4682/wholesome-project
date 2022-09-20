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
    // const ind = cart.indexOf(item);
    // const arr = cart;
    // arr[ind].amount += d;
    // if (arr[ind].amount === 0) arr[ind].amount = 1;
    // setData([...arr]);
  };

  //移除產品
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setData(arr);
    setTotal(); //重新計算總價
    setTotalAmount(); //重新計算總數量
  };

  //計算總價
  const handleTotal = () => {
    let total = 0;
    cart.map((item) => {
      total += item.amount * item.price;
      setTotal(total);
    });
  };

  //計算總數量
  const handleTotalAmount = () => {
    let totalAmount = 0;
    cart.map((item) => {
      totalAmount += item.amount;
      setTotalAmount(totalAmount);
    });
  };

  // useEffect(() => {
  //   handleTotal();
  //   handleTotalAmount();
  // });

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
          {/* <form action=""> */}
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
          <Shipping />

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
          {/* </form> */}
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

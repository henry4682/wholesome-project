import React from 'react';
import '../../styles/CartMain.scss';
import { RiNumber1 } from 'react-icons/ri';
import { BiX } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import SwiperForCart from '../SwiperForCart';

function CartMain({ products, setProducts, setCount }) {
  return (
    <div>
      <div>
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

            <li className=" d-flex row align-items-center my-3">
              <div className="d-flex detail col-lg-5 col-md-4 align-items-center ">
                <img
                  className="cart_product_pic"
                  src={require('../../../../Assets/products/milk1004.jpg')}
                  alt=""
                />
                <div className="ms-3">{}</div>
              </div>
              <div className="cart_price col-2">
                <div>
                  NT$ <em className="cart">3,566</em>
                </div>
              </div>
              <div className="d-flex cart_counter col-2 align-items-center">
                <button
                  className="cart_add p-1 border border-secondary rounded"
                  onClick={() => {
                    setCount();
                  }}
                >
                  <BiMinus />
                </button>
                <div className="cart_total_amount mx-2 ">1</div>
                <button className="cart_sub p-1 border border-secondary rounded">
                  <BiPlus />
                </button>
              </div>
              <div className="cart_subtotal col-1">
                <div>
                  NT$ <em>{}</em>
                </div>
              </div>
              <button className="cart_button delete col-1">
                <BiX size={25} />
              </button>
            </li>
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
                  src={require('../../../../Assets/products/milk1004.jpg')}
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

          <SwiperForCart />
        </div>
      </div>
    </div>
  );
}

export default CartMain;

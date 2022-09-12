import React from 'react';
import '../../styles/CartMain.scss';
import ProductItemDesktop from './ProductItemDesktop';
import { RiNumber1 } from 'react-icons/ri';
// import { BiX } from 'react-icons/bi';
// import { BiPlus } from 'react-icons/bi';
// import { BiMinus } from 'react-icons/bi';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import ProductItemTablet from './ProductItemTablet';
import SwiperForCart from '../SwiperForCart';

function CartMain({ products, setProducts, setCount }) {
  return (
    <div>
      <div>
        <div className="my-4">
          <div className="position-absolute cart_number rounded-circle bg-secondary  "></div>
          <RiNumber1 className="mx-auto ms-1 " />
          {/* 購物車內容 */}
          <span className="cart_title ms-2"> 購物車內容</span>
          {/* desktop */}
          <ul className="cart_main_desktop  mt-3 cart_card cart_product_list">
            <li className="d-flex row bg-secondary cart_heading">
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
            {console.log(products)}
            {/* {products.map((v, i) => {
              const { id, name, price, img, count } = v;
              return (
                <ProductItemDesktop
                  key={id}
                  name={name}
                  price={price}
                  img={img}
                  count={count}
                  setCount={(newCount) => {
                    const newProducts = products.map((v2, i2) => {
                      return id == v2.id
                        ? { ...v2, count: newCount }
                        : { ...v2 };
                    });
                    setProducts(newProducts);
                  }}
                />
              );
            })} */}

            <ProductItemDesktop />

            {/* <li className=" d-flex row align-items-center my-3">
              <div className="d-flex detail col-lg-5 col-md-4 align-items-center ">
                <img className="cart_product_pic" src="" alt="" />
                <div className="ms-3">蘋果醋</div>
              </div>
              <div className="cart_price col-2">
                <div>
                  NT$ <em className="cart">3,566</em>
                </div>
              </div>
              <div className="d-flex cart_counter col-2 align-items-center">
                <button className="cart_add p-1 border border-secondary rounded">
                  <BiMinus />
                </button>
                <div className="cart_total_amount mx-2 ">1</div>
                <button className="cart_sub p-1 border border-secondary rounded">
                  <BiPlus />
                </button>
              </div>
              <div className="cart_subtotal col-1">
                <div>
                  NT$ <em>3,566</em>
                </div>
              </div>
              <button className="cart_button delete col-1">
                <BiX size={25} />
              </button>
            </li>
            <hr /> */}

            <li className="justify-content-end">購物車內合計有 2 項商品</li>
          </ul>
          {/* table & mobile */}
          <ul className="cart_main_tablet mt-3 cart_card cart_product_list">
            <li className="d-flex bg-secondary cart_heading">
              <div className="cart_th">商品明細</div>
            </li>
            <ProductItemTablet />
            <ProductItemTablet />

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

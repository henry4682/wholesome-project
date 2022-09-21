import React from 'react';
// import { useState, useEffect } from 'react';
import '../styles/CartMain.scss';
import { RiNumber1 } from 'react-icons/ri';
import { BiX } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
// import { IoIosArrowDropleftCircle } from 'react-icons/io';
// import { IoIosArrowDroprightCircle } from 'react-icons/io';
// import SwiperForCart from './SwiperForCart';
import { useCart } from '../../../context/cart';
function CartMain() {
  const { cart, setCart, plusOne, minusOne, remove } = useCart();
  return (
    <>
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
                      src={require(`../../../Assets/products/${v.image}`)}
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
                      onClick={() => remove(v.id)}
                      className="cart_button delete col-1"
                    >
                      <BiX size={25} />
                    </button>
                  </td>
                </tr>
              );
            })}
            <td colSpan={6}>購物車內合計有 {cart.length} 項商品</td>
          </tbody>
        </table>

        {/* table & mobile */}
        {/* <ul className="cart_main_tablet mt-3 cart_card cart_product_list">
          <li className="d-flex bg-secondary cart_heading">
            <div className="cart_th">商品明細</div>
          </li>
          <li className=" row align-items-center my-3">
            <div className="d-flex">
              <img
                className="cart_item_pic"
                src={require('../../../Assets/products/milk1004.jpg')}
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
        </ul> */}
      </div>
    </>
  );
}

export default CartMain;

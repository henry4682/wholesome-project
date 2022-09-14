import React from 'react';
import { BiX } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';

function ProductItemTablet(props) {
  return (
    <div>
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
    </div>
  );
}

export default ProductItemTablet;

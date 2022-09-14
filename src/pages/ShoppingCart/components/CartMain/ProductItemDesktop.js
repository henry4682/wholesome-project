import React from 'react';
import { BiX } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';

function ProductItemDesktop({ name, price, img, count, setCount }) {
  return (
    <div>
      <li className=" d-flex row align-items-center my-3">
        <div className="d-flex detail col-lg-5 col-md-4 align-items-center ">
          <img
            className="cart_product_pic"
            src={require('../../../../Assets/products/milk1004.jpg')}
            alt=""
          />
          <div className="ms-3">{name}</div>
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
              setCount(count - 1);
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
            NT$ <em>{price}</em>
          </div>
        </div>
        <button className="cart_button delete col-1">
          <BiX size={25} />
        </button>
      </li>
      <hr />
    </div>
  );
}

export default ProductItemDesktop;

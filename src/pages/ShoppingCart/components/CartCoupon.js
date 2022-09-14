import React from 'react';
import '../styles/CartCoupon.scss';
import { RiNumber2 } from 'react-icons/ri';

function CartCoupon(props) {
  return (
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
  );
}

export default CartCoupon;

import React from 'react';
import '../styles/CartCoupon.scss';
import { RiNumber2 } from 'react-icons/ri';

function CartCoupon(props) {
  return (
    <div className="mt-3">
      <div className="d-flex align-items-center">
        <div className="position-relative cart_number rounded-circle bg-secondary ">
          <RiNumber2 className="position-absolute top-50 start-50 translate-middle " />
        </div>
        <p className="title ms-2">選擇優惠券</p>
      </div>
      <div className="cart_card mt-3">
        <div className="cart_coupon">
          {/* <label className="cart_subtitle">優惠券代碼</label>
          <br /> */}
          <select class="form-select" aria-label="Default select example">
            <option selected>請選擇優惠券</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          {/* <input
            className=" mt-3 px-4"
            type="text"
            placeholder="請輸入優惠券代碼"
          />
          <button className=" ms-2 cart_btn_md px-4 py-2">確認</button> */}
        </div>
      </div>
    </div>
  );
}

export default CartCoupon;

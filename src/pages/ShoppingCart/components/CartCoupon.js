import React from 'react';
import '../styles/CartCoupon.scss';
import { RiNumber2 } from 'react-icons/ri';

function CartCoupon(props) {
  return (
    <div className="mt-5">
      <div className="position-absolute number rounded-circle bg-secondary "></div>
      <RiNumber2 className="mx-auto ms-1 " />
      <span className="title ms-2"> 優惠券</span>
      <div className="card mt-3">
        <form action="" className="coupon">
          <label className='subtitle'>優惠券代碼</label>
          <br />
          <input
            className=" mt-3 px-4"
            type="text"
            placeholder="請輸入優惠券代碼"
          />
          <button className="ms-2 btn-md px-4 py-2">確認</button>
        </form>
      </div>
    </div>
  );
}

export default CartCoupon;

import React from 'react';
import '../styles/Shipping.scss';
import { RiNumber3 } from 'react-icons/ri';
import { BsCreditCard2Front } from 'react-icons/bs';

function Shipping(props) {
  return (
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
          <input className=" mt-3 px-4" type="text" placeholder="限50字" />
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
          <p>請注意：ATM僅會將您的錢轉出，無法取消分期設定、轉入退款…等。</p>
        </div>
        <hr />
        <div className="subtitle mt-4">購買人資訊</div>

        <div className="cart_ship member">
          <label className="mt-4">姓名</label>
          <br />
          <input className=" mt-3 px-4" type="text" placeholder="購買人姓名" />
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
          <div className="row">
            <div className=" mt-3 col-4">
              <input className=" mt-3 px-4" type="text" placeholder="縣市" />
            </div>
            <div className=" mt-3 col-4">
              <input
                className=" mt-3 px-4"
                type="text"
                placeholder="鄉鎮市區"
              />
            </div>
            <div className=" mt-3 col-4">
              <input
                className=" mt-3 px-4"
                type="text"
                placeholder="郵遞區號"
              />
            </div>
          </div>
          <input
            className=" mt-3 px-4"
            type="text"
            placeholder="請填寫詳細地址：路 / 巷 / 弄 / 樓"
          />
        </div>
      </div>
    </div>
  );
}

export default Shipping;

import React from 'react';
import '../styles/Shipping.scss';
import { RiNumber3 } from 'react-icons/ri';
import { BsCreditCard2Front } from 'react-icons/bs';

function Shipping(props) {
  return (
    <div className="my-5">
      <div className="position-absolute number rounded-circle bg-secondary "></div>
      <RiNumber3 className="mx-auto ms-1 " />
      <span className="title ms-2"> 付款運送方式</span>
      <div className="cart_card mt-3">
        <div className="subtitle">付款方式</div>
        <button className="cart_btn_large my-3 ">
          <div className="d-flex justify-content-between">
            宅配
            <span className="fee">達免運門檻</span>
          </div>
        </button>
        <hr />
        <button className="cart_btn_large my-3 ">
          <div className="d-flex justify-content-between align-items-center">
            <BsCreditCard2Front size={30} />
            信用卡
            <span>(VISA、MasterCard、JCB)</span>
          </div>
        </button>
        <form action="" className="cart_credit_card mt-3">
          <label>卡號</label>
          <br />
          <input
            className=" mt-3 px-4"
            type="text"
            placeholder="**** **** **** **** "
          />
          <div className="row mt-4">
            <div className="col-6">
              <label>卡片有效年月</label>
              <br />
              <input className=" mt-3 px-4" type="text" placeholder="MM/YY" />
            </div>
            <div className="col-6">
              <label>卡片背面檢查碼</label>
              <br />
              <input
                className=" mt-3 px-4"
                type="text"
                placeholder="卡片背面檢查碼 "
              />
            </div>
          </div>
          <label className="mt-3">持卡人姓名</label>
          <br />
          <input
            className=" mt-3 px-4"
            type="text"
            placeholder="**** **** **** **** "
          />
          <br />
          <label className="mt-4">備註</label>
          <br />
          <input className=" mt-3 px-4" type="text" placeholder="限50字" />
        </form>
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

        <form action="" className="member">
          <label className="mt-4">姓名</label>
          <br />
          <input className="mt-3 px-4" type="text" placeholder="購買人姓名" />
          <br />
          <label className="mt-4">聯絡電話</label>
          <br />
          <input
            className="mt-3 px-4"
            type="text"
            placeholder="購買人聯絡電話"
          />
          <br />
          <label className="mt-4 ">購買人地址</label>
          <div className="row">
            <div className=" mt-3 col-4">
              <select class="form-select" aria-label="Default select example">
                <option selected>縣市</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className=" mt-3 col-4">
              <select class="form-select" aria-label="Default select example">
                <option selected>縣市</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className=" mt-3 col-4">
              <select class="form-select" aria-label="Default select example">
                <option selected>縣市</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <input
            className="mt-3 px-4"
            type="text"
            placeholder="請填寫詳細地址：路 / 巷 / 弄 / 樓"
          />
          <hr />
          <div className="d-flex cart_shipping_term my-2">
            <input type="checkbox" id="secret" name="secret" />
            <label for="secret">同意會員責任規範及商家會員條款</label>
          </div>

          <button
            type="submit"
            className=" btn btn-primary text-light px-4 align-items-stretch"
          >
            我要加購
          </button>
        </form>
      </div>
    </div>
  );
}

export default Shipping;

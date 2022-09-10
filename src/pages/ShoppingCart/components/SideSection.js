import React from 'react';
import { BsFillCaretUpFill } from 'react-icons/bs';
import '../styles/SideSection.scss';

function SideSection(props) {
  return (
    <div>
      <div className="cart_card my-3 ">
        <div className="title ">結帳金額</div>
        <hr />
        <span className="d-flex justify-content-between">
          商品小計
          <span>
            NT$ <em>3,566</em>
          </span>
        </span>
        <hr />
        <span className="d-flex justify-content-between">
          運費
          <span>
            NT$ <em>0</em>
          </span>
        </span>
        <hr />
        <span className="d-flex justify-content-between  align-items-end">
          應付總額
          <span className=" text-primary ">
            NT$ <em className="cart_total text-primary">3,566</em>
          </span>
        </span>
      </div>
      <div className="cart_card">
        <div className="d-flex title justify-content-between">
          購物車內容
          <a className='d-block'>
            <BsFillCaretUpFill />
          </a>
        </div>
        <hr />
        <span>
          <div className="product m-2">芒果果昔</div>
          <div className="d-flex m-2 justify-content-end">
            數量 <div>1</div>
          </div>
          <hr />
          <div className="product m-2">梅果果昔</div>
          <div className="d-flex m-2 justify-content-end">
            數量 <div>1</div>
          </div>
          <hr />
          <span className="m-2">合計有2項商品</span>
        </span>
      </div>
    </div>
  );
}

export default SideSection;

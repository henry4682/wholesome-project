import React from 'react';
import { useState, useEffect } from 'react';
import { BsFillCaretUpFill, BsTypeH1 } from 'react-icons/bs';
import '../styles/SideSection.scss';
import { useCart } from '../../../context/cart';
// test

function SideSection() {
  const { cart, calcTotal } = useCart();
  const [show, setShow] = useState(true);

  return (
    <div className="sticky-top cart_sideSection">
      <div className="cart_card my-3 ">
        <div className="title ">結帳金額</div>
        <hr />
        <span className="d-flex justify-content-between">
          商品小計
          <span>
            NT$ <em>{calcTotal()}</em>
          </span>
        </span>
        <hr />
        <span className="d-flex justify-content-between">
          運費
          <span>
            NT$ <em>80</em>
          </span>
        </span>
        <hr />
        <span className="d-flex justify-content-between  align-items-end">
          應付總額
          <span className=" text-primary ">
            NT$ <em className="cart_total text-primary">{calcTotal() + 80}</em>
          </span>
        </span>
      </div>

      <div className="cart_card my-3 cart_card_side_tablet">
        <div className="d-flex title justify-content-between">
          購物車內容
          <button
            className="cart_button d-block"
            onClick={() => setShow(!show)}
          >
            <BsFillCaretUpFill />
          </button>
        </div>
        <hr />
        <span>
          {show
            ? cart.map((v, i) => {
                return (
                  <div key={v.id}>
                    <div>
                      <div className="cart_product m-2">{v.name}</div>
                      <div className="d-flex m-2 justify-content-end">
                        數量 <div>{v.amount}</div>
                      </div>
                      <hr />
                    </div>
                  </div>
                );
              })
            : null}

          <span className="m-2">合計有{cart.length}項商品</span>
        </span>
      </div>
    </div>
  );
}

export default SideSection;

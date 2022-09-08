import React from 'react';
import '../styles/CartMain.scss';
import { RiNumber1 } from 'react-icons/ri';
import { BiX } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

function CartMain(props) {
  return (
    <div>
      <div>
        <div>
          <div className="position-absolute cart_number rounded-circle bg-secondary "></div>
          <RiNumber1 className="mx-auto ms-1 " />
          {/* 購物車內容 */}
          <span className="title ms-2"> 購物車內容</span>
          <ul className="mt-3 card cart_product_list">
            <li className="d-flex row py-3 bg-secondary cart_heading">
              <div className="detail col-5">商品明細</div>
              <div className="price col-2">單價</div>
              <div className="amount col-2">數量</div>
              <div className="subtotal col-2">小計</div>
              <div className="delete col-1"></div>
            </li>
            <li className="d-flex row align-items-center my-3">
              <div className="d-flex detail col-5 align-items-center ">
                <img className="cart_product_pic" src="" alt="" />
                <div className="ms-3">蘋果醋</div>
              </div>
              <div className="cart_price col-2">
                <div>
                  NT$ <em className='cart'>3,566</em>
                </div>
              </div>
              <div className="d-flex cart_counter col-2 align-items-center">
                <button className="add p-1 border border-secondary">
                  <BiMinus />
                </button>
                <div className="cart_total_amount mx-2">1</div>
                <button className="sub p-1 border border-secondary">
                  <BiPlus />
                </button>
              </div>
              <div className="cart_subtotal col-2">
                <div>
                  NT$ <em>3,566</em>
                </div>
              </div>
              <button className="delete col-1">
                <BiX size={25} />
              </button>
            </li>
            <hr />
            <li className="justify-content-end">購物車內合計有 2 項商品</li>
          </ul>
          {/* 訂單加購商品區 */}
          <div className="title ms-2 my-3">訂單加購商品區</div>

          <hr />
          <div>
            <ul className="d-flex justify-content-between">
              <button className="bg-secondary">
                <IoIosArrowDropleftCircle size={30} />
              </button>
              <li className=" product_item text-center py-2 ">
                <img src="" alt="" />
                <div className="py-1">梅子醋</div>
                <div className="price-add pt-2">加購價</div>
                <div className="my-2 text-primary">
                  NT$ <em className="add-on text-primary">3,566</em>
                </div>
                <button className="btn btn-primary text-light px-4">
                  我要加購
                </button>
              </li>
              <li className=" product_item text-center py-2 ">
                <img src="" alt="" />
                <div className="py-1">梅子醋</div>
                <div className="price-add pt-2">加購價</div>
                <div className="my-2 text-primary">
                  NT$ <em className="add-on text-primary">3,566</em>
                </div>
                <button className="btn btn-primary text-light px-4">
                  我要加購
                </button>
              </li>
              <li className=" product_item text-center py-2 ">
                <img src="" alt="" />
                <div className="py-1">梅子醋</div>
                <div className="price-add pt-2">加購價</div>
                <div className="my-2 text-primary">
                  NT$ <em className="add-on text-primary">3,566</em>
                </div>
                <button className="btn btn-primary text-light px-4">
                  我要加購
                </button>
              </li>
              <li className=" product_item text-center py-2 ">
                <img src="" alt="" />
                <div className="py-1">梅子醋</div>
                <div className="price-add pt-2">加購價</div>
                <div className="my-2 text-primary">
                  NT$ <em className="add-on text-primary">3,566</em>
                </div>
                <button className="btn btn-primary text-light px-4">
                  我要加購
                </button>
              </li>
              <li className=" product_item text-center py-2 ">
                <img src="" alt="" />
                <div className="py-1">梅子醋</div>
                <div className="price-add pt-2">加購價</div>
                <div className="my-2 text-primary">
                  NT$ <em className="add-on text-primary">3,566</em>
                </div>
                <button className="btn btn-primary text-light px-4">
                  我要加購
                </button>
              </li>
              <button className="bg-secondary">
                <IoIosArrowDroprightCircle size={30} />
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartMain;

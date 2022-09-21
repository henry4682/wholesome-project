import { React, useState } from 'react';
// import CartMain from './components/CartMain';
import './styles/CartMain.scss';
import { RiNumber1 } from 'react-icons/ri';
import { BiX } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import CartCoupon from './components/CartCoupon';
import Shipping from './components/Shipping';
// import SideSection from './components/SideSection';
import { BsFillCaretUpFill } from 'react-icons/bs';
import './styles/SideSection.scss';
import './styles/index.scss';
import { useCart } from '../../context/cart';
function ShoppingCart() {
  const { cart, setCart, minusOne, plusOne, remove, calcTotal } = useCart();
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <div className="mt-4 row  cart_index_desktop ">
        {/* sideSection 側邊部分 */}
        <div className="col-2">
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
                  NT${' '}
                  <em className="cart_total text-primary">
                    {calcTotal() + 80}
                  </em>
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
        </div>
        {/* mainSection 主要部分 */}
        <div className="col-9">
          {/* CartMain 購物車商品列表 */}
          <div className="my-4">
            <div className="d-flex align-items-center mb-2">
              <div className="position-relative cart_number rounded-circle bg-secondary ">
                <RiNumber1 className="position-absolute top-50 start-50 translate-middle " />
              </div>
              <p className="title ms-2">購物車內容</p>
            </div>

            {/* desktop */}
            <table className="table border border-secondary">
              <thead className="table-secondary">
                <tr>
                  <th scope="col">商品圖片</th>
                  <th scope="col">商品名稱</th>
                  <th scope="col">單價</th>
                  <th scope="col">數量</th>
                  <th scope="col">小計</th>
                  <th scope="col">刪除</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((v, i) => {
                  return (
                    <tr key={v.id} className="border border-secondary">
                      <td>
                        <img
                          className="cart_product_pic"
                          src={require(`../../Assets/products/${v.image}`)}
                          alt="item"
                        />
                      </td>
                      <td className="align-middle">
                        <div className="ms-3">{v.name}</div>
                      </td>
                      <td className="align-middle">
                        <div>
                          NT$ <em className="cart">{v.price}</em>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <button
                            name={v.id}
                            //onClick={() => handleChange(v, -1)}
                            onClick={() => minusOne(v.id)}
                            className="cart_add p-1 border border-secondary rounded"
                          >
                            <BiMinus />
                          </button>
                          <div className="d-flex justify-content-center align-items-center mx-2 ">
                            {v.amount}
                          </div>
                          <button
                            onClick={() => plusOne(v.id)}
                            className="cart_sub p-1 border border-secondary rounded"
                          >
                            <BiPlus />
                          </button>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div>NT${v.price * v.amount}</div>
                      </td>
                      <td className="align-middle">
                        <button
                          onClick={() => remove(v.id)}
                          className="cart_button delete col-1"
                        >
                          <BiX size={25} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <td colSpan={6}>購物車內合計有 {cart.length} 項商品</td>
              </tbody>
            </table>
          </div>
          <form>
            <CartCoupon />
            <Shipping />
            <button
              type="submit"
              className="mb-4 col-12 btn btn-primary text-light text-center"
            >
              結帳
            </button>
          </form>
        </div>
      </div>
      {/* mobile &  tablet */}
      {/* <div className="my-4  cart_index_tablet ">
        <div>
          <CartMain />
          <CartCoupon />
          <SideSection />
          <Shipping />
        </div>
      </div> */}
    </div>
  );
}

export default ShoppingCart;

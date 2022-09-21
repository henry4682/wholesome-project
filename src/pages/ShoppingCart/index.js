import React from 'react';
import { useState, useEffect } from 'react';
import { IconName } from 'react-icons/fa';
import CartMain from './components/CartMain';
import CartCoupon from './components/CartCoupon';
import Shipping from './components/Shipping';
import SideSection from './components/SideSection';
import './styles/index.scss';
import { useCart } from '../../context/cart';
function ShoppingCart() {
  const { cart, setCart } = useCart();
  // const [error, setError] = useState(null);
  const [data, setData] = useState([]); //資料最後長相是[]
  const [total, setTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  // 阻擋預設表單送出行為
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //數量增減
  const handleChange = (item, d) => {
    // const ind = cart.indexOf(item);
    // const arr = cart;
    // arr[ind].amount += d;
    // if (arr[ind].amount === 0) arr[ind].amount = 1;
    // setData([...arr]);
  };

  //移除產品
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setData(arr);
    setTotal(); //重新計算總價
    setTotalAmount(); //重新計算總數量
  };

  //計算總價
  const handleTotal = () => {
    let total = 0;
    cart.map((item) => {
      total += item.amount * item.price;
      setTotal(total);
    });
  };

  //計算總數量
  const handleTotalAmount = () => {
    let totalAmount = 0;
    cart.map((item) => {
      totalAmount += item.amount;
      setTotalAmount(totalAmount);
    });
  };

  // useEffect(() => {
  //   handleTotal();
  //   handleTotalAmount();
  // });

  return (
    <div className="container">
      {/* desktop */}
      <div className="mt-4 row  cart_index_desktop ">
        <div className="col-2">
          <SideSection
            data={data}
            setData={setData}
            handleChange={handleChange}
            handleRemove={handleRemove}
            total={total}
            setTotal={setTotal}
            handleTotal={handleTotal}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            handleTotalAmount={handleTotalAmount}
          />
        </div>

        <div className="col-9">
          {/* <form action=""> */}
          <CartMain
            data={data}
            setData={setData}
            handleChange={handleChange}
            handleRemove={handleRemove}
            total={total}
            setTotal={setTotal}
            handleTotal={handleTotal}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            handleTotalAmount={handleTotalAmount}
          />
          <CartCoupon />
          <Shipping />

          <div className=" cart_shipping_term my-2">
            <div className="d-flex align-items-center">
              <input type="checkbox" id="secret" name="secret" />
              <label for="secret" className="ps-3">
                同意會員責任規範及商家會員條款
              </label>
            </div>
            <button
              type="submit"
              className="col-12 btn  btn-primary text-light px-4   my-3 text-center"
            >
              結帳
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
      {/* mobile &  tablet */}
      <div className="my-4  cart_index_tablet ">
        <div>
          <CartMain
            data={data}
            setData={setData}
            handleChange={handleChange}
            handleRemove={handleRemove}
            total={total}
            setTotal={setTotal}
            handleTotal={handleTotal}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            handleTotalAmount={handleTotalAmount}
          />
          <CartCoupon />
          <SideSection
            data={data}
            setData={setData}
            handleChange={handleChange}
            handleRemove={handleRemove}
            total={total}
            setTotal={setTotal}
            handleTotal={handleTotal}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            handleTotalAmount={handleTotalAmount}
          />
          <Shipping />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
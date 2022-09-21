import React from 'react';
import CartMain from './components/CartMain';
import CartCoupon from './components/CartCoupon';
import Shipping from './components/Shipping';
import SideSection from './components/SideSection';
import './styles/index.scss';
import { useCart } from '../../context/cart';
function ShoppingCart() {
  const { cart, setCart } = useCart();
  return (
    <div className="container">
      {/* desktop */}
      <div className="mt-4 row  cart_index_desktop ">
        <div className="col-2">
          <SideSection />
        </div>
        <div className="col-9">
          <CartMain />
          <form>
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
          </form>
        </div>
      </div>
      {/* mobile &  tablet */}
      <div className="my-4  cart_index_tablet ">
        <div>
          <CartMain />
          <CartCoupon />
          <SideSection />
          <Shipping />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

import React from 'react';
import { IconName } from 'react-icons/fa';
import CartMain from './components/CartMain';
import CartCoupon from './components/CartCoupon';
import Shipping from './components/Shipping';
import SideSection from './components/SideSection';
// import '../../styles/global.scss'; //這行不用下喔，上層有引入了
import './styles/index.scss';

function ShoppingCart() {
  return (
    <div className="cart_container">
      <div className="mt-4 row d-flex justify-content-around  ">
        <div className="col-2">
          <SideSection />
        </div>

        <div className="col-9">
          <CartMain />
          <CartCoupon />
          <Shipping />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

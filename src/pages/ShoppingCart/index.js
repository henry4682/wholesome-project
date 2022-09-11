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
    <div className="container">
      {/* desktop */}
      <div className="mt-4 row  cart_index_desktop ">
        <div className="col-2">
          <SideSection />
        </div>
        <div className="col-9">
          <CartMain />
          <CartCoupon />
          <Shipping />
        </div>
      </div>
      {/* tablet */}
      {/* <div className="mt-4 cart_tablet ">
        <div>
          <SideSection />
        </div>
        <div>
          <CartMain />
          <CartCoupon />
          <Shipping />
        </div>
      </div> */}
      {/* mobile &  tablet */}
      <div className="my-4  cart_index_tablet ">
        <div>
          <CartMain />
          <CartCoupon />
          <Shipping />
          <SideSection />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

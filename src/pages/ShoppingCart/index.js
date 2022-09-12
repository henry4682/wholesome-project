import React from 'react';
import { useState } from 'react';
import { IconName } from 'react-icons/fa';
import CartMain from './components/CartMain/CartMain';
import CartCoupon from './components/CartCoupon';
import Shipping from './components/Shipping';
import SideSection from './components/SideSection';
// import '../../styles/global.scss'; //這行不用下喔，上層有引入了
import './styles/index.scss';

const sampleData = [
  {
    id: 1,
    name: '衣服',
    price: 100,
    img: 'https://i.imgur.com/1GrakTl.jpg',
  },
  {
    id: 2,
    name: '衣服',
    price: 100,
    img: 'https://i.imgur.com/ba3tvGm.jpg',
  },
  {
    id: 3,
    name: '衣服',
    price: 100,
    img: 'https://i.imgur.com/pHQ3xT3.jpg',
  },
];

function ShoppingCart() {
  // 擴充product物件多一個count
  const [products, setProducts] = useState(
    sampleData.map((v, i) => ({ ...v, count: 1 }))
  );

  //總數
  const calcTotalNumber = () => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].count;
    }
    return total;
  };

  //總額
  const calcTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].count * products[i].price;
    }
    return total;
  };

  return (
    <div className="container">
      {/* desktop */}
      <div className="mt-4 row  cart_index_desktop ">
        <div className="col-2">
          <SideSection />
        </div>
        <div className="col-9">
          <CartMain
            products={products}
            setProducts={setProducts}
            calcTotalNumber={calcTotalNumber()}
            calcTotalPrice={calcTotalPrice()}
          />
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
          <SideSection />
          <Shipping />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

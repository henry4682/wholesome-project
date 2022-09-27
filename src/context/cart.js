import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/config';

// 建立新的認證用的 context
const CartContext = createContext(null);

// 建立一個新的 Provider 元件，內容是提供 user 狀態
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const [item,setItem]

  const update = (id, amount) => {
    const newCart = cart.map((v, i) => {
      if (v.id === id) return { ...v, amount: amount };

      return v;
    });

    setCart(newCart);
  };

  const plusOne = (id) => {
    const newCart = cart.map((v, i) => {
      if (v.id === id) return { ...v, amount: v.amount + 1 };
      return v;
    });

    setCart(newCart);
  };

  const minusOne = (id) => {
    const newCart = cart.map((v, i) => {
      if (v.id === id && v.amount - 1 > 0)
        return { ...v, amount: v.amount - 1 };

      return v;
    });

    setCart(newCart);
  };

  const remove = (id) => {
    setCart(cart.filter((v, i) => v.id !== id));
  };

  const calcTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.amount * item.price;
    }, 0);
  };

  useEffect(() => {
    if (!localStorage.getItem('shoppingCart')) {
      localStorage.setItem('shoppingCart', '[]');
      return;
    }

    if (!cart.length && !localStorage.getItem('shoppingCart')) {
      setCart(JSON.parse(localStorage.getItem('shoppingCart')));
      return;
    }

    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        plusOne,
        minusOne,
        remove,
        calcTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 建立一個 HOOK 協助使用 context
export const useCart = () => useContext(CartContext);

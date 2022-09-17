import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/config';

// 建立新的認證用的 context
const CartContext = createContext(null);

// 建立一個新的 Provider 元件，內容是提供 user 狀態
export const CartProvider = ({ children }) => {
  // const [user, setUser] = useState({ id: '0' });
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 建立一個 HOOK 協助使用 context
export const useCart = () => useContext(CartContext);

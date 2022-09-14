import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/config';

// 建立新的認證用的 context
const AuthContext = createContext(null);

// 建立一個新的 Provider 元件，內容是提供 user 狀態
export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState({ id: '0' });
  const [user, setUser] = useState({ id: '0' });

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // 要會員資料，有的話就是已經登入過
    let getUser = async () => {
      console.log('in APP: check if login');
      let response = await axios.get(`${API_URL}/user`, {
        withCredentials: true,
      });
      setUser(response.data);
    };
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 建立一個 HOOK 協助使用 context
export const useAuth = () => useContext(AuthContext);

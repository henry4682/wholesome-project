import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './index.scss';
import { FaHome } from 'react-icons/fa';
import { BiUserPlus } from 'react-icons/bi';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useAuth } from '../../context/auth';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

function Login() {
  const { user, setUser, isLogin, setIsLogin } = useAuth();

  const [loginUser, setLoginUser] = useState({
    email: '123@test.com',
    password: 'test12345',
  });

  // 呈現密碼用
  const [showPassword, setShowPassword] = useState(false);

  // const [isLogin, setIsLogin] = useState(false);

  function handleFieldChange(e) {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await axios.post(`${API_URL}/auth/login`, loginUser, {
        // 為了可以跨源存取 cookie
        // 只要是判斷是否登入的請求都要加下面這行
        withCredentials: true,
      });
      console.log('POST res', response);
      console.log(response.data);
      setUser(response.data);
      setIsLogin(true);
    } catch (e) {
      console.error('register Error', e);
    }
  }

  // 登入後導到首頁
  if (isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="container my-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <FaHome />
              </Link>
            </li>
            <li className="breadcrumb-item">會員登入</li>
          </ol>
        </nav>
        <div className="d-flex justify-content-center p-2">
          <div className="login">
            <p className="text-center login-title">會員登入</p>
            <form className="login-form ">
              <div className="mb-4">
                <label className="form-label">帳戶</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  required
                  placeholder="請輸入您的 E-MAIL"
                  name="email"
                  value={loginUser.email}
                  onChange={handleFieldChange}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">密碼</label>
                <div className="login_password_box">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control form-control-lg"
                    placeholder="請輸入您的密碼"
                    name="password"
                    value={loginUser.password}
                    onChange={handleFieldChange}
                  />
                  <div className="login_password_icon">
                    {showPassword ? (
                      <BsEye
                        onClick={(e) => {
                          setShowPassword(false);
                        }}
                      />
                    ) : (
                      <BsEyeSlash
                        onClick={(e) => {
                          setShowPassword(true);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg text-white"
                onClick={handleSubmit}
              >
                會員登入
              </button>
            </form>
            <p className="login-notice text-center">
              <Link to="/register">
                <BiUserPlus className="add-icon" />
                註冊新會員
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

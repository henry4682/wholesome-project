import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { FaHome } from 'react-icons/fa';
import axios from 'axios';
import { API_URL } from '../../utils/config';

function Register() {
  const [user, setUser] = useState({
    name: '邱婉瑜',
    email: '123@test.com',
    phone: '0900000000',
    birthday: '2000-10-10',
    password: 'test12345',
    confirmPassword: 'test12345',
  });

  function handleFieldChange(e) {
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await axios.post(`${API_URL}/auth/register`, user);
      console.log('POST res', response);
      console.log(response.data);
    } catch (e) {
      console.error('register Error', e);
    }
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
            <li className="breadcrumb-item">註冊新帳號</li>
          </ol>
        </nav>
        <div className="d-flex justify-content-center">
          <div className="register">
            <p className="text-center register-title">註冊新帳號</p>
            <form className="register-form ">
              <div className="mb-4">
                <label className="form-label">姓名*</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  required
                  placeholder="請輸入您的姓名"
                  name="name"
                  value={user.name}
                  onChange={handleFieldChange}
                />
              </div>
              <div className="mb-4">
                <label className="form-label">電子信箱*</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  required
                  placeholder="請輸入您的 E-MAIL"
                  name="email"
                  value={user.email}
                  onChange={handleFieldChange}
                />
              </div>
              <div className="mb-4">
                <label className="form-label">手機*</label>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  required
                  placeholder="請輸入您的手機"
                  name="phone"
                  value={user.phone}
                  onChange={handleFieldChange}
                />
              </div>
              <div className="mb-4">
                <label className="form-label">生日</label>
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="birthday"
                  value={user.birthday}
                  onChange={handleFieldChange}
                />
                <p className="mt-1 text-primary">
                  * 請正確填寫，註冊成功後將無法修改
                </p>
              </div>
              <div className="mb-4">
                <label className="form-label">密碼*</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="請輸入您的密碼"
                  name="password"
                  value={user.password}
                  onChange={handleFieldChange}
                />
              </div>
              <div className="mb-4">
                <label className="form-label">密碼確認*</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="再輸入一次密碼"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleFieldChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg text-white"
                onClick={handleSubmit}
              >
                加入會員
              </button>
            </form>
            <p className="register-notice text-center">
              我已經有會員帳號了?<Link to="/login">回登入頁面</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

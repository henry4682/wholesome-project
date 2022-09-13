import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { BsCart3, BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useAuth } from '../../context/auth';

import MobileNav from '../MobileNav';
import './index.scss';
function Header() {
  // 把 user, setUser 從 auth context 裡頭拿出來
  const { user, setUser } = useAuth();

  async function handleLogout() {
    let response = await axios.get(`${API_URL}/auth/logout`, {
      withCredentials: true,
    });
    console.log('handleLogout', response.data);
    setUser({ id: null });
  }

  return (
    <header className="header">
      <div className="container-fluid p-0">
        <div className="header-highlight bg-primary"></div>
        {/* 手機版 navbar */}
        <MobileNav />
        <div className="logo-container d-md-flex d-none justify-content-center align-items-center">
          <img
            className="logo"
            src={require('../../Assets/Logo/logo.png')}
            alt="logo"
          />
          <div className="icon-box d-md-flex d-none">
            {/* 會員 icon -> 下拉式選單 */}
            <div className="dropdown">
              <Link
                className="dropdown-toggle"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaRegUser />
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {user.id ? (
                  <>
                    <li className="dropdown-item">Hi!{user.name}</li>
                    <li className="dropdown-item">
                      <Link className="btn btn-primary text-white" to="account">
                        我的帳戶
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={handleLogout}
                        >
                          登出
                        </button>
                      </div>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="dropdown-item" to="login">
                        <button className="btn btn-primary text-white">
                          會員登入
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="register">
                        <button className="btn btn-primary text-white">
                          會員註冊
                        </button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            {/* 購物車 icon */}
            <div>
              <Link to="shoppingCart">
                <BsCart3 />
              </Link>
            </div>
            {/* 搜尋 icon */}
            <div>
              <BsSearch className="text-primary" />
            </div>
          </div>
        </div>
        {/* header navbar */}
        <nav className="header-nav justify-content-center align-items-center">
          <ul className="header-nav-links d-flex list-unstyled">
            <li>
              <Link to="productsList/1">植物奶</Link>
            </li>
            <li>
              <Link to="productsList/4">營養蔬果汁</Link>
            </li>
            <li>
              <Link to="productsList/7">營養點心</Link>
            </li>
            <li>
              <Link to="products/sale">本月優惠</Link>
            </li>
            <li>
              <Link to="recipes">美味食譜</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

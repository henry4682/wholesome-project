import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useAuth } from '../../context/auth';
import { useCart } from '../../context/cart';
import MobileNav from '../MobileNav';
import './index.scss';
function Header() {
  // 把 user, setUser 從 auth context 裡頭拿出來
  const { user, setUser, setIsLogin } = useAuth();
  const { cart, setCart } = useCart();
  async function handleLogout() {
    let response = await axios.get(`${API_URL}/auth/logout`, {
      withCredentials: true,
    });
    console.log('handleLogout', response.data);
    setUser(null);
    setIsLogin(false);
    // localStorage.clear();
    setCart([]);
    localStorage.setItem('shoppingCart', JSON.stringify([]));
  }

  return (
    <header className="header">
      <div className="container-fluid p-0">
        <div className="header-highlight bg-primary"></div>
        {/* 手機版 navbar */}
        <MobileNav />
        <div className="logo-container d-md-flex d-none justify-content-center align-items-center">
          <Link to="/">
            <img
              className="logo"
              src={require('../../Assets/Logo/logo.png')}
              alt="logo"
            />
          </Link>
          <div className="icon-box d-md-flex d-none">
            {/* 會員 icon -> 下拉式選單 */}
            <div className="icon-box-account">
              <div className="dropdown">
                <Link
                  // className="dropdown-toggle"
                  to="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <AiOutlineUser />
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  {user && user.id !== '0' ? (
                    <>
                      <li className="dropdown-item">Hi!{user && user.name}</li>
                      <li className="dropdown-item">
                        <Link
                          className="btn btn-primary text-white"
                          to="account"
                        >
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
            </div>

            {/* 購物車 icon */}
            <div className="icon-box-cart">
              <div className="dropdown">
                <Link
                  // className="dropdown-toggle"
                  to="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* 顯示購物車商品數量的小框框 */}
                  <div className="header-cart-icon-box">
                    <AiOutlineShoppingCart />
                    <div className="header-cart-icon-count-box">
                      <div className="header-cart-icon-count">
                        <span>{cart.length}</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  {cart.length === 0 ? (
                    <>
                      <li className="dropdown-item">購物車目前無商品</li>
                    </>
                  ) : (
                    cart.map((v, i) => {
                      return (
                        <>
                          <li className="dropdown-item  d-flex border-bottom">
                            <div className="header-cart-item me-1">
                              <img
                                className="header-cart-item-img"
                                src={require(`../../Assets/products/${v.image}`)}
                                alt="logo"
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <p>{v.name}</p>
                              <p>NT${v.price}</p>
                              <p>數量:{v.amount}</p>
                            </div>
                          </li>
                        </>
                      );
                    })
                  )}
                  {cart.length === 0 ? (
                    <></>
                  ) : (
                    <li>
                      <div className="dropdown-item">
                        <Link
                          to="shoppingCart"
                          className="btn btn-sm btn-secondary"
                        >
                          立即結帳
                        </Link>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* header navbar */}
        <nav className="header-nav justify-content-center align-items-center">
          <ul className="header-nav-links d-flex list-unstyled">
            <li>
              <Link to="products/植物奶">植物奶</Link>
            </li>
            <li>
              <Link to="products/有機蔬果汁">有機蔬果汁</Link>
            </li>
            <li>
              <Link to="products/營養點心">營養點心</Link>
            </li>
            <li>
              <Link to="products/sale">本月優惠</Link>
            </li>
            <li>
              <Link to="recipes/飲品?search">美味食譜</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

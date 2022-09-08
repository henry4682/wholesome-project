import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import MobileNav from '../MobileNav';
import './index.scss';
function Header() {
  return (
    <header className="header">
      <div className="container-fluid p-0">
        <div className="header-highlight bg-primary"></div>
        <div className="logo-container d-flex justify-content-center align-items-center">
          <img
            className="logo"
            src={require('../../Assets/Logo/logo.png')}
            alt="logo"
          />
          <div className="icon-box d-flex">
            <div>
              <Link to="account">
                <FaRegUser />
              </Link>
            </div>
            <div>
              <BsCart3 />
            </div>
            <div>搜尋</div>
          </div>
        </div>
        <MobileNav />
        <nav className="header-nav d-flex justify-content-center align-items-center">
          <ul className="d-flex list-unstyled">
            <li>
              <Link to="products">植物奶</Link>
            </li>
            <li>
              <Link to="products">營養蔬果汁</Link>
            </li>
            <li>
              <Link to="products">營養點心</Link>
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

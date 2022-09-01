import React from 'react';
import { Link } from 'react-router-dom';
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
        </div>
        <nav>
          <ul className="d-flex">
            <li>
              <Link to="products/milk">植物奶</Link>
            </li>
            <li>
              <Link to="products/juice">營養蔬果汁</Link>
            </li>
            <li>
              <Link to="products/snack">營養點心</Link>
            </li>
            <li>
              <Link to="products/sale">本月優惠</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

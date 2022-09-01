import React from 'react';
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
      </div>
    </header>
  );
}

export default Header;

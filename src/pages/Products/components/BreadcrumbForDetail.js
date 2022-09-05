import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import '../styles/index.scss';

function BreadcrumbForDetail() {
  return (
    <>
      {/* {有沒有參數 ? <></> : <></>} */}
      <nav
        class="breadcrumb-detail-whole align-items-center"
        aria-label="breadcrumb"
      >
        <ol class="breadcrumb align-items-center">
          <li class="breadcrumb-item">
            <Link to="/">
              <FaHome />
            </Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <Link to="/products">植物奶</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <Link to="/products"> 燕麥奶</Link>
            {/* 抽換 用context*/}
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Pacific Foods Organic Oat Original 植物牛奶,有機燕麥 - 原創,32
            液體盎司(約 12 毫升)
          </li>
        </ol>
      </nav>
    </>
  );
}

export default BreadcrumbForDetail;

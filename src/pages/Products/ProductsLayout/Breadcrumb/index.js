import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './ProductsLayoutBreadcrumb.scss';

function Breadcrumb() {
  return (
    <>
      {/* {有沒有參數 ? <></> : <></>} */}
      <nav
        className="breadcrumb-whole align-items-center"
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb align-items-center">
          <li className="breadcrumb-item">
            <Link to="/">
              <FaHome />
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            植物奶
            {/* 抽換 用context*/}
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb;

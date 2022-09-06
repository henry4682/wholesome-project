import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './index.scss';

function Breadcrumb() {
  
  return (
    <>
      {/* {有沒有參數 ? <></> : <></>} */}
      <nav class="breadcrumb-whole align-items-center" aria-label="breadcrumb">
        <ol class="breadcrumb align-items-center">
          <li class="breadcrumb-item">
            <Link to="/">
              <FaHome />
            </Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            植物奶
            {/* 抽換 用context*/}
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb;

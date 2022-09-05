import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import '../styles/index.scss';

function Breadcrumb() {
  return (
    <>
      <nav class="breadcrumb-whole align-items-center" aria-label="breadcrumb">
        <ol class="breadcrumb align-items-center">
          <li class="breadcrumb-item">
            <Link to="/">
              <FaHome />
            </Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            植物奶
            {/* 抽換 */}
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb;

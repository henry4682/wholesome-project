import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Breadcrumb() {
  return (
    <>
      <div>Breadcrumb</div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            植物奶
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb;

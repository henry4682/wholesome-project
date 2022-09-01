import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Milk from './components/Milk';
import Juice from './components/Juice';
import Snack from './components/Snack';

import './styles/index.scss';

import axios from 'axios';

function Products() {
  return (
    <container>
      <h1>Products</h1>
      TODO:切版&試試看引入後端資料
      <div class="d-flex justify-content-around">
        <Link to="milk">植物奶</Link>
        <Link to="juice">果汁</Link>
        <Link to="snack">營養食品</Link>
      </div>
      <Routes>
        <Route path="milk" element={<Milk />} />
        <Route path="juice" element={<Juice />} />
        <Route path="snack" element={<Snack />} />
      </Routes>
      <div class="col">123</div>
    </container>
  );
}

export default Products;

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import ProductsMilk from './ProductsMilk';
import ProductsJuice from './ProductsJuice';
import ProductsSnack from './ProductsSnack';
import ProductsSale from './ProductsSale';



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
        <Link to="sale">本月優惠</Link>
      </div>
      <Routes>
        <Route path="milk" element={<ProductsMilk />} />
        <Route path="juice" element={<ProductsJuice />} />
        <Route path="snack" element={<ProductsSnack />} />
        <Route path="sale" element={<ProductsSale />} />
      </Routes>
      <div class="col">123</div>
    </container>
  );
}

export default Products;

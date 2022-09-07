import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './Products.scss';
import { Dropdown } from 'bootstrap';

import { FaSearch } from 'react-icons/fa';

import Home from '../../Home';
import Breadcrumb from '../ProductsLayout/Breadcrumb';
import Aside from '../ProductsLayout/Aside';

function Products() {
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  //利用useState抽換productsMainCategory頁面的內容?
  const [category, setCategory] = useState('植物奶');

  const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
  const dropdownList = [...dropdownElementList].map(
    (dropdownToggleEl) => new Dropdown(dropdownToggleEl)
  );

  return (
    <div class="container ">
      {/* 麵包屑  調整 待測試*/}
      <Breadcrumb />

      {/* TODO:content要改CSS */}
      <main class="d-flex">
        {/* 側欄選單 待測試 */}
        <Aside />
        <div class="content">
          <div class="category-product-box d-flex justify-content-between align-items-center ">
            <div class="category-title ">
              <h2>植物奶</h2>
            </div>
            <div class="order_search ">
              <p class="col-4 text-end">共 180 件商品</p>
              <span class="dropdown  ">
                <button
                  class="btn btn-secondary dropdown-toggle "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  預設排序
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="order_price1">
                      價錢由高到低
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="order_price1">
                      價錢由低到高
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="order_price1">
                      上市日期由新到舊
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="order_price1">
                      上市日期由舊到新
                    </Link>
                  </li>
                </ul>
              </span>
              <div class="input-group ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="搜尋"
                  aria-label="搜尋"
                  aria-describedby="button-addon2"
                />
                <button class="btn" type="button" id="button">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
          <div class="card-list d-flex flex-wrap justify-content-around">
            {/* 抓到資料後 map card */}
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  class="card  col-4"
                  onClick={() => {
                    <Navigate to="/productDetail/" />;
                  }}
                >
                  <img
                    src={require('../../../Assets/products/snack1001.jpg')}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">商品名</h5>
                    <p class="card-text">${data.price}123元</p>
                  </div>
                  <Link to="/productDetail/">商品細節</Link>
                </div>
              );
            })}

            {/* 頁數元件化? */}
            <nav>
              <ul class="d-flex ">
                <Link to="">前一頁</Link>
                <Link to="">1</Link>
                <Link to="">後一頁</Link>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Products;

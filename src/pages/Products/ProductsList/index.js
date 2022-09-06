import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import '../styles/index.scss';
import { Dropdown } from 'bootstrap';

import { FaSearch } from 'react-icons/fa';

import Home from '../../Home';
import Breadcrumb from '../ProductsLayout/Breadcrumb';
import Aside from '../ProductsLayout/Aside';

function ProductsList() {
  //測試用 造出有15個元素的陣列
  const arr = Array(15)
    .fill(1)
    .map((num, index) => index + 1);

  const [data, setData] = useState(arr);
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
                <div key={index} class="card  col-4">
                  <img
                    src={require('../../../Assets/products/milk1001.jpg')}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <Link class="card-title" to="productDetail/1">
                      商品名
                    </Link>

                    <p class="card-text">${data.price}123元</p>
                  </div>
                </div>
              );
            })}

            {/* 頁數元件化? */}
            <nav>
              <ul class="d-flex gx-1">
                <Link class="page" to="">
                  前一頁
                </Link>
                <Link class="page" to="">
                  1
                </Link>
                <Link class="page" to="">
                  後一頁
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductsList;

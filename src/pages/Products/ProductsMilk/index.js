import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../styles/index.scss';
import Collapse from 'bootstrap/js/dist/collapse';
import { Dropdown } from 'bootstrap';

import Home from '../../Home';
import Breadcrumb from '../components/Breadcrumb';
import Aside from '../components/Aside';

function ProductsMilk() {
  //利用useState抽換productsMainCategory頁面的內容?
  const [category, setCategory] = useState('植物奶');

  const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
  const dropdownList = [...dropdownElementList].map(
    (dropdownToggleEl) => new Dropdown(dropdownToggleEl)
  );
  
  return (
    <main>
      <div>ProductsMilk</div>
      {/* 麵包屑 */}
      {/* TODO:accordion要改icon */}
      <Breadcrumb />

      <div class="d-flex justify-content-between ">
        {/* TODO:Aside要改CSS */}
        {/* 側欄選單 */}
        <Aside />
        {/* TODO:content要改CSS */}
        <div class="content">
          <div class="category-title&order&search d-flex justify-content-between">
            <h2>category_name</h2>
            <div class="order&search d-flex align-items-center ">
              <p>共 ? 件商品</p>
              <span class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  預設排序
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      價錢由高到低
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      價錢由低到高
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      上市日期由新到舊
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      上市日期由舊到新
                    </a>
                  </li>
                </ul>
              </span>
              <div>
                <input type="text" />
                <button></button>
              </div>
            </div>
          </div>
          <div class="card-list d-flex justify-content-around">
            {/* 抓到資料後 map card */}
            <div class="card  col-4">
              <img src="" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">商品名</h5>
                <p class="card-text">$123元</p>
                {/* <a href="/" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
            <div class="card  col-4">
              <img src="" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">商品名</h5>
                <p class="card-text">$123元</p>
                {/* <a href="/" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
            <div class="card  col-4">
              <img src="" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">商品名</h5>
                <p class="card-text">$123元</p>
                {/* <a href="/" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
          {/* 頁數元件化? */}
          <nav>
            <ul>
              <Link to="">前一頁</Link>
              <Link to="">1</Link>
              <Link to="">後一頁</Link>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}

export default ProductsMilk;

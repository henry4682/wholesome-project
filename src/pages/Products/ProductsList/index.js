import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

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
    <div className="container ">
      {/* 麵包屑  調整 待測試*/}
      <Breadcrumb />

      {/* TODO:content要改CSS */}
      <main className="d-flex ">
        {/* 側欄選單 待測試 */}
        <Aside />
        <div className="products_list-content mx-auto">
          <div className="products_list-category-product-box d-flex justify-content-between align-items-center ">
            <div className="products_list-category-title ">
              <h2>植物奶</h2>
            </div>
            <div className="products_list-order_search ">
              <p className="col-4 text-end">共 180 件商品</p>
              <span className="dropdown  ">
                <button
                  className="btn products_list-btn btn-secondary dropdown-toggle "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  預設排序
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="order_price1">
                      價錢由高到低
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="order_price1">
                      價錢由低到高
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="order_price1">
                      上市日期由新到舊
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="order_price1">
                      上市日期由舊到新
                    </Link>
                  </li>
                </ul>
              </span>
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control products_list-search-input"
                  placeholder="搜尋"
                  aria-label="搜尋"
                  aria-describedby="button-addon2"
                />
                <button className="products_list-btn" type="button" id="button">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
          <div className="card-list products_list-card-list d-flex row flex-wrap justify-content-evenly">
            {/* 抓到資料後 map card */}
            {data.map((item, index) => {
              return (
                <div key={index} className="card products_list-card  col-4 ">
                  <img
                    src={require('../../../Assets/products/milk1001.jpg')}
                    className="card-img-top products_list-card-img-top"
                    alt="..."
                  />
                  <div className=" card-body products_list-card-body">
                    <Link
                      className=" card-title products_list-card-title word-wrap"
                      to="productDetail/1"
                    >
                      Pacific Foods Organic Oat Original 植物牛奶,有機燕麥 -
                      原創,32 液體盎司(約 12 毫升)
                    </Link>

                    <p className=" card-text products_list-card-text">
                    NT{data.price}123
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      {/* 頁數元件化? */}
      <nav>
        <ul className="products_list-pagination d-flex justify-content-center gx-1">
          <Link className="products_list-page" to="">
            前一頁
          </Link>
          <Link className="products_list-page" to="1">
            1
          </Link>
          <Link className="products_list-page" to="">
            後一頁
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default ProductsList;

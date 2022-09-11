import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './Products.scss';
import { API_URL } from '../../../utils/config';
import axios from 'axios';

import { Dropdown } from 'bootstrap';
import { FaSearch } from 'react-icons/fa';
//元件
import BreadcrumbForProductsList from '../components/BreadcrumbForProductsList';
import AsideForProductsList from '../components/AsideForProductsList';

function ProductsList() {
  //測試用 造出有15個元素的陣列
  const arr = Array(15)
    .fill(1)
    .map((num, index) => index + 1);
  const [data, setData] = useState(arr);
  //利用useState抽換productsMainCategory頁面的內容?
  const [category, setCategory] = useState('植物奶');

  //側欄選單用
  const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
  const dropdownList = [...dropdownElementList].map(
    (dropdownToggleEl) => new Dropdown(dropdownToggleEl)
  );

  //正式資料
  const [mainCategoryData, setMainCategoryData] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const [allProducts, setAllProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);

  const { productId } = useParams();

  useEffect(() => {}, []);

  useEffect(() => {
    console.log('useEffect[allProducts]', allProducts);
    let getAllProducts = async () => {
      // console.log('API_URL', API_URL);
      let response = await axios.get(`${API_URL}/products?page=${page}`);
      console.log('response.data', response.data);
      setAllProducts(response.data.data);
      setTotalPage(response.data.pagination.totalPage);
    };
    getAllProducts();
  }, [page]);

  const getPages = () => {
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <li
          className="page-item page-link"
          key={i}
          onClick={(e) => {
            setPage(i);
          }}
        >
          {i}
        </li>
      );
    }
    return pages;
  };

  return (
    <div className="product_list">
      <div className="container ">
        {/* 麵包屑  調整 待測試*/}
        <BreadcrumbForProductsList />

        {/* TODO:content要改CSS */}
        <div className=" product_list-container ">
          {/* 側欄選單 待測試 */}
          <AsideForProductsList  />
          <div className="products_list-content col-lg-9 ">
            <div className="products_list-category-product-box  ">
              <div className="products_list-category-title ">
                {/* 商品種類標題 */}
                <h2>植物奶</h2>
              </div>
              <div className="products_list-order_search ">
                <p className="col-4 text-end">共 {allProducts.length} 件商品</p>
                {/* 篩選器 */}
                <span className="dropdown  ">
                  <button
                    className="btn products_list-btn btn-secondary dropdown-toggle products_list-dropdown-toggle"
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
                <div className="input-group  products_list-input-group">
                  <input
                    type="text"
                    className="form-control products_list-search-input"
                    placeholder="搜尋"
                    aria-label="搜尋"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="products_list-search"
                    type="submit"
                    id="button"
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
            {/* 商品列表 */}
            <div className="card-list products_list-card-list ">
              {/* 抓到資料後 map card */}
              {/* {data.map((item, index) => {
                return (
                  <div key={index} className="card products_list-card">
                    <img
                      src={require('../../../Assets/products/milk1001.jpg')}
                      className="card-img-top products_list-card-img-top"
                      alt="..."
                    />
                    <div className=" card-body products_list-card-body">
                      <Link
                        className=" card-title products_list-card-title word-wrap"
                        to="/productDetail/:productId"
                        // to="/productDetail/:productId"
                      >
                        Pacific Foods Organic Oat Original 植物牛奶,有機燕麥 -
                        原創,32 液體盎司(約 12 毫升)
                      </Link>

                      <p className=" card-text products_list-card-text">
                        NT${data.price}123
                      </p>
                    </div>
                  </div>
                );
              })} */}
              {allProducts.map((item, index) => {
                return (
                  <div key={index} className="card products_list-card">
                    <img
                      src={require(`../../../Assets/products/${item.image}.jpg`)}
                      className="card-img-top products_list-card-img-top"
                      alt="..."
                    />

                    <div className=" card-body products_list-card-body">
                      <Link
                        className=" card-title products_list-card-title word-wrap"
                        to={`/productDetail/${productId}`}
                      >
                        {item.name}
                      </Link>

                      <p className=" card-text products_list-card-text">
                        NT${item.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* 頁數元件化? TODO:去菀萱那 COPY nav */}
        <nav aria-label="Page navigation ">
          <ul className="pagination recipe-pagination">
            <li
              className="page-item "
              aria-label="Previous"
              onClick={(e) => {
                setPage(page - 1);
              }}
            >
              <span className="page-link" aria-hidden="true">
                &laquo;
              </span>
            </li>
            {getPages()}
            <li
              className="page-item"
              aria-label="Next"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              <span className="page-link" aria-hidden="true">
                &raquo;
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ProductsList;

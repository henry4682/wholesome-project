import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Products.scss';
import { API_URL } from '../../../utils/config';
import axios from 'axios';

import { Dropdown } from 'bootstrap';
import { FaSearch, FaUser } from 'react-icons/fa';
//元件
import BreadcrumbForProductsList from '../components/BreadcrumbForProductsList';
import AsideForProductsList from '../components/AsideForProductsList';
//
function ProductsList() {
  //側欄選單用
  const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
  const dropdownList = [...dropdownElementList].map(
    (dropdownToggleEl) => new Dropdown(dropdownToggleEl)
  );

  //正式資料
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState(''); //排序在前端做

  const [allProducts, setAllProducts] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [amount, setAmount] = useState(0);

  const { mainCategory, subCategory } = useParams();

  useEffect(() => {
    console.log('useEffect[allProducts]', allProducts);
    let getAllProducts = async () => {
      // console.log('API_URL', API_URL);
      let response = await axios.get(
        `${API_URL}/products?category=${
          subCategory ? subCategory : mainCategory
        }`
      );
      console.log('Category', mainCategory, subCategory);
      console.log('response.data', response.data);
      setAllProducts(response.data.data);
      setDisplayData(response.data.data);
      setTotalPage(response.data.pagination.totalPage);
      setAmount(response.data.pagination.total);
    };
    getAllProducts();
  }, [mainCategory, subCategory]);

  useEffect(() => {
    let getAllProducts = async () => {
      // console.log('API_URL', API_URL);
      let response = await axios.get(
        `${API_URL}/products?category=${
          subCategory ? subCategory : mainCategory
        }&page=${page}`
      );
      console.log('page', page);
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

  //處理排序
  const handleSort = (allProducts, order) => {
    let newProducts = [...allProducts];
    const arr = newProducts.map((v, i) => v.launch_time);
    console.log('launch_time before', arr);
    switch (order) {
      case '1':
        newProducts = newProducts.sort((a, b) => b.price - a.price);
        break;
      case '2':
        newProducts = newProducts.sort((a, b) => a.price - b.price);
        break;
      case '3':
        newProducts = newProducts.sort((a, b) => {
          return new Date(b.launch_time) - new Date(a.launch_time);
        });
        break;
      case '4':
        newProducts = newProducts.sort((a, b) => {
          return new Date(a.launch_time) - new Date(b.launch_time);
        });
      default:
        break;
    }
    const arr2 = newProducts.map((v, i) => v.launch_time);
    console.log('launch_time after', arr2);
    return newProducts;
  };

  useEffect(() => {
    let newProducts = [];
    //排序
    newProducts = handleSort(allProducts, order);

    setDisplayData(newProducts);
  }, [order]);

  return (
    <div className="product_list">
      <div className="container ">
        {/* 麵包屑  調整 待測試*/}
        <BreadcrumbForProductsList />

        {/* TODO:content要改CSS */}
        <div className=" product_list-container ">
          {/* 側欄選單 待測試 */}
          <AsideForProductsList />
          <div className="products_list-content col-lg-9 ">
            <div className="products_list-category-product-box  ">
              <div className="products_list-category-title ">
                {/* 商品種類標題 */}
                <h2>{subCategory ? subCategory : mainCategory}</h2>
              </div>
              <div className="products_list-order_search ">
                <p className="col-4 text-end">共 {amount} 件商品</p>
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
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          setOrder('1');
                        }}
                      >
                        價錢由高到低
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          setOrder('2');
                        }}
                      >
                        {' '}
                        價錢由低到高
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          setOrder('3');
                        }}
                      >
                        上市日期由新到舊
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          setOrder('4');
                        }}
                      >
                        上市日期由舊到新
                      </button>
                    </li>
                  </ul>
                </span>
                <div className="input-group  products_list-input-group">
                  <input
                    id="list-search"
                    type="text"
                    className="form-control products_list-search-input"
                    placeholder="搜尋"
                    aria-label="搜尋"
                    aria-describedby="button-addon2"
                    onKey={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                  <button
                    className="products_list-search"
                    type="submit"
                    id="button"
                    onClick={(e) => {
                      e.preventDefault();
                      const inputValue =
                        document.querySelector('#list-search').value;
                      console.log(inputValue);
                    }}
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
            {/* 商品列表 */}
            <div className="card-list products_list-card-list ">
              {displayData.map((item, index) => {
                return (
                  <div key={index} className="card products_list-card">
                    <img
                      src={require(`../../../Assets/products/${item.image}`)}
                      className="card-img-top products_list-card-img-top"
                      alt="..."
                    />

                    <div className=" card-body products_list-card-body">
                      <Link
                        className=" card-title products_list-card-title word-wrap"
                        to={`/productDetail/${item.id}`}
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
                // setPage(page - 1 < 1 ? 1 : page - 1);
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
                setPage(page + 1 > totalPage ? totalPage : page + 1);
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

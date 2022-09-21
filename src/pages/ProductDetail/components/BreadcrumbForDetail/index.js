import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './ProductDetailBreadcrumb.scss';

function BreadcrumbForDetail({ data }) {
  let mainCategory = data.map((v) => v.main_category);
  let subCategory = data.map((v) => v.sub_category);
  let productName = data.map((v) => v.name);
  return (
    <>
      <nav
        className="product_detail-breadcrumb-detail-whole align-items-center"
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb product_detail-breadcrumb align-items-center">
          <li className="breadcrumb-item product_detail-breadcrumb-item">
            <Link to="/">
              <FaHome />
            </Link>
          </li>
          <li className="breadcrumb-item product_detail-breadcrumb-item ">
            <Link to={`/products/${mainCategory}`}>{mainCategory}</Link>
          </li>
          <li className="breadcrumb-item product_detail-breadcrumb-item">
            <Link to={`/products/${mainCategory}/${subCategory}`}>
              {subCategory}
            </Link>
            {/* 抽換 用context*/}
          </li>
          <li
            className="breadcrumb-item product_detail-breadcrumb-item active"
            aria-current="page"
          >
           {productName}
          </li>
        </ol>
      </nav>
    </>
  );
}

export default BreadcrumbForDetail;

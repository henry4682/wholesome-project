import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './BreadcrumbForProductsList.scss';

function BreadcrumbForProductsList({ mainCategory, subCategory }) {
  return (
    <>
      {/* {有沒有參數 ? <></> : <></>} */}
      <nav
        className="products_layout-breadcrumb-whole align-items-center"
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb products_layout-breadcrumb align-items-center">
          <li className="breadcrumb-item products_layout-breadcrumb-item">
            <Link to="/">
              <FaHome />
            </Link>
          </li>
          {subCategory ? (
            <>
              <li
                className="breadcrumb-item products_layout-breadcrumb-item active"
                aria-current="page"
              >
                <Link
                  className="link-decoration"
                  to={`../products/${mainCategory}`}
                >
                  {mainCategory}
                </Link>
              </li>
              <li
                className="breadcrumb-item products_layout-breadcrumb-item active"
                aria-current="page"
              >
                {subCategory}
              </li>
            </>
          ) : (
            <li
              className="breadcrumb-item products_layout-breadcrumb-item active"
              aria-current="page"
            >
              {mainCategory}
            </li>
          )}
        </ol>
      </nav>
    </>
  );
}

export default BreadcrumbForProductsList;

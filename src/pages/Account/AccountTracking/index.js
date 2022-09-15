import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

function AccountTracking() {
  return (
    <div className="account_tracking w-100">
      {/* 頁籤 */}
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-products-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-products"
            type="button"
            role="tab"
            aria-controls="nav-products"
            aria-selected="true"
          >
            商品收藏
          </button>
          <button
            className="nav-link"
            id="nav-recipes-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-recipes"
            type="button"
            role="tab"
            aria-controls="nav-recipes"
            aria-selected="false"
          >
            食譜收藏
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-products"
          role="tabpanel"
          aria-labelledby="nav-products-tab"
        >
          {/* 商品收藏內容 */}
          <div className="account_tracking-product col-lg-3 col-6 mt-2">
            <div>
              <img
                src="https://cdn.cybassets.com/media/W1siZiIsIjEzODUwL3Byb2R1Y3RzLzMxOTUxMTA1LzE2MDM0MzQ5NTNfZjFlNjEwOTcxYzcwMWZkMmM3MjEucG5nIl0sWyJwIiwidGh1bWIiLCI2MDB4NjAwIl1d.png?sha=a134d4f53b04b833"
                alt="apple juice"
              />
            </div>
            <div className="account_tracking-product-content align-items-center">
              <div>
                <p className="account_tracking-product-content-name">
                  Voelkel 蘋果醋
                </p>
                <p className="account_tracking-product-content-price">NT$200</p>
              </div>
            </div>
            <div className=" text-center">
              <div>
                <button className="account_tracking_btn mb-1 btn btn-primary text-white">
                  加入購物車
                </button>
                <button className="account_tracking_btn btn btn-outline-primary text-primary">
                  移除收藏
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-recipes"
          role="tabpanel"
          aria-labelledby="nav-recipes-tab"
        >
          {/* 食譜收藏內容 */}
          <div className="account_tracking-product col-lg-3 col-6 mt-2">
            <div>
              <img
                src="https://cdn.cybassets.com/media/W1siZiIsIjEzODUwL3Byb2R1Y3RzLzMxOTUxMTA1LzE2MDM0MzQ5NTNfZjFlNjEwOTcxYzcwMWZkMmM3MjEucG5nIl0sWyJwIiwidGh1bWIiLCI2MDB4NjAwIl1d.png?sha=a134d4f53b04b833"
                alt="apple juice"
              />
            </div>
            <div className="account_tracking-product-content align-items-center">
              <div>
                <p className="account_tracking-product-content-name">
                  Voelkel 蘋果醋
                </p>
                <p className="account_tracking-product-content-price">NT$200</p>
              </div>
            </div>
            <div className=" text-center">
              <div>
                <button className="account_tracking_btn mb-1 btn btn-primary text-white">
                  閱讀內容
                </button>
                <button className="account_tracking_btn btn btn-outline-primary text-primary">
                  移除收藏
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountTracking;

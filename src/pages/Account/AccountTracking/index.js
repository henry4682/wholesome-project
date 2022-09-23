import { React, useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/auth';
import { API_URL } from '../../../utils/config';
import axios from 'axios';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';

function AccountTracking() {
  const { user, setUser } = useAuth();
  const [productData, setProductData] = useState([]); // 商品
  const [recipeData, setRecipeData] = useState([]); // 食譜

  // 分頁: 增加 lastPage (總頁數) 與 page (目前在第幾頁) 的 state
  const [productLastPage, setProductLastPage] = useState(1); // 商品
  const [recipeLastPage, setRecipeLastPage] = useState(1); // 食譜
  const [productPage, setProductPage] = useState(1); // 商品
  const [recipePage, setRecipePage] = useState(1); // 食譜

  useEffect(() => {
    let userTrackings = async () => {
      let productResponse = await axios.get(
        `${API_URL}/user/${user.id}/tracking?page=${productPage}`
      );
      setProductData(productResponse.data.productData);
      setProductLastPage(
        productResponse.data.productPagination.productLastPage
      );
      let recipeResponse = await axios.get(
        `${API_URL}/user/${user.id}/tracking?page=${recipePage}`
      );
      setRecipeData(recipeResponse.data.recipeData);
      setRecipeLastPage(recipeResponse.data.recipePagination.recipeLastPage);

      console.log(productResponse.data);
      console.log(recipeResponse.data);
      // setLastPage(response.data.pagination.lastPage);
    };
    userTrackings();
  }, [user.id, productPage, recipePage]);

  //製作分頁按鈕
  let productPages = [];
  for (let i = 1; i <= productLastPage; i++) {
    productPages.push(i);
  }
  let recipePages = [];
  for (let i = 1; i <= recipeLastPage; i++) {
    recipePages.push(i);
  }

  //刪除商品收藏
  async function removeProductItem(productId, userId) {
    console.log(productId, userId);
    try {
      let response = await axios.delete(
        `${API_URL}/productTracking/${userId}?product=${productId}`
      );
      console.log(response.data);
      alert('收藏商品移除成功');

      // 重新取得使用者產品收藏資訊
      let productResponse = await axios.get(
        `${API_URL}/user/${user.id}/tracking?page=${productPage}`
      );
      setProductData(productResponse.data.productData);
      setProductLastPage(
        productResponse.data.productPagination.productLastPage
      );
    } catch (e) {
      console.error('刪除收藏錯誤訊息', e);
    }
  }

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
          <div className="row">
            {productData.map((v, i) => {
              return (
                <div className="account_tracking-product col-lg-4 col-6 mt-2">
                  <div>
                    <img
                      src={require(`../../../Assets/products/${v.product_img}`)}
                      alt="apple juice"
                    />
                  </div>
                  <div className="account_tracking-product-content align-items-center">
                    <div>
                      <p className="account_tracking-product-content-name">
                        {v.product_name}
                      </p>
                      <p className="account_tracking-product-content-price">
                        NT${v.product_price}
                      </p>
                    </div>
                  </div>
                  <div className=" text-center">
                    <div>
                      <button className="account_tracking_btn mb-1 btn btn-sm btn-primary text-white">
                        加入購物車
                      </button>
                      <button
                        className="account_tracking_btn btn btn-sm btn-secondary text-primary"
                        onClick={() => {
                          removeProductItem(v.product_id, v.user_id);
                        }}
                      >
                        移除收藏
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 分頁 */}
          <div className="d-flex justify-content-center align-items-center mt-2">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li
                  className="page-item page-link"
                  onClick={(e) => {
                    if (productPage > 1) setProductPage(productPage - 1);
                  }}
                >
                  <BsCaretLeft />
                </li>
                {productPages.map((v, i) => {
                  return (
                    <li
                      key={i}
                      className={
                        productPage === v
                          ? 'page-item page-link bg-secondary'
                          : 'page-item page-link'
                      }
                      onClick={(e) => {
                        setProductPage(v);
                      }}
                    >
                      {v}
                    </li>
                  );
                })}

                <li
                  className="page-item page-link"
                  onClick={(e) => {
                    if (productPage < productLastPage)
                      setProductPage(productPage + 1);
                  }}
                >
                  <BsCaretRight />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-recipes"
          role="tabpanel"
          aria-labelledby="nav-recipes-tab"
        >
          {/* 食譜收藏內容 */}
          <div className="row">
            {recipeData.map((v, i) => {
              return (
                <div className="account_tracking-product col-lg-4 col-6 mt-2">
                  <div>
                    <img
                      src="https://cdn.cybassets.com/media/W1siZiIsIjEzODUwL3Byb2R1Y3RzLzMxOTUxMTA1LzE2MDM0MzQ5NTNfZjFlNjEwOTcxYzcwMWZkMmM3MjEucG5nIl0sWyJwIiwidGh1bWIiLCI2MDB4NjAwIl1d.png?sha=a134d4f53b04b833"
                      alt="apple juice"
                    />
                  </div>
                  <div className="account_tracking-product-content align-items-center">
                    <div>
                      <p className="account_tracking-product-content-name">
                        {v.recipe_name}
                      </p>
                    </div>
                  </div>
                  <div className=" text-center">
                    <div>
                      <div>
                        <Link to="#">閱讀內容</Link>
                      </div>
                      <button className="account_tracking_btn btn btn-sm btn-secondary text-primary mt-1">
                        移除收藏
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 分頁 */}
          <div className="d-flex justify-content-center align-items-center mt-2">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li
                  className="page-item page-link"
                  onClick={(e) => {
                    if (recipePage > 1) setRecipePage(recipePage - 1);
                  }}
                >
                  <BsCaretLeft />
                </li>
                {recipePages.map((v, i) => {
                  return (
                    <li
                      key={i}
                      className={
                        recipePage === v
                          ? 'page-item page-link bg-secondary'
                          : 'page-item page-link'
                      }
                      onClick={(e) => {
                        setRecipePage(v);
                      }}
                    >
                      {v}
                    </li>
                  );
                })}

                <li
                  className="page-item page-link"
                  onClick={(e) => {
                    if (recipePage < recipeLastPage)
                      setRecipePage(recipePage + 1);
                  }}
                >
                  <BsCaretRight />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountTracking;

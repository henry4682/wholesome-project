import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProductDetail.scss';
import { API_URL } from '../../utils/config';
import { FaHeart } from 'react-icons/fa';
import BreadcrumbForDetail from './components/BreadcrumbForDetail';
import SwiperForProduct from './components/SwiperForProduct';

import Rating from '@mui/material/Rating';
import ProgressBar from '@ramonak/react-progress-bar';
import axios from 'axios';

function ProductDetail() {
  //商品資料
  const [data, setData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  //收藏用TODO:useState裡的true/false要隨著使用者做更換
  const [isLike, setIsLike] = useState(false);

  //接收來自其他頁的參數
  const { productId } = useParams();
  console.log('productId', productId);

  console.log('commentData', commentData);

  //星星平均用
  //測試用:做出star bar的陣列
  const starArr = Array(5)
    .fill(5)
    .map((num, index) => num - index);
  //下面幾個是測試用之後可能會用json格式把star的內容包起來

  // 星星陣列
  const [eachStar, setEachStar] = useState([]);
  //加總分數
  const [totalScore, setTotalScore] = useState();
  //有幾個人的星星
  const [starCount, setStarCount] = useState(8);
  const [average, setAverage] = useState(0);

  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [amount, setAmount] = useState(0);

  const [addCart, setAddCart] = useState(false);

  useEffect(() => {
    console.log('inside useEffect');
    let getProductDetail = async () => {
      let response = await axios.get(`${API_URL}/productDetail/${productId}`);
      setData(response.data.productData);
      setCommentData(response.data.comment.productComment);
      setTotalScore(response.data.comment.totalScore);
      setEachStar(response.data.comment.eachStar);
      setStarCount(response.data.comment.starCount);
      setAverage(Number(response.data.comment.average));

      setTotalPage(response.data.pagination.totalPage);
      setAmount(response.data.pagination.total);
      // console.log('data', data);
      // console.log('commentData', commentData);
      console.log('data be', response.data.productData);
      // console.log('data fe', data);
      // console.log('eachStar', eachStar);
    };
    getProductDetail();
  }, []);

  useEffect(() => {
    let isLike = async () => {
      let response = await axios.post(`${API_URL}.user_like`);
      setIsLike(response);
    };
    // isLike();
  }, [isLike]);

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
    <div className="container">
      <BreadcrumbForDetail />
      {data.map((v, i) => {
        return (
          <div key={i}>
            <div className="product_detail-product-intro">
              <img
                className="product_detail-img"
                alt="..."
                //不知為何無法傳入資料庫的圖片字串
                src={require(`../../Assets/products/${v.image}`)}
              />
              <div className="product_detail-product-box">
                <div className="product_detail-info-box">
                  <h1 className="product_detail-product-title">{v.name}</h1>
                  <div className="product_detail-product-description">
                    {/* TODO:將資料庫裡的句子後面加上| */}
                    {v.description.split('~').map((line, i) => {
                      return (
                        <div key={i}>
                          <div>
                            <p>{line}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <h2 className="product_detail-product-price">NT${v.price}</h2>
                </div>

                <div className="product_detail-detail-btn-group">
                  <button
                    className="btn product_detail-product-btn product_detail-add-cart-btn"
                    type="button"
                    onClick={() => {
                      setAddCart(true);
                    }}
                  >
                    加入購物車
                  </button>
                  <button
                    className="btn  product_detail-product-btn product_detail-checkout-btn"
                    type="submit"
                  >
                    立即購買
                  </button>
                </div>
                <button
                  className="btn d-flex align-items-center  product_detail-product-btn product_detail-like-btn"
                  type="button"
                  onClick={() => {
                    setIsLike(!isLike);
                  }}
                >
                  <FaHeart
                    className={
                      isLike ? 'product_detail-heart' : 'product_detail-empty'
                    }
                  />
                  加入最愛
                </button>
              </div>
            </div>
            <section className="product_detail-section product_detail-product-detail">
              <div className="product_detail-section-title">商品介紹</div>
              <div className="product_detail-detail-content">
                {v.product_intro.split('~').map((line, i) => {
                  return (
                    <div key={i}>
                      <p>{line}</p>
                      <br />
                    </div>
                  );
                })}
                ​
              </div>
            </section>
          </div>
        );
      })}
      <section className="product_detail-section product_detail-product-comment-score">
        <div className="product_detail-section-title">買家評論</div>
        <div className="product_detail-score-box">
          <div className="product_detail-average-score-box">
            <div className="product_detail-average-score">
              {eachStar.length > 0 ? average : 0}
            </div>
            <div className="product_detail-stars">
              <Rating
                name="half-rating-read"
                value={eachStar.length > 0 ? average : 0}
                precision={0.1}
                readOnly
              />
            </div>
          </div>
          <div className="product_detail-score-bar">
            <div className="product_detail-score-text">評價分佈顯示</div>
            {/* 可能跑迴圈? */}
            {starArr.map((num, i) => {
              return (
                <div key={i} className="product_detail-star-bar">
                  <p>
                    {num}顆星(
                    {eachStar.length > 0
                      ? eachStar.filter((v) => v === num).length
                      : 0}
                    )
                  </p>
                  <span className="product_detail-bar-section">
                    <ProgressBar
                      completed={
                        eachStar.length > 0
                          ? (eachStar.filter((v) => v === num).length /
                              starCount) *
                            100
                          : 0
                      }
                      customLabel={
                        eachStar.length > 0
                          ? (eachStar.filter((v) => v === num).length /
                              starCount) *
                              100 +
                            '%'
                          : '0%'
                      }
                      className="wrapper"
                      bgColor={'#9AAB82'}
                      baseBgColor={'#D9D9D9'}
                      borderRadius="0px"
                      labelAlignment="inside"
                      labelSize="11px"
                    />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="product_detail-comment-box">
          <div className="product_detail-comment-top">
            <div className="product_detail-comment-title">
              <p>留言</p>
            </div>
            <div className="product_detail-comment-info">
              <div className="product_detail-comment-top-text">
                共 {commentData.length} 則
              </div>
              <Link className="product_detail-comment-top-text" to="">
                查看全部
              </Link>
            </div>
          </div>
          {commentData.map((comment) => {
            return (
              <div key={comment.id}>
                <section className="product_detail-section product_detail-user-comment-box">
                  <div className="product_detail-user-img-box">
                    <img
                      className="product_detail-user-img"
                      src={require('../../Assets/member.png')}
                      alt="圖片"
                    />
                  </div>
                  <div className="product_detail-user-text">
                    <div className="product_detail-user-comment">
                      <div className="product_detail-comment-text">
                        {comment.name}
                      </div>
                      <p className="product_detail-comment-text">
                        {comment.comment}
                      </p>
                    </div>
                    <div className="product_detail-user-star">
                      <div className="product_detail-comment-text">
                        {comment.time}
                      </div>
                      <Rating
                        name="half-rating-read"
                        value={comment.grade}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                  </div>
                </section>
                <hr className="product_detail-br" />
              </div>
            );
          })}

          <nav aria-label="Page navigation ">
            <ul className="pagination product_detail-pagination">
              <li className="page-item">
                <Link
                  className="page-link"
                  to="/productDetail/:productId"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="/productDetail/:productId">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link"
                  to="/productDetail/:productId"
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <div className="product_detail-section">
        <div className="product_detail-section-title">相關商品</div>
        <div className="product_detail-carousel">
          <SwiperForProduct />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

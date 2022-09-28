import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProductDetail.scss';
import { API_URL } from '../../utils/config';
import { FaHeart } from 'react-icons/fa';
import BreadcrumbForDetail from './components/BreadcrumbForDetail';
import SwiperForProduct from './components/SwiperForProduct';
import Rating from '@mui/material/Rating';
import ProgressBar from '@ramonak/react-progress-bar';
import axios from 'axios';
import { BsFillPersonFill } from 'react-icons/bs';
import { useAuth } from '../../context/auth';
import { useCart } from '../../context/cart';
import {
  successToastAlert,
  warningAlert,
  warningToastAlert,
} from '../../components/Alert';

function ProductDetail() {
  const { user, isLogin, setIsLogin } = useAuth();
  // const [user, setUser] = useState({ id: '0' });
  const { cart, setCart } = useCart();
  console.log('user:', user, 'cart:', cart);
  // console.log(user.id);
  //商品資料
  const [data, setData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  //收藏用TODO:useState裡的true/false要隨著使用者做更換
  const [isLike, setIsLike] = useState(false);

  //接收來自其他頁的參數
  const { productId } = useParams();
  // console.log('productId', productId);
  // console.log('commentData', commentData);

  //星星平均用
  //測試用:做出star bar的陣列
  const starArr = Array(5)
    .fill(5)
    .map((num, index) => num - index);
  //下面幾個是測試用之後可能會用json格式把star的內容包起來

  // 評論評分
  const [star, setStar] = useState({});
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [amount, setAmount] = useState(0);
  const [size, setSize] = useState();

  //相關商品
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    // console.log('inside useEffect');
    let getProductDetail = async () => {
      let response = await axios.get(`${API_URL}/productDetail/${productId}`);
      setData(response.data.productData);
      setGoods(response.data.relatedGoods);
      setStar(response.data.stars);
    };
    getProductDetail();
    goToTop();
  }, [productId]);
  console.log('商品資訊', data);
  console.log('goods', goods);
  console.log('star', star);

  useEffect(() => {
    let getProductComment = async () => {
      let response = await axios.get(
        `${API_URL}/productComments/${productId}?page=${page}`
      );
      setCommentData(response.data.commentInfo.commentData);
      setTotalPage(response.data.commentInfo.totalPage);
      setAmount(response.data.commentInfo.commentTotal);
      console.log('來自be的評論資料', response.data);
    };
    getProductComment();
  }, [productId, page]);

  // 初始化載入使用者是否收藏這筆商品
  useEffect(() => {
    // 判斷是否有登入
    if (!user || user.id === '0') {
      setIsLike(false);
      return;
    }
    let getUserLikeProduct = async () => {
      let response = await axios.get(
        `${API_URL}/productTracking/${user.id}?product=${productId}`
      );
      console.log(response.data.isLike);
      setIsLike(response.data.isLike);
    };
    getUserLikeProduct();
  }, [user]);

  // 收藏的按鈕
  function handleIsLike() {
    // --- (1) 判斷是否登入
    if (!user || user.id === '0') {
      alert('請先登入再進行商品收藏');
      return;
    }
    setIsLike(!isLike);
    try {
      let postIsLike = async () => {
        if (!isLike) {
          // 如果沒有收藏 isLike === false
          let response = await axios.post(
            `${API_URL}/productTracking/${user.id}`,
            { product_id: productId, isLike: !isLike }
          );
          console.log(response.data);
          setIsLike(response.data.isLike);
          successToastAlert('加入收藏成功', 1200, false);
        } else {
          // 如果沒有收藏 isLike === true
          let response = await axios.delete(
            `${API_URL}/productTracking/${user.id}?product=${productId}`
          );
          console.log(response.data);
          setIsLike(response.data.isLike);
          successToastAlert('移除收藏成功', 1200, false);
        }
      };
      postIsLike();
    } catch (e) {
      console.error('tracking error:', e);
    }
  }

  // 每當我的 Cart state 有變動， 就更新 localStorage
  useEffect(() => {
    // if (cart.length === 0) return;
    //localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }, [cart]);

  // 加入購物車按鈕
  function addCart() {
    // --- (1) 判斷是否登入
    if (!user || user.id === '0') {
      warningAlert('您尚未登入', '請先登入再進行購買');
      return;
    }
    // --- (2) 判斷購物車裡面是不是有這個商品
    if (cart.some((v) => v.id === data[0].id)) {
      warningToastAlert('商品已存在於購物車', 1200, false);
      return;
    }
    // item是指現在加入購物車的這個商品
    let item = {
      id: data[0].id,
      amount: 1,
      name: data[0].name,
      price: data[0].price,
      image: data[0].image,
    };
    setCart([...cart, item]);
    successToastAlert('商品加入購物車成功', 1200, false);
  }
  console.log('購物車', cart);

  const getPages = () => {
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <li
          className={
            page === i ? ' active page-item page-link' : 'page-item page-link'
          }
          key={i}
          onClick={(e) => {
            setPage(i);
            goToCommentTop();
          }}
        >
          {i}
        </li>
      );
    }
    return pages;
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const goToCommentTop = () => {
    window.scrollTo(
      size < 768
        ? {
            top: 2100,
            behavior: 'smooth',
          }
        : {
            top: 1800,
            behavior: 'smooth',
          }
    );
  };

  console.log('商品資訊', data);

  return (
    <div className="container">
      <BreadcrumbForDetail data={data} />
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
                    onClick={addCart}
                  >
                    加入購物車
                  </button>
                  {!user || user.id === '0' ? (
                    <button
                      className="btn  product_detail-product-btn product_detail-checkout-btn"
                      onClick={addCart}
                    >
                      立即購買
                    </button>
                  ) : (
                    <Link
                      className="btn  product_detail-product-btn product_detail-checkout-btn"
                      onClick={addCart}
                      to="/shoppingCart"
                    >
                      立即購買
                    </Link>
                  )}
                </div>
                <button
                  className="btn d-flex align-items-center  product_detail-product-btn product_detail-like-btn"
                  type="button"
                  onClick={handleIsLike}
                >
                  <FaHeart
                    className={
                      isLike ? 'product_detail-heart' : 'product_detail-empty'
                    }
                  />
                  {isLike ? '移除收藏' : '加入收藏'}
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
            <div className="product_detail-average-score">{star.average}</div>
            <div className="product_detail-stars">
              <Rating
                name="half-rating-read"
                value={Number(star.average)}
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
                    {star.starCount > 0
                      ? star.eachStar.filter((v) => v === num).length
                      : 0}
                    )
                  </p>
                  <span className="product_detail-bar-section">
                    <ProgressBar
                      completed={
                        star.starCount > 0
                          ? (star.eachStar.filter((v) => v === num).length /
                              star.starCount) *
                            100
                          : 0
                      }
                      customLabel={
                        star.starCount > 0
                          ? (
                              (star.eachStar.filter((v) => v === num).length /
                                star.starCount) *
                              100
                            ).toFixed(1) + '%'
                          : '0%'
                      }
                      className="wrapper"
                      bgColor={'#9AAB82'}
                      baseBgColor={'#D9D9D9'}
                      borderRadius="0px"
                      labelAlignment="left"
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
              <p>評論</p>
            </div>
            <div className="product_detail-comment-info">
              <div className="product_detail-comment-top-text">
                共 {amount} 則
              </div>
            </div>
          </div>
          {commentData.map((comment) => {
            return (
              <div className="" key={comment.id}>
                <section className=" w-100 product_detail-section product_detail-user-comment-box ">
                  <div className="product_detail-user-img-box">
                    <BsFillPersonFill size={100} color="#9aab82" />
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
                        size="small"
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
              <li
                className="page-item"
                onClick={() => {
                  setPage(page === 1 ? page : page - 1);
                  goToCommentTop();
                }}
              >
                <span
                  className="page-link"
                  aria-label="Previous"
                  aria-hidden="true"
                >
                  &laquo;
                </span>
              </li>
              {getPages()}
              <li
                className="page-item"
                onClick={() => {
                  setPage(page === totalPage ? totalPage : page + 1);
                  goToCommentTop();
                }}
              >
                <span
                  className="page-link"
                  aria-label="Next"
                  aria-hidden="true"
                >
                  &raquo;
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <div className="product_detail-section">
        <div className="product_detail-section-title">相關商品</div>
        <div className="product_detail-carousel">
          <SwiperForProduct goods={goods} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

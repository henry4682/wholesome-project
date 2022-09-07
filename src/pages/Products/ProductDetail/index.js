import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';
import { FaHeart } from 'react-icons/fa';
import BreadcrumbForDetail from '../components/BreadcrumbForDetail';

import ReactStars from 'react-rating-stars-component';
import ProgressBar from '@ramonak/react-progress-bar';

function ProductDetail() {
  //收藏用TODO:useState裡的true/false要隨著使用者做更換
  const [isLike, setIsLike] = useState(false);

  //星星平均用
  const [averageScore, setAverageScore] = useState(4.5);
  //測試用:做出star bar的陣列
  const starArr = Array(5)
    .fill(5)
    .map((num, index) => num - index);
  //下面幾個是測試用可能會用json格式把star的內容包起來
  const [stars, setStars] = useState([
    {
      starCount: 8,
      starPercentage: '50',
    },
  ]);

  //幾顆星的數量
  const [starCount, setStarCount] = useState(8);
  //star bar 的百分比
  const [star, setStar] = useState('50');

  return (
    <>
      <BreadcrumbForDetail />
      <div class="product-intro">
        <figure>
          <img src={require('../../../Assets/products/milk1001.jpg')} />
        </figure>
        <div class="product-box">
          <div class="info-box">
            <h1 class="product-title">
              Pacific Foods Organic Oat Original 植物牛奶,有機燕麥 - 原創,32
              液體盎司(約 12 毫升)
            </h1>
            <div class="product-description">
              ．絕佳的牛奶替代品,可作為飲料、穀片或從肉汁到杯子蛋糕的一切食用。不含酵母。猶太潔食品。
              ．鈣和維他命 D
              的良好來源是低脂肪、乳糖、膽固醇、角叉菜膠、無酵母、無大豆、素食主義者,包括
              4 克蛋白質和 17 克添加糖。 ．12 包32 盎司紙盒。 可架式不含雙酚 A
              的紙盒保留風味和新鮮度。 開封後冷藏。
            </div>
            <h2 class="product-price">$123</h2>
          </div>

          <div class="detail-btn-group">
            <button class="btn product-btn add-cart-btn" type="button">
              加入購物車
            </button>
            <button class="btn  product-btn checkout-btn" type="submit">
              立即購買
            </button>
          </div>
          <button
            class="btn  product-btn like-btn"
            type="button"
            onClick={() => {
              setIsLike(!isLike);
            }}
          >
            <FaHeart class={isLike ? 'heart' : 'empty'} /> 加入最愛
          </button>
        </div>
      </div>
      <section class="product-detail">
        <div class="section-title">商品介紹</div>
        <div class="detail-content">
          Pacific Foods 有機燕麥原味牛奶讓燕麥的甜味閃耀在這款奶油飲料中。
          富含鈣和維他命 D
          的良好來源,這款飲料也含有低脂、乳糖、膽固醇和無大豆成分,是純素食主義者,並通過
          USDA 有機認證。 在 Pacific
          Foods,我們非常自豪地使用盡可能靠近家的簡單食譜和乾淨的食材。
          我們避免使用防腐劑、添加劑和轉基因生物,並始終會。
          我們的使命是滋養每一個身體,一次一餐。 ​
        </div>
      </section>
      <section class="product-comment-score">
        <div class="section-title">買家評論</div>
        <div class="score-box">
          <div class="average-score-box">
            <div class="average-score">{averageScore}</div>
            <div class="stars">
              <ReactStars
                value={averageScore}
                count={5}
                size={24}
                edit={false}
                activeColor="#ffd700"
                isHalf={true}
              />
            </div>
          </div>
          <div class="score-bar">
            <div>評價分佈顯示</div>
            {/* 可能跑迴圈? */}
            {starArr.map((num, i) => {
              return (
                <div class="star-bar">
                  <p>
                    {num}顆星({starCount})
                  </p>
                  <span class="bar-section">
                    <ProgressBar
                      completed={star}
                      customLabel={star + '%'}
                      className="wrapper"
                      bgColor={'#9AAB82'}
                      baseBgColor={'#D9D9D9'}
                      borderRadius="0px"
                      labelAlignment="right"
                      labelSize="11px"
                    />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div class="comment-box">
          <div class="comment-top">
            <div class="comment-title">留言</div>
            <div class="comment-info">
              <div class="comment-top-text">共 7 則</div>
              <Link class="comment-top-text" to="">
                查看全部
              </Link>
            </div>
          </div>
          <section class="user-comment-box">
            <div class="user-img">
              <img src={require('../../../Assets/member.png')} alt="圖片" />
            </div>
            <div class="user-text">
              <div class="user-comment">
                <div class="comment-text">王沛慈</div>
                <p class="comment-text">我今天也來試試</p>
              </div>
              <div class="user-star">
                <div class="comment-text">2022/07/14</div>
                <ReactStars
                  value={5}
                  count={5}
                  size={24}
                  edit={false}
                  activeColor="#ffd700"
                  isHalf={true}
                />
              </div>
            </div>
          </section>
          
        </div>
      </section>
    </>
  );
}

export default ProductDetail;

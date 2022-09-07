import React from 'react';
import { useState } from 'react';
import './index.scss';
import { FaHeart } from 'react-icons/fa';
import BreadcrumbForDetail from '../components/BreadcrumbForDetail';

function ProductDetail() {
  const [like, setLike] = useState(false);
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
            <span class="product-description">
              ．絕佳的牛奶替代品,可作為飲料、穀片或從肉汁到杯子蛋糕的一切食用。不含酵母。猶太潔食品。
              ．鈣和維他命 D
              的良好來源是低脂肪、乳糖、膽固醇、角叉菜膠、無酵母、無大豆、素食主義者,包括
              4 克蛋白質和 17 克添加糖。 ．12 包32 盎司紙盒。 可架式不含雙酚 A
              的紙盒保留風味和新鮮度。 開封後冷藏。
            </span>
            <h2>$123元</h2>
          </div>

          <div class="detail-btn-group">
            <button class="btn add-cart-btn" type="button">
              加入購物車
            </button>
            <button class="btn checkout-btn" type="submit">
              立即購買
            </button>
          </div>
          <button
            class="btn like-btn"
            type="button"
            onClick={() => {
              setLike(!like);
            }}
          >
            <FaHeart class={like ? 'heart' : 'empty'} /> 加入最愛
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

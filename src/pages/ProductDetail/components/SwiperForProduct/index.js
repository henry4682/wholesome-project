import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperForDetail.scss';

function SwiperForProduct() {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      slidesPerView={1}
      spaceBetween={70}
      breakpoints={{
        756: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        990: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="card product_detail-card">
        <img
          src={require('../../../../Assets/products/milk1002.jpg')}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body products_detail-card-body">
          <Link className="card-title product_detail-card-title" to="">
            咖啡師燕麥奶 (1000ml)
          </Link>
          <p className="card-text product_detail-card-text">NT156</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card product_detail-card">
          <img
            src={require('../../../../Assets/products/milk1002.jpg')}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body products_detail-card-body">
            <Link className="card-title product_detail-card-title" to="">
              咖啡師燕麥奶 (1000ml)
            </Link>
            <p className="card-text product_detail-card-text">NT156</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card product_detail-card">
          <img
            src={require('../../../../Assets/products/milk1002.jpg')}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body products_detail-card-body">
            <Link className="card-title product_detail-card-title" to="">
              咖啡師燕麥奶 (1000ml)
            </Link>
            <p className="card-text product_detail-card-text">NT156</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <div className="card product_detail-card">
          <img
            src={require('../../../../Assets/products/milk1002.jpg')}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body products_detail-card-body">
            <Link className="card-title product_detail-card-title" to="">
              咖啡師燕麥奶 (1000ml)
            </Link>
            <p className="card-text product_detail-card-text">NT156</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <div className="card product_detail-card">
          <img
            src={require('../../../../Assets/products/milk1002.jpg')}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body products_detail-card-body">
            <Link className="card-title product_detail-card-title" to="">
              咖啡師燕麥奶 (1000ml)
            </Link>
            <p className="card-text product_detail-card-text">NT156</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <div className="card product_detail-card">
          <img
            src={require('../../../../Assets/products/milk1002.jpg')}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body products_detail-card-body">
            <Link className="card-title product_detail-card-title" to="">
              咖啡師燕麥奶 (1000ml)
            </Link>
            <p className="card-text product_detail-card-text">NT156</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <div className="card product_detail-card">
          <img
            src={require('../../../../Assets/products/milk1002.jpg')}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body products_detail-card-body">
            <Link className="card-title product_detail-card-title" to="">
              咖啡師燕麥奶 (1000ml)
            </Link>
            <p className="card-text product_detail-card-text">NT156</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperForProduct;
